import Nodo from "./Nodo";


class Main{
    constructor(){
        this._lista = new this._lista()

        document.getElementById('calcular').addEventListener('click', () => {
            let  expre = document.getElementById('expresion').value;
            console.log(expre.length)
            for(let i = 0; expre.length > i ; i++){
                
                let valor = expre.charAt(i);
                let nuevoNodo = new Nodo(valor)
                this._lista.agregarNodo(nuevoNodo)

            }
        });
    }
}

let m = new Main();