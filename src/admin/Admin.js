import React, {Component} from 'react';
import AdminMenu from './AdminMenu';
import AdminPortifolio from './AdminPortifolio';
import {Route} from 'react-router-dom';
class Admin extends Component{
    constructor(props){
        super(props);
    }
    render(){
        return (<div>
                    <h2> Painel Administrativo</h2>
                    <Route path={'/'} component={AdminMenu} />
                    <Route path={`${this.props.match.url}/portifolio`} component={AdminPortifolio}/>
                </div>
                );
    }
}
export default Admin