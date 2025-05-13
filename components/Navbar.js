import { useState } from 'react';
import Link from 'next/link';
import '../styles/Navbar.css';
import ThemeToggle from './ThemeToggle';


export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <nav className="navbar">
  <div className="logo">
    <Link href="/">Мой сайт</Link>
  </div>

  <div className={`nav-links ${isOpen ? 'open' : ''}`}>
    <Link href="/">Главная</Link>
    <Link href="/news">Новости</Link>
    <Link href="/about">О нас</Link>
    <Link href="/contact">Контакты</Link>
  </div>

  <div className="navbar-right">
    <ThemeToggle />
    <div className="burger" onClick={toggleMenu}>
      <div className="line" />
      <div className="line" />
      <div className="line" />
    </div>
  </div>
</nav>

  );
}
