import React from 'react';
import Noticia from './Noticia';

const ListaNoticias = ({noticias}) => {
    return ( 
        <div className="row">

            {noticias.map((noticia, index) => (
                <Noticia
                    key = {index}
                    noticia= {noticia}
                ></Noticia>
            ))}
        </div>
     );
}
 
export default ListaNoticias;