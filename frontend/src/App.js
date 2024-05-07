/*
CS319 Final Project: Challenge Champs
Authors: Tyler Schaefer and Tyler Vick
5/1/24
*/

import "bootstrap/dist/css/bootstrap.css";
import "../node_modules/jquery/dist/jquery.min.js";
import "../node_modules/bootstrap/dist/js/bootstrap.min.js";
import './App.css';
import { useState, useEffect } from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  useNavigate,
  useParams
} from "react-router-dom";
import default_user from '../src/otherimages/default_user.png';


const App = () => {

    const NavBar = () => {
        const navigate = useNavigate();
        let user = JSON.parse(localStorage.getItem("User"));
        if(!user || user == "null"){
            navigate("/");  
            return ``;
        }
        
        let url = default_user;
        if(user.image != "") url = user.image;

        return (
            <nav className="navbar navbar-dark bg-dark" aria-label="Dark offcanvas navbar">
            <div className="container-fluid">
            <div className="dropdown">
            <a href="#" className="d-flex align-items-center text-white text-decoration-none dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
            <img src={url} alt="" width="32" height="32" className="rounded-circle me-2"/>
            <strong>{user.name} </strong>
            </a>
            <ul className="dropdown-menu dropdown-menu-dark text-small shadow">
            <li><a className="dropdown-item" href="/profile">Profile</a></li>
            <li><button className="dropdown-item" onClick={() => {
                localStorage.clear();
                navigate("/");
            }}>Sign out</button></li>
            </ul>
            </div>

            <button className="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbarDark" aria-controls="offcanvasNavbarDark" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
            </button>
            <div className="offcanvas offcanvas-end text-bg-dark" tabIndex="-1" id="offcanvasNavbarDark" aria-labelledby="offcanvasNavbarDarkLabel">
            <div className="offcanvas-header">
            <h5 className="offcanvas-title" id="offcanvasNavbarDarkLabel">Challenge Champs</h5>
            <button type="button" className="btn-close btn-close-white" data-bs-dismiss="offcanvas" aria-label="Close"></button>
            </div>
            <div className="offcanvas-body">
            <ul className="navbar-nav justify-content-end flex-grow-1 pe-3">
            <li className="nav-item">
            <a className="nav-link" href="/browse">Browse</a>
            </li>
            <li className="nav-item">
            <a className="nav-link" href="/challenge/2">Example Challenge</a>
            </li>
            <li className="nav-item">
            <a className="nav-link active" aria-current="page" href="/info">About Us</a>
            </li>
            </ul>
            </div>
            </div>
            </div>
            </nav>
        )};

  const footer = (
    <footer className="container py-5">
      <div className="row">
        <div className="col-12 col-md">
          <small className="d-block mb-3 text-body-secondary">
            &copy; 2024 Tyler Vick and Tyler Schaefer
          </small>
        </div>
      </div>
    </footer>
  );

    const SignUp = () => {
        const navigate = useNavigate();

        return (
            <div className="text-center d-flex align-items-center justify-content-center">
            <div className="box w-25 h-50">
            <form className="form-signin">
            <h1 className="h3 mb-3 font-weight-normal">Challenge Champs Sign-up</h1>
            <input type="text" id="inputName" className="form-control" placeholder="Username" required="" autoFocus=""/>
            <br/>
            <input type="email" id="inputEmail" className="form-control" placeholder="Email address" required="" autoFocus=""/>
            <br/>
            <input type="password" id="inputPassword" className="form-control" placeholder="Password" required="" autoFocus=""/>
            <br/>
            <input type="password" id="confirmPassword" className="form-control" placeholder="Confirm Password" required=""/>
            <br/>
            <button className="btn btn-lg btn-primary btn-block" type="submit">Sign up</button>
            <hr/>
            <button className="btn btn-lg btn-primary btn-block active" onClick={() => navigate("/")} >To Sign-in</button>
            </form>
            </div>
            </div> 
        )
    };

    
    const SignIn = () => {
        const navigate = useNavigate();
        
        const attemptSignIn = async (email, password) => {
            fetch(`http://127.0.0.1:4000/login/${email}/${password}`)
                .then((response) => response.json())
                .then((data) => {
                    console.log(data);
                    if(data.id === "failure"){
                        //invalid login
                    } else {
                        localStorage.setItem("User", JSON.stringify(data));
                        navigate("/browse");
                    }
            });
        };

        return (
            <div className="text-center d-flex align-items-center justify-content-center">
            <div className="box w-25 h-50">
            <div className="form-signin">
            <h1 className="h3 mb-3 font-weight-normal">Challenge Champs Sign-in</h1>
            <input type="email" id="inputEmail" className="form-control" placeholder="Email address" required="" autoFocus=""/>
            <br/>
            <input type="password" id="inputPassword" className="form-control" placeholder="Password" required=""/>
            <br/>
            <div>
            <button className="btn btn-lg btn-primary btn-block" 
                onClick={ () => {
                    let email = document.getElementById('inputEmail').value;
                    let password = document.getElementById('inputPassword').value;
                    if(email && password){
                        attemptSignIn(email, password);
                    } else {
                        //notify that input is required
                    }
                }
                } >
                Sign in</button>
            </div>
            <hr/>
            <button className="btn btn-lg btn-primary btn-block active" onClick={() => navigate("/signup")} >To Sign-up</button>
            </div>
            </div>
            </div>
        )
    };
  
  const Info = (
    <section>
        <div id="navBar">{< NavBar />}</div>
      <div
        className="position-relative overflow-hidden p-3 p-md-5 m-md-3 text-center bg-body-tertiary"
        style={{margin:'auto'}}
      >
        <div className=" p-lg-2 mx-auto my-5">
          <h1 className="display-3 fw-bold m-md-3">About Us</h1>
          <hr />
          <h2 className="fw-normal text-muted p-5 mb-3">
            CS 319: Construction of User Interfaces
          </h2>
          <h5 className="fw-bold text-muted mb-3">Professor: Dr. Ali Jannesari</h5>
          <h5 className="fw-bold text-muted mb-3">March 03, 2024</h5>
          <h3 className="text-muted p-2 m-md-3">Team 30:</h3>
          <h4 className="text-muted">Tyler Vick - tvick@iastate.edu</h4>

          <h4 className="text-muted ">Tyler Schaefer - tschaef@iastate.edu</h4>
          <br />
          <p>
            Challenge Champs plans to be a platform where users can post and
            compete in fitness challenges. We plan to help make fitness be fun
            by allowing users to find new ways to stay healthy while engaging
            with others. We are currently in the process of designing the site,
            and the webpages and content are stand-ins for design purposes.
          </p>
        </div>

        <div className="product-device shadow-sm d-none d-md-block"></div>
        <div className="product-device product-device-2 shadow-sm d-none d-md-block"></div>
      </div>
        <div id="footer">{footer}</div>
    </section>
  );

  const Browse = () => {
    
      return (
    <div>
        <div id="navBar">{< NavBar />}</div>
          <div>
      <div
        className="position-relative overflow-hidden p-3 p-md-3 m-md-3 text-center bg-body-tertiary"
        style={{margin:'auto'}}
      >
        <div className="col-md-6 p-lg-2 mx-auto my-5">
          <h1 className="display-3 fw-bold">Available Challenges</h1>
          <h3 className="fw-normal text-muted mb-3">Find your next adventure!</h3>
          <hr />
        </div>
      </div>

      <div
        id="container"
        className="row row-cols-1 row-cols-sm-1 row-cols-md-1 row-cols-lg-2 g-3 bg-body-tertiary justify-content-center"
      ></div>
          </div>
        <div id="footer">{footer}</div>
    </div>)
  };

  const Challenge = () => {
    const {cid} = useParams();
    
    return (<div>
        <div id="navBar">{< NavBar />}</div>
      <h1 className="text-center mb-4"> {cid} Grace Challenge</h1>
      <p className="lead text-center">
        30 Clean and Jerk reps as fast as possible.
      </p>
      <div id="challenge-content"></div>
        <div id="footer">{footer}</div>
    </div>)
  };

  const Profile = (
    <div className="bg-body-tertiary">
        <div id="navBar">{< NavBar />}</div>
      <br />
      <br />
      <div
        id="container1"
        className="bg-body-tertiary justify-content-center"
      ></div>

      <div className="text-center bg-body-tertiary">
        <h2 className="display-5">Recent Challenges</h2>
      </div>

      <div
        id="container2"
        className="row row-cols-1 row-cols-sm-1 row-cols-md-1 row-cols-lg-2 g-3 bg-body-tertiary justify-content-center"
      ></div>

      <hr />
      <div className="text-center bg-body-tertiary">
        <h2 className="display-5">Achievements</h2>
      </div>

      <div
        id="container3"
        className="row row-cols-1 row-cols-sm-1 row-cols-md-1 row-cols-lg-2 g-3 bg-body-tertiary justify-content-center"
      ></div>
        <div id="footer">{footer}</div>
    </div>
  );

  return (
    <div>
      <Router>
        <Routes>
          <Route path="/info" element={Info} />
          <Route path="/browse" element={<Browse />} />
          <Route path="/profile" element={Profile} />
          <Route path="/" element={< SignIn />} />
          <Route path="/signup" element={< SignUp/>} />
          <Route path="/challenge/:cid" element={< Challenge />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
