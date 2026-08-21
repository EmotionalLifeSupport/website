import fs from "node:fs/promises";
import path from "node:path";

const routes = ["/", "/chris", "/privacy", "/cookies", "/terms"];
const workerUrl = new URL("../dist/server/index.js", import.meta.url);
const { default: worker } = await import(workerUrl.href);

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

  const html = await response.text();
  const targetDir = route === "/" ? "dist/client" : path.join("dist/client", route.slice(1));
  await fs.mkdir(targetDir, { recursive: true });
  const targetFile = path.join(targetDir, "index.html");
  await fs.writeFile(targetFile, html, "utf-8");
  console.log(`Generated ${targetFile}`);
}
