import { useEffect, useState } from 'react';

export default function ThemeToggle() {
  const [dark, setDark] = useState(false);

  useEffect(() => {
    const saved = localStorage.getItem('theme');
    if (saved === 'dark') {
      setDark(true);
      document.body.classList.add('dark');
    }
  }, []);

  const toggleTheme = () => {
    const newTheme = !dark;
    setDark(newTheme);
    if (newTheme) {
      document.body.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      document.body.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  };

  return (
    <button onClick={toggleTheme} style={{ marginLeft: '10px' }}>
      {dark ? '🌞' : '🌙'}
    </button>
  );
}
