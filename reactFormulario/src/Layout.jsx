import React from 'react';
import { Outlet, Link } from 'react-router-dom';

function Layout(){
  return (
    <div>
      <header>
        <h1>Gestión de Alumnos</h1>
        <nav>
          <Link to="/">Lista de Alumnos</Link>
          <Link to="/añadir">Añadir Alumno</Link>
        </nav>
      </header>
      <main>
        <Outlet />
      </main>

      <footer>
        <p>&copy; 2025 Gestión de Alumnos</p>
      </footer>
    </div>
  );
};

export default Layout;
