// ################################################
// ---  Actividad: Python a Javascript | Día 1  ---
// ################################################

import { members } from "./database/bbdd_members.js";

export function CoordinatorLogin() {
    let user = prompt('Nombre de usuario:');
    let password = prompt('Contraseña:');
    for (let i = 0; i < members.coordinadores.length; i++) {
        if (members.coordinadores[i].usuario == user && members.coordinadores[i].contrasena == password) {
            alert('✅ Iniciando sesión...');
            return true;
        } else {
            alert('❌ Nombre de usuario o contraseña incorrectos.');
            return false;
        }
    };
};



//Desarrollado por : Simón Dante Salamanca Galvis - 1.097.498.423.