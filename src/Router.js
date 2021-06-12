import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Peliculas from './components/Peliculas';
import Header from './components/Header';
import MiComponente from './components/MiComponente';

class Router extends Component {
    render() {
        return (

            <BrowserRouter>
                <Header></Header>
                {/* Rutas */}
                <Switch>

                    <Route path="/ruta-prueba" component={Peliculas}></Route>
                    <Route path="/mi-componente" component={MiComponente}></Route>

                </Switch>
            </BrowserRouter>

        );
    }
}

export default Router