import React, {Component} from "react";
import Clasico from "../Ver/clasicos";
import Buscador from "../Buscador/buscador";
import "./Peliculas.css";
const APIKEY = '73bbcaff8fd928767c5142a00f422fa2'


class Clasicos extends Component{
    constructor(props){
        super(props)
        this.state = {
            MasMenos: false,
            peliculas:[],
            peliculasb: [],
            paginaACargar: 2,
        }
    }

    componentDidMount(){
        fetch(`https://api.themoviedb.org/3/movie/upcoming?api_key=${APIKEY}`)
        .then((resp) => resp.json())
        .then((data) => {
            console.log(data);

            this.setState({
                peliculas: data.results,
                peliculasb: data.results,
               
            })
        })
        .catch((err) => console.log(err))
    }

    filtrarPeliculas(nombrePelicula){
        const peliculasFiltradas = this.state.peliculasb.filter(
            (elm) => elm.title.toLowerCase().includes(nombrePelicula.toLowerCase())
        )
        this.setState({
            peliculas: peliculasFiltradas
        })
    }

    MasMenosPeliculas(){
        fetch(`https://api.themoviedb.org/3/movie/upcoming?api_key=${APIKEY}&page=${this.state.paginaACargar}`)
        .then((resp) => resp.json())
        .then((data) => {
            this.setState({
                MasMenos: true,
                peliculas: this.state.peliculas.concat(data.results),
                peliculasb: this.state.peliculas.concat(data.results),
                paginaACargar : this.state.paginaACargar + 1
            })
        })
        .catch((err) => console.log(err))
    }

    render(){
        return (
            <>
                <h2>Clasicos</h2> 
                <Buscador filtrarPeliculas={(nombre) => this.filtrarPeliculas(nombre)}/>
                <section className="card-container">
                    {this.state.peliculas.slice(0,3).map((elm)=> <Clasico data={elm}/>)}
                    {this.state.MasMenos === true ? <>{this.state.peliculas.slice(3, this.state.peliculas.length).map((elm)=> <Clasico data={elm}/>)}</> : null }
                </section>
                <button onClick={ () => this.MasMenosPeliculas()} className='more'> Mas Peliculas</button>
            </>
        )
    }
}

export default Clasicos;