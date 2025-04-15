// ################################################
// ---  Actividad: Python a Javascript | Día 1  ---
// ################################################

import { members } from "./database/bbdd_members.js";
import { roomsGroups } from "./database/bbdd_rooms_groups.js";

export function Login() {
    let user = prompt('Nombre de usuario:');
    let password = prompt('Contraseña:');
    for (let i = 0; i < members.coordinadores.length; i++) {
        if (members.coordinadores[i].usuario == user && members.coordinadores[i].contrasena == password) {
            alert('✅ Iniciando sesión...');
            return true;
        } else {
            alert('❌ Nombre de usuario o contraseña incorrectos.');
            return false;
        };
    };
};

export function GradeAssignment() {
    let registeredCampers = `\nIngrese el ID del camper a asignar nota:\n\n`;
    for (let i = 0; i < members.campers.length; i++) {
        if (members.campers[i].estado == 'Inscrito') {
            registeredCampers = registeredCampers.concat(`↳ Camper inscrito #${i + 1}: ${members.campers[i].nombres} ${members.campers[i].apellidos}\n`);
        };
    };
    let registeredCamperVar = prompt(registeredCampers);
    if (registeredCamperVar != '') {
        let grade = prompt(`Escriba la nota a asignar al camper #${members.campers[registeredCamperVar - 1].id} (${members.campers[registeredCamperVar - 1].nombres} ${members.campers[registeredCamperVar - 1].apellidos}):`);
        if (grade != '') {
            if (grade >= 60) {
                members.campers[registeredCamperVar - 1].estado = 'Aprobado';
                alert(`Camper ${members.campers[registeredCamperVar - 1].nombres} ${members.campers[registeredCamperVar - 1].apellidos} aprobado`);
            } else {
                alert(`Camper ${members.campers[registeredCamperVar - 1].nombres} ${members.campers[registeredCamperVar - 1].apellidos} no aprobado`);
            };
        };
    };
};

export function GroupAssignment() {
    let f = false;
    let date = new Date();
    let day = date.getDate();
    let month = date.getMonth() + 1;
    let year = date.getFullYear();
    let w = []; let x = []; let y = []; let z = [];
    for (let i = 0; i < 4; i++) {
        for (let k = 0; k < members.campers.length; k++) {
            if (i == 0 && k == 0) {
                roomsGroups.grupos.w = new Object();
            } else if (i == 1 && k == 1) {
                roomsGroups.grupos.x = new Object();
            } else if (i == 2 && k == 2) {
                roomsGroups.grupos.y = new Object();
            } else if (i == 3 && k == 3) {
                roomsGroups.grupos.z = new Object();
            };
            for (let group in roomsGroups.grupos) {
                if (group.length == 2 && roomsGroups.grupos[group].miembros < 33 && roomsGroups.grupos[group].jornada == 1) {
                    w.push(...roomsGroups.grupos[group].miembros);
                    roomsGroups.grupos.w = roomsGroups.grupos[group];
                    let groupStudyTime = roomsGroups.grupos[group].jornada;
                    let trainerFullName = roomsGroups.grupos[group].trainer.split(' ');
                    if (trainerFullName.length == 3) {
                        let trainerName = trainerFullName[0];
                        let trainerSurnames = trainerFullName[1] + trainerFullName[2];
                        for (let m = 0; m < members.trainers.length; m++) {
                            if (members.trainers[m].nombres == trainerName && members.trainers[m].apellidos == trainerSurnames) {
                                members.trainers[m].jornadasDisponibles[groupStudyTime-1] = groupStudyTime;
                            };
                        };
                    } else if (trainerFullName.length == 4) {
                        let trainerNames = trainerFullName[0] + trainerFullName[1];
                        let trainerSurnames = trainerFullName[2] + trainerFullName[3];
                        for (let m = 0; m < members.trainers.length; m++) {
                            if (members.trainers[m].nombres == trainerNames && members.trainers[m].apellidos == trainerSurnames) {
                                members.trainers[m].jornadasDisponibles[groupStudyTime-1] = groupStudyTime;
                            };
                        };
                    };
                    if (group in roomsGroups.salones.Artemis) {
                        roomsGroups.salones.Artemis[0] = 'w';
                        f = true;
                    } else if (group in roomsGroups.salones.Sputnik) {
                        roomsGroups.salones.Sputnik[0] = 'w';
                        f = true;
                    } else if (group in roomsGroups.salones.Apolo) {
                        roomsGroups.salones.Apolo[0] = 'w';
                        f = true;
                    };
                    delete roomsGroups.grupos[group];
                };
                break;
            };
        };
    };
};

//Desarrollado por : Simón Dante Salamanca Galvis - 1.097.498.423.