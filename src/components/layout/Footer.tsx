import Link from "next/link";

export function Footer() {
  return (
    <footer className="bg-black py-12 border-t border-white/5">
      <div className="container mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-8">
        
        {/* Logo & Copyright */}
        <div className="text-center md:text-left">
          <Link href="/" className="text-2xl font-bold tracking-tighter text-white block mb-2">
            Aradana
          </Link>
          <p className="text-white/40 text-sm">
            © {new Date().getFullYear()} Aradana Catering. All rights reserved.
          </p>
        </div>

        {/* Links */}
        <div className="flex gap-8 text-sm">
           <Link href="#" className="text-white/60 hover:text-aradana-gold transition-colors">Privacy Policy</Link>
           <Link href="#" className="text-white/60 hover:text-aradana-gold transition-colors">Terms of Service</Link>
           <Link href="#" className="text-white/60 hover:text-aradana-gold transition-colors">Contact</Link>
        </div>

        {/* Socials */}
       <div className="flex gap-6">
  {/* Facebook */}
  <a 
    href="https://www.facebook.com/share/16zZbFdPgR/?mibextid=wwXIfr"
    target="_blank"
    rel="noopener noreferrer"
    className="text-aradana-muted hover:text-aradana-gold transition-colors"
  >
    <span className="sr-only">Facebook</span>
    <svg className="h-7 w-7" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
      <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
    </svg>
  </a>

           {/* Google */}
           <a href="#" className="text-aradana-muted hover:text-aradana-gold transition-colors">
               <span className="sr-only">Google</span>
               <svg className="h-6 w-6" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                   <path d="M12.48 10.92v3.28h7.84c-.24 1.84-.853 3.187-1.787 4.133-1.147 1.147-2.933 2.4-6.053 2.4-4.827 0-8.6-3.893-8.6-8.72s3.773-8.72 8.6-8.72c2.6 0 4.507 1.027 5.907 2.347l2.307-2.307C18.747 1.44 16.133 0 12.48 0 5.867 0 .533 5.333.533 12S5.867 24 12.48 24c3.44 0 6.013-1.133 8.053-3.24 2.08-2.08 2.72-4.987 2.72-7.387 0-.733-.093-1.413-.213-2.067h-10.56z" />
               </svg>
            </a>

            {/* Gmail */}
<a 
  href="mailto:wasanthakota@gmail.com?subject=Aradana%20Catering%20Inquiry&body=Hello%20Aradana%20Team,%20I%20would%20like%20to%20inquire%20about%20your%20catering%20services."

  className="text-aradana-muted hover:text-aradana-gold transition-colors"
>
  <span className="sr-only">Gmail</span>
  <svg className="h-6 w-6" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
    <path d="M24 5.457v13.909c0 .904-.732 1.636-1.636 1.636h-3.819V11.73L12 16.64l-6.545-4.91v9.273H1.636A1.636 1.636 0 0 1 0 19.366V5.457c0-2.023 2.309-3.178 3.927-1.964L5.455 4.64 12 9.548l6.545-4.91 1.528-1.145C21.69 2.28 24 3.434 24 5.457z"/>
  </svg>
</a>

        </div>
      </div>
    </footer>
  );
}
