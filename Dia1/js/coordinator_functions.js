// ################################################
// ---  Actividad: Python a Javascript | Día 1  ---
// ################################################

import { members } from "./database/bbdd_members.js";

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
        let grade = prompt(`Escriba la nota a asignar al camper #${members.campers[registeredCamperVar-1].id} (${members.campers[registeredCamperVar-1].nombres} ${members.campers[registeredCamperVar-1].apellidos}):`);
        if (grade != '') {
            if (grade >= 60) {
                members.campers[i].estado = 'Aprobado'
                alert(`Camper ${members.campers[registeredCamperVar-1].nombres} ${members.campers[registeredCamperVar-1].apellidos} aprobado`);
            } else {
                alert(`Camper ${members.campers[registeredCamperVar-1].nombres} ${members.campers[registeredCamperVar-1].apellidos} no aprobado`);
            };
        };
    };
};

//Desarrollado por : Simón Dante Salamanca Galvis - 1.097.498.423.