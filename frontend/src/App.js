/*
CS319 Final Project: Challenge Champs
Authors: Tyler Schaefer and Tyler Vick
5/1/24
*/

import "bootstrap/dist/css/bootstrap.css";
import "../node_modules/jquery/dist/jquery.min.js";
import "../node_modules/bootstrap/dist/js/bootstrap.min.js";
import './App.css';
import default_user from '../src/otherimages/default_user.png';

const App = () => {
  const navBar = (
    <nav class="navbar navbar-dark bg-dark" aria-label="Dark offcanvas navbar">
      <div class="container-fluid">
        <div class="dropdown">
          <a href="#" class="d-flex align-items-center text-white text-decoration-none dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
            <img src={default_user} alt="" width="32" height="32" class="rounded-circle me-2"/>
            <strong>Username</strong>
          </a>
          <ul class="dropdown-menu dropdown-menu-dark text-small shadow">
            <li><a class="dropdown-item" href="./profile.html">Profile</a></li>
          </ul>
        </div>

        <button class="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbarDark" aria-controls="offcanvasNavbarDark" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="offcanvas offcanvas-end text-bg-dark" tabindex="-1" id="offcanvasNavbarDark" aria-labelledby="offcanvasNavbarDarkLabel">
          <div class="offcanvas-header">
            <h5 class="offcanvas-title" id="offcanvasNavbarDarkLabel">Challenge Champs</h5>
            <button type="button" class="btn-close btn-close-white" data-bs-dismiss="offcanvas" aria-label="Close"></button>
          </div>
          <div class="offcanvas-body">
            <ul class="navbar-nav justify-content-end flex-grow-1 pe-3">
              <li class="nav-item">
                <a class="nav-link" href="./index.html">Browse</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="./challenge.html">Example Challenge</a>
              </li>
              <li class="nav-item">
                <a class="nav-link active" aria-current="page" href="./about.html">About Us</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
  
  
  return (
    <div>
      <div id="navBar">{navBar}</div>
    </div>
  );
}

export default App;
