const lugar = require("./lugar/lugar");
const clima = require("./clima/clima");

const argv = require("yargs").options({
    direccion:{
        alias: "d",
        desc: "descripcion de ciudad",
        demand: true
    }
}).argv

let getInfo = async (direccion) => {

    try {
        let coors = await lugar.getLugarLatLng(direccion);
        let temperatura = await clima.getClima(coors.lat, coors.lng);

        return `El clima de ${coors.direccion} es de ${temperatura}`;
    } catch (error) {
        return `No se pudo determinar el clima en ${direccion}`
    }
    
}

getInfo(argv.direccion)
    .then(mensaje => console.log(mensaje))
    .catch(e => console.log(e));
    
    


// lugar.getLugarLatLng(argv.direccion)
//     .then(resp => {
//         console.log(resp);
        
//     })
//     .catch(e=> console.log("error",e));

// clima.getClima(37.4260049, -122.0911355)
//     .then(temp => console.log(temp))
//     .catch(e => console.log(e));
    



