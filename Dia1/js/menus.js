export function ShowLoginMenu() {
    let loginOpt = prompt('\n////////////////////////////\n' +
        '// MENÚ DE INGRESO //\n' +
        '////////////////////////////\n\n' +
        '1. Iniciar como camper\n' +
        '2. Iniciar como trainer\n' +
        '3. Iniciar como coordinador\n' +
        '4. Salir del programa\n');
    return loginOpt;
};
export function ShowCamperMenu() {
    let camperOpt = prompt('\n///////////////////////////\n' +
        '// MENÚ DE CAMPER //\n' +
        '///////////////////////////\n\n' +
        '1. Inscribirse\n' +
        '2. Salir del programa\n');
    return camperOpt;
};
export function ShowCamperRegistrationMenu() {
    let camperRegistrationOpt = prompt('\n1. Inscribirse como usuario nuevo\n' +
        '2. Continuar con una inscripción en progreso\n' +
        '3. Salir del programa\n');
    return camperRegistrationOpt;
}
export function ShowTrainerMenu() {
    let trainerOpt = prompt('\n///////////////////////////\n' +
        '// MENÚ DE TRAINER //\n' +
        '///////////////////////////\n\n' +
        '1. Ver campers/trainers\n' +
        '2. Asignar notas\n' +
        '3. Salir del programa\n');
    return trainerOpt;
};
export function ShowCoordinatorMenu() {
    let coordinatorOpt = prompt('\n///////////////////////////////////\n' +
        '// MENÚ DE COORDINADOR //\n' +
        '///////////////////////////////////\n\n' +
        '1. Asignar notas\n' +
        '2. Asignar grupos\n' +
        '3. Abrir menú de funciones CRUD (Create / Read / Update / Delete)\n' +
        '4. Acceder al módulo de reportes\n' +
        '5. Salir del programa\n');
    return coordinatorOpt;
};
export function ShowCRUDMenu() {
    let crudOpt = prompt('\n//////////////////////////////////////\n' +
        '// MENÚ DE FUNCIONES CRUD //\n' +
        '//////////////////////////////////////\n\n' +
        '1. Ver campers/trainers\n' +
        '2. Agregar camper/trainer\n' +
        '3. Editar camper/trainer\n' +
        '4. Eliminar camper/trainer\n' +
        '5. Agregar ruta de entrenamiento\n' +
        '6. Salir del programa\n');
    return crudOpt;
};
export function ShowReadMenu() {
    let readOpt = prompt('\n1. Ver campers\n' +
        '2. Ver trainers\n' +
        '3. Salir del programa\n');
    return readOpt;
};
export function ShowReadCamperMenu() {
    let readCamperOpt = prompt('\n1. Buscar un camper según su ID\n' +
        '2. Mostrar los campers cursando en un grupo\n' +
        '3. Salir del programa\n');
    return readCamperOpt;
};