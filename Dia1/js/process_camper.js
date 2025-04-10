// ################################################
// ---  Actividad: Python a Javascript | Día 1  ---
// ################################################

import { members } from "./database/bbdd_members.js";

function UpdateInfo(newCamper) {
    members['campers'].pop();
    members['campers'].push(newCamper);
};
export function ProcessCamper() {
    let newCamper = {};
    let id = members['campers'].at(-1)['id'];
    newCamper['id'] = id + 1;
    newCamper['estado'] = '';
    newCamper['riesgo'] = 'Bajo';
    newCamper['nombres'] = prompt('Ingrese su/s nombre/s: ');
    if (newCamper['nombres'] != '' && newCamper['nombres'] != null) {
        newCamper['apellidos'] = prompt('Ingrese sus apellidos: ');
        if (newCamper['apellidos'] != '' && newCamper['apellidos'] != null) {
            newCamper['estado'] = 'En proceso de ingreso';
            members['campers'].push(newCamper);
            newCamper['direccion'] = prompt('Ingrese su dirección: ');
            if (newCamper['direccion'] != '' && newCamper['direccion'] != null) {
                UpdateInfo(newCamper);
                newCamper['telefono'] = prompt('Ingrese su número de teléfono: ');
                if (newCamper['telefono'] != '' && newCamper['telefono'] != null) {
                    UpdateInfo(newCamper);
                    newCamper['acudiente'] = {};
                    newCamper['acudiente']['nombres'] = prompt('Ingrese el/los nombre/s del acudiente: ');
                    newCamper['acudiente']['apellidos'] = prompt('Ingrese los apellidos del acudiente: ');
                    newCamper['acudiente']['telefono'] = prompt('Ingrese el número de teléfono del acudiente: ');
                    if (newCamper['acudiente']['nombres'] != '' && newCamper['acudiente']['nombres'] != null ||
                        newCamper['acudiente']['apellidos'] != '' && newCamper['acudiente']['apellidos'] != null ||
                        newCamper['acudiente']['telefono'] != '' && newCamper['acudiente']['telefono'] != null) {
                        UpdateInfo(newCamper);
                        newCamper['jornada'] = prompt('Ingrese la jornada en la que quiera estudiar: \n' +
                            '1 --- 6 a.m. - 10 a.m.\n' +
                            '2 --- 10 a.m. - 2 p.m.\n' +
                            '3 --- 2 p.m. - 6 p.m.\n' +
                            '4 --- 6 p.m. - 10 p.m.\n');
                        if (newCamper['jornada'] != '' && newCamper['jornada'] != null) {
                            newCamper['estado'] = 'Inscrito';
                            UpdateInfo(newCamper);
                        } else {
                            newCamper['jornada'] = undefined;
                        };
                    } else {
                        newCamper['acudiente']['nombres'] = undefined;
                        newCamper['acudiente']['apellidos'] = undefined;
                        newCamper['acudiente']['telefono'] = undefined;
                    };
                } else {
                    newCamper['telefono'] = undefined;
                };
            } else {
                newCamper['direccion'] = undefined;
            };
        };
    };
};
function FromAddress() {
    newCamper['direccion'] = prompt('Ingrese su dirección: ');
    if (newCamper['direccion'] != '' && newCamper['direccion'] != null) {
        UpdateInfo(newCamper);
        newCamper['telefono'] = prompt('Ingrese su número de teléfono: ');
        if (newCamper['telefono'] != '' && newCamper['telefono'] != null) {
            UpdateInfo(newCamper);
            newCamper['acudiente'] = {};
            newCamper['acudiente']['nombres'] = prompt('Ingrese el/los nombre/s del acudiente: ');
            newCamper['acudiente']['apellidos'] = prompt('Ingrese los apellidos del acudiente: ');
            newCamper['acudiente']['telefono'] = prompt('Ingrese el número de teléfono del acudiente: ');
            if (newCamper['acudiente']['nombres'] != '' && newCamper['acudiente']['nombres'] != null ||
                newCamper['acudiente']['apellidos'] != '' && newCamper['acudiente']['apellidos'] != null ||
                newCamper['acudiente']['telefono'] != '' && newCamper['acudiente']['telefono'] != null) {
                UpdateInfo(newCamper);
                newCamper['jornada'] = prompt('Ingrese la jornada en la que quiera estudiar: \n' +
                    '1 --- 6 a.m. - 10 a.m.\n' +
                    '2 --- 10 a.m. - 2 p.m.\n' +
                    '3 --- 2 p.m. - 6 p.m.\n' +
                    '4 --- 6 p.m. - 10 p.m.\n');
                if (newCamper['jornada'] != '' && newCamper['jornada'] != null) {
                    newCamper['estado'] = 'Inscrito';
                    UpdateInfo(newCamper);
                } else {
                    newCamper['jornada'] = undefined;
                };
            } else {
                newCamper['acudiente']['nombres'] = undefined;
                newCamper['acudiente']['apellidos'] = undefined;
                newCamper['acudiente']['telefono'] = undefined;
            };
        } else {
            newCamper['telefono'] = undefined;
        };
    } else {
        newCamper['direccion'] = undefined;
    };
};
function FromTelephone() {
    newCamper['telefono'] = prompt('Ingrese su número de teléfono: ');
    if (newCamper['telefono'] != '' && newCamper['telefono'] != null) {
        UpdateInfo(newCamper);
        newCamper['acudiente'] = {};
        newCamper['acudiente']['nombres'] = prompt('Ingrese el/los nombre/s del acudiente: ');
        newCamper['acudiente']['apellidos'] = prompt('Ingrese los apellidos del acudiente: ');
        newCamper['acudiente']['telefono'] = prompt('Ingrese el número de teléfono del acudiente: ');
        if (newCamper['acudiente']['nombres'] != '' && newCamper['acudiente']['nombres'] != null ||
            newCamper['acudiente']['apellidos'] != '' && newCamper['acudiente']['apellidos'] != null ||
            newCamper['acudiente']['telefono'] != '' && newCamper['acudiente']['telefono'] != null) {
            UpdateInfo(newCamper);
            newCamper['jornada'] = prompt('Ingrese la jornada en la que quiera estudiar: \n' +
                '1 --- 6 a.m. - 10 a.m.\n' +
                '2 --- 10 a.m. - 2 p.m.\n' +
                '3 --- 2 p.m. - 6 p.m.\n' +
                '4 --- 6 p.m. - 10 p.m.\n');
            if (newCamper['jornada'] != '' && newCamper['jornada'] != null) {
                newCamper['estado'] = 'Inscrito';
                UpdateInfo(newCamper);
            } else {
                newCamper['jornada'] = undefined;
            };
        } else {
            newCamper['acudiente']['nombres'] = undefined;
            newCamper['acudiente']['apellidos'] = undefined;
            newCamper['acudiente']['telefono'] = undefined;
        };
    } else {
        newCamper['telefono'] = undefined;
    };
};
function FromAttendant() {
    newCamper['acudiente'] = {};
    newCamper['acudiente']['nombres'] = prompt('Ingrese el/los nombre/s del acudiente: ');
    newCamper['acudiente']['apellidos'] = prompt('Ingrese los apellidos del acudiente: ');
    newCamper['acudiente']['telefono'] = prompt('Ingrese el número de teléfono del acudiente: ');
    if (newCamper['acudiente']['nombres'] != '' && newCamper['acudiente']['nombres'] != null ||
        newCamper['acudiente']['apellidos'] != '' && newCamper['acudiente']['apellidos'] != null ||
        newCamper['acudiente']['telefono'] != '' && newCamper['acudiente']['telefono'] != null) {
        UpdateInfo(newCamper);
        newCamper['jornada'] = prompt('Ingrese la jornada en la que quiera estudiar: \n' +
            '1 --- 6 a.m. - 10 a.m.\n' +
            '2 --- 10 a.m. - 2 p.m.\n' +
            '3 --- 2 p.m. - 6 p.m.\n' +
            '4 --- 6 p.m. - 10 p.m.\n');
        if (newCamper['jornada'] != '' && newCamper['jornada'] != null) {
            newCamper['estado'] = 'Inscrito';
            UpdateInfo(newCamper);
        } else {
            newCamper['jornada'] = undefined;
        };
    } else {
        newCamper['acudiente']['nombres'] = undefined;
        newCamper['acudiente']['apellidos'] = undefined;
        newCamper['acudiente']['telefono'] = undefined;
    };
};
function FromStudyTime() {
    newCamper['jornada'] = prompt('Ingrese la jornada en la que quiera estudiar: \n' +
        '1 --- 6 a.m. - 10 a.m.\n' +
        '2 --- 10 a.m. - 2 p.m.\n' +
        '3 --- 2 p.m. - 6 p.m.\n' +
        '4 --- 6 p.m. - 10 p.m.\n');
    if (newCamper['jornada'] != '' && newCamper['jornada'] != null) {
        newCamper['estado'] = 'Inscrito';
        UpdateInfo(newCamper);
    } else {
        newCamper['jornada'] = undefined;
    };
};
export function ProcessIncompleteCamper() {
    
};

//Desarrollado por : Simón Dante Salamanca Galvis - 1.097.498.423.