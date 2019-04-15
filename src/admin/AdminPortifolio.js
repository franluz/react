import React, { Component } from 'react';
import config, { storage } from './../Firebaseconfig'
class AdminPortifolio extends Component {
    constructor(props) {
        super(props);
    }
    gravaPortifolio = (e) => {
        console.log(this.titulo.value)
        console.log(this.descricao.value)
        console.log(this.imagem.value)
        const arquivo = this.imagem.files[0];
        const{name,size,type} = arquivo;
        console.log(name)
        console.log(size)
        console.log(type)
        console.log(arquivo);
        // if ()
        const ref = storage.ref(name);
        ref.put(arquivo).then(img =>
            {
                console.log(img.metadata)
            });

        e.preventDefault();
    }
    render() {
        return (<div style={{ padding: '120px' }}>
            <form onSubmit={this.gravaPortifolio}>
                <div className="form-group">
                    <label htmlFor="titulo">Titulo</label>
                    <input type="titulo" className="form-control" id="titulo" aria-describedby="emailHelp"
                        placeholder="Titulo" ref={(ref) => this.titulo = ref } />
                </div>
                <div className="form-group">
                    <label htmlFor="descricao">Descricao</label>
                    <textarea className="form-control" id="descricao" rows="3" ref={(ref) => this.descricao = ref}></textarea>
                </div>
                <div className="form-group">
                    <label htmlFor="imagem">Imagem</label>
                    <input type="file" className="form-control-file" id="imagem" ref={(ref) => this.imagem = ref} />
                </div>
                <button type="submit" className="btn btn-primary">Submit</button>
            </form>
        </div>)
    }
}
export default AdminPortifolio;