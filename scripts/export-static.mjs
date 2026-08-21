import fs from "node:fs/promises";
import path from "node:path";

const routes = ["/", "/chris", "/privacy", "/cookies", "/terms"];
const workerUrl = new URL("../dist/server/index.js", import.meta.url);
const { default: worker } = await import(workerUrl.href);

const basePath = process.env.BASE_PATH || "/website";

// Render routes and fix HTML subpaths & static images
for (const route of routes) {
  const response = await worker.fetch(
    new Request(`http://localhost${route}`, {
      headers: { accept: "text/html" },
    }),
    {
      ASSETS: {
        fetch: async (req) => {
          const url = new URL(req.url);
          const localPath = path.join(process.cwd(), "dist/client", url.pathname);
          try {
            const content = await fs.readFile(localPath);
            return new Response(content);
          } catch {
            return new Response("Not found", { status: 404 });
          }
        },
      },
    },
    {
      waitUntil() {},
      passThroughOnException() {},
    }
  );

  let html = await response.text();

  if (basePath) {
    // 1. Convert Next.js image endpoint URLs to direct static assets
    html = html.replace(/src="\/_next\/image\?url=%2F([^"&]+)[^"]*"/g, (match, filename) => {
      return `src="${basePath}/${filename}"`;
    });

    // Strip dynamic Next.js srcSet / imageSrcSet attributes so static img src is used cleanly
    html = html.replace(/\s(srcSet|srcset)="[^"]*"/gi, "");

    // Fix React hydration / RSC payload image strings
    html = html.replaceAll("/_next/image?url=%2F", `${basePath}/`);

    // 2. Adjust internal route links
    html = html.replaceAll(`href="/_next/`, `href="${basePath}/_next/`);
    html = html.replaceAll(`src="/_next/`, `src="${basePath}/_next/`);
    html = html.replaceAll(`href="/chris"`, `href="${basePath}/chris"`);
    html = html.replaceAll(`href="/privacy"`, `href="${basePath}/privacy"`);
    html = html.replaceAll(`href="/cookies"`, `href="${basePath}/cookies"`);
    html = html.replaceAll(`href="/terms"`, `href="${basePath}/terms"`);
    html = html.replaceAll(`href="/"`, `href="${basePath}/"`);
    html = html.replaceAll(`src="/chris-amc.jpg"`, `src="${basePath}/chris-amc.jpg"`);
    html = html.replaceAll(`src="/hero-calm-relief-woman-v3.png"`, `src="${basePath}/hero-calm-relief-woman-v3.png"`);
    html = html.replaceAll(`src="/paper-texture.png"`, `src="${basePath}/paper-texture.png"`);
  }

  const targetDir = route === "/" ? "dist/client" : path.join("dist/client", route.slice(1));
  await fs.mkdir(targetDir, { recursive: true });
  const targetFile = path.join(targetDir, "index.html");
  await fs.writeFile(targetFile, html, "utf-8");
  console.log(`Generated ${targetFile}`);
}

// Fix CSS file background URLs
const cssDir = path.join(process.cwd(), "dist/client/_next/static/css");
try {
  const cssFiles = await fs.readdir(cssDir);
  for (const file of cssFiles) {
    if (file.endsWith(".css")) {
      const cssPath = path.join(cssDir, file);
      let css = await fs.readFile(cssPath, "utf-8");
      if (basePath) {
        css = css.replaceAll(`url("/paper-texture.png")`, `url("${basePath}/paper-texture.png")`);
        css = css.replaceAll(`url('/paper-texture.png')`, `url('${basePath}/paper-texture.png')`);
        css = css.replaceAll(`url(/paper-texture.png)`, `url(${basePath}/paper-texture.png)`);
      }
      await fs.writeFile(cssPath, css, "utf-8");
      console.log(`Updated CSS paths in ${file}`);
    }
  }
} catch (e) {
  console.warn("No CSS dir found or failed to process CSS files:", e.message);
}

// Create .nojekyll so GitHub Pages does not ignore _next folder
await fs.writeFile("dist/client/.nojekyll", "");
console.log("Created dist/client/.nojekyll");
