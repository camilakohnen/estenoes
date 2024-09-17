import React,  {Component}  from "react";
const APIKEY = '73bbcaff8fd928767c5142a00f422fa2'

class Details extends Component {
    constructor(props){
        super(props)
        this.state = {
            verMas : false,
            peliculas:[]
        }
    }

    componentDidMount(){
            fetch(`https://api.themoviedb.org/3/movie/${this.props.id}?api_key=${APIKEY}`)
            .then((resp) => resp.json())
            .then((data) => {
                console.log('data favs',data);
                this.setState({
                    peliculas: data,
                })
            })
            .catch((err) => console.log(err)) 
        }
    

   /* filtrarPeliculas(nombrePelicula){
      const peliculasFiltradas = this.state.peliculas.filter(nombrePelicula.id)
      this.setState({
          peliculas: peliculasFiltradas
      })
    }*/

    verMasVerMenos(){
        if(this.state.verMas === true){
            this.setState({
                verMas: false 
            })
        } else {
            this.setState({
                verMas: true, 
            })
        }
    }

    render(){
        
        return(console.log(this.peliculas))
       /* return(
            <div className="character-card">
                <img src={this.filtrarPeliculas.data.poster_path} alt="" />
                <h2>{this.filtrarPeliculas.data.title}</h2>
                <section className='extra'>
                    <p> Adultos: {this.filtrarPeliculas.data.adult ? "atp" : "+18"}</p>
                    <p>{this.filtrarPeliculas.data.release_date}</p>
                    <p>{this.filtrarPeliculas.data.overview}</p>
                </section>               
                
                <button onClick={ () => this.verMasVerMenos()} className='more'> Ver mas</button>
            </div> 
        ) */
    }
}

export default Details
