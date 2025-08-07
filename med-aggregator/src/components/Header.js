'use client';
import Link from 'next/link';

export default function Header() {
  return (
 <header className="bg-emerald-200 text-gray-800 px-4 py-3 rounded shadow">
  <div className="max-w-4xl mx-auto flex justify-between items-center">
    <Link href="/" className="font-bold text-lg bg-blue-60 hover:text-gray-900">
      Medical Services in Tbilisi
    </Link>
    <nav className="space-x-4">
      <Link href="/blog" className="hover:underline **text-white**">Blog</Link>
      <Link href="/about" className="hover:underline **text-white**">About</Link>
    </nav>
  </div>
</header>
  );
}
