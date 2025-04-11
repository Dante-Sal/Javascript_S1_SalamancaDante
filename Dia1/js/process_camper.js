// ################################################
// ---  Actividad: Python a Javascript | Día 1  ---
// ################################################

import { members } from "./database/bbdd_members.js";

function UpdateInfo(camper) {
    members.campers.pop();
    members.campers.push(camper);
};
export function ProcessCamper() {
    let newCamper = {};
    let id = members.campers.at(-1).id;
    newCamper.id = id + 1;
    newCamper.estado = '';
    newCamper.riesgo = 'Bajo';
    newCamper.nombres = prompt('Ingrese su/s nombre/s: ');
    if (newCamper.nombres != '' && newCamper.nombres != null) {
        newCamper.apellidos = prompt('Ingrese sus apellidos: ');
        if (newCamper.apellidos != '' && newCamper.apellidos != null) {
            newCamper.estado = 'En proceso de ingreso';
            members.campers.push(newCamper);
            newCamper.direccion = prompt('Ingrese su dirección: ');
            if (newCamper.direccion != '' && newCamper.direccion != null) {
                UpdateInfo(newCamper);
                newCamper.telefono = prompt('Ingrese su número de teléfono: ');
                if (newCamper.telefono != '' && newCamper.telefono != null) {
                    UpdateInfo(newCamper);
                    newCamper.acudiente = {};
                    newCamper.acudiente.nombres = prompt('Ingrese el/los nombre/s del acudiente: ');
                    newCamper.acudiente.apellidos = prompt('Ingrese los apellidos del acudiente: ');
                    newCamper.acudiente.telefono = prompt('Ingrese el número de teléfono del acudiente: ');
                    if (newCamper.acudiente.nombres != '' && newCamper.acudiente.nombres != null ||
                        newCamper.acudiente.apellidos != '' && newCamper.acudiente.apellidos != null ||
                        newCamper.acudiente.telefono != '' && newCamper.acudiente.telefono != null) {
                        UpdateInfo(newCamper);
                        newCamper.jornada = prompt('Ingrese la jornada en la que quiera estudiar: \n' +
                            '1 --- 6 a.m. - 10 a.m.\n' +
                            '2 --- 10 a.m. - 2 p.m.\n' +
                            '3 --- 2 p.m. - 6 p.m.\n' +
                            '4 --- 6 p.m. - 10 p.m.\n');
                        if (newCamper.jornada != '' && newCamper.jornada != null) {
                            newCamper.estado = 'Inscrito';
                            UpdateInfo(newCamper);
                        } else {
                            newCamper.jornada = undefined;
                        };
                    } else {
                        newCamper.acudiente.nombres = undefined;
                        newCamper.acudiente.apellidos = undefined;
                        newCamper.acudiente.telefono = undefined;
                    };
                } else {
                    newCamper.telefono = undefined;
                };
            } else {
                newCamper.direccion = undefined;
            };
        };
    };
};
function FromAddress(incompleteCamper) {
    incompleteCamper.direccion = prompt('Ingrese su dirección: ');
    if (incompleteCamper.direccion != '' && incompleteCamper.direccion != null) {
        UpdateInfo(incompleteCamper);
        incompleteCamper.telefono = prompt('Ingrese su número de teléfono: ');
        if (incompleteCamper.telefono != '' && incompleteCamper.telefono != null) {
            UpdateInfo(incompleteCamper);
            incompleteCamper.acudiente = {};
            incompleteCamper.acudiente.nombres = prompt('Ingrese el/los nombre/s del acudiente: ');
            incompleteCamper.acudiente.apellidos = prompt('Ingrese los apellidos del acudiente: ');
            incompleteCamper.acudiente.telefono = prompt('Ingrese el número de teléfono del acudiente: ');
            if (incompleteCamper.acudiente.nombres != '' && incompleteCamper.acudiente.nombres != null ||
                incompleteCamper.acudiente.apellidos != '' && incompleteCamper.acudiente.apellidos != null ||
                incompleteCamper.acudiente.telefono != '' && incompleteCamper.acudiente.telefono != null) {
                UpdateInfo(incompleteCamper);
                incompleteCamper.jornada = prompt('Ingrese la jornada en la que quiera estudiar: \n' +
                    '1 --- 6 a.m. - 10 a.m.\n' +
                    '2 --- 10 a.m. - 2 p.m.\n' +
                    '3 --- 2 p.m. - 6 p.m.\n' +
                    '4 --- 6 p.m. - 10 p.m.\n');
                if (incompleteCamper.jornada != '' && incompleteCamper.jornada != null) {
                    incompleteCamper.estado = 'Inscrito';
                    UpdateInfo(incompleteCamper);
                } else {
                    incompleteCamper.jornada = undefined;
                };
            } else {
                incompleteCamper.acudiente.nombres = undefined;
                incompleteCamper.acudiente.apellidos = undefined;
                incompleteCamper.acudiente.telefono = undefined;
            };
        } else {
            incompleteCamper.telefono = undefined;
        };
    } else {
        incompleteCamper.direccion = undefined;
    };
};
function FromTelephone(incompleteCamper) {
    incompleteCamper.telefono = prompt('Ingrese su número de teléfono: ');
    if (incompleteCamper.telefono != '' && incompleteCamper.telefono != null) {
        UpdateInfo(incompleteCamper);
        incompleteCamper.acudiente = {};
        incompleteCamper.acudiente.nombres = prompt('Ingrese el/los nombre/s del acudiente: ');
        incompleteCamper.acudiente.apellidos = prompt('Ingrese los apellidos del acudiente: ');
        incompleteCamper.acudiente.telefono = prompt('Ingrese el número de teléfono del acudiente: ');
        if (incompleteCamper.acudiente.nombres != '' && incompleteCamper.acudiente.nombres != null ||
            incompleteCamper.acudiente.apellidos != '' && incompleteCamper.acudiente.apellidos != null ||
            incompleteCamper.acudiente.telefono != '' && incompleteCamper.acudiente.telefono != null) {
            UpdateInfo(incompleteCamper);
            incompleteCamper.jornada = prompt('Ingrese la jornada en la que quiera estudiar: \n' +
                '1 --- 6 a.m. - 10 a.m.\n' +
                '2 --- 10 a.m. - 2 p.m.\n' +
                '3 --- 2 p.m. - 6 p.m.\n' +
                '4 --- 6 p.m. - 10 p.m.\n');
            if (incompleteCamper.jornada != '' && incompleteCamper.jornada != null) {
                incompleteCamper.estado = 'Inscrito';
                UpdateInfo(incompleteCamper);
            } else {
                incompleteCamper.jornada = undefined;
            };
        } else {
            incompleteCamper.acudiente.nombres = undefined;
            incompleteCamper.acudiente.apellidos = undefined;
            incompleteCamper.acudiente.telefono = undefined;
        };
    } else {
        incompleteCamper.telefono = undefined;
    };
};
function FromAttendant(incompleteCamper) {
    incompleteCamper.acudiente = {};
    incompleteCamper.acudiente.nombres = prompt('Ingrese el/los nombre/s del acudiente: ');
    incompleteCamper.acudiente.apellidos = prompt('Ingrese los apellidos del acudiente: ');
    incompleteCamper.acudiente.telefono = prompt('Ingrese el número de teléfono del acudiente: ');
    if (incompleteCamper.acudiente.nombres != '' && incompleteCamper.acudiente.nombres != null ||
        incompleteCamper.acudiente.apellidos != '' && incompleteCamper.acudiente.apellidos != null ||
        incompleteCamper.acudiente.telefono != '' && incompleteCamper.acudiente.telefono != null) {
        UpdateInfo(incompleteCamper);
        incompleteCamper.jornada = prompt('Ingrese la jornada en la que quiera estudiar: \n' +
            '1 --- 6 a.m. - 10 a.m.\n' +
            '2 --- 10 a.m. - 2 p.m.\n' +
            '3 --- 2 p.m. - 6 p.m.\n' +
            '4 --- 6 p.m. - 10 p.m.\n');
        if (incompleteCamper.jornada != '' && incompleteCamper.jornada != null) {
            incompleteCamper.estado = 'Inscrito';
            UpdateInfo(incompleteCamper);
        } else {
            incompleteCamper.jornada = undefined;
        };
    } else {
        incompleteCamper.acudiente.nombres = undefined;
        incompleteCamper.acudiente.apellidos = undefined;
        incompleteCamper.acudiente.telefono = undefined;
    };
};
function FromStudyTime(incompleteCamper) {
    incompleteCamper.jornada = prompt('Ingrese la jornada en la que quiera estudiar: \n' +
        '1 --- 6 a.m. - 10 a.m.\n' +
        '2 --- 10 a.m. - 2 p.m.\n' +
        '3 --- 2 p.m. - 6 p.m.\n' +
        '4 --- 6 p.m. - 10 p.m.\n');
    if (incompleteCamper.jornada != '' && incompleteCamper.jornada != null) {
        incompleteCamper.estado = 'Inscrito';
        UpdateInfo(incompleteCamper);
    } else {
        incompleteCamper.jornada = undefined;
    };
};
export function ProcessIncompleteCamper() {
    let files = `\nEscriba el número de la inscripción incompleta que desee llenar:\n\n`;
    for (let i = 0; i < members.campers.length; i++) {
        if (members.campers[i].estado == 'En proceso de ingreso') {
            files = files.concat(`↳ Archivo de inscripción incompleto #${i + 1}: ${members.campers[i].nombres} ${members.campers[i].apellidos}\n`);
        };
    };
    let fileVar = prompt(files);
    if (fileVar != '') {
        parseInt(fileVar);
        if (Object.keys(members.campers[fileVar - 1]).length == 5) {
            FromAddress(members.campers[fileVar - 1]);
        } else if (Object.keys(members.campers[fileVar - 1]).length == 6) {
            FromTelephone(members.campers[fileVar - 1]);
        } else if (Object.keys(members.campers[fileVar - 1]).length == 7) {
            FromAttendant(members.campers[fileVar - 1]);
        } else if (Object.keys(members.campers[fileVar - 1]).length == 8) {
            FromStudyTime(members.campers[fileVar - 1]);
        };
    };
};

//Desarrollado por : Simón Dante Salamanca Galvis - 1.097.498.423.