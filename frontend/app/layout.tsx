import "./globals.css";
import Link from "next/link";

export const metadata = {
  title: "Amazon Listing Audit Tool",
  description: "Analyze and score Amazon product listings",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="text-white">
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}

/* ---------- HEADER ---------- */
function Header() {
  return (
    <header className="bg-black/95 backdrop-blur sticky top-0 z-50 border-b border-white/10 shadow-sm">
  <div className="max-w-7xl mx-auto px-4 py-6">

    {/* MOBILE VIEW */}
    <div className="flex flex-col items-center gap-4 md:hidden">
      <h1 className="text-2xl font-extrabold text-white tracking-tight">
        Amazon Listing Audit Tool
      </h1>

      <Link
        href="/#home"
        className="
          w-fit
          px-6 py-2
          rounded-full
          bg-white
          text-black
          text-sm
          font-semibold
        "
      >
        Try Now
      </Link>
    </div>

    {/* DESKTOP VIEW */}
    <div className="hidden md:flex justify-between items-center py-6">
      <Link
        href="/#home"
        className="text-4xl font-extrabold text-white tracking-tight"
      >
        Amazon Listing Audit
      </Link>

      <nav className="flex items-center gap-8 text-lg font-medium">
        <NavLink href="/#home">Home</NavLink>
        <NavLink href="/#how-it-works">How It Works</NavLink>
        <NavLink href="/#features">Features</NavLink>

        <Link
          href="/#home"
          className="
            ml-4
            px-6 py-2
            rounded-full
            bg-white
            text-black
            text-lg
            font-semibold
            hover:scale-105
            transition-transform
          "
        >
          Try Now
        </Link>
      </nav>
    </div>

  </div>
</header>

  );
}

function NavLink({
  href,
  children,
}: {
  href: string;
  children: React.ReactNode;
}) {
  return (
    <Link
      href={href}
      className="text-white/80 hover:text-white transition-colors"
    >
      {children}
    </Link>
  );
}




/* ---------- FOOTER ---------- */
function Footer() {
  return (
    <footer className="bg-black text-white border-t border-white/10 mt-24">
      <div className="max-w-7xl mx-auto px-6 py-12">

        {/* Top Section */}
        <div className="flex flex-col md:flex-row justify-between gap-10">

          {/* Brand */}
          <div>
            <h2 className="text-4xl font-bold py-6 py-11">
              Amazon Listing Audit
            </h2>
            
          </div>

          {/* Links */}
          <div className="flex gap-16">
  

  {/* Company */}
  <div className="mt-10 md:mt-0">
    
    <h3 className="text-lg font-semibold mb-3 ">Quick links</h3>
    <ul className="space-y-2 text-lg text-white/70">
      <li><Link href="/about">About Us</Link></li>
      <li><Link href="/contact">Contact</Link></li>
      <li><Link href="/sample-repoer">Sample Report</Link></li>
      <li><Link href="/faq">FAQ</Link></li>
    </ul>
  </div>

</div>

        </div>

        {/* Divider */}
        <div className="border-t border-white/10 my-10" />

        {/* Bottom Section */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">


          {/* Social Icons */}
          <div className="flex items-center gap-10">
            <SocialIcon href="https://www.instagram.com/instagram" label="Instagram">
              <InstagramIcon />
            </SocialIcon>

            <SocialIcon href="https://www.Facebook.com/Facebook" label="Facebook">
              <FacebookIcon />
            </SocialIcon>

            <SocialIcon href="https://www.LinkedIn.com/LinkedIn" label="LinkedIn">
              <LinkedInIcon />
            </SocialIcon>

            <SocialIcon href="https://www.x.com/X" label="X">
              <XIcon />
            </SocialIcon>
          </div>
          <p className="text-ml text-white/50">
            © {new Date().getFullYear()} Amazon Listing Audit. All rights reserved.
          </p>
        </div>

      </div>
    </footer>
  );
}

/* ---------- Social Icon Wrapper ---------- */
function SocialIcon({
  href,
  label,
  children,
}: {
  href: string;
  label: string;
  children: React.ReactNode;
}) {
  return (
    <a
      href={href}
      aria-label={label}
      className="text-white/70 hover:text-white transition-colors duration-200"
      target="_blank"
      rel="noopener noreferrer"
    >
      {children}
    </a>
  );
}

/* ---------- Icons ---------- */

function InstagramIcon() {
  return (
    <svg width="50" height="50" fill="currentColor" viewBox="0 0 24 24">
      <path d="M7 2C4.24 2 2 4.24 2 7v10c0 2.76 2.24 5 5 5h10c2.76 0 5-2.24 5-5V7c0-2.76-2.24-5-5-5H7zm10 2c1.65 0 3 1.35 3 3v10c0 1.65-1.35 3-3 3H7c-1.65 0-3-1.35-3-3V7c0-1.65 1.35-3 3-3h10zm-5 3a5 5 0 100 10 5 5 0 000-10zm0 2a3 3 0 110 6 3 3 0 010-6zm4.5-.75a1.25 1.25 0 11-2.5 0 1.25 1.25 0 012.5 0z" />
    </svg>
  );
}

function FacebookIcon() {
  return (
    <svg width="50" height="50" fill="currentColor" viewBox="0 0 24 24">
      <path d="M22 12a10 10 0 10-11.5 9.95v-7.04H8.4V12h2.1V9.8c0-2.1 1.25-3.26 3.17-3.26.92 0 1.88.16 1.88.16v2.07h-1.06c-1.05 0-1.38.65-1.38 1.32V12h2.35l-.38 2.91h-1.97v7.04A10 10 0 0022 12z" />
    </svg>
  );
}

function LinkedInIcon() {
  return (
    <svg width="50" height="50" fill="currentColor" viewBox="0 0 24 24">
      <path d="M20.45 20.45h-3.55v-5.4c0-1.29-.02-2.95-1.8-2.95-1.8 0-2.08 1.4-2.08 2.85v5.5H9.47V9h3.41v1.56h.05c.47-.9 1.62-1.85 3.34-1.85 3.57 0 4.23 2.35 4.23 5.41v6.33zM5.34 7.43a2.06 2.06 0 110-4.12 2.06 2.06 0 010 4.12zM7.11 20.45H3.56V9h3.55v11.45zM22 0H2C.9 0 0 .9 0 2v20c0 1.1.9 2 2 2h20c1.1 0 2-.9 2-2V2c0-1.1-.9-2-2-2z" />
    </svg>
  );
}

function XIcon() {
  return (
    <svg width="50" height="50" fill="currentColor" viewBox="0 0 24 24">
      <path d="M18.36 2H21l-6.75 7.71L22 22h-6.17l-4.83-6.3L5.47 22H2.82l7.22-8.25L2 2h6.33l4.36 5.7L18.36 2z" />
    </svg>
  );
}
