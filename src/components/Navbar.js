import { Link } from "react-router-dom"
import "./Navbar.css"

export default function Navbar() {
  return (
    <div className="navbar">
      <nav>
        <Link to="/" className="brand">
          <h2>Koshobai </h2>コショバイ
        </Link>
      </nav>
    </div>
  )
}
