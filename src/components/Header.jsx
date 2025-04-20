import "./Header.css";

export default function Header() {
  return (
    <header className="header">
      <nav className="header-container ">
        <img src="../assets/logo.svg" alt="" />
        <ul className="title-header">
          <li className="elements">
            <a className="elTitles" href="#">
              Home
            </a>
          </li>
          <li className="elements">
            <a className="elTitles" href="#">
              Skills
            </a>
          </li>
          <li className="elements">
            <a className="elTitles" href="#">
              About Us
            </a>
          </li>
          <li className="elements">
            <a className="elTitles" href="#">
              Pricing
            </a>
          </li>
          <li className="elements">
            <a className="elTitles" href="#">
              Contacts
            </a>
          </li>
        </ul>
        <button className="headerBtn">
          <a className="btnTitle" href="#">
            Let’s Talk
          </a>
        </button>
      </nav>
    </header>
  );
}
