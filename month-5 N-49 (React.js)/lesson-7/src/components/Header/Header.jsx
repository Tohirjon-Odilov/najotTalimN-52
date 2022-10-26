import { Link } from "react-router-dom"
import Switch from "react-switch"
import st from "./Header.module.scss"


const Header = ({ i = 0, theme, toggle }) => {
  let links = ["Apple", "Car", "Tesla", "Rocket"]
  return <header className={st.header}>
    <nav className="d-flex align-items-center justify-content-between">
      <div>
        {
          links.map(link => (
            <Link key={i++} to={link.toLowerCase()}>{link}</Link>
          ))
        }
      </div>
      <Switch onChange={() => toggle()} checked={theme === 'dark'} />
    </nav>
  </header>
}

export default Header