import React, {Component} from 'react';
import Buscador from '../Buscador/buscador';
import Novedades from '../VerTodos/novedades';
const APIKEY = '73bbcaff8fd928767c5142a00f422fa2'

class Busqueda extends Component {
    constructor(props){
        super(props)
        this.state = {
            peliculas:[]
        }
    }

    componentDidMount(){
        fetch(`https://api.themoviedb.org/3/movie/now_playing?api_key=${APIKEY}`)
        .then((resp) => resp.json())
        .then((data) => {
            this.setState({
                peliculas: data.results
            })
        })
        .catch((err) => console.log(err))
    }

    filtrarPeliculas(nombrePelicula){
        const peliculasFiltradas = this.state.peliculas.filter(
            (elm) => elm.title.toLowerCase().includes(nombrePelicula.toLowerCase())
        )
        this.setState({
            peliculas: peliculasFiltradas
        })
    }


  render () { 
        return (
        <div>
            <h1>Buscador</h1>
            <Buscador filtrarPeliculas={(nombre) => this.filtrarPeliculas(nombre)}/>
            {
                this.state.peliculas.length > 0 
                ? 
                this.state.peliculas.map((elm) => <p>{elm.title}</p>)
                : 
                <h1>'Cargando..'</h1>
            } 
        </div>
    )
  }
}

export default Busqueda