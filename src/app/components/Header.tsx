import Link from 'next/link';
import React from 'react';

const Header = () => {
  return (
    <header className="bg-gray-800 text-white p-4">
      <div className="container mx-auto flex justify-between items-center">
        <Link href="/" className="text-xl font-bold hover:text-gray-300" aria-label='link para pagina de inicio'>Bookstore App</Link>
        <nav>
          <Link href="/authors" className="px-3 hover:text-gray-300" aria-label='link para lista de autores'>Authors</Link>
          <Link href="/crear" className="px-3 hover:text-gray-300" aria-label='link para crear un autor'>Crear</Link>
          <Link href="/favoritos" className="px-3 hover:text-gray-300" aria-label='link para lista de autores favoritos'>Favoritos</Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;