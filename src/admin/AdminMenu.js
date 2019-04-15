import React from 'react';
import {Link} from 'react-router-dom';
const AdminMenu =props=>{
    return (
        <div>
    <h1>Menu Administrativo</h1>
    <div className="list-group">
  <Link to="#" className="list-group-item list-group-item-action active">
    Selecione Uma Opçao
  </Link>
  <Link to="#" className="list-group-item list-group-item-action">Portifolio</Link>
  <Link to="#" className="list-group-item list-group-item-action">Morbi leo risus</Link>
  <Link to="#" className="list-group-item list-group-item-action">Porta ac consectetur ac</Link>
  <Link to="#" className="list-group-item list-group-item-action disabled" tabindex="-1" aria-disabled="true">Vestibulum at eros</Link>
</div>
    </div>
    );
}
export default AdminMenu;