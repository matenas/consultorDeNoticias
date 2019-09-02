import React from 'react';

const Noticia = ({noticia}) => {

    const {urlToImage, url, title , description, source} = noticia;

    //condicionalmente cargar la imagen si es que esta disponible, si no no se muestra nada 
    const imagen = (urlToImage) ? 
    <div className="card-image">
        <img src={urlToImage} alt={title} />
        <a  href={url} target="_blank" rel="noopener noreferrer"  className="btn-floating halfway-fab waves-effect waves-light red"><i className="material-icons"></i></a>
        <span className="card-title">{source.name}</span>
    </div>
    :
    <div className="card-image">
        <img src="https://humboldt.org.ni/wp-content/uploads/2018/02/NOTICIA-DEFAULT.jpg" alt={title} />        
        <a  href={url} target="_blank" rel="noopener noreferrer"  className="btn-floating halfway-fab waves-effect waves-light red"><i className="material-icons"></i></a>
        <span className="card-title">{source.name}</span>
    </div>
    ;

    return ( 
        <div className="col s12 m6 l4">
            <div className="card">
                {imagen}
                <div className="card-content">
                    <span className="card-title">{title}</span>
                    <p>{description}</p>
                </div>
            </div>            
        </div>
     );
}
 
export default Noticia;