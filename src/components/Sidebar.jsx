const genres = ["Educativo", "Colorear"];

const Sidebar = ({ onSelectGenre, isOpen }) => {
  return (
    <div className={`sidebar ${isOpen ? "open" : ""}`}>
      <h2>Géneros</h2>
      <ul>
        <li onClick={() => onSelectGenre(null)}>Todos</li>
        {genres.map((genre) => (
          <li key={genre} onClick={() => onSelectGenre(genre)}>
            {genre}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Sidebar;

/*
const genres = ["Educativo", "Colorear"];

const Sidebar = ({ onSelectGenre }) => {
  return (
    <div className="sidebar">
      <h2>Géneros</h2>
      <ul>
        {genres.map((genre) => (
          <li key={genre} onClick={() => onSelectGenre(genre)}>
            {genre}
          </li>
        ))}
        <li onClick={() => onSelectGenre(null)}>Todos</li>
      </ul>
    </div>
  );
};

export default Sidebar;
*/
