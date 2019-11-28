


export default class Lista{
    constructor(){
        this._primerNodo = null
        this._ultimoNodo = null
    }

    agregarNodo(nodo){
        if (this._primerNodo == null) {
            this._primerNodo = objArticulo;
            this._ultimoNodo = objArticulo;

        } else {
            this._ultimoNodo.sig = nodo
            nodo.anterior = this._ultimoNodo
            this._ultimoNodo = nodo

        }
    }

    eliminarNodo(valor){
        let nodoEliminar = this._buscarArticulo(valor);
        if (nodoEliminar){
            if(valor == this._primerNodo.valor){
                if(this._primerNodo.sig ==null)
                {
                    this._primerNodo = this._ultimoNodo = null;
                    // console.log(this._ultimoNodo);
                    // console.log(this._primerNodo);
                }
                else
                {
                    this._primerNodo = nodoEliminar.sig
                    this._primerNodo.ant = null
                }
            
            }else if(valor == this._ultimoNodo.valor ){
                
                this._ultimoNodo = nodoEliminar.ant
                this._ultimoNodo.sig = null

            }else{

                //console.log("SI ENTRO")
                let nodoTemporal = nodoEliminar.ant;
        
                nodoEliminar.sig.ant = nodoTemporal
                nodoTemporal.sig = nodoEliminar.sig;
        
                console.log(this._primerArticulo);
            }
        }
    }
}