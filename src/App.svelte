<script>
  import Navbar from "./components/Navbar.svelte";
  import Home from "./components/Home.svelte";
  import Info from "./components/Info.svelte";
  import Articulo from "./components/Articulo.svelte";
  import Contacto from "./components/Contacto.svelte";
  import Servicios from "./components/Servicios.svelte";
  import { Router, Link, Route } from "svelte-routing";

</script>



<div>
  
  <Router>
    <Navbar />
    <Route path="/">
        <Home></Home>
    </Route>
    <Route path="/info">
      <Info></Info>
    </Route>
    <Route path="/articulo">
      <Articulo></Articulo>
    </Route>
    <Route path="/services">
      <Servicios></Servicios>
    </Route>
    <Route path="/contact">
      <Contacto></Contacto>
    </Route>
  </Router>
</div>


<style>

	:global(body){
    background-image: url("https://images.alphacoders.com/115/1151012.jpg");
    
	}


  main {
    text-align: center;
    padding: 1em;
    max-width: 240px;
    margin: 0 auto;
  }

  main img{
	width: 30%;
  }

  @media (min-width: 640px) {
    main {
      max-width: none;
    }
  }
</style>
