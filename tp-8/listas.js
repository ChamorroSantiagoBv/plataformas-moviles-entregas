function invertirLista (listaNumeros){
    let listareves = [];
    let hola;
    for(i=0;i<listaNumeros.length;i++){
        hola = listaNumeros[i];
        listareves.unshift(hola); 
    }
    return listareves;
    }
    
    function calcularPromedio(listaNumeros) {
        let acum=0;
        for(i=0;i<listaNumeros.length;i++){
            acum = acum+listaNumeros[i];
        }
        prom=acum/listaNumeros.length;
        return prom     
    }
    
    function crearListaDeNumeros(inicio,final) {
        ListaNumeros = [];
        let ñ = inicio;
        let listaNumeros = []
        for(i=inicio;i<=final;i++){
            listaNumeros.push(ñ);
            ñ++;     
        }
        return listaNumeros;    
    }
    
    function ordenarDeMayorAMenor(listaDeNumeros) {
        listaDeNumeros.sort((a , b ) => { return b - a });
        return listaDeNumeros;
    }
    
    function encontrarNumeroMayor(listaDeNumeros) {
        let NumMayor = 0;
        for(i=0;i<listaDeNumeros.length;i++){
            if(NumMayor<listaDeNumeros[i]){
                NumMayor= listaDeNumeros[i];
            }
        }
        return NumMayor;
    }
    
    function ordenarPalabrasPorLongitud(listaDePalabras) {
        listaDePalabras.sort((a,b)=>{
            if(a.length>b.length) {
                return -1
            } else{
                return 1
            }
        });
        return listaDePalabras
    } 
    
    
    function encontrarPalabraMasCorta(listaDeNumeros) {
        let LetraCorta = 'aasdjihajhjadnkladnm';
        for(i=0;i<listaDeNumeros.length;i++){
            if(LetraCorta.length > listaDeNumeros[i].length){
                LetraCorta = listaDeNumeros[i];
            }
        }
        return LetraCorta;
    }
    
    
    function filtrarsolopositivo(listaDeNumeros) {
        let listafiltrada = listaDeNumeros.filter((elementoActual)=>{
            return elementoActual>0;
        })
        return listafiltrada
        }
    
    function contarAprobados(listadenotas){
        let aprobados=0;
        for(i=0;i<listadenotas.length;i++){
            if(listadenotas[i]>=7){
                aprobados++;
            }
        }
        return aprobados;   
    }
    
    
    function filtrarsootruthy(listaDevalores) {
        let listafiltrada = listaDevalores.filter((elementoActual)=>{
            return elementoActual==true;
        })
        return listafiltrada
        }