import React from "react";
import ClaSinBoton from "../components/VerTodos/ClaSinBoton";
import NovSinBoton from "../components/VerTodos/novedades";
import BuscadorH from "../components/Buscador/buscadorH";
import { Link } from "react-router-dom/cjs/react-router-dom.min";

function Home(props) {

    return (
        <React.Fragment>
            <h1>Buscar</h1>
            <BuscadorH history={props.history}/>
            <main>
                <Link to={"/novedades"}><h2>Novedades</h2></Link>
                <NovSinBoton/>
                <Link to={"/clasicos"}><h2>Mira los clásicos</h2></Link>    
                <ClaSinBoton/>
            </main>
        </React.Fragment>
    );
    
  }
  
  export default Home;