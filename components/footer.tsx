import { Instagram, Youtube } from "lucide-react"

const footerLinks = {
  programas: [
    { label: "Outdoor", href: "#" },
    { label: "Natación", href: "#" },
    { label: "Burning", href: "#" },
    { label: "Kids", href: "#" },
    { label: "Empresarial", href: "#" },
  ],
  recursos: [
    { label: "Blog", href: "#" },
    { label: "Calculadora IMC", href: "#" },
    { label: "Guía Nutricional", href: "#" },
    { label: "FAQ", href: "#" },
  ],
  legal: [
    { label: "Términos", href: "#" },
    { label: "Privacidad", href: "#" },
  ]
}

const socialLinks = [
  { icon: Instagram, href: "https://instagram.com/fitconmiguel", label: "Instagram" },
  { icon: Youtube, href: "#", label: "YouTube" },
]

export function Footer() {
  return (
    <footer className="py-16 relative border-t border-white/[0.06]">
      {/* Subtle frosted overlay for footer area */}
      <div className="absolute inset-0 bg-black/20 backdrop-blur-sm" />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12">
          {/* Brand */}
          <div className="col-span-2 md:col-span-1">
            <div className="flex items-center gap-2.5 mb-5">
              <div className="w-9 h-9 rounded-xl bg-foreground flex items-center justify-center">
                <span className="text-background font-extrabold text-xs font-[family-name:var(--font-heading)]">FCM</span>
              </div>
              <span className="font-[family-name:var(--font-heading)] font-bold text-base text-foreground">
                Fit Con Miguel
              </span>
            </div>
            <p className="text-muted-foreground text-sm mb-5 leading-relaxed">
              11 años construyendo bienestar.<br />
              Hazlo Como Puedas<span className="align-super text-xs">®</span>
            </p>
            <div className="flex gap-2">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-xl bg-white/[0.05] border border-white/[0.08] flex items-center justify-center text-muted-foreground hover:text-foreground hover:bg-white/[0.10] hover:border-white/[0.15] transition-all duration-300"
                  aria-label={social.label}
                >
                  <social.icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Programas */}
          <div>
            <h4 className="font-[family-name:var(--font-heading)] font-bold text-foreground mb-5 text-sm uppercase tracking-wider">
              Programas
            </h4>
            <ul className="space-y-3">
              {footerLinks.programas.map((link) => (
                <li key={link.label}>
                  <a href={link.href} className="text-muted-foreground hover:text-foreground transition-colors text-sm">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Recursos */}
          <div>
            <h4 className="font-[family-name:var(--font-heading)] font-bold text-foreground mb-5 text-sm uppercase tracking-wider">
              Recursos
            </h4>
            <ul className="space-y-3">
              {footerLinks.recursos.map((link) => (
                <li key={link.label}>
                  <a href={link.href} className="text-muted-foreground hover:text-foreground transition-colors text-sm">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contacto */}
          <div>
            <h4 className="font-[family-name:var(--font-heading)] font-bold text-foreground mb-5 text-sm uppercase tracking-wider">
              Contacto
            </h4>
            <ul className="space-y-3 text-sm text-muted-foreground">
              <li>
                {/* <a href="tel:8097079174" className="hover:text-foreground transition-colors"> */}
                <a href="#" className="hover:text-foreground transition-colors">
                  809-505-5050
                </a>
              </li>
              <li>
                <a href="mailto:info@fitconmiguel.com" className="hover:text-foreground transition-colors">
                  info@fitconmiguel.com
                </a>
              </li>
              <li>República Dominicana</li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-white/[0.06] flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} Fit Con Miguel. Todos los derechos reservados.
          </p>
          <div className="flex gap-6">
            {footerLinks.legal.map((link) => (
              <a key={link.label} href={link.href} className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                {link.label}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}
