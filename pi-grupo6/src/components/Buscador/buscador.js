import React, {Component} from 'react';

class Buscador extends Component{
    constructor(props){
        super(props)
        this.state = {
            valorInput1: ''
        }
    }

    evitarsubmit(event){
        console.log(event);
        event.preventDefault()
    }

    contorlarInpus(event){
        this.setState({valorInput1: event.target.value}, () => 
            this.props.filtrarPeliculas(this.state.valorInput1)
        )
    }

    render(){
        return(
            <form onSubmit={() => this.evitarsubmit()}>
                <input 
                    onChange={(event)=> this.contorlarInpus(event)} 
                    value={this.state.valorInput1}
                />
                <button type='submit'>Enviar</button>
           </form>
        )
    }
}

export default Buscador;