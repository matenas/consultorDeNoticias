import React, {Component, Fragment} from 'react';
import Header from './components/Header';
import ListaNoticias from './components/ListaNoticias';
import Formulario from './components/Formulario';

class App extends Component {
  state = { 
    noticias: []
   }


  //usualmente es recomendado que el llamado a una api se haga en el metodo del ciclo de vida llamado componentDidMount()
  // que se ejecuta cuando el documento ya se cargo
  componentDidMount() {
   this.consultarNoticias(); 
  }
 
  consultarNoticias = async (categoria = 'general') => {
    const url = `https://newsapi.org/v2/top-headlines?country=mx&category=${categoria}&apiKey=83f9ec52f8ef4c4e90c3cf005f99511a`;
  
    const respuesta = await fetch(url);
    const noticias = await respuesta.json();

    console.log(noticias.articles);
    this.setState({
      noticias:noticias.articles 
    })
  }

  render() { 
    return (
      <Fragment>
        <Header
          titulo="Buscador de Noticias"
        ></Header>
        <div className="container white contenedor-noticias">
          <Formulario
            consultarNoticias = {this.consultarNoticias}
          ></Formulario>
          <ListaNoticias
            noticias = {this.state.noticias}
          ></ListaNoticias>
        </div>
      </Fragment>
     );
  }
}
export default App;
