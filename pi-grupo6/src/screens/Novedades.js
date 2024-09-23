import React, { Component } from 'react';
import Novedades from '../components/Ver/novedades';
import Buscador from '../components/Buscador/buscador'
const APIKEY = '73bbcaff8fd928767c5142a00f422fa2';

class NovedadesConBoton extends Component {
    constructor(props){
        super(props)
        this.state = {
            verMas : false,
            peliculas:[],
            peliculasb: [],
            paginaACargar: 2,
            
        }
    }

    componentDidMount() {
        fetch(`https://api.themoviedb.org/3/movie/now_playing?api_key=${APIKEY}`)
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
        if(this.state.MasMenos === true){
            this.setState({
                MasMenos: false 
            })
        } else {
            this.setState({
                MasMenos: true, 
            })
        }
    }

    render(){
        return (
            <>
                <h2>Novedades</h2> 
                <Buscador filtrarPeliculas={(nombre) => this.filtrarPeliculas(nombre)}/>
                <section className="card-container">
                    {this.state.peliculas.slice(0,3).map((elm)=> <Novedades data={elm}/>)}
                    {this.state.MasMenos === true ? <>{this.state.peliculas.slice(3, this.state.peliculas.length).map((elm)=> <Novedades data={elm}/>)}</> : null }
                </section>
                <button onClick={ () => this.MasMenosPeliculas()} className='more'> Mas Peliculas</button>
            </>
        )
    }

}

export default NovedadesConBoton;
