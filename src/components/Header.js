import React, {Component} from 'react'
import '../assets/css/prueba.css'
import imagen1 from '../assets/image/logo.svg'
import { Link } from 'react-router-dom'

class Header extends Component{

    render(){
        return(
            <div>
                <header className="header">
                    
                    <nav className="navegacion">
                    
                        <ul className="listaOL">
                        <img src= { imagen1 } className="imagen" alt="Logo" />
                            <li className="listaOL__li">
                                <Link className="listaOL__li-a" to="/ruta-prueba">Inicio</Link>
                            </li>
                            <li className="listaOL__li">
                                <Link className="listaOL__li-a" to="/mi-componente">Blog</Link>
                            </li>
                            <li className="listaOL__li">
                                <a className="listaOL__li-a" href="#">Formulario</a>
                            </li>
                            <li className="listaOL__li">
                                <a className="listaOL__li-a" href="#">Página 1</a>
                            </li>
                            <li className="listaOL__li">
                                <a className="listaOL__li-a" href="#">Página 2</a>
                            </li>
                        </ul>
                    </nav>
                </header>
                
           </div>
        );
    }

}
export default Header