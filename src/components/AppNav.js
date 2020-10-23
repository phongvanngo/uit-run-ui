import React from 'react'
import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'
import { NavLink, Link } from 'react-router-dom'
import uitRunLogo from '../images/uit-run-logo.png'

import { useSelector } from 'react-redux'

const AppNav = () => {
  const user = useSelector((state) => state.authentication.user)

  return (
    <Navbar
      collapseOnSelect
      expand="lg"
      variant="dark"
      className="bg-dark-custom"
    >
      <NavLink to="/">
        <Navbar.Brand>
          <img src={uitRunLogo} alt="uit-run-logo" className="logo" />
          <span className="ml-2 logo-brand align-center">UIT RUN MÙA 2</span>
        </Navbar.Brand>
      </NavLink>

      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="mr-auto">
          <NavLink activeClassName="active" className="nav-link" to="/ranking">
            Xếp hạng
          </NavLink>
          {user && (
            <NavLink activeClassName="active" className="nav-link" to="/quiz">
              Thi Đấu
            </NavLink>
          )}
        </Nav>
        <Nav>
          {user ? (
            <Link className="btn btn-custom custom-transition" to="/login">
              Đăng Xuất
            </Link>
          ) : (
            <NavLink activeClassName="active" className="nav-link" to="/login">
              Đăng nhập
            </NavLink>
          )}
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  )
}

export default AppNav
