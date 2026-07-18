"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

type NavigationItem = {
  href: string;
  label: string;
  showOnMobile: boolean;
};

const navigationItems: NavigationItem[] = [
  { href: "/", label: "Inicio", showOnMobile: true },
  { href: "/explore", label: "Explorar", showOnMobile: true },
  { href: "/journal", label: "Mi diario", showOnMobile: true },
  { href: "/library", label: "Biblioteca", showOnMobile: false },
  { href: "/profile", label: "Perfil", showOnMobile: true },
];

type NavigationLinksProps = {
  mobile?: boolean;
};

function NavigationLinks({ mobile = false }: NavigationLinksProps) {
  const pathname = usePathname();
  const items = mobile
    ? navigationItems.filter((item) => item.showOnMobile)
    : navigationItems;

  return items.map((item) => {
    const isActive = pathname === item.href;
    const linkClasses = mobile
      ? `flex min-h-11 items-center justify-center rounded-md px-2 text-center text-xs font-semibold transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-focus-ring ${
          isActive
            ? "bg-brand-primary text-background"
            : "text-text-secondary hover:bg-surface-2 hover:text-text-primary"
        }`
      : `flex min-h-11 items-center rounded-md px-3 text-sm font-semibold transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-focus-ring ${
          isActive
            ? "bg-brand-primary text-background"
            : "text-text-secondary hover:bg-surface-2 hover:text-text-primary"
        }`;

    return (
      <li key={item.href}>
        <Link
          aria-current={isActive ? "page" : undefined}
          className={linkClasses}
          href={item.href}
        >
          {item.label}
        </Link>
      </li>
    );
  });
}

export function Navigation() {
  return (
    <>
      <aside className="fixed inset-y-0 left-0 hidden w-64 border-r border-border-subtle bg-surface-1 p-6 md:block">
        <p className="text-xl font-bold tracking-tight">SoundVerse</p>
        <nav aria-label="Navegación principal" className="mt-10">
          <ul className="space-y-2">
            <NavigationLinks />
          </ul>
        </nav>
      </aside>

      <nav
        aria-label="Navegación principal móvil"
        className="fixed inset-x-0 bottom-0 z-10 border-t border-border-subtle bg-surface-1 p-3 md:hidden"
      >
        <ul className="grid grid-cols-4 gap-2">
          <NavigationLinks mobile />
        </ul>
      </nav>
    </>
  );
}
