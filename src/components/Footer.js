import React from 'react';
import { Link } from 'react-router-dom';

// import { faGithub } from '@fortawesome/free-brands-svg-icons';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function Footer() {
  return (
    <div>
      <footer className="d-flex flex-wrap justify-content-between align-items-center py-3 my-4 border-top">
        <div className="col-md-4 d-flex align-items-center">
          <Link to="/" className="mb-3 me-2 mb-md-0 text-muted text-decoration-none lh-1">
            <svg className="bi" width="30" height="24"></svg>
          </Link>
          <span className="mb-3 mb-md-0 text-muted">© 2024 CraveCraze!, Inc</span>
        </div>

        <ul className="nav col-md-4 justify-content-end list-unstyled d-flex">
          <li className="nav-item">
            {/* <Link to="https://github.com/yourgithubusername" className="nav-link">
              <FontAwesomeIcon icon={faGithub} className="fa-2x" />
            </Link> */}

          </li>
        </ul>
      </footer>
    </div>
  );
}

export default Footer;
