import React, {Component} from 'react'
import '../assets/css/prueba.css'


class MiComponente extends Component{

     receta = {
        nombre: 'Pizza',
        ingredientes: ['Tomate', 'Queso','Jamon Cocido','Leche','Arroz'],
        calorias: 400
    }

    render(){
     

        return(
            <div className="mi-componente">
                <h1> {'Receta: ' + this.receta.nombre} </h1>
                <h2> {'Calorias: '+ this.receta.calorias} </h2>

                <ol>
                    {
                        this.receta.ingredientes.map((ingredientes, i) => {
                                  return(
                                      <li key={i}>
                                          {ingredientes}
                                      </li>
                                  );
                        })
                    }
                </ol>
                
                
            </div>
            
        );
    }
}

export default MiComponente;