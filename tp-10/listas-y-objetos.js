function ordenarapellido(listaDePersonas){
    listaDePersonas=[
            {
                "apellido": "Perez",
                "nombre": "Juan",
                "edad": 20,
                "documento": 12345
            },
            {
                "apellido": "Lopez",
                "nombre": "Luis",
                "edad": 20,
                "documento": 23456
            },
            {
                "apellido": "Zapata",
                "nombre": "Pablo",
                "edad": 10,
                "documento": 34567
            },
            {
                "apellido": "Acuña",
                "nombre": "Ana",
                "edad": 30,
                "documento": 45678
            },
        ];
    let resultado= listaDePersonas.sort((a,b)=>{return a.apellido.localeCompare(b.apellido)})
    return resultado
}




function soloNombres(listaDePersonas) {
    listaDePersonas=[
        {
            "apellido": "Perez",
            "nombre": "Juan",
            "edad": 20,
            "documento": 12345
        },
        {
            "apellido": "Lopez",
            "nombre": "Luis",
            "edad": 20,
            "documento": 23456
        },
        {
            "apellido": "Zapata",
            "nombre": "Pablo",
            "edad": 10,
            "documento": 34567
        },
        {
            "apellido": "Acuña",
            "nombre": "Ana",
            "edad": 30,
            "documento": 45678
        },
    ];
    let listaSoloNombres=[];
    let pasaje;
    for(i=0;i<listaDePersonas.length;i++){
        pasaje=listaDePersonas[i].nombre;
        listaSoloNombres[i]=pasaje;
    }
    return listaSoloNombres;
}


function promedioEdades(listaDePersonas) {
    listaDePersonas=[
        {
            "apellido": "Perez",
            "nombre": "Juan",
            "edad": 20,
            "documento": 12345
        },
        {
            "apellido": "Lopez",
            "nombre": "Luis",
            "edad": 20,
            "documento": 23456
        },
        {
            "apellido": "Zapata",
            "nombre": "Pablo",
            "edad": 10,
            "documento": 34567
        },
        {
            "apellido": "Acuña",
            "nombre": "Ana",
            "edad": 30,
            "documento": 45678
        },
    ];
    let acum=0;
    for(i=0;i<listaDePersonas.length;i++){
        acum=acum+listaDePersonas[i].edad;
    }
    promedio=acum/i
    return promedio;
}

function soloMayoresDeEdad(listaDePersonas) {
    listaDePersonas=[
        {
            "apellido": "Perez",
            "nombre": "Juan",
            "edad": 20,
            "documento": 12345
        },
        {
            "apellido": "Lopez",
            "nombre": "Luis",
            "edad": 20,
            "documento": 23456
        },
        {
            "apellido": "Zapata",
            "nombre": "Pablo",
            "edad": 10,
            "documento": 34567
        },
        {
            "apellido": "Acuña",
            "nombre": "Ana",
            "edad": 30,
            "documento": 45678
        },
    ];
    let listaFiltrada = listaDePersonas.filter((listaDePersonas) => {
        return listaDePersonas.edad > 18;
    })
        return listaFiltrada;
    }

    function laPersonaMayor(listaDePersonas) {
        listaDePersonas=[
            {
                "apellido": "Perez",
                "nombre": "Juan",
                "edad": 20,
                "documento": 12345
            },
            {
                "apellido": "Lopez",
                "nombre": "Luis",
                "edad": 20,
                "documento": 23456
            },
            {
                "apellido": "Zapata",
                "nombre": "Pablo",
                "edad": 10,
                "documento": 34567
            },
            {
                "apellido": "Acuña",
                "nombre": "Ana",
                "edad": 30,
                "documento": 45678,
            },
        ];
        mayor= {
                "apellido": "Perez",
                "nombre": "Juan",
                "edad": 20,
                "documento": 12345
        }
    for(i=0;i<listaDePersonas.length;i++){
        if(mayor.edad<listaDePersonas[i].edad){
            mayor=listaDePersonas[i];
        }
    }
    return mayor;
    }
