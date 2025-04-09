export function ShowLoginMenu() {
    let loginopt = prompt('\n////////////////////////////\n' +
        '// MENÚ DE INGRESO //\n' +
        '////////////////////////////\n\n' +
        '1. Iniciar como camper\n' +
        '2. Iniciar como trainer\n' +
        '3. Iniciar como coordinador\n' +
        '4. Salir del programa\n');
    return loginopt;
};
export function ShowCamperMenu() {
    let camperopt = prompt('\n///////////////////////////\n' +
        '// MENÚ DE CAMPER //\n' +
        '///////////////////////////\n\n' +
        '1. Inscribirse\n' +
        '2. Salir del programa\n');
    return camperopt;
};
export function ShowCamperRegistrationMenu() {
    let camperregistrationopt = prompt('\n1. Inscribirse como usuario nuevo\n' +
        '2. Continuar con una inscripción en progreso\n' +
        '3. Salir del programa\n');
    return camperregistrationopt;
}
export function ShowTrainerMenu() {
    let traineropt = prompt('\n///////////////////////////\n' +
        '// MENÚ DE TRAINER //\n' +
        '///////////////////////////\n\n' +
        '1. Ver campers/trainers\n' +
        '2. Asignar notas\n' +
        '3. Salir del programa\n');
    return traineropt;
};
export function ShowCoordinatorMenu() {
    let coordinatoropt = prompt('\n///////////////////////////////////\n' +
        '// MENÚ DE COORDINADOR //\n' +
        '///////////////////////////////////\n\n' +
        '1. Asignar notas\n' +
        '2. Asignar grupos\n' +
        '3. Abrir menú de funciones CRUD (Create / Read / Update / Delete)\n' +
        '4. Acceder al módulo de reportes\n' +
        '5. Salir del programa\n');
    return coordinatoropt;
};
export function ShowCRUDMenu() {
    let crudopt = prompt('\n//////////////////////////////////////\n' +
        '// MENÚ DE FUNCIONES CRUD //\n' +
        '//////////////////////////////////////\n\n' +
        '1. Ver campers/trainers\n' +
        '2. Agregar camper/trainer\n' +
        '3. Editar camper/trainer\n' +
        '4. Eliminar camper/trainer\n' +
        '5. Agregar ruta de entrenamiento\n' +
        '6. Salir del programa\n');
    return crudopt;
};