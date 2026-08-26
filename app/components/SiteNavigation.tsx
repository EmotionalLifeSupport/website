"use client";

import { Cross2Icon, HamburgerMenuIcon } from "@radix-ui/react-icons";
import Link from "next/link";
import { useCallback, useEffect, useRef, useState } from "react";

const navigationItems = [
  { id: "support", label: "About you" },
  { id: "about", label: "About Chris" },
  { id: "testimonials", label: "Testimonials" },
  { id: "process", label: "How it works" },
  { id: "pricing", label: "Pricing" },
  { id: "scope", label: "Safety" },
];

type SiteNavigationProps = {
  isHomePage?: boolean;
};

export default function SiteNavigation({ isHomePage = false }: SiteNavigationProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");
  const menuButtonRef = useRef<HTMLButtonElement>(null);

  const sectionHref = (id: string) => (isHomePage ? `#${id}` : `/#${id}`);
  const bookingHref = isHomePage ? "#first-conversation" : "/#first-conversation";

  const closeMenu = useCallback((restoreFocus = false) => {
    setIsOpen(false);
    if (restoreFocus) {
      window.requestAnimationFrame(() => menuButtonRef.current?.focus());
    }
  }, []);

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape" && isOpen) {
        closeMenu(true);
      }
    };

    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [closeMenu, isOpen]);

  useEffect(() => {
    if (!isHomePage) return;

    const sections = navigationItems
      .map(({ id }) => document.getElementById(id))
      .filter((section): section is HTMLElement => Boolean(section));

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        if (visible) setActiveSection(visible.target.id);
      },
      { rootMargin: "-20% 0px -62% 0px", threshold: [0.05, 0.2, 0.5] },
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, [isHomePage]);

  return (
    <header className="site-header">
      <Link className="brand-link" href="/">
        Emotional Life Support
      </Link>

      <nav className="site-nav desktop-nav" aria-label="Main navigation">
        {navigationItems.map((item) => (
          <a
            key={item.id}
            className={activeSection === item.id ? "is-active" : undefined}
            href={sectionHref(item.id)}
            aria-current={activeSection === item.id ? "location" : undefined}
          >
            {item.label}
          </a>
        ))}
        <a className="button header-booking-button" href={bookingHref}>
          Book your first session free
        </a>
      </nav>

      <div className="mobile-menu">
        <button
          ref={menuButtonRef}
          className="menu-toggle"
          type="button"
          aria-expanded={isOpen}
          aria-controls="mobile-navigation"
          aria-label={isOpen ? "Close navigation menu" : "Open navigation menu"}
          onClick={() => setIsOpen((open) => !open)}
        >
          {isOpen ? <Cross2Icon aria-hidden="true" /> : <HamburgerMenuIcon aria-hidden="true" />}
        </button>
        {isOpen && (
          <nav id="mobile-navigation" aria-label="Mobile navigation">
            {navigationItems.map((item) => (
              <a
                key={item.id}
                className={activeSection === item.id ? "is-active" : undefined}
                href={sectionHref(item.id)}
                aria-current={activeSection === item.id ? "location" : undefined}
                onClick={() => closeMenu()}
              >
                {item.label}
              </a>
            ))}
            <a className="button mobile-booking-button" href={bookingHref} onClick={() => closeMenu()}>
              Book your first session free
            </a>
          </nav>
        )}
      </div>
    </header>
  );
}
