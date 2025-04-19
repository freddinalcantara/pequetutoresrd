const Navbar = () => {
  return (
    <div className="navbar">
      <input
        type="text"
        placeholder="Buscar libros..."
        className="search-input"
      />
      <div className="dark-toggle">
        <label>
          🌙 Modo oscuro
          <input type="checkbox" />
        </label>
      </div>
    </div>
  );
};

export default Navbar;
