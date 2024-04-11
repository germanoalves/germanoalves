import React, { useState, useEffect } from "react";


const Menu = () => {

    const [categorias, setCategorias] = useState([]);

    useEffect(() => {
      fetch('http://localhost:3000/categories')
        .then(response => response.json())
        .then(data => setCategorias(data));
    }, []);
  
    const handleChange = (e) => {
      // Implementar a lógica para lidar com a mudança de estado dos checkboxes
    };
  
    
  return (
    <div id="mae-content">
      <div class="menu">
        <h3>ASSUNTO</h3>
      <ul>
      {categorias.map(categoria => (
        <li key={categoria.id}>
          <input type="checkbox" id={categoria.id} onChange={handleChange} />
          <label htmlFor={categoria.id}>{categoria.title}</label>
        </li>
      ))}
    </ul>
      </div>      
    </div>
  );
};

export default Menu;
