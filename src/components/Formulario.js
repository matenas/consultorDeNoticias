import React,{ Component } from 'react';

class Formulario extends Component {
    state = { 
        categoria : 'general',
        pais : 'mx'
     }

    handleChange = (e) => {

        this.setState({
            categoria: e.target.value
        },() => {
            //lo paso como un callback para que la funcion se ejecute cada vez que se cambie el state
            //pasarlo a la pagina principal para que la funcion de consultar noticias agarre la categoria y lo pase a la url
            this.props.consultarNoticias(this.state.pais, this.state.categoria)
        })

    }    
    cambiarPais = (e) => {
        
        this.setState({
            pais: e.target.value
        },() => {
            this.props.consultarNoticias(this.state.pais, this.setState.categoria)
        })
    }

    render() { 
        return ( 
            <div className="buscador row">
                <div className="col s12">
                    <form >
                        <h2>Encuentra Noticias por categoría</h2>
                        <div className="input-field col s12">
                            <select
                                onChange={this.cambiarPais}
                            >
                                <option value="mx">Mexico</option>
                                <option value="br">Brasil</option>
                                <option value="co">Colombia</option>
                                <option value="mx">Mexico</option>
                                <option value="us">USA</option>
                                <option value="jp">Japon</option>
                            </select>
                            <select
                                onChange={this.handleChange}
                            >
                                <option value="general">General</option>
                                <option value="business">Negocios</option>
                                <option value="entertainment">Entretenimiento</option>
                                <option value="health">Salud</option>
                                <option value="science">Ciencia</option>
                                <option value="sports">Deportes</option>
                                <option value="technology">Tecnologia</option>
                            </select>
                        </div>
                    </form>
                </div>
            </div>
         );
    }
}
 
export default Formulario;