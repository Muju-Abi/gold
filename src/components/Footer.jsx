import Link from 'next/link';

const currentYear = new Date().getFullYear();
const Footer = ({ menuItems }) => (
  <footer className="bg-white border-b sticky top-0 z-50 p-4">
    <nav className="max-w-7xl mx-auto flex justify-between items-center">
      <ul className="flex space-x-6">
        {menuItems?.map((item) => (
          <li key={item._uid}>
            <Link href={item.link.cached_url} className="hover:text-blue-500 transition">
              {item.label}
            </Link>
          </li>
        ))}
      </ul>
      <p>All rights reserved © {currentYear}</p>
      <Link href="/" className="text-xl font-bold text-blue-600">MyGold</Link>
    </nav>
  </footer>
);

export default Footer;