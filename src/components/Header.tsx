import { Link } from "react-router-dom";

export const Header = () => (
  <nav style={{ display: "flex", gap: 12 }}>
    <Link to="/dashboard">Dashboard</Link>
    <Link to="/blueprints">Blueprints</Link>
  </nav>
);
