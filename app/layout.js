import Link from 'next/link';
import './globals.css';

export const metadata = {
  title: 'Portfolio Website',
  description: 'My personal portfolio',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <nav className="bg-gray-800 text-white p-4">
          <div className="container mx-auto flex justify-between items-center">
            <h1 className="text-xl font-bold">My Portfolio</h1>
            <div className="space-x-4">
              <Link href="/" className="hover:text-gray-300">Home</Link>
              <Link href="/about" className="hover:text-gray-300">About</Link>
              <Link href="/contact" className="hover:text-gray-300">Contact</Link>
            </div>
          </div>
        </nav>
        <main className="container mx-auto px-4 py-8">
          {children}
        </main>
        <footer className="bg-gray-800 text-white p-4 mt-8">
          <div className="container mx-auto text-center">
            <p>© 2024 My Portfolio. All rights reserved.</p>
          </div>
        </footer>
      </body>
    </html>
  );
}