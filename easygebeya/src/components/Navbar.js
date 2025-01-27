import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="flex items-center justify-between px-4 py-2 bg-blue-600 text-white">
      <Link to="/">Home</Link>
      <Link to="/add-property">Add Property</Link>
      <Link to="/add-vehicle">Add Vehicle</Link>
      <Link to="/login">Login</Link>
      <Link to="/signup">Signup</Link>
    </nav>
  );
};

export default Navbar;
