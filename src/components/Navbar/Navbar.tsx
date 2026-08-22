import type { NavigationLink } from "../../types/site";
import "./Navbar.css";

interface NavbarProps {
  businessName: string;
  links: NavigationLink[];
  cta: {
    label: string;
    href: string;
  };
}

function Navbar({
  businessName,
  links,
  cta,
}: NavbarProps) {
  return (
    <header className="navbar">
      <div className="container navbar__inner">
        <a
          href="#inicio"
          className="navbar__brand"
          aria-label={`${businessName} - Inicio`}
        >
          {businessName}
        </a>

        <nav className="navbar__navigation" aria-label="Navegación principal">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="navbar__link"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <a href={cta.href} className="navbar__cta">
          {cta.label}
        </a>
      </div>
    </header>
  );
}

export default Navbar;