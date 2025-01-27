import { Link } from "react-router-dom";

const AlumnoList = ({ alumnos, setAlumnos }) => {
  const handleDelete = (id) => {
    setAlumnos(alumnos.filter(alumno => alumno.id !== id));
  };

  return (
    <div>
      <h2>Alumnos</h2>
      <ul>
        {alumnos.map((alumno) => (
          <li key={alumno.id}>
            {alumno.nombre} - {alumno.grupo}
            <Link to={`/editar/${alumno.id}`}>Editar</Link>
            <button onClick={() => handleDelete(alumno.id)}>Eliminar</button>
          </li>
        ))}
      </ul>
      <Link to="/añadir">Añadir Alumno</Link>
    </div>
  );
};

export default AlumnoList;
