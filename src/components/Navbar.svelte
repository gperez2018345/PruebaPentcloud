<script>
  import App from "../App.svelte";
  import { Router, Link, Route } from "svelte-routing";
</script>


<header id="header" class="header fixed-top">
    <div class="container-fluid container-xl d-flex align-items-center justify-content-between">

      <Link to="/"> <a href="#Nada" class="logo d-flex align-items-center">
        <img src="assets/img/logo.png" alt="">
        <span>LOGO</span>
      </a> </Link>

      <nav id="navbar" class="navbar">
        <ul>
          <Link to="/"> <li><a class="nav-link scrollto">Home</a></li> </Link>
          <Link to="/info"> <li><a class="nav-link scrollto" href="Info">About</a></li> </Link>
          <Link to="/services"> <li><a class="nav-link scrollto" href="#services">Services</a></li> </Link>
          <Link to="/contact"> <li><a class="nav-link scrollto" href="#portfolio">Contact Us</a></li> </Link>
          <li><a class="nav-link scrollto" href="#services"> </a></li>
          <Link to="/articulo"> <li class="dropdown btn btn-outline-dark"><a href="#"><span>Articulos</span> <i class=""></i></a> 
            <ul>
              <li><a href="#">Listado de Artículos</a></li>
              <li><a href="#">Por Autor</a></li>
            </ul>
          </li> </Link>
        </ul>
        <i class="bi bi-list mobile-nav-toggle"></i>
      </nav>

    </div>
  </header>

<style>

:root {
  scroll-behavior: smooth;
}

body {
  font-family: "Open Sans", sans-serif;
  color: #444444;
}

a {
  color: #4154f1;
  text-decoration: none;
}

a:hover {
  color: #717ff5;
  text-decoration: none;
}

h1,
h2,
h3,
h4,
h5,
h6 {
  font-family: "Nunito", sans-serif;
}

/* Sections */
section {
  padding: 60px 0;
  overflow: hidden;
}

.section-header {
  text-align: center;
  padding-bottom: 40px;
}

.section-header h2 {
  font-size: 13px;
  letter-spacing: 1px;
  font-weight: 700;
  margin: 0;
  color: #4154f1;
  text-transform: uppercase;
}

.section-header p {
  margin: 10px 0 0 0;
  padding: 0;
  font-size: 38px;
  line-height: 42px;
  font-weight: 700;
  color: #012970;
}

@media (max-width: 768px) {
  .section-header p {
    font-size: 28px;
    line-height: 32px;
  }
}

@media screen and (max-width: 768px) {
  [data-aos-delay] {
    transition-delay: 0 !important;
  }
}

.header {
  transition: all 0.5s;
  z-index: 997;
  padding: 20px 0;
}

.header.header-scrolled {
  background: #fff;
  padding: 15px 0;
  box-shadow: 0px 2px 20px rgba(1, 41, 112, 0.1);
}

.header .logo {
  line-height: 0;
}

.header .logo img {
  max-height: 40px;
  margin-right: 6px;
}

.header .logo span {
  font-size: 30px;
  font-weight: 700;
  letter-spacing: 1px;
  color: white;
  font-family: "Nunito", sans-serif;
  margin-top: 3px;
}

/* Desktop Navigation */
.navbar {
  padding: 0;
}

.navbar ul {
  margin: 0;
  padding: 0;
  display: flex;
  list-style: none;
  align-items: center;
}

.navbar li {
  position: relative;
}

.navbar a,
.navbar a:focus {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 10px 0 10px 30px;
  font-family: "Nunito", sans-serif;
  font-size: 16px;
  font-weight: 700;
  color: white;
  white-space: nowrap;
  transition: 0.3s;
}

.navbar a i,
.navbar a:focus i {
  font-size: 12px;
  line-height: 0;
  margin-left: 5px;
}

.navbar a:hover,
.navbar .active,
.navbar .active:focus,
.navbar li:hover>a {
  color: purple;
}

.navbar .getstarted,
.navbar .getstarted:focus {
  background: #4154f1;
  padding: 8px 20px;
  margin-left: 30px;
  border-radius: 4px;
  color: #fff;
}

.navbar .getstarted:hover,
.navbar .getstarted:focus:hover {
  color: #fff;
  background: #5969f3;
}

.dropdown{
    border-radius: 40px;
    padding: 0%;
    padding-right: 20%;
}

.navbar .dropdown ul {
  display: block;
  position: absolute;
  left: 14px;
  top: calc(100% + 30px);
  margin: 0;
  padding: 10px 0;
  z-index: 99;
  opacity: 0;
  visibility: hidden;
  background: #212529;
  transition: 0.3s;
}

.navbar .dropdown ul li {
  min-width: 200px;
}

.navbar .dropdown ul a {
  padding: 10px 20px;
  font-size: 15px;
  text-transform: none;
  font-weight: 600;
}

.navbar .dropdown ul a i {
  font-size: 12px;
}

.navbar .dropdown ul a:hover,
.navbar .dropdown ul .active:hover,
.navbar .dropdown ul li:hover>a {
  color: purple;
}

.navbar .dropdown:hover>ul {
  opacity: 1;
  top: 100%;
  visibility: visible;
}

.navbar .dropdown .dropdown ul {
  top: 0;
  left: calc(100% - 30px);
  visibility: hidden;
}

.navbar .dropdown .dropdown:hover>ul {
  opacity: 1;
  top: 0;
  left: 100%;
  visibility: visible;
}

@media (max-width: 1366px) {
  .navbar .dropdown .dropdown ul {
    left: -90%;
  }

  .navbar .dropdown .dropdown:hover>ul {
    left: -100%;
  }
}
</style>

