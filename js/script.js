import { clave } from "./clave.js";
import{ graficoHeroe} from "./graficoCanvas.js"

const inputIdPersonaje = document.querySelector('#inputPersonaje')
const btnBuscar = document.querySelector('button')
const avatarPer = document.querySelector('.imgPer')
const spanNombre = document.querySelector('#nombre')
const spanConexiones = document.querySelector('#conexiones')
const spanPublicadoPor = document.querySelector('#publicadoPor')
const spanOcupacion = document.querySelector('#ocupacion')
const spanPrimeraAparicion = document.querySelector('#primeraAparicion')
const spanAltura = document.querySelector('#altura')
const spanPeso = document.querySelector('#peso')
const spanAlianzas = document.querySelector('#alianzas')
const expReg = new RegExp(/^[0-9]+$/)

async function obtenerInfoHeroe(id) {
  try {
    let datosPersonaje = await fetch(`https://www.superheroapi.com/api.php/${clave}/${id}`)
    datosPersonaje = await datosPersonaje.json()

    // console.log(datosPersonaje)
    avatarPer.src = `${datosPersonaje.image.url}`
    spanNombre.textContent = `${datosPersonaje.name}`
    spanConexiones.textContent = `${datosPersonaje.connections['group-affiliation']}`
    spanPublicadoPor.textContent = `${datosPersonaje.biography.publisher}`
    spanOcupacion.textContent = `${datosPersonaje.work.occupation}`
    spanPrimeraAparicion.textContent = `${datosPersonaje.biography['first-appearance']}`
    spanAltura.textContent = datosPersonaje.appearance.height.map(altura => altura + ' ')
    spanPeso.textContent = `${datosPersonaje.appearance.weight.map(peso => peso + ' ')}`
    spanAlianzas.textContent = `${datosPersonaje.biography.aliases.map(ali => ali + ' ')}`

    graficoHeroe(datosPersonaje)
  }

  catch (e) {
    console.log('Error:' + e);
  }
}

btnBuscar.addEventListener('click', function () {
  let idPersonaje = (inputIdPersonaje.value)
  idPersonaje = idPersonaje.trim()

  if (idPersonaje.match(expReg)) {
    // console.log('es numero');
    // console.log(idPersonaje);
  }
  else {
    // console.log('no es numero');
    // console.log(idPersonaje);

  }

  spanAltura.textContent = ''
  obtenerInfoHeroe(idPersonaje)
})



