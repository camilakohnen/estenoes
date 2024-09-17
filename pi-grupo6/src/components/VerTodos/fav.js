import React, {Component} from "react";
import { Link } from "react-router-dom";
import "./Peliculas.css";
const APIKEY = '73bbcaff8fd928767c5142a00f422fa2'


class Fav extends Component{
    constructor(props){
        super(props)
        this.state = {
            verMas : false,
            peliculas:[],
            MasMenos : false,
            esFavorito: true, 
        }
    }
    
    componentDidMount(){
        let storage = localStorage.getItem('pelisFavs')
        if(storage !== null){
            let arrParseado = JSON.parse(storage) 
            arrParseado.map((id) =>
                fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=${APIKEY}`)
                .then((resp) => resp.json())
                .then((data) => {
                    console.log('data favs',data);
                    this.setState({
                        peliculas: this.state.peliculas.concat(data),
                    })
                })
                .catch((err) => console.log(err)) ) 
        }
    }

    sacarDeStorage(id){
        let storage = localStorage.getItem('pelisFavs')
        if(storage !== null ){
            let storageParseado = JSON.parse(storage) 
            let filtrado = storageParseado.filter( idFav => idFav !== id)
            let storageStringificado = JSON.stringify(filtrado) 
            localStorage.setItem('pelisFavs', storageStringificado) 
            this.setState({
                esFavorito : false 
            })
        }
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
            <h2>Favoritos</h2> 
            <section className="card-container">            
                {
                    this.state.peliculas.map(e => 
                        
                           <div className="character-card">
                                <img src= {`https://image.tmdb.org/t/p/w342/${e.poster_path}`} alt="" />
                                <Link to={`/detalle/id/${e.id}`}>
                                    <h2>{e.title}</h2>
                                </Link>               
                                <section className='extra'>
                                    <p> Adultos: {e.adult ? "atp" : "+18"}</p>
                                </section>  
                            
                                   
                                        <button onClick={() => {this.sacarDeStorage(e.id)}}> 
                                            Sacar de favs 
                                        </button>
                                    
                                             
                                <p>{e.release_date}</p>
                                {
                                        this.state.verMas === true ? <p>{e.overview}</p> : null 
                                }
                                <button onClick={ () => this.verMasVerMenos()} className='more'> Ver mas</button>
                            </div> 
                        
                        
                    )
                }
            </section>  
            </>
        )
    }
}

export default Fav;