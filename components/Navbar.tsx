import Link from "next/link";

export function Navbar() {
  return (
    <nav className="flex flex-wrap gap-4 border-b p-4" aria-label="Primary navigation">
      <Link href="/" aria-label="Site name placeholder">
        Site name placeholder
      </Link>
      <Link href="/work">Work</Link>
      <Link href="/about">About</Link>
      <a href="/resume/cory-cowden-resume.pdf" download title="Resume PDF coming soon">
        Resume
      </a>
    </nav>
  );
}
