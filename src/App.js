import React, { Component } from 'react';
import {BrowserRouter,Route} from 'react-router-dom';
import Rodape from './componentes/Rodape'
import Inicio from './componentes/Inicio';
import Cabecalho from './componentes/Cabecalho';
import Servicos from './componentes/Servicos';
import Portifolio from './componentes/Portifolio';
import Precos from './componentes/Precos';
import Contato from './componentes/Contato';
import Admin from './admin/Admin'
class App extends Component {
  render() {
    return (
      <BrowserRouter>
      <div className="App">
       <Cabecalho></Cabecalho>
       <Route exact path="/"  component={Inicio}/>
       <Route path='/servicos'  component={Servicos}/>
       <Route path='/portifolio'  component={Portifolio}/>
       <Route path='/precos' component={Precos}/>
       <Route path='/contato' component={Contato}/> 
       <Route path='/admin' component={Admin}/> 
       <Rodape/>
      </div>
      </BrowserRouter>
    );
  }
}

export default App;
