import logo from "../images/logo.svg"

export default function Header() {
    return (
        <header className="header">
            <img src={logo} alt="fylo-logo" className="header__logo" />
            <nav className="header__nav">
                <ul className="nav__items">
                    <li><a href="#">Features</a></li>
                    <li><a href="#">Team</a></li>
                    <li><a href="#">Sign In</a></li>
                </ul>
            </nav>
        </header>
    )
}