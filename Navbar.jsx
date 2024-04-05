import { Link } from "react-router-dom"

const Navbar = () => {
    return (
        <header>
        <nav id="navbar">
            <h1>
                <img src="../images/logo-light.svg" alt="" />
            </h1>
            <ul className="nav-list">
                <li className="nav-item"><Link to="/">Home</Link></li>
                <li className="nav-item"><Link to="/about">About</Link></li>
                <li className="nav-item"><Link to="/portfolio">Portfolio</Link></li>
            </ul>
        </nav>
        </header>
    )
}

export default Navbar