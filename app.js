const argv = require("yargs").options({
    direccion: {
        alias: 'd',
        desc: "Direccion de la ciudad para obtener el clima",
        demand: true
    }
}).help().argv

const { getLugarLatLng } = require("./lugar/lugar");
const { getClima } = require("./clima/clima");




const getInfo = async(direccion) => {

    let coors = await getLugarLatLng(direccion);
    let temp = await getClima(coors.lat, coors.lng);

    return `El clima en ${ direccion } es de ${ temp }`

}


getInfo(argv.direccion).then(ret => {
    console.log(ret);
}).catch(err => console.log("ERROR: ", err))


//729eb03268c9a0e4276b2e53e7c3d801