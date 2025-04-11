// ################################################
// ---  Actividad: Python a Javascript | Día 1  ---
// ################################################

import { members } from "./database/bbdd_members.js";
import { roomsGroups } from "./database/bbdd_rooms_groups.js";
import * as menus from "./menus.js";

export function Read() {
    let readVar = menus.ShowReadMenu();
    if (readVar == '1') {
        let readCamperVar = menus.ShowReadCamperMenu();
        if (readCamperVar == '1') {
            let camperID = parseInt(prompt('ID del camper:'));
            for (let i = 0; i < members.campers.length; i++) {
                if (members.campers[i].id == camperID) {
                    alert(`\nNombre:  ${members.campers[i].nombres} ${members.campers[i].apellidos} / ID: ${members.campers[i].id}\n` +
                        `Dirección: ${members.campers[i].direccion} / Teléfono: ${members.campers[i].telefono}\n` +
                        `Estado: ${members.campers[i].estado} / Riesgo: ${members.campers[i].riesgo}\n` +
                        `Jornada: ${members.campers[i].jornada}\n`);
                };
            };
        } else if (readCamperVar == '2') {
            let groups = [];
            let groupMembers = [];
            for (let group in roomsGroups.grupos) {
                groups.push(group);
            };
            let groupName = prompt(`\nGrupos:\n\n- ${groups.join('\n- ')}\n\nNombre del grupo a acceder a sus campers:\n`);
            for (let i = 0; i < roomsGroups.grupos[groupName].miembros.length; i++) {
                groupMembers.push(roomsGroups.grupos[groupName].miembros[i]);
            };
            alert(`\nCampers del grupo ${groupName}:\n\n- ${groupMembers.join('\n- ')}\n`);
        } else if (readCamperVar == '3') {
            r = false;
        } else {
            alert('ERR0R: Opción seleccionada no válida...')
        };
    } else if (readVar == '2') {
        let counter = 0;
        let workTimes = [];
        for (let t = 0; t < members.trainers.length; t++) {
            counter = 0;
            for (let i = 0; i < members.trainers[t].jornadasDisponibles.length; i++) {
                if (members.trainers[t].jornadasDisponibles[i] == 0) {
                    counter += 1;
                };
            };
            if (counter == 4) {
                alert(`\nNombre: ${members.trainers[t].nombres} ${members.trainers[t].apellidos} / ID: ${members.trainers[t].id}\n` +
                    `Jornadas Disponibles: Ninguna\n` +
                    `Rutas: ${members.trainers[t].rutas.join(' / ')}\n\n` +
                    `Enter (↲) - Avanzar al siguiente trainer...\n`);
            } else {
                counter = 0;
                workTimes = [];
                for (let i = 0; i < members.trainers[t].jornadasDisponibles.length; i++) {
                    if (members.trainers[t].jornadasDisponibles[i] != 0) {
                        workTimes.push(members.trainers[t].jornadasDisponibles[i]);
                    };
                };
                alert(`\nNombre: ${members.trainers[t].nombres} ${members.trainers[t].apellidos} / ID: ${members.trainers[t].id}\n` +
                    `Jornadas Disponibles: ${workTimes.join(' / ')}\n` +
                    `Rutas: ${members.trainers[t].rutas.join(' / ')}\n\n` +
                    `Enter (↵) - Avanzar al siguiente trainer...\n`);
            }
        };
    } else if (readVar == '3') {
        r = false;
    } else {
        alert('ERR0R: Opción seleccionada no válida...')
    };
};

//Desarrollado por : Simón Dante Salamanca Galvis - 1.097.498.423.