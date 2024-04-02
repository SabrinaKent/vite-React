import "./Navbar.css";

const Navbar = ({ setNumber }) => {

  return (
    <nav className="nav">
      <button className="button" onClick={() => { setNumber(1) }}>
        Button 1
      </button>
      <button className="button" onClick={() => setNumber(2)}>
        Button 2
      </button>
      <button className="button" onClick={() => setNumber(3)}>
        Button 3
      </button>
      <button className="button" onClick={() => setNumber(Math.random() * 10)}>
        Random
      </button>
    </nav>
  );
};

export default Navbar;
