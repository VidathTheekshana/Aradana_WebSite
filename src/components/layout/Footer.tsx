export function Footer() {
  return (
    <footer className="bg-black py-12 border-t border-white/5">
      <div className="container mx-auto px-6 md:px-12">
  <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-20 items-start md:items-center">


          {/* Contact */}
          <div className="text-center md:text-left md:justify-self-start">
            <h4 className="text-white text-lg font-semibold mb-3">Contact</h4>

            <address className="not-italic text-white/60 text-sm space-y-1">
              <div>49/C, Maharagama Road</div>
              <div>Mampe, Piliyandala</div>
            </address>

            <div className="mt-4 text-white/60 text-sm">
              <div className="font-medium text-white/80 mb-2">Phone</div>
              <div className="flex flex-col gap-1">
                <a href="tel:+94779321079" className="hover:text-aradana-gold transition">
                  +94 77 932 1079
                </a>
                <a href="tel:+94775347164" className="hover:text-aradana-gold transition">
                  +94 77 534 7164
                </a>
              </div>

              <div className="font-medium text-white/80 mt-4 mb-1">Email</div>
              <a
                href="mailto:wasanthakota@gmail.com"
                className="hover:text-aradana-gold transition"
              >
                wasanthakota@gmail.com
              </a>

              <div className="mt-4">
                <a
                  href="https://www.google.com/maps/search/?api=1&query=6.8073953,79.9276547"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 text-sm text-aradana-gold font-semibold hover:underline"
                >
                  View on map
                </a>
              </div>
            </div>
          </div>

          {/* Social + CTA */}
          <div className="text-center md:text-right md:justify-self-center">
            <h4 className="text-white text-lg font-semibold mb-3">Connect</h4>

            <div className="flex justify-center md:justify-end gap-4 mb-4 items-center">
              {/* Facebook */}
              <a
                href="https://www.facebook.com/share/16zZbFdPgR/?mibextid=wwXIfr"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white/60 hover:text-aradana-gold transition"
                aria-label="Facebook"
              >
                <svg className="h-7 w-7" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
                </svg>
              </a>

              {/* Google (site) - monochrome G to match theme */}
              <a
                href="https://aradanacaterers.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white/60 hover:text-aradana-gold transition"
                aria-label="Google"
              >
                <svg className="h-12 w-12" viewBox="0 0 24 24" aria-hidden="true">
                  <text x="12" y="16" textAnchor="middle" fontSize="14" fontWeight="700" fill="currentColor" style={{ fontFamily: 'Arial, sans-serif' }}>G</text>
                </svg>
              </a>

              {/* Email */}
              <a
                href="mailto:wasanthakota@gmail.com"
                className="text-white/60 hover:text-aradana-gold transition"
                aria-label="Email"
              >
                <svg className="h-6 w-6" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M24 5.457v13.909c0 .904-.732 1.636-1.636 1.636h-3.819V11.73L12 16.64l-6.545-4.91v9.273H1.636A1.636 1.636 0 0 1 0 19.366V5.457c0-2.023 2.309-3.178 3.927-1.964L5.455 4.64 12 9.548l6.545-4.91 1.528-1.145C21.69 2.28 24 3.434 24 5.457z"/>
                </svg>
              </a>
            </div>

            {/* CTA removed per request */}
            </div>

            {/* Copyright / bottom text */}
            <div className="mt-8 text-center md:text-right md:justify-self-end text-white/60 text-sm">
              <div className="font-semibold text-white">Aradana</div>
              <div className="mt-1">© 2026 Aradana Catering. All rights reserved.</div>
            </div>
        </div>
      </div>
    </footer>
  );
}