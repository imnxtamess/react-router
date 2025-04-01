import { Link, NavLink } from "react-router-dom";

export default function Header() {
  return (
    <>
      <header>
        <nav className="navbar navbar-expand-sm navbar-light">
          <div className="container">
            <a className="navbar-brand text-white" href="/">
              <img className="logo" src="logopng.png" alt="" />
            </a>
            <button
              className="navbar-toggler d-lg-none"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapsibleNavId"
              aria-controls="collapsibleNavId"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="collapsibleNavId">
              <ul className="navbar-nav ms-auto mt-2 mt-lg-0 d-flex gap-3">
                <li className="nav-item ">
                  <NavLink to={"/"}>Home</NavLink>
                </li>
                <li className="nav-item">
                  <NavLink to={"/Posts"}>Posts</NavLink>
                </li>
                <li className="nav-item">
                  <NavLink to={"/About-Us"}>About Us</NavLink>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </header>
    </>
  );
}
