import KicLogo from "@/components/brand/KicLogo";

export default function FooterSection() {
  return (
    <footer className="bg-kic-dark text-white/70 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          <div>
            <KicLogo variant="light" showWordmark className="mb-4" />
            <p className="text-sm leading-relaxed">
              The Digital Heart of Africa — a 62-hectare mixed-use innovation
              hub in Kigali, Rwanda.
            </p>
          </div>

          <div>
            <h4 className="font-semibold text-white mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              {[
                { href: "#masterplan", label: "Master Plan" },
                { href: "#opportunities", label: "Opportunities" },
                { href: "#academic", label: "Academic" },
                { href: "#contact", label: "Contact" },
              ].map((link) => (
                <li key={link.href}>
                  <a href={link.href} className="hover:text-kic-gold transition-colors">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-white mb-4">Contact</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="mailto:c.clulow@innovationcity.rw" className="hover:text-kic-gold transition-colors">
                  c.clulow@innovationcity.rw
                </a>
              </li>
              <li>
                <a href="tel:+250790135976" className="hover:text-kic-gold transition-colors">
                  +250 790 135 976
                </a>
              </li>
              <li>KG 220 St, Kigali, Gishushu</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8 flex flex-col sm:flex-row justify-between items-center gap-4 text-sm">
          <p>© {new Date().getFullYear()} Kigali Innovation City. All rights reserved.</p>
          <p className="text-white/40">KICCL · A Rwanda Development Board Initiative</p>
        </div>
      </div>
    </footer>
  );
}
