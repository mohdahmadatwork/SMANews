import React, { Component } from 'react'
import {
  Link
} from "react-router-dom";
export class Navbar extends Component {
  render() {
    return (
      <div>
        <nav className="navbar navbar-expand-lg bg-light">
            <div className="container-fluid">
                <a className="navbar-brand" href="/">SMANews</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                        <Link className="nav-link active" aria-current="page" to="/">Home</Link>
                        </li>
                        <li className="nav-item dropdown">
                          <a className="nav-link dropdown-toggle" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                              News Category 
                          </a>
                          <ul className="dropdown-menu">
                              {/* <li><Link className="dropdown-item" to="#">Action</Link></li> */}
                              <li><Link className="dropdown-item" to="/business">business</Link></li>
                              <li><Link className="dropdown-item" to="/entertainment">entertainment</Link></li>
                              <li><Link className="dropdown-item" to="/general">general</Link></li>
                              <li><Link className="dropdown-item" to="/health">health</Link></li>
                              <li><Link className="dropdown-item" to="/science">science</Link></li>
                              <li><Link className="dropdown-item" to="/sports">sports</Link></li>
                              <li><Link className="dropdown-item" to="/technology">technology</Link></li>
                              {/* <li><Link className="dropdown-item" to="#">Another action</Link></li> */}
                              <li><hr className="dropdown-divider"/></li>
                              <li><Link className="dropdown-item" to="#">Something else here</Link></li>
                          </ul>
                        </li>
                        <li className="nav-item dropdown">
                          <a className="nav-link dropdown-toggle" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                              Country Wise News     
                          </a>
                          <ul className="dropdown-menu">
                              {/* <li><Link className="dropdown-item" to="#">Action</Link></li> */}
                              <li><Link className="dropdown-item" to="/business">business</Link></li>
                              <li><Link className="dropdown-item" to="/entertainment">entertainment</Link></li>
                              <li><Link className="dropdown-item" to="/general">general</Link></li>
                              <li><Link className="dropdown-item" to="/health">health</Link></li>
                              <li><Link className="dropdown-item" to="/science">science</Link></li>
                              <li><Link className="dropdown-item" to="/sports">sports</Link></li>
                              <li><Link className="dropdown-item" to="/technology">technology</Link></li>
                              {/* <li><Link className="dropdown-item" to="#">Another action</Link></li> */}
                              <li><hr className="dropdown-divider"/></li>
                              <li><Link className="dropdown-item" to="#">Something else here</Link></li>
                          </ul>
                        </li>
                        
                    </ul>
                    <form className="d-flex" role="search">
                        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
                        <button className="btn btn-outline-success" type="submit">Search</button>
                    </form>
                </div>
            </div>
        </nav>
      </div>
    )
  }
}

export default Navbar;