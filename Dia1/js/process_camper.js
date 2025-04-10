import { members } from "./database/bbdd_members.js";

function updateInfo(newCamper) {
    members['campers'].pop();
    members['campers'].push(newCamper);
};
export function processCamper() {
    let newCamper = {};
    let id = members['campers'][-1]['id'];
    newCamper['id'] = id + 1;
    newCamper['estado'] = '';
    newCamper['riesgo'] = 'Bajo';
    newCamper['nombres'] = prompt('Ingrese su/s nombre/s: ');
    newCamper['apellidos'] = prompt('Ingrese sus apellidos: ');
    newCamper['estado'] = 'En proceso de ingreso';
    members['campers'].push(newCamper);
    newCamper['direccion'] = prompt('Ingrese su dirección: ');
    updateInfo(newCamper);
    newCamper['telefono'] = prompt('Ingrese su número de teléfono: ');
    updateInfo(newCamper);
    newCamper['acudiente'] = {};
    newCamper['acudiente']['nombres'] = prompt('Ingrese el/los nombre/s del acudiente: ');
    newCamper['acudiente']['apellidos'] = prompt('Ingrese los apellidos del acudiente: ');
    newCamper['acudiente']['telefono'] = prompt('Ingrese el número de teléfono del acudiente: ');
    updateInfo(newCamper);
    newCamper['jornada'] = prompt('Ingrese la jornada en la que quiera estudiar: \n' +
        '1 --- 6 a.m. - 10 a.m.\n' +
        '2 --- 10 a.m. - 2 p.m.\n' +
        '3 --- 2 p.m. - 6 p.m.\n' +
        '4 --- 6 p.m. - 10 p.m.\n');
    newCamper['estado'] = 'Inscrito';
    updateInfo(newCamper);
};