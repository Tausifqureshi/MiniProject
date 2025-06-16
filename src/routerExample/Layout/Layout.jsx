import React from 'react';
import { Link, Outlet } from 'react-router-dom';

export default function Layout() {
  return (
    <div>
      <header>
        <nav>
          <Link to="/">Home</Link> | 
          <Link to="/about">About</Link> | 
          <Link to="/contact">Contact</Link>
        </nav>
      </header>

      <main>
        <Outlet />  {/* child page yaha render hoga */}
      </main>

      <footer>
        <p>© 2025 My App</p>
      </footer>
    </div>
  );
}
