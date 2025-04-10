// ################################################
// ---  Actividad: Python a Javascript | Día 1  ---
// ################################################

import * as menus from './menus.js';
import * as process from './process_camper.js';
import * as crud from './crud.js';

let r = true;
while (r == true) {
    let loginVar = menus.ShowLoginMenu();
    if (loginVar == '1') {
        let camperVar = menus.ShowCamperMenu();
        if (camperVar == '1') {
            let camperRegistrationVar = menus.ShowCamperRegistrationMenu();
            if (camperRegistrationVar == '1') {
                process.processCamper();
            } else if (camperRegistrationVar == '2') {
                alert('Procesar Camper Incompleto (Próximamente...)');
            } else if (camperRegistrationVar == '3') {
                r = false;
            } else {
                alert('ERR0R: Opción seleccionada no válida...')
            };
        } else if (camperVar == '2') {
            r = false;
        } else {
            alert('ERR0R: Opción seleccionada no válida...')
        };
    } else if (loginVar == '2') {
        let trainerVar = menus.ShowTrainerMenu();
        if (trainerVar == '1') {
            crud.Read();
        } else if (trainerVar == '2') {
            alert('Asignar Notas (Próximamente...)');
        } else if (trainerVar == '3') {
            r = false;
        } else {
            alert('ERR0R: Opción seleccionada no válida...')
        };
    } else if (loginVar == '3') {
        let coordinatorVar = menus.ShowCoordinatorMenu();
    } else if (loginVar == '4') {
        r = false;
    } else {
        alert('ERR0R: Opción seleccionada no válida...')
    };
};

//Desarrollado por : Simón Dante Salamanca Galvis - 1.097.498.423.