
import React, { Component } from 'react';
import ClaSinBoton from '../components/VerTodos/ClaSinBoton';

class ClasicosConBoton extends Component {
    constructor(props) {
        super(props);
        this.state = {
            MasMenos: false,
        };
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

    render() {
        return (
            <>
                <h2>Clasicos</h2>
                <ClaSinBoton />
                <section className="card-container">
                    {this.state.peliculas.slice(0,3).map((elm)=> <ClaSinBoton data={elm}/>)}
                    {this.state.MasMenos === true ? <>{this.state.peliculas.slice(3, this.state.peliculas.length).map((elm)=> <ClaSinBoton data={elm}/>)}</> : null }
                </section>
                {/* Aquí podrías añadir más lógica para mostrar más películas si es necesario */}
            </>
        );
    }
}

export default ClasicosConBoton;
