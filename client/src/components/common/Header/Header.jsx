import { memo, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import clsx from "clsx";
import styled from "styled-components";

const Header = styled.header`
  width: 100vw;
  border-bottom: 1px solid #eaeaea;
  box-shadow: 0 0 0.25rem 0 rgba(0, 0, 0, 0.1);
`;

const PageHeader = () => {
  const [display, setDisplay] = useState(false);
  return (
    <Header className="header">
      <nav className="navbar" role="navigation" aria-label="main navigation">
        <div className="navbar-brand">
          <Link className="navbar-item" to="/">
            <img src="/" alt="Logo" loading="lazy" decoding="async" />
          </Link>

          <span
            role="button"
            aria-label="menu"
            aria-expanded="false"
            data-target="mainNavbar"
            className={clsx(display ? "is-active" : "")}
            onClick={() => setDisplay((display) => !display)}
          >
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
          </span>
        </div>
        <div
          id="mainNavbar"
          className={clsx("navbar-menu", display ? "is-active" : "")}
        >
          <div className="navbar-start">
            <NavLink className="navbar-item" to="/">
              Home
            </NavLink>
            <NavLink className="navbar-item" to="/about">
              About
            </NavLink>
          </div>
          <div className="navbar-end">
            <div className="navbar-item pr-5">
              <div className="buttons">
                <Link className="button is-info" to='/login'>Login</Link>
                <Link className="button is-info is-light" to='/register'>Register</Link>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </Header>
  );
};

export default memo(PageHeader);
