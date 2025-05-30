// ################################################
// ---  Actividad: Python a Javascript | Día 1  ---
// ################################################

export let members = {
    'trainers': [
        {
            'id': 1,
            'nombres': 'Pedro Felipe',
            'apellidos': 'Gomez Bonilla',
            'jornadasDisponibles': [
                0,
                0,
                0,
                0
            ],
            'rutas': [
                'Java',
                '.Net'
            ]
        },
        {
            'id': 2,
            'nombres': 'Juan Gabriel',
            'apellidos': 'Pinilla Juarez',
            'jornadasDisponibles': [
                0,
                0,
                0,
                4
            ],
            'rutas': [
                'NodeJS'
            ]
        },
        {
            'id': 3,
            'nombres': 'Laura',
            'apellidos': 'Martinez Lopez',
            'jornadasDisponibles': [
                1,
                2,
                3,
                0
            ],
            'rutas': [
                'NodeJS',
                '.Net'
            ]
        },
        {
            'id': 4,
            'nombres': 'Carlos Andres',
            'apellidos': 'Ruiz Ortega',
            'jornadasDisponibles': [
                0,
                2,
                3,
                0
            ],
            'rutas': [
                'Java'
            ]
        },
        {
            'id': 5,
            'nombres': 'Valentina',
            'apellidos': 'Garcia Torres',
            'jornadasDisponibles': [
                1,
                0,
                0,
                0
            ],
            'rutas': [
                'NodeJS'
            ]
        }
    ],
    'campers': [
        {
            'id': 1,
            'estado': 'Cursando',
            'riesgo': 'Medio',
            'nombres': 'Mateo',
            'apellidos': 'Roman Camargo',
            'direccion': 'Calle 60 #1-111',
            'telefono': '316 236 5244',
            'acudiente': {
                'nombres': 'Juana',
                'apellidos': 'Camargo Padilla',
                'telefono': '312 769 8694'
            },
            'jornada': 1
        },
        {
            'id': 2,
            'estado': 'Cursando',
            'riesgo': 'Medio',
            'nombres': 'Valeria',
            'apellidos': 'Martinez Lopez',
            'direccion': 'Carrera 15 #45-78',
            'telefono': '310 987 6543',
            'acudiente': {
                'nombres': 'Carlos Manuel',
                'apellidos': 'Martinez Ortiz',
                'telefono': '315 847 0926'
            },
            'jornada': 4
        },
        {
            'id': 3,
            'estado': 'Cursando',
            'riesgo': 'Bajo',
            'nombres': 'Santiago',
            'apellidos': 'Gomez Herrera',
            'direccion': 'Calle 22 #18-50',
            'telefono': '315 765 4321',
            'acudiente': {
                'nombres': 'Lara Manuela',
                'apellidos': 'Herrera Quesada',
                'telefono': '320 563 6623'
            },
            'jornada': 3
        },
        {
            'id': 4,
            'estado': 'Retirado',
            'riesgo': 'Bajo',
            'nombres': 'Camila Alejandra',
            'apellidos': 'Rodriguez Pena',
            'direccion': 'Avenida 9 #100-23',
            'telefono': '317 852 9634',
            'acudiente': {
                'nombres': 'Andres',
                'apellidos': 'Pena Jaramillo',
                'telefono': '315 847 0926'
            },
            'jornada': 4
        },
        {
            'id': 5,
            'estado': 'Cursando',
            'riesgo': 'Alto',
            'nombres': 'Andres',
            'apellidos': 'Fernandez Castro',
            'direccion': 'Diagonal 30 #12-89',
            'telefono': '312 369 7412',
            'acudiente': {
                'nombres': 'Marta Daniela',
                'apellidos': 'Castro Mejia',
                'telefono': '315 847 0926'
            },
            'jornada': 3
        },
        {
            'id': 6,
            'estado': 'Cursando',
            'riesgo': 'Bajo',
            'nombres': 'Lucas',
            'apellidos': 'Fernandez Perez',
            'direccion': 'Avenida 5 #20-45',
            'telefono': '311 456 7890',
            'acudiente': {
                'nombres': 'Maria',
                'apellidos': 'Perez Gonzalez',
                'telefono': '320 123 4567'
            },
            'jornada': 1
        },
        {
            'id': 7,
            'estado': 'Cursando',
            'riesgo': 'Medio',
            'nombres': 'Camila',
            'apellidos': 'Garcia Lopez',
            'direccion': 'Calle 10 #15-30',
            'telefono': '312 654 7890',
            'acudiente': {
                'nombres': 'Luis',
                'apellidos': 'Lopez Martinez',
                'telefono': '321 987 6543'
            },
            'jornada': 4
        },
        {
            'id': 8,
            'estado': 'Inscrito',
            'riesgo': 'Alto',
            'nombres': 'Daniel',
            'apellidos': 'Martinez Rodriguez',
            'direccion': 'Carrera 8 #12-50',
            'telefono': '313 789 4561',
            'acudiente': {
                'nombres': 'Claudia',
                'apellidos': 'Rodriguez Fernandez',
                'telefono': '322 654 3210'
            },
            'jornada': 1
        },
        {
            'id': 9,
            'estado': 'Cursando',
            'riesgo': 'Bajo',
            'nombres': 'Sofia',
            'apellidos': 'Hernandez Gomez',
            'direccion': 'Avenida 9 #30-22',
            'telefono': '314 987 1234',
            'acudiente': {
                'nombres': 'Carlos',
                'apellidos': 'Gomez Torres',
                'telefono': '323 321 7654'
            },
            'jornada': 4
        },
        {
            'id': 10,
            'estado': 'Retirado',
            'riesgo': 'Alto',
            'nombres': 'Mateo',
            'apellidos': 'Ramirez Diaz',
            'direccion': 'Calle 25 #18-60',
            'telefono': '315 654 7891',
            'acudiente': {
                'nombres': 'Laura',
                'apellidos': 'Diaz Perez',
                'telefono': '324 987 4321'
            },
            'jornada': 2
        },
        {
            'id': 11,
            'estado': 'Cursando',
            'riesgo': 'Medio',
            'nombres': 'Isabela',
            'apellidos': 'Torres Vargas',
            'direccion': 'Carrera 12 #45-78',
            'telefono': '316 987 6543',
            'acudiente': {
                'nombres': 'Jorge',
                'apellidos': 'Vargas Hernandez',
                'telefono': '325 123 7890'
            },
            'jornada': 3
        },
        {
            'id': 12,
            'estado': 'En proceso de ingreso',
            'riesgo': 'Bajo',
            'nombres': 'Emilia',
            'apellidos': 'Moreno Castro',
            'direccion': 'Avenida 7 #14-32',
            'telefono': '317 654 1234'
        },
        {
            'id': 13,
            'estado': 'Cursando',
            'riesgo': 'Medio',
            'nombres': 'Sebastian',
            'apellidos': 'Gutierrez Rivas',
            'direccion': 'Calle 14 #9-17',
            'telefono': '318 321 9876',
            'acudiente': {
                'nombres': 'Ricardo',
                'apellidos': 'Rivas Gonzalez',
                'telefono': '327 456 7890'
            },
            'jornada': 4
        },
        {
            'id': 14,
            'estado': 'Cursando',
            'riesgo': 'Bajo',
            'nombres': 'Lucia',
            'apellidos': 'Navarro Salazar',
            'direccion': 'Carrera 3 #11-25',
            'telefono': '319 654 7890',
            'acudiente': {
                'nombres': 'Andres',
                'apellidos': 'Salazar Martinez',
                'telefono': '328 987 1234'
            },
            'jornada': 2
        },
        {
            'id': 15,
            'estado': 'Cursando',
            'riesgo': 'Alto',
            'nombres': 'Valentina',
            'apellidos': 'Ortiz Morales',
            'direccion': 'Calle 6 #18-50',
            'telefono': '320 987 6543',
            'acudiente': {
                'nombres': 'Manuel',
                'apellidos': 'Morales Perez',
                'telefono': '329 123 4567'
            },
            'jornada': 2
        },
        {
            'id': 16,
            'estado': 'Cursando',
            'riesgo': 'Bajo',
            'nombres': 'Tomas',
            'apellidos': 'Ruiz Delgado',
            'direccion': 'Avenida 12 #22-34',
            'telefono': '321 654 3210',
            'acudiente': {
                'nombres': 'Gabriela',
                'apellidos': 'Delgado Hernandez',
                'telefono': '330 987 6543'
            },
            'jornada': 2
        },
        {
            'id': 17,
            'estado': 'Retirado',
            'riesgo': 'Bajo',
            'nombres': 'Renata',
            'apellidos': 'Jimenez Castillo',
            'direccion': 'Calle 8 #13-40',
            'telefono': '322 789 4561',
            'acudiente': {
                'nombres': 'Felipe',
                'apellidos': 'Castillo Gonzalez',
                'telefono': '331 654 7890'
            },
            'jornada': 3
        },
        {
            'id': 18,
            'estado': 'Cursando',
            'riesgo': 'Alto',
            'nombres': 'Gabriel',
            'apellidos': 'Mendoza Cardenas',
            'direccion': 'Carrera 5 #25-67',
            'telefono': '323 987 1234',
            'acudiente': {
                'nombres': 'Diana',
                'apellidos': 'Cardenas Martinez',
                'telefono': '332 321 9876'
            },
            'jornada': 2
        },
        {
            'id': 19,
            'estado': 'En proceso de ingreso',
            'riesgo': 'Bajo',
            'nombres': 'Antonella',
            'apellidos': 'Serrano Perez',
            'direccion': 'Avenida 14 #19-60'
        },
        {
            'id': 20,
            'estado': 'Cursando',
            'riesgo': 'Bajo',
            'nombres': 'Martin',
            'apellidos': 'Vega Herrera',
            'direccion': 'Calle 11 #17-45',
            'telefono': '325 123 7894',
            'acudiente': {
                'nombres': 'Elena',
                'apellidos': 'Herrera Gonzalez',
                'telefono': '334 654 1230'
            },
            'jornada': 4
        },
        {
            'id': 21,
            'estado': 'En proceso de ingreso',
            'riesgo': 'Bajo',
            'nombres': 'Dante',
            'apellidos': 'Salamanca'
        },
        {
            'id': 22,
            'estado': 'Aprobado',
            'riesgo': 'Bajo',
            'nombres': 'Aura Camila',
            'apellidos': 'Pico Araque',
            'direccion': 'Calle 11b#56 - 6',
            'acudiente': {
                'nombres': 'Manuela',
                'apellidos': 'Pico Garcia',
                'telefono': '316 638 6372'
            },
            'jornada': 1
        },
        {
            'id': 23,
            'estado': 'Aprobado',
            'riesgo': 'Bajo',
            'nombres': 'Mateo',
            'apellidos': 'Fernandez Lopez',
            'direccion': 'Calle 17 #42-48',
            'telefono': '320 282 8773',
            'acudiente': {
                'nombres': 'Patricia',
                'apellidos': 'Herrera Castillo',
                'telefono': '302 530 3767'
            },
            'jornada': 3
        },
        {
            'id': 24,
            'estado': 'Aprobado',
            'riesgo': 'Alto',
            'nombres': 'Mateo',
            'apellidos': 'Torres Lopez',
            'direccion': 'Calle 27 #4-71',
            'telefono': '313 970 7040',
            'acudiente': {
                'nombres': 'Ana',
                'apellidos': 'Rios Mejia',
                'telefono': '308 817 3119'
            },
            'jornada': 3
        },
        {
            'id': 25,
            'estado': 'Expulsado',
            'riesgo': 'Bajo',
            'nombres': 'Isabella',
            'apellidos': 'Fernandez Martinez',
            'direccion': 'Calle 75 #45-88',
            'telefono': '300 331 7302',
            'acudiente': {
                'nombres': 'Luis',
                'apellidos': 'Padilla Camargo',
                'telefono': '303 506 7598'
            },
            'jornada': 2
        },
        {
            'id': 26,
            'estado': 'Aprobado',
            'riesgo': 'Bajo',
            'nombres': 'Sebastian',
            'apellidos': 'Gomez Torres',
            'direccion': 'Calle 58 #24-46',
            'telefono': '311 213 9148',
            'acudiente': {
                'nombres': 'Carlos',
                'apellidos': 'Mejia Castillo',
                'telefono': '311 876 1010'
            },
            'jornada': 4
        },
        {
            'id': 27,
            'estado': 'Retirado',
            'riesgo': 'Alto',
            'nombres': 'Isabella',
            'apellidos': 'Rodriguez Lopez',
            'direccion': 'Calle 32 #19-45',
            'telefono': '303 459 5417',
            'acudiente': {
                'nombres': 'Carlos',
                'apellidos': 'Padilla Ortiz',
                'telefono': '310 587 7868'
            },
            'jornada': 3
        },
        {
            'id': 28,
            'estado': 'Inscrito',
            'riesgo': 'Bajo',
            'nombres': 'Alejandro',
            'apellidos': 'Lopez Fernandez',
            'direccion': 'Calle 41 #47-91',
            'telefono': '311 416 3149',
            'acudiente': {
                'nombres': 'Juana',
                'apellidos': 'Camargo Mejia',
                'telefono': '304 922 3155'
            },
            'jornada': 2
        },
        {
            'id': 29,
            'estado': 'Aprobado',
            'riesgo': 'Medio',
            'nombres': 'Juan',
            'apellidos': 'Diaz Martinez',
            'direccion': 'Calle 92 #27-47',
            'telefono': '306 649 7318',
            'acudiente': {
                'nombres': 'Juana',
                'apellidos': 'Camargo Ortiz',
                'telefono': '317 234 5438'
            },
            'jornada': 4
        },
        {
            'id': 30,
            'estado': 'Aprobado',
            'riesgo': 'Alto',
            'nombres': 'Mariana',
            'apellidos': 'Martinez Gomez',
            'direccion': 'Calle 80 #6-8',
            'telefono': '320 848 6878',
            'acudiente': {
                'nombres': 'Carlos',
                'apellidos': 'Camargo Mendoza',
                'telefono': '319 731 1041'
            },
            'jornada': 4
        },
        {
            'id': 31,
            'estado': 'Aprobado',
            'riesgo': 'Medio',
            'nombres': 'Mariana',
            'apellidos': 'Gomez Ramirez',
            'direccion': 'Calle 68 #28-91',
            'telefono': '318 519 9596',
            'acudiente': {
                'nombres': 'Marta',
                'apellidos': 'Salazar Ortiz',
                'telefono': '307 865 3796'
            },
            'jornada': 2
        },
        {
            'id': 32,
            'estado': 'Inscrito',
            'riesgo': 'Alto',
            'nombres': 'Sofia',
            'apellidos': 'Martinez Torres',
            'direccion': 'Calle 93 #14-32',
            'telefono': '301 906 4457',
            'acudiente': {
                'nombres': 'Patricia',
                'apellidos': 'Mendoza Rios',
                'telefono': '304 819 5306'
            },
            'jornada': 3
        },
        {
            'id': 33,
            'estado': 'Expulsado',
            'riesgo': 'Medio',
            'nombres': 'Daniel',
            'apellidos': 'Fernandez Lopez',
            'direccion': 'Calle 37 #30-38',
            'telefono': '306 561 7760',
            'acudiente': {
                'nombres': 'Patricia',
                'apellidos': 'Vargas Mejia',
                'telefono': '314 257 7786'
            },
            'jornada': 4
        },
        {
            'id': 34,
            'estado': 'Retirado',
            'riesgo': 'Bajo',
            'nombres': 'Alejandro',
            'apellidos': 'Lopez Fernandez',
            'direccion': 'Calle 71 #46-95',
            'telefono': '320 225 3256',
            'acudiente': {
                'nombres': 'Fernando',
                'apellidos': 'Salazar Herrera',
                'telefono': '304 474 2459'
            },
            'jornada': 3
        },
        {
            'id': 35,
            'estado': 'Retirado',
            'riesgo': 'Medio',
            'nombres': 'Sebastian',
            'apellidos': 'Fernandez Lopez',
            'direccion': 'Calle 49 #20-48',
            'telefono': '301 419 9801',
            'acudiente': {
                'nombres': 'Marta',
                'apellidos': 'Salazar Salazar',
                'telefono': '300 941 4617'
            },
            'jornada': 3
        },
        {
            'id': 36,
            'estado': 'Retirado',
            'riesgo': 'Medio',
            'nombres': 'Valeria',
            'apellidos': 'Diaz Torres',
            'direccion': 'Calle 52 #18-58',
            'telefono': '312 644 7119',
            'acudiente': {
                'nombres': 'Patricia',
                'apellidos': 'Castillo Vargas',
                'telefono': '308 270 4992'
            },
            'jornada': 2
        },
        {
            'id': 37,
            'estado': 'Aprobado',
            'riesgo': 'Alto',
            'nombres': 'Mateo',
            'apellidos': 'Lopez Rodriguez',
            'direccion': 'Calle 36 #5-58',
            'telefono': '311 124 9601',
            'acudiente': {
                'nombres': 'Juana',
                'apellidos': 'Castillo Salazar',
                'telefono': '320 812 3095'
            },
            'jornada': 1
        },
        {
            'id': 38,
            'estado': 'Retirado',
            'riesgo': 'Alto',
            'nombres': 'Camila',
            'apellidos': 'Diaz Fernandez',
            'direccion': 'Calle 20 #1-84',
            'telefono': '304 372 9765',
            'acudiente': {
                'nombres': 'Javier',
                'apellidos': 'Mendoza Salazar',
                'telefono': '315 930 7231'
            },
            'jornada': 2
        },
        {
            'id': 39,
            'estado': 'Aprobado',
            'riesgo': 'Medio',
            'nombres': 'Sofia',
            'apellidos': 'Garcia Diaz',
            'direccion': 'Calle 8 #31-2',
            'telefono': '301 577 4147',
            'acudiente': {
                'nombres': 'Clara',
                'apellidos': 'Vargas Padilla',
                'telefono': '302 300 7639'
            },
            'jornada': 1
        },
        {
            'id': 40,
            'estado': 'En proceso de ingreso',
            'riesgo': 'Medio',
            'nombres': 'Daniel',
            'apellidos': 'Gomez Garcia',
            'direccion': 'Calle 48 #13-41',
            'telefono': '308 397 2587',
            'acudiente': {
                'nombres': 'Marta',
                'apellidos': 'Castillo Mendoza',
                'telefono': '314 705 4093'
            }
        },
        {
            'id': 41,
            'estado': 'Retirado',
            'riesgo': 'Medio',
            'nombres': 'Valeria',
            'apellidos': 'Torres Garcia',
            'direccion': 'Calle 90 #3-75',
            'telefono': '308 865 9712',
            'acudiente': {
                'nombres': 'Carlos',
                'apellidos': 'Camargo Vargas',
                'telefono': '305 875 1058'
            },
            'jornada': 3
        },
        {
            'id': 42,
            'estado': 'Aprobado',
            'riesgo': 'Medio',
            'nombres': 'Alejandro',
            'apellidos': 'Ramirez Garcia',
            'direccion': 'Calle 39 #17-100',
            'telefono': '301 490 7728',
            'acudiente': {
                'nombres': 'Patricia',
                'apellidos': 'Herrera Mendoza',
                'telefono': '300 717 7839'
            },
            'jornada': 1
        },
        {
            'id': 43,
            'estado': 'En proceso de ingreso',
            'riesgo': 'Medio',
            'nombres': 'Valeria',
            'apellidos': 'Torres Martinez',
            'direccion': 'Calle 78 #27-51',
            'telefono': '302 430 4485'
        },
        {
            'id': 44,
            'estado': 'En proceso de ingreso',
            'riesgo': 'Bajo',
            'nombres': 'Sofia',
            'apellidos': 'Lopez Gomez',
            'direccion': 'Calle 25 #34-29',
            'telefono': '300 126 3720',
            'acudiente': {
                'nombres': 'Patricia',
                'apellidos': 'Padilla Mejia',
                'telefono': '315 787 3564'
            }
        },
        {
            'id': 45,
            'estado': 'Inscrito',
            'riesgo': 'Bajo',
            'nombres': 'Alejandro',
            'apellidos': 'Gomez Garcia',
            'direccion': 'Calle 4 #48-88',
            'telefono': '307 309 1280',
            'acudiente': {
                'nombres': 'Clara',
                'apellidos': 'Mejia Herrera',
                'telefono': '305 390 1718'
            },
            'jornada': 2
        },
        {
            'id': 46,
            'estado': 'En proceso de ingreso',
            'riesgo': 'Bajo',
            'nombres': 'Sofia',
            'apellidos': 'Rodriguez Ramirez',
            'direccion': 'Calle 83 #12-97'
        },
        {
            'id': 47,
            'estado': 'Aprobado',
            'riesgo': 'Bajo',
            'nombres': 'Mariana',
            'apellidos': 'Torres Rodriguez',
            'direccion': 'Calle 94 #48-88',
            'telefono': '308 313 4019',
            'acudiente': {
                'nombres': 'Luis',
                'apellidos': 'Salazar Vargas',
                'telefono': '314 255 2949'
            },
            'jornada': 1
        },
        {
            'id': 48,
            'estado': 'Aprobado',
            'riesgo': 'Medio',
            'nombres': 'Camila',
            'apellidos': 'Diaz Gomez',
            'direccion': 'Calle 14 #30-40',
            'telefono': '304 482 5843',
            'acudiente': {
                'nombres': 'Carlos',
                'apellidos': 'Mendoza Mendoza',
                'telefono': '313 212 5945'
            },
            'jornada': 3
        },
        {
            'id': 49,
            'estado': 'Inscrito',
            'riesgo': 'Medio',
            'nombres': 'Isabella',
            'apellidos': 'Perez Diaz',
            'direccion': 'Calle 5 #8-58',
            'telefono': '302 824 7202',
            'acudiente': {
                'nombres': 'Clara',
                'apellidos': 'Rios Vargas',
                'telefono': '309 767 8964'
            },
            'jornada': 1
        },
        {
            'id': 50,
            'estado': 'Inscrito',
            'riesgo': 'Alto',
            'nombres': 'Juan',
            'apellidos': 'Gomez Martinez',
            'direccion': 'Calle 24 #48-64',
            'telefono': '303 160 6053',
            'acudiente': {
                'nombres': 'Clara',
                'apellidos': 'Camargo Camargo',
                'telefono': '318 987 1904'
            },
            'jornada': 4
        },
        {
            'id': 51,
            'estado': 'Aprobado',
            'riesgo': 'Alto',
            'nombres': 'Sofia',
            'apellidos': 'Martinez Martinez',
            'direccion': 'Calle 87 #5-30',
            'telefono': '317 219 5752',
            'acudiente': {
                'nombres': 'Juana',
                'apellidos': 'Rios Padilla',
                'telefono': '306 760 3133'
            },
            'jornada': 1
        },
        {
            'id': 52,
            'estado': 'Aprobado',
            'riesgo': 'Bajo',
            'nombres': 'Sofia',
            'apellidos': 'Rodriguez Perez',
            'direccion': 'Calle 61 #6-14',
            'telefono': '304 827 6877',
            'acudiente': {
                'nombres': 'Ana',
                'apellidos': 'Rios Mejia',
                'telefono': '314 599 8858'
            },
            'jornada': 1
        },
        {
            'id': 53,
            'estado': 'Aprobado',
            'riesgo': 'Medio',
            'nombres': 'Mariana',
            'apellidos': 'Rodriguez Martinez',
            'direccion': 'Calle 53 #26-51',
            'telefono': '315 420 9008',
            'acudiente': {
                'nombres': 'Ana',
                'apellidos': 'Castillo Vargas',
                'telefono': '301 765 3295'
            },
            'jornada': 4
        },
        {
            'id': 54,
            'estado': 'Aprobado',
            'riesgo': 'Medio',
            'nombres': 'Sofia',
            'apellidos': 'Gomez Fernandez',
            'direccion': 'Calle 10 #47-93',
            'telefono': '320 493 9473',
            'acudiente': {
                'nombres': 'Carlos',
                'apellidos': 'Vargas Mendoza',
                'telefono': '315 482 3831'
            },
            'jornada': 2
        },
        {
            'id': 55,
            'estado': 'Aprobado',
            'riesgo': 'Bajo',
            'nombres': 'Mateo',
            'apellidos': 'Martinez Martinez',
            'direccion': 'Calle 88 #4-25',
            'telefono': '312 989 9467',
            'acudiente': {
                'nombres': 'Javier',
                'apellidos': 'Camargo Mendoza',
                'telefono': '301 242 4027'
            },
            'jornada': 3
        },
        {
            'id': 56,
            'estado': 'Aprobado',
            'riesgo': 'Medio',
            'nombres': 'Mateo',
            'apellidos': 'Torres Martinez',
            'direccion': 'Calle 97 #33-72',
            'telefono': '312 405 4741',
            'acudiente': {
                'nombres': 'Javier',
                'apellidos': 'Vargas Ortiz',
                'telefono': '316 776 5336'
            },
            'jornada': 2
        },
        {
            'id': 57,
            'estado': 'Graduado',
            'riesgo': 'Bajo',
            'nombres': 'Isabella',
            'apellidos': 'Perez Lopez',
            'direccion': 'Calle 38 #44-24',
            'telefono': '308 815 1802',
            'acudiente': {
                'nombres': 'Ana',
                'apellidos': 'Vargas Mendoza',
                'telefono': '311 313 6862'
            },
            'jornada': 2
        },
        {
            'id': 58,
            'estado': 'Aprobado',
            'riesgo': 'Bajo',
            'nombres': 'Valeria',
            'apellidos': 'Perez Lopez',
            'direccion': 'Calle 53 #47-13',
            'telefono': '301 545 6631',
            'acudiente': {
                'nombres': 'Ana',
                'apellidos': 'Salazar Rios',
                'telefono': '304 887 2857'
            },
            'jornada': 4
        },
        {
            'id': 59,
            'estado': 'Aprobado',
            'riesgo': 'Medio',
            'nombres': 'Sebastian',
            'apellidos': 'Fernandez Gomez',
            'direccion': 'Calle 49 #35-9',
            'telefono': '301 220 3953',
            'acudiente': {
                'nombres': 'Ana',
                'apellidos': 'Mejia Rios',
                'telefono': '320 834 5243'
            },
            'jornada': 4
        },
        {
            'id': 60,
            'estado': 'Graduado',
            'riesgo': 'Bajo',
            'nombres': 'Daniel',
            'apellidos': 'Ramirez Ramirez',
            'direccion': 'Calle 7 #21-55',
            'telefono': '305 395 2576',
            'acudiente': {
                'nombres': 'Javier',
                'apellidos': 'Herrera Padilla',
                'telefono': '302 281 4468'
            },
            'jornada': 4
        },
        {
            'id': 61,
            'estado': 'Expulsado',
            'riesgo': 'Alto',
            'nombres': 'Sofia',
            'apellidos': 'Ramirez Martinez',
            'direccion': 'Calle 49 #50-20',
            'telefono': '315 343 9525',
            'acudiente': {
                'nombres': 'Marta',
                'apellidos': 'Mejia Ortiz',
                'telefono': '305 383 8984'
            },
            'jornada': 1
        },
        {
            'id': 62,
            'estado': 'Aprobado',
            'riesgo': 'Alto',
            'nombres': 'Alejandro',
            'apellidos': 'Perez Perez',
            'direccion': 'Calle 68 #44-17',
            'telefono': '315 255 2875',
            'acudiente': {
                'nombres': 'Patricia',
                'apellidos': 'Padilla Salazar',
                'telefono': '303 278 5197'
            },
            'jornada': 1
        },
        {
            'id': 63,
            'estado': 'Aprobado',
            'riesgo': 'Medio',
            'nombres': 'Alejandro',
            'apellidos': 'Fernandez Lopez',
            'direccion': 'Calle 62 #28-87',
            'telefono': '302 204 8468',
            'acudiente': {
                'nombres': 'Ana',
                'apellidos': 'Herrera Camargo',
                'telefono': '312 644 7863'
            },
            'jornada': 4
        },
        {
            'id': 64,
            'estado': 'Aprobado',
            'riesgo': 'Bajo',
            'nombres': 'Valeria',
            'apellidos': 'Ramirez Diaz',
            'direccion': 'Calle 46 #13-90',
            'telefono': '310 831 1557',
            'acudiente': {
                'nombres': 'Fernando',
                'apellidos': 'Rios Vargas',
                'telefono': '318 120 1373'
            },
            'jornada': 4
        },
        {
            'id': 65,
            'estado': 'Aprobado',
            'riesgo': 'Alto',
            'nombres': 'Camila',
            'apellidos': 'Ramirez Diaz',
            'direccion': 'Calle 35 #41-41',
            'telefono': '320 262 9740',
            'acudiente': {
                'nombres': 'Javier',
                'apellidos': 'Mejia Mendoza',
                'telefono': '307 852 8372'
            },
            'jornada': 1
        },
        {
            'id': 66,
            'estado': 'Aprobado',
            'riesgo': 'Bajo',
            'nombres': 'Mariana',
            'apellidos': 'Fernandez Martinez',
            'direccion': 'Calle 57 #13-45',
            'telefono': '302 541 7983',
            'acudiente': {
                'nombres': 'Carlos',
                'apellidos': 'Camargo Vargas',
                'telefono': '309 812 1308'
            },
            'jornada': 3
        },
        {
            'id': 67,
            'estado': 'Inscrito',
            'riesgo': 'Alto',
            'nombres': 'Juan',
            'apellidos': 'Gomez Fernandez',
            'direccion': 'Calle 51 #34-78',
            'telefono': '309 476 1293',
            'acudiente': {
                'nombres': 'Marta',
                'apellidos': 'Salazar Padilla',
                'telefono': '304 382 9070'
            },
            'jornada': 4
        },
        {
            'id': 68,
            'estado': 'En proceso de ingreso',
            'riesgo': 'Medio',
            'nombres': 'Sofia',
            'apellidos': 'Diaz Gomez',
            'direccion': 'Calle 66 #12-38',
            'telefono': '319 457 4193'
        },
        {
            'id': 69,
            'estado': 'Aprobado',
            'riesgo': 'Medio',
            'nombres': 'Camila',
            'apellidos': 'Garcia Fernandez',
            'direccion': 'Calle 70 #43-24',
            'telefono': '319 114 6485',
            'acudiente': {
                'nombres': 'Luis',
                'apellidos': 'Camargo Camargo',
                'telefono': '307 492 6296'
            },
            'jornada': 2
        },
        {
            'id': 70,
            'estado': 'En proceso de ingreso',
            'riesgo': 'Medio',
            'nombres': 'Mateo',
            'apellidos': 'Gomez Diaz',
            'direccion': 'Calle 100 #15-84',
            'telefono': '318 361 7950',
            'acudiente': {
                'nombres': 'Luis',
                'apellidos': 'Herrera Castillo',
                'telefono': '307 365 5664'
            }
        },
        {
            'id': 71,
            'estado': 'Aprobado',
            'riesgo': 'Bajo',
            'nombres': 'Isabella',
            'apellidos': 'Ramirez Diaz',
            'direccion': 'Calle 68 #20-61',
            'telefono': '314 998 4078',
            'acudiente': {
                'nombres': 'Patricia',
                'apellidos': 'Vargas Rios',
                'telefono': '314 609 3929'
            },
            'jornada': 1
        },
        {
            'id': 72,
            'estado': 'Graduado',
            'riesgo': 'Alto',
            'nombres': 'Juan',
            'apellidos': 'Lopez Torres',
            'direccion': 'Calle 63 #50-80',
            'telefono': '308 699 6551',
            'acudiente': {
                'nombres': 'Patricia',
                'apellidos': 'Ortiz Vargas',
                'telefono': '317 732 4994'
            },
            'jornada': 1
        },
        {
            'id': 73,
            'estado': 'Expulsado',
            'riesgo': 'Medio',
            'nombres': 'Mateo',
            'apellidos': 'Garcia Diaz',
            'direccion': 'Calle 55 #2-51',
            'telefono': '310 397 9360',
            'acudiente': {
                'nombres': 'Juana',
                'apellidos': 'Vargas Salazar',
                'telefono': '316 463 7317'
            },
            'jornada': 4
        },
        {
            'id': 74,
            'estado': 'En proceso de ingreso',
            'riesgo': 'Medio',
            'nombres': 'Camila',
            'apellidos': 'Diaz Rodriguez',
            'direccion': 'Calle 17 #38-33'
        },
        {
            'id': 75,
            'estado': 'Expulsado',
            'riesgo': 'Medio',
            'nombres': 'Camila',
            'apellidos': 'Torres Diaz',
            'direccion': 'Calle 83 #31-88',
            'telefono': '317 127 8678',
            'acudiente': {
                'nombres': 'Ana',
                'apellidos': 'Herrera Mejia',
                'telefono': '312 695 8400'
            },
            'jornada': 3
        },
        {
            'id': 76,
            'estado': 'Aprobado',
            'riesgo': 'Alto',
            'nombres': 'Mariana',
            'apellidos': 'Garcia Diaz',
            'direccion': 'Calle 4 #27-94',
            'telefono': '312 274 8165',
            'acudiente': {
                'nombres': 'Clara',
                'apellidos': 'Herrera Mendoza',
                'telefono': '320 757 7417'
            },
            'jornada': 2
        },
        {
            'id': 77,
            'estado': 'Inscrito',
            'riesgo': 'Medio',
            'nombres': 'Mariana',
            'apellidos': 'Gomez Garcia',
            'direccion': 'Calle 34 #32-76',
            'telefono': '308 702 7378',
            'acudiente': {
                'nombres': 'Ana',
                'apellidos': 'Herrera Rios',
                'telefono': '301 882 7954'
            },
            'jornada': 4
        },
        {
            'id': 78,
            'estado': 'Inscrito',
            'riesgo': 'Alto',
            'nombres': 'Isabella',
            'apellidos': 'Torres Martinez',
            'direccion': 'Calle 8 #19-9',
            'telefono': '301 192 2171',
            'acudiente': {
                'nombres': 'Marta',
                'apellidos': 'Herrera Padilla',
                'telefono': '308 409 8389'
            },
            'jornada': 1
        },
        {
            'id': 79,
            'estado': 'Aprobado',
            'riesgo': 'Medio',
            'nombres': 'Alejandro',
            'apellidos': 'Perez Martinez',
            'direccion': 'Calle 31 #29-72',
            'telefono': '308 464 1060',
            'acudiente': {
                'nombres': 'Clara',
                'apellidos': 'Padilla Camargo',
                'telefono': '306 879 6068'
            },
            'jornada': 2
        },
        {
            'id': 80,
            'estado': 'Expulsado',
            'riesgo': 'Medio',
            'nombres': 'Mateo',
            'apellidos': 'Diaz Diaz',
            'direccion': 'Calle 5 #42-7',
            'telefono': '303 626 7570',
            'acudiente': {
                'nombres': 'Pedro',
                'apellidos': 'Salazar Padilla',
                'telefono': '303 920 5570'
            },
            'jornada': 2
        },
        {
            'id': 81,
            'estado': 'Aprobado',
            'riesgo': 'Bajo',
            'nombres': 'Sebastian',
            'apellidos': 'Fernandez Martinez',
            'direccion': 'Calle 30 #49-22',
            'telefono': '310 382 3853',
            'acudiente': {
                'nombres': 'Marta',
                'apellidos': 'Vargas Mejia',
                'telefono': '302 272 3782'
            },
            'jornada': 4
        },
        {
            'id': 82,
            'estado': 'Graduado',
            'riesgo': 'Bajo',
            'nombres': 'Camila',
            'apellidos': 'Ramirez Torres',
            'direccion': 'Calle 54 #17-97',
            'telefono': '320 158 3836',
            'acudiente': {
                'nombres': 'Fernando',
                'apellidos': 'Salazar Mendoza',
                'telefono': '308 538 4887'
            },
            'jornada': 1
        },
        {
            'id': 83,
            'estado': 'Graduado',
            'riesgo': 'Medio',
            'nombres': 'Mariana',
            'apellidos': 'Diaz Gomez',
            'direccion': 'Calle 61 #14-24',
            'telefono': '319 236 2242',
            'acudiente': {
                'nombres': 'Luis',
                'apellidos': 'Rios Mendoza',
                'telefono': '300 550 1932'
            },
            'jornada': 4
        },
        {
            'id': 84,
            'estado': 'En proceso de ingreso',
            'riesgo': 'Medio',
            'nombres': 'Valeria',
            'apellidos': 'Torres Fernandez',
            'direccion': 'Calle 12 #3-95',
            'telefono': '310 257 9176'
        },
        {
            'id': 85,
            'estado': 'Graduado',
            'riesgo': 'Alto',
            'nombres': 'Mariana',
            'apellidos': 'Diaz Torres',
            'direccion': 'Calle 25 #29-100',
            'telefono': '306 438 4976',
            'acudiente': {
                'nombres': 'Clara',
                'apellidos': 'Padilla Mejia',
                'telefono': '316 629 3341'
            },
            'jornada': 4
        },
        {
            'id': 86,
            'estado': 'Graduado',
            'riesgo': 'Medio',
            'nombres': 'Sofia',
            'apellidos': 'Fernandez Fernandez',
            'direccion': 'Calle 66 #20-46',
            'telefono': '317 637 1016',
            'acudiente': {
                'nombres': 'Luis',
                'apellidos': 'Salazar Vargas',
                'telefono': '313 540 9379'
            },
            'jornada': 1
        },
        {
            'id': 87,
            'estado': 'Aprobado',
            'riesgo': 'Alto',
            'nombres': 'Alejandro',
            'apellidos': 'Fernandez Rodriguez',
            'direccion': 'Calle 48 #46-69',
            'telefono': '305 964 3548',
            'acudiente': {
                'nombres': 'Fernando',
                'apellidos': 'Vargas Padilla',
                'telefono': '305 166 4602'
            },
            'jornada': 1
        },
        {
            'id': 88,
            'estado': 'Expulsado',
            'riesgo': 'Medio',
            'nombres': 'Camila',
            'apellidos': 'Martinez Rodriguez',
            'direccion': 'Calle 27 #35-9',
            'telefono': '302 453 3842',
            'acudiente': {
                'nombres': 'Marta',
                'apellidos': 'Mejia Ortiz',
                'telefono': '309 835 6095'
            },
            'jornada': 3
        },
        {
            'id': 89,
            'estado': 'Inscrito',
            'riesgo': 'Medio',
            'nombres': 'Juan',
            'apellidos': 'Fernandez Garcia',
            'direccion': 'Calle 42 #6-38',
            'telefono': '318 483 6428',
            'acudiente': {
                'nombres': 'Pedro',
                'apellidos': 'Camargo Camargo',
                'telefono': '303 867 2731'
            },
            'jornada': 4
        },
        {
            'id': 90,
            'estado': 'Aprobado',
            'riesgo': 'Alto',
            'nombres': 'Isabella',
            'apellidos': 'Ramirez Lopez',
            'direccion': 'Calle 73 #33-91',
            'telefono': '315 927 1176',
            'acudiente': {
                'nombres': 'Patricia',
                'apellidos': 'Mejia Herrera',
                'telefono': '318 196 7848'
            },
            'jornada': 3
        },
        {
            'id': 91,
            'estado': 'En proceso de ingreso',
            'riesgo': 'Medio',
            'nombres': 'Alejandro',
            'apellidos': 'Garcia Garcia'
        },
        {
            'id': 92,
            'estado': 'Graduado',
            'riesgo': 'Bajo',
            'nombres': 'Mateo',
            'apellidos': 'Martinez Perez',
            'direccion': 'Calle 89 #43-36',
            'telefono': '301 756 4871',
            'acudiente': {
                'nombres': 'Luis',
                'apellidos': 'Mejia Rios',
                'telefono': '315 140 5403'
            },
            'jornada': 2
        },
        {
            'id': 93,
            'estado': 'Inscrito',
            'riesgo': 'Alto',
            'nombres': 'Isabella',
            'apellidos': 'Gomez Ramirez',
            'direccion': 'Calle 19 #27-34',
            'telefono': '311 445 4311',
            'acudiente': {
                'nombres': 'Pedro',
                'apellidos': 'Castillo Castillo',
                'telefono': '311 341 3005'
            },
            'jornada': 3
        },
        {
            'id': 94,
            'estado': 'Graduado',
            'riesgo': 'Bajo',
            'nombres': 'Mateo',
            'apellidos': 'Gomez Torres',
            'direccion': 'Calle 7 #16-87',
            'telefono': '310 376 3561',
            'acudiente': {
                'nombres': 'Patricia',
                'apellidos': 'Herrera Castillo',
                'telefono': '310 248 9997'
            },
            'jornada': 2
        },
        {
            'id': 95,
            'estado': 'Expulsado',
            'riesgo': 'Alto',
            'nombres': 'Alejandro',
            'apellidos': 'Rodriguez Rodriguez',
            'direccion': 'Calle 83 #14-66',
            'telefono': '315 513 1763',
            'acudiente': {
                'nombres': 'Clara',
                'apellidos': 'Salazar Rios',
                'telefono': '310 658 6886'
            },
            'jornada': 2
        },
        {
            'id': 96,
            'estado': 'Graduado',
            'riesgo': 'Bajo',
            'nombres': 'Alejandro',
            'apellidos': 'Garcia Lopez',
            'direccion': 'Calle 56 #14-95',
            'telefono': '313 352 8118',
            'acudiente': {
                'nombres': 'Fernando',
                'apellidos': 'Ortiz Salazar',
                'telefono': '313 252 7908'
            },
            'jornada': 2
        },
        {
            'id': 97,
            'estado': 'Graduado',
            'riesgo': 'Bajo',
            'nombres': 'Sofia',
            'apellidos': 'Fernandez Perez',
            'direccion': 'Calle 49 #31-23',
            'telefono': '300 639 2263',
            'acudiente': {
                'nombres': 'Carlos',
                'apellidos': 'Salazar Castillo',
                'telefono': '312 952 3365'
            },
            'jornada': 2
        },
        {
            'id': 98,
            'estado': 'En proceso de ingreso',
            'riesgo': 'Alto',
            'nombres': 'Sebastian',
            'apellidos': 'Diaz Rodriguez',
            'direccion': 'Calle 42 #44-81'
        },
        {
            'id': 99,
            'estado': 'Expulsado',
            'riesgo': 'Medio',
            'nombres': 'Juan',
            'apellidos': 'Ramirez Ramirez',
            'direccion': 'Calle 25 #15-92',
            'telefono': '302 200 2437',
            'acudiente': {
                'nombres': 'Ana',
                'apellidos': 'Rios Mendoza',
                'telefono': '309 537 4406'
            },
            'jornada': 2
        },
        {
            'id': 100,
            'estado': 'Graduado',
            'riesgo': 'Bajo',
            'nombres': 'Daniel',
            'apellidos': 'Fernandez Fernandez',
            'direccion': 'Calle 77 #23-3',
            'telefono': '315 832 4096',
            'acudiente': {
                'nombres': 'Patricia',
                'apellidos': 'Camargo Ortiz',
                'telefono': '304 767 2144'
            },
            'jornada': 2
        },
        {
            'id': 101,
            'estado': 'Aprobado',
            'riesgo': 'Medio',
            'nombres': 'Mateo',
            'apellidos': 'Martinez Garcia',
            'direccion': 'Calle 6 #26-51',
            'telefono': '305 185 3296',
            'acudiente': {
                'nombres': 'Fernando',
                'apellidos': 'Castillo Vargas',
                'telefono': '317 436 1982'
            },
            'jornada': 2
        },
        {
            'id': 102,
            'estado': 'Aprobado',
            'riesgo': 'Medio',
            'nombres': 'Isabella',
            'apellidos': 'Ramirez Fernandez',
            'direccion': 'Calle 77 #12-76',
            'telefono': '312 122 7225',
            'acudiente': {
                'nombres': 'Carlos',
                'apellidos': 'Mejia Salazar',
                'telefono': '312 623 9213'
            },
            'jornada': 1
        },
        {
            'id': 103,
            'estado': 'Inscrito',
            'riesgo': 'Bajo',
            'nombres': 'Juan',
            'apellidos': 'Lopez Torres',
            'direccion': 'Calle 65 #49-59',
            'telefono': '309 679 9105',
            'acudiente': {
                'nombres': 'Carlos',
                'apellidos': 'Mejia Herrera',
                'telefono': '308 253 5042'
            },
            'jornada': 4
        },
        {
            'id': 104,
            'estado': 'Aprobado',
            'riesgo': 'Bajo',
            'nombres': 'Sofia',
            'apellidos': 'Gomez Ramirez',
            'direccion': 'Calle 69 #25-29',
            'telefono': '300 180 3140',
            'acudiente': {
                'nombres': 'Clara',
                'apellidos': 'Vargas Herrera',
                'telefono': '319 289 9743'
            },
            'jornada': 2
        },
        {
            'id': 105,
            'estado': 'Aprobado',
            'riesgo': 'Bajo',
            'nombres': 'Daniel',
            'apellidos': 'Ramirez Rodriguez',
            'direccion': 'Calle 66 #33-29',
            'telefono': '318 500 2038',
            'acudiente': {
                'nombres': 'Carlos',
                'apellidos': 'Padilla Mendoza',
                'telefono': '300 300 3893'
            },
            'jornada': 1
        },
        {
            'id': 106,
            'estado': 'Expulsado',
            'riesgo': 'Medio',
            'nombres': 'Camila',
            'apellidos': 'Martinez Ramirez',
            'direccion': 'Calle 85 #26-18',
            'telefono': '302 496 2260',
            'acudiente': {
                'nombres': 'Javier',
                'apellidos': 'Salazar Rios',
                'telefono': '307 974 1029'
            },
            'jornada': 2
        },
        {
            'id': 107,
            'estado': 'Aprobado',
            'riesgo': 'Medio',
            'nombres': 'Valeria',
            'apellidos': 'Gomez Torres',
            'direccion': 'Calle 5 #47-27',
            'telefono': '310 313 2949',
            'acudiente': {
                'nombres': 'Ana',
                'apellidos': 'Castillo Ortiz',
                'telefono': '313 809 4486'
            },
            'jornada': 2
        },
        {
            'id': 108,
            'estado': 'Retirado',
            'riesgo': 'Medio',
            'nombres': 'Alejandro',
            'apellidos': 'Martinez Diaz',
            'direccion': 'Calle 73 #42-49',
            'telefono': '312 152 7603',
            'acudiente': {
                'nombres': 'Marta',
                'apellidos': 'Vargas Padilla',
                'telefono': '308 996 9074'
            },
            'jornada': 2
        },
        {
            'id': 109,
            'estado': 'En proceso de ingreso',
            'riesgo': 'Bajo',
            'nombres': 'Mariana',
            'apellidos': 'Diaz Perez',
            'direccion': 'Calle 82 #33-24',
            'telefono': '304 621 8896'
        },
        {
            'id': 110,
            'estado': 'Graduado',
            'riesgo': 'Alto',
            'nombres': 'Juan',
            'apellidos': 'Torres Fernandez',
            'direccion': 'Calle 70 #42-25',
            'telefono': '317 987 8470',
            'acudiente': {
                'nombres': 'Pedro',
                'apellidos': 'Padilla Mendoza',
                'telefono': '310 808 7332'
            },
            'jornada': 3
        },
        {
            'id': 111,
            'estado': 'Graduado',
            'riesgo': 'Bajo',
            'nombres': 'Mateo',
            'apellidos': 'Lopez Martinez',
            'direccion': 'Calle 5 #14-56',
            'telefono': '303 393 7681',
            'acudiente': {
                'nombres': 'Juana',
                'apellidos': 'Herrera Herrera',
                'telefono': '317 431 6002'
            },
            'jornada': 1
        },
        {
            'id': 112,
            'estado': 'Retirado',
            'riesgo': 'Medio',
            'nombres': 'Sebastian',
            'apellidos': 'Ramirez Lopez',
            'direccion': 'Calle 46 #27-51',
            'telefono': '315 291 3797',
            'acudiente': {
                'nombres': 'Carlos',
                'apellidos': 'Ortiz Padilla',
                'telefono': '312 440 4756'
            },
            'jornada': 4
        },
        {
            'id': 113,
            'estado': 'En proceso de ingreso',
            'riesgo': 'Medio',
            'nombres': 'Daniel',
            'apellidos': 'Gomez Perez'
        },
        {
            'id': 114,
            'estado': 'Expulsado',
            'riesgo': 'Medio',
            'nombres': 'Juan',
            'apellidos': 'Ramirez Diaz',
            'direccion': 'Calle 64 #42-15',
            'telefono': '308 583 5062',
            'acudiente': {
                'nombres': 'Luis',
                'apellidos': 'Camargo Herrera',
                'telefono': '300 499 1614'
            },
            'jornada': 1
        },
        {
            'id': 115,
            'estado': 'Expulsado',
            'riesgo': 'Medio',
            'nombres': 'Alejandro',
            'apellidos': 'Rodriguez Torres',
            'direccion': 'Calle 1 #42-5',
            'telefono': '320 467 5253',
            'acudiente': {
                'nombres': 'Ana',
                'apellidos': 'Castillo Herrera',
                'telefono': '317 519 7441'
            },
            'jornada': 3
        },
        {
            'id': 116,
            'estado': 'En proceso de ingreso',
            'riesgo': 'Bajo',
            'nombres': 'Sebastian',
            'apellidos': 'Garcia Garcia',
            'direccion': 'Calle 49 #2-87',
            'telefono': '315 896 2242',
            'acudiente': {
                'nombres': 'Clara',
                'apellidos': 'Rios Salazar',
                'telefono': '304 160 9110'
            }
        },
        {
            'id': 117,
            'estado': 'Aprobado',
            'riesgo': 'Alto',
            'nombres': 'Sofia',
            'apellidos': 'Lopez Martinez',
            'direccion': 'Calle 80 #35-74',
            'telefono': '320 915 1448',
            'acudiente': {
                'nombres': 'Juana',
                'apellidos': 'Rios Herrera',
                'telefono': '307 737 3754'
            },
            'jornada': 2
        },
        {
            'id': 118,
            'estado': 'Aprobado',
            'riesgo': 'Alto',
            'nombres': 'Camila',
            'apellidos': 'Garcia Martinez',
            'direccion': 'Calle 73 #33-84',
            'telefono': '309 447 7330',
            'acudiente': {
                'nombres': 'Ana',
                'apellidos': 'Mejia Rios',
                'telefono': '308 985 7489'
            },
            'jornada': 4
        },
        {
            'id': 119,
            'estado': 'Aprobado',
            'riesgo': 'Alto',
            'nombres': 'Sebastian',
            'apellidos': 'Perez Perez',
            'direccion': 'Calle 100 #35-41',
            'telefono': '313 706 4461',
            'acudiente': {
                'nombres': 'Patricia',
                'apellidos': 'Vargas Vargas',
                'telefono': '313 885 9677'
            },
            'jornada': 2
        },
        {
            'id': 120,
            'estado': 'Expulsado',
            'riesgo': 'Alto',
            'nombres': 'Camila',
            'apellidos': 'Gomez Perez',
            'direccion': 'Calle 48 #45-68',
            'telefono': '301 993 9536',
            'acudiente': {
                'nombres': 'Clara',
                'apellidos': 'Castillo Salazar',
                'telefono': '311 921 9276'
            },
            'jornada': 3
        },
        {
            'id': 121,
            'estado': 'Aprobado',
            'riesgo': 'Alto',
            'nombres': 'Valeria',
            'apellidos': 'Gomez Rodriguez',
            'direccion': 'Calle 83 #37-91',
            'telefono': '307 285 5910',
            'acudiente': {
                'nombres': 'Javier',
                'apellidos': 'Ortiz Castillo',
                'telefono': '304 597 8790'
            },
            'jornada': 2
        },
        {
            'id': 122,
            'estado': 'Aprobado',
            'riesgo': 'Bajo',
            'nombres': 'Alejandro',
            'apellidos': 'Perez Gomez',
            'direccion': 'Calle 85 #2-6',
            'telefono': '301 576 9663',
            'acudiente': {
                'nombres': 'Juana',
                'apellidos': 'Herrera Salazar',
                'telefono': '314 543 3260'
            },
            'jornada': 3
        },
        {
            'id': 123,
            'estado': 'Inscrito',
            'riesgo': 'Bajo',
            'nombres': 'Vladimir',
            'apellidos': 'Diaz Contreras',
            'direccion': 'Cra 12#45 - 78',
            'telefono': '314 678 4536',
            'acudiente': {
                'nombres': 'Mi Papa',
                'apellidos': 'DOS',
                'telefono': '314 675 5678'
            },
            'jornada': '2'
        },
        {
            'id': 124,
            'estado': 'Aprobado',
            'riesgo': 'Alto',
            'nombres': 'Vladimir Jose',
            'apellidos': 'Lopes Sambrano',
            'direccion': 'Calle 78 #154-1',
            'telefono': '312 564 3789',
            'acudiente': {
                'nombres': 'Luis Felipe',
                'apellidos': 'Sambrano Flores',
                'telefono': '316 682 6721'
            },
            'jornada': 2
        },
        {
            'id': 125,
            'estado': 'Aprobado',
            'riesgo': 'Medio',
            'nombres': 'Juan Fernando',
            'apellidos': 'Garcia Garcia',
            'direccion': 'Calle 32 #45-34',
            'telefono': '324 546 6598',
            'acudiente': {
                'nombres': 'Luis Jose',
                'apellidos': 'Garcia Molina',
                'telefono': '318 654 4832'
            },
            'jornada': 3
        },
        {
            'id': 126,
            'estado': 'Aprobado',
            'riesgo': 'Alto',
            'nombres': 'Sofia',
            'apellidos': 'Garcia Torres',
            'direccion': 'Calle 23 #12-34',
            'telefono': '312 345 6789',
            'acudiente': {
                'nombres': 'Luis Alberto',
                'apellidos': 'Garcia Perez',
                'telefono': '314 987 6543'
            },
            'jornada': 2
        },
        {
            'id': 127,
            'estado': 'Aprobado',
            'riesgo': 'Bajo',
            'nombres': 'Juan',
            'apellidos': 'Hernandez Cruz',
            'direccion': 'Carrera 7 #89-56',
            'telefono': '311 234 5678',
            'acudiente': {
                'nombres': 'Maria Elena',
                'apellidos': 'Cruz Lopez',
                'telefono': '317 123 4567'
            },
            'jornada': 3
        },
        {
            'id': 128,
            'estado': 'Aprobado',
            'riesgo': 'Medio',
            'nombres': 'Camila',
            'apellidos': 'Perez Ramirez',
            'direccion': 'Calle 45 #67-89',
            'telefono': '318 765 4321',
            'acudiente': {
                'nombres': 'Jose Luis',
                'apellidos': 'Perez Martinez',
                'telefono': '319 876 5432'
            },
            'jornada': 1
        },
        {
            'id': 129,
            'estado': 'Aprobado',
            'riesgo': 'Alto',
            'nombres': 'Andres',
            'apellidos': 'Gonzalez Herrera',
            'direccion': 'Carrera 10 #34-56',
            'telefono': '320 654 9870',
            'acudiente': {
                'nombres': 'Patricia',
                'apellidos': 'Herrera Diaz',
                'telefono': '321 543 6789'
            },
            'jornada': 2
        },
        {
            'id': 130,
            'estado': 'En proceso de ingreso',
            'riesgo': 'Bajo',
            'nombres': 'Isabella',
            'apellidos': 'Morales Fernandez',
            'direccion': 'Calle 12 #98-76',
            'telefono': '322 432 1098',
            'acudiente': {
                'nombres': 'Fernando',
                'apellidos': 'Fernandez Gomez',
                'telefono': '323 210 9876'
            },
            'jornada': 3
        },
        {
            'id': 131,
            'estado': 'Aprobado',
            'riesgo': 'Medio',
            'nombres': 'Sebastian',
            'apellidos': 'Vargas Perez',
            'direccion': 'Carrera 8 #56-23',
            'telefono': '324 567 8901',
            'acudiente': {
                'nombres': 'Lucia',
                'apellidos': 'Perez Ramirez',
                'telefono': '325 678 9012'
            },
            'jornada': 4
        },
        {
            'id': 132,
            'estado': 'Aprobado',
            'riesgo': 'Bajo',
            'nombres': 'Daniela',
            'apellidos': 'Lopez Martinez',
            'direccion': 'Calle 34 #56-78',
            'telefono': '326 789 0123',
            'acudiente': {
                'nombres': 'Miguel',
                'apellidos': 'Martinez Gonzalez',
                'telefono': '327 890 1234'
            },
            'jornada': 1
        },
        {
            'id': 133,
            'estado': 'Aprobado',
            'riesgo': 'Alto',
            'nombres': 'Luis',
            'apellidos': 'Ramirez Torres',
            'direccion': 'Carrera 20 #67-89',
            'telefono': '328 901 2345',
            'acudiente': {
                'nombres': 'Elena',
                'apellidos': 'Torres Garcia',
                'telefono': '329 012 3456'
            },
            'jornada': 2
        },
        {
            'id': 134,
            'estado': 'Aprobado',
            'riesgo': 'Bajo',
            'nombres': 'Zafiro Lysandra',
            'apellidos': 'Drakos Vassilis',
            'direccion': 'Avenida Solsticio #9-88',
            'telefono': '330 123 4567',
            'acudiente': {
                'nombres': 'Orfeo',
                'apellidos': 'Vassilis Kyriakos',
                'telefono': '331 234 5678'
            },
            'jornada': 3
        },
        {
            'id': 135,
            'estado': 'Aprobado',
            'riesgo': 'Medio',
            'nombres': 'Kairos',
            'apellidos': 'Azrak Nadir',
            'direccion': 'Calle Luna Nueva #12-34',
            'telefono': '332 345 6789',
            'acudiente': {
                'nombres': 'Selene',
                'apellidos': 'Nadir Elara',
                'telefono': '333 456 7890'
            },
            'jornada': 1
        },
        {
            'id': 136,
            'estado': 'Aprobado',
            'riesgo': 'Alto',
            'nombres': 'Thalia Seren',
            'apellidos': 'Omari Zephyr',
            'direccion': 'Boulevard de las Estrellas #45-67',
            'telefono': '334 567 8901',
            'acudiente': {
                'nombres': 'Ilias',
                'apellidos': 'Zephyr Anouk',
                'telefono': '335 678 9012'
            },
            'jornada': 4
        },
        {
            'id': 137,
            'estado': 'Aprobado',
            'riesgo': 'Bajo',
            'nombres': 'Eira Nyx',
            'apellidos': 'Corvin Dastan',
            'direccion': 'Sendero del Alba #78-90',
            'telefono': '336 789 0123',
            'acudiente': {
                'nombres': 'Mira',
                'apellidos': 'Dastan Fenix',
                'telefono': '337 890 1234'
            },
            'jornada': 2
        },
        {
            'id': 138,
            'estado': 'Aprobado',
            'riesgo': 'Medio',
            'nombres': 'Darian',
            'apellidos': 'Lyric Solon',
            'direccion': 'Camino de los Vientos #56-78',
            'telefono': '338 901 2345',
            'acudiente': {
                'nombres': 'Lyra',
                'apellidos': 'Solon Artem',
                'telefono': '339 012 3456'
            },
            'jornada': 3
        },
        {
            'id': 139,
            'estado': 'Aprobado',
            'riesgo': 'Bajo',
            'nombres': 'Zyra Nocturne',
            'apellidos': 'Gomez Gonzalez',
            'direccion': 'Calle Eclipse #34-56',
            'telefono': '340 123 4567',
            'acudiente': {
                'nombres': 'Draven',
                'apellidos': 'Valen Nyx',
                'telefono': '341 234 5678'
            },
            'jornada': 1
        },
        {
            'id': 140,
            'estado': 'Aprobado',
            'riesgo': 'Medio',
            'nombres': 'Orion',
            'apellidos': 'Kaelen Drax',
            'direccion': 'Avenida Aurora #78-90',
            'telefono': '342 345 6789',
            'acudiente': {
                'nombres': 'Lyric',
                'apellidos': 'Drax Elion',
                'telefono': '343 456 7890'
            },
            'jornada': 2
        },
        {
            'id': 141,
            'estado': 'Aprobado',
            'riesgo': 'Alto',
            'nombres': 'Selene Azura',
            'apellidos': 'Nyssa Valtor',
            'direccion': 'Camino de la Brisa #12-34',
            'telefono': '344 567 8901',
            'acudiente': {
                'nombres': 'Theron',
                'apellidos': 'Valtor Erebus',
                'telefono': '345 678 9012'
            },
            'jornada': 3
        },
        {
            'id': 142,
            'estado': 'Aprobado',
            'riesgo': 'Bajo',
            'nombres': 'Kieran',
            'apellidos': 'Zephyr Drakon',
            'direccion': 'Sendero Celeste #45-67',
            'telefono': '346 789 0123',
            'acudiente': {
                'nombres': 'Isolde',
                'apellidos': 'Drakon Myles',
                'telefono': '347 890 1234'
            },
            'jornada': 4
        },
        {
            'id': 143,
            'estado': 'Aprobado',
            'riesgo': 'Medio',
            'nombres': 'Aria Solenne',
            'apellidos': 'Gomez Lopez',
            'direccion': 'Boulevard del Amanecer #56-78',
            'telefono': '348 901 2345',
            'acudiente': {
                'nombres': 'Lorien',
                'apellidos': 'Caelum Drystan',
                'telefono': '349 012 3456'
            },
            'jornada': 1
        },
        {
            'id': 144,
            'estado': 'En proceso de ingreso',
            'riesgo': 'Bajo',
            'nombres': 'Caelum Thorne',
            'apellidos': 'Eros Valtan',
            'direccion': 'Calle de los Suenos #67-89',
            'telefono': '350 123 4567',
            'acudiente': {
                'nombres': 'Astra',
                'apellidos': 'Valtan Kyros',
                'telefono': '351 234 5678'
            },
            'jornada': 2
        },
        {
            'id': 145,
            'estado': 'Aprobado',
            'riesgo': 'Alto',
            'nombres': 'Lyra Thalassa',
            'apellidos': 'Caius Draven',
            'direccion': 'Vereda del Horizonte #90-12',
            'telefono': '352 345 6789',
            'acudiente': {
                'nombres': 'Orion',
                'apellidos': 'Draven Solon',
                'telefono': '353 456 7890'
            },
            'jornada': 3
        },
        {
            'id': 146,
            'estado': 'Aprobado',
            'riesgo': 'Bajo',
            'nombres': 'Ezra',
            'apellidos': 'Galadriel Zarek',
            'direccion': 'Paseo de las Nubes #23-45',
            'telefono': '354 567 8901',
            'acudiente': {
                'nombres': 'Selene',
                'apellidos': 'Zarek Fenris',
                'telefono': '355 678 9012'
            },
            'jornada': 4
        },
        {
            'id': 147,
            'estado': 'Aprobado',
            'riesgo': 'Medio',
            'nombres': 'Astra Nymeria',
            'apellidos': 'Sambrano Parra',
            'direccion': 'Calle Estelar #34-56',
            'telefono': '356 789 0123',
            'acudiente': {
                'nombres': 'Zephyr',
                'apellidos': 'Corvus Nyx',
                'telefono': '357 890 1234'
            },
            'jornada': 1
        },
        {
            'id': 148,
            'estado': 'Aprobado',
            'riesgo': 'Alto',
            'nombres': 'Thorne Elara',
            'apellidos': 'Caelum Vesper',
            'direccion': 'Avenida de la Aurora #45-67',
            'telefono': '358 901 2345',
            'acudiente': {
                'nombres': 'Lorien',
                'apellidos': 'Vesper Drakon',
                'telefono': '359 012 3456'
            },
            'jornada': 2
        },
        {
            'id': 149,
            'estado': 'Aprobado',
            'riesgo': 'Bajo',
            'nombres': 'Ezequiel',
            'apellidos': 'Montenegro Peralta',
            'direccion': 'Avenida 3 #12-45',
            'telefono': '312 456 7890',
            'acudiente': {
                'nombres': 'Ismael',
                'apellidos': 'Peralta Rios',
                'telefono': '317 890 1234'
            },
            'jornada': 2
        },
        {
            'id': 150,
            'estado': 'Aprobado',
            'riesgo': 'Alto',
            'nombres': 'Celestina',
            'apellidos': 'Obregon Villalobos',
            'direccion': 'Calle 8 #22-89',
            'telefono': '320 567 2345',
            'acudiente': {
                'nombres': 'Patricio',
                'apellidos': 'Villalobos Meza',
                'telefono': '318 765 4321'
            },
            'jornada': 3
        },
        {
            'id': 151,
            'estado': 'Aprobado',
            'riesgo': 'Alto',
            'nombres': 'Brunilda',
            'apellidos': 'Salvatierra Roldan',
            'direccion': 'Diagonal 15 #30-56',
            'telefono': '311 345 6789',
            'acudiente': {
                'nombres': 'Gregorio',
                'apellidos': 'Roldan Cuevas',
                'telefono': '319 876 5432'
            },
            'jornada': 1
        },
        {
            'id': 152,
            'estado': 'En proceso de ingreso',
            'riesgo': 'Medio',
            'nombres': 'Aniceto',
            'apellidos': 'Barrientos Cifuentes',
            'direccion': 'Transversal 45 #78-90',
            'telefono': '322 654 3210',
            'acudiente': {
                'nombres': 'Maricela',
                'apellidos': 'Cifuentes Lozano',
                'telefono': '316 543 2198'
            },
            'jornada': 4
        },
        {
            'id': 153,
            'estado': 'Aprobado',
            'riesgo': 'Bajo',
            'nombres': 'Filiberto',
            'apellidos': 'Mancilla Arevalo',
            'direccion': 'Calle 77 #5-12',
            'telefono': '315 123 4567',
            'acudiente': {
                'nombres': 'Vicente',
                'apellidos': 'Arevalo Lujan',
                'telefono': '314 987 6543'
            },
            'jornada': 1
        },
        {
            'id': 154,
            'estado': 'Aprobado',
            'riesgo': 'Medio',
            'nombres': 'Margarita',
            'apellidos': 'Quintero Beltran',
            'direccion': 'Carrera 10 #33-21',
            'telefono': '318 432 1098',
            'acudiente': {
                'nombres': 'Rogelio',
                'apellidos': 'Beltran Montes',
                'telefono': '320 678 4321'
            },
            'jornada': 2
        },
        {
            'id': 155,
            'estado': 'Aprobado',
            'riesgo': 'Bajo',
            'nombres': 'Isidoro',
            'apellidos': 'Vera Montejo',
            'direccion': 'Carrera 45 #12-34',
            'telefono': '311 567 8901',
            'acudiente': {
                'nombres': 'Clara',
                'apellidos': 'Montejo Rios',
                'telefono': '317 890 1234'
            },
            'jornada': 3
        },
        {
            'id': 156,
            'estado': 'Aprobado',
            'riesgo': 'Medio',
            'nombres': 'Aurelio',
            'apellidos': 'Palacios Ferrer',
            'direccion': 'Avenida 9 #67-89',
            'telefono': '320 654 3210',
            'acudiente': {
                'nombres': 'Norma',
                'apellidos': 'Ferrer Lopez',
                'telefono': '318 765 4321'
            },
            'jornada': 2
        },
        {
            'id': 157,
            'estado': 'Aprobado',
            'riesgo': 'Bajo',
            'nombres': 'Rufina',
            'apellidos': 'Guzman Perales',
            'direccion': 'Calle 14 #55-76',
            'telefono': '312 345 6789',
            'acudiente': {
                'nombres': 'Horacio',
                'apellidos': 'Perales Guzman',
                'telefono': '319 876 5432'
            },
            'jornada': 1
        },
        {
            'id': 158,
            'estado': 'Retirado',
            'riesgo': 'Alto',
            'nombres': 'Teodoro',
            'apellidos': 'Marquez Cordero',
            'direccion': 'Diagonal 32 #23-98',
            'telefono': '322 987 6543',
            'acudiente': {
                'nombres': 'Mariana',
                'apellidos': 'Cordero Sanchez',
                'telefono': '316 543 2198'
            },
            'jornada': 4
        },
        {
            'id': 159,
            'estado': 'Aprobado',
            'riesgo': 'Alto',
            'nombres': 'Edmundo',
            'apellidos': 'Perez Quintanilla',
            'direccion': 'Carrera 100 #45-21',
            'telefono': '315 432 1098',
            'acudiente': {
                'nombres': 'Bernarda',
                'apellidos': 'Quintanilla Lopez',
                'telefono': '320 678 4321'
            },
            'jornada': 2
        },
        {
            'id': 160,
            'estado': 'Aprobado',
            'riesgo': 'Bajo',
            'nombres': 'Elena',
            'apellidos': 'Torres Salinas',
            'direccion': 'Calle 23 #45-67',
            'telefono': '311 678 4321',
            'acudiente': {
                'nombres': 'Francisco',
                'apellidos': 'Salinas Mendez',
                'telefono': '317 890 5678'
            },
            'jornada': 3
        },
        {
            'id': 161,
            'estado': 'Aprobado',
            'riesgo': 'Medio',
            'nombres': 'Julio Cesar',
            'apellidos': 'Beltran Osorio',
            'direccion': 'Carrera 12 #78-90',
            'telefono': '320 987 6543',
            'acudiente': {
                'nombres': 'Marta',
                'apellidos': 'Osorio Delgado',
                'telefono': '318 765 1234'
            },
            'jornada': 2
        },
        {
            'id': 162,
            'estado': 'Aprobado',
            'riesgo': 'Bajo',
            'nombres': 'Valentina',
            'apellidos': 'Mendoza Arrieta',
            'direccion': 'Avenida 8 #11-22',
            'telefono': '312 234 5678',
            'acudiente': {
                'nombres': 'Roberto Carlos',
                'apellidos': 'Arrieta Munoz',
                'telefono': '319 876 4321'
            },
            'jornada': 1
        },
        {
            'id': 163,
            'estado': 'Aprobado',
            'riesgo': 'Alto',
            'nombres': 'Lorenzo',
            'apellidos': 'Pena Ramirez',
            'direccion': 'Diagonal 19 #56-78',
            'telefono': '322 789 6543',
            'acudiente': {
                'nombres': 'Esteban',
                'apellidos': 'Ramirez Pineda',
                'telefono': '316 543 2109'
            },
            'jornada': 4
        },
        {
            'id': 164,
            'estado': 'Aprobado',
            'riesgo': 'Alto',
            'nombres': 'Jose Ricardo',
            'apellidos': 'Navarro Guzman',
            'direccion': 'Carrera 50 #34-21',
            'telefono': '315 654 1098',
            'acudiente': {
                'nombres': 'Patricia',
                'apellidos': 'Guzman Herrera',
                'telefono': '320 678 9876'
            },
            'jornada': 2
        },
        {
            'id': 165,
            'estado': 'Cursando',
            'riesgo': 'Medio',
            'nombres': 'Damian Andres',
            'apellidos': 'Castaneda Lujan',
            'direccion': 'Calle 40 #12-56',
            'telefono': '311 678 9870',
            'acudiente': {
                'nombres': 'Luisa Fernanda',
                'apellidos': 'Lujan Perez',
                'telefono': '317 654 1234'
            },
            'jornada': 3
        },
        {
            'id': 166,
            'estado': 'Aprobado',
            'riesgo': 'Bajo',
            'nombres': 'Beatriz',
            'apellidos': 'Ortega Zambrano',
            'direccion': 'Carrera 17 #89-45',
            'telefono': '320 876 5432',
            'acudiente': {
                'nombres': 'Gabriel',
                'apellidos': 'Zambrano Rivas',
                'telefono': '318 345 6789'
            },
            'jornada': 2
        },
        {
            'id': 167,
            'estado': 'Aprobado',
            'riesgo': 'Alto',
            'nombres': 'Ricardo',
            'apellidos': 'Maldonado Tellez',
            'direccion': 'Diagonal 5 #78-99',
            'telefono': '312 543 2109',
            'acudiente': {
                'nombres': 'Maria Eugenia',
                'apellidos': 'Tellez Herrera',
                'telefono': '319 432 1098'
            },
            'jornada': 1
        },
        {
            'id': 168,
            'estado': 'Aprobado',
            'riesgo': 'Bajo',
            'nombres': 'Cesar Augusto',
            'apellidos': 'Rojas Escobar',
            'direccion': 'Avenida 25 #10-34',
            'telefono': '322 654 9871',
            'acudiente': {
                'nombres': 'Felipe',
                'apellidos': 'Escobar Medina',
                'telefono': '316 789 4562'
            },
            'jornada': 4
        },
        {
            'id': 169,
            'estado': 'Aprobado',
            'riesgo': 'Alto',
            'nombres': 'Javier',
            'apellidos': 'Lara Fuentes',
            'direccion': 'Carrera 77 #23-67',
            'telefono': '315 210 9876',
            'acudiente': {
                'nombres': 'Sofia',
                'apellidos': 'Fuentes Roldan',
                'telefono': '320 432 7654'
            },
            'jornada': 2
        },
        {
            'id': 170,
            'estado': 'Aprobado',
            'riesgo': 'Bajo',
            'nombres': 'Mauricio',
            'apellidos': 'Delgado Espinosa',
            'direccion': 'Calle 50 #22-11',
            'telefono': '311 234 5678',
            'acudiente': {
                'nombres': 'Gloria',
                'apellidos': 'Espinosa Rojas',
                'telefono': '317 765 4321'
            },
            'jornada': 3
        },
        {
            'id': 171,
            'estado': 'Aprobado',
            'riesgo': 'Medio',
            'nombres': 'Adriana Paola',
            'apellidos': 'Zamora Barragan',
            'direccion': 'Carrera 19 #56-78',
            'telefono': '320 876 5432',
            'acudiente': {
                'nombres': 'Luis Fernando',
                'apellidos': 'Barragan Pineda',
                'telefono': '318 345 6789'
            },
            'jornada': 2
        },
        {
            'id': 172,
            'estado': 'Aprobado',
            'riesgo': 'Bajo',
            'nombres': 'Esteban',
            'apellidos': 'Gutierrez Montoya',
            'direccion': 'Diagonal 7 #45-99',
            'telefono': '312 543 2109',
            'acudiente': {
                'nombres': 'Ana Patricia',
                'apellidos': 'Montoya Herrera',
                'telefono': '319 432 1098'
            },
            'jornada': 1
        },
        {
            'id': 173,
            'estado': 'Aprobado',
            'riesgo': 'Alto',
            'nombres': 'Carmen Elena',
            'apellidos': 'Molina Cardenas',
            'direccion': 'Avenida 33 #10-34',
            'telefono': '322 654 9871',
            'acudiente': {
                'nombres': 'Javier',
                'apellidos': 'Cardenas Medina',
                'telefono': '316 789 4562'
            },
            'jornada': 4
        },
        {
            'id': 174,
            'estado': 'Aprobado',
            'riesgo': 'Alto',
            'nombres': 'Fernando',
            'apellidos': 'Castano Rivas',
            'direccion': 'Carrera 80 #23-67',
            'telefono': '315 210 9876',
            'acudiente': {
                'nombres': 'Margarita',
                'apellidos': 'Rivas Guzman',
                'telefono': '320 432 7654'
            },
            'jornada': 2
        },
        {
            'id': 175,
            'estado': 'Aprobado',
            'riesgo': 'Bajo',
            'nombres': 'Ismael',
            'apellidos': 'Velasco Quiroga',
            'direccion': 'Calle 12 #45-67',
            'telefono': '311 234 5678',
            'acudiente': {
                'nombres': 'Camila',
                'apellidos': 'Quiroga Mendoza',
                'telefono': '317 765 4321'
            },
            'jornada': 3
        },
        {
            'id': 176,
            'estado': 'Cursando',
            'riesgo': 'Medio',
            'nombres': 'Magdalena Alejandra',
            'apellidos': 'Soto Beltran',
            'direccion': 'Carrera 30 #56-89',
            'telefono': '320 876 5432',
            'acudiente': {
                'nombres': 'Gustavo',
                'apellidos': 'Beltran Pineda',
                'telefono': '318 345 6789'
            },
            'jornada': 2
        },
        {
            'id': 177,
            'estado': 'Cursando',
            'riesgo': 'Alto',
            'nombres': 'Rodrigo',
            'apellidos': 'Herrera Londono',
            'direccion': 'Diagonal 9 #78-90',
            'telefono': '312 543 2109',
            'acudiente': {
                'nombres': 'Patricia',
                'apellidos': 'Londono Zapata',
                'telefono': '319 432 1098'
            },
            'jornada': 1
        },
        {
            'id': 178,
            'estado': 'Retirado',
            'riesgo': 'Alto',
            'nombres': 'Andrea Carolina',
            'apellidos': 'Mejia Suarez',
            'direccion': 'Avenida 15 #34-56',
            'telefono': '322 654 9871',
            'acudiente': {
                'nombres': 'Fernando',
                'apellidos': 'Suarez Medina',
                'telefono': '316 789 4562'
            },
            'jornada': 4
        },
        {
            'id': 179,
            'estado': 'Cursando',
            'riesgo': 'Alto',
            'nombres': 'Guillermo',
            'apellidos': 'Ortega Ramirez',
            'direccion': 'Carrera 85 #12-34',
            'telefono': '315 210 9876',
            'acudiente': {
                'nombres': 'Raquel',
                'apellidos': 'Ramirez Herrera',
                'telefono': '320 432 7654'
            },
            'jornada': 2
        },
        {
            'id': 180,
            'estado': 'Aprobado',
            'riesgo': 'Bajo',
            'nombres': 'Leandro',
            'apellidos': 'Bustamante Rivas',
            'direccion': 'Calle 22 #34-56',
            'telefono': '311 456 7890',
            'acudiente': {
                'nombres': 'Eulalia',
                'apellidos': 'Rivas Padilla',
                'telefono': '317 654 3210'
            },
            'jornada': 3
        },
        {
            'id': 181,
            'estado': 'Aprobado',
            'riesgo': 'Medio',
            'nombres': 'Rosalia Fernanda',
            'apellidos': 'Quintero Salgado',
            'direccion': 'Carrera 10 #78-90',
            'telefono': '320 765 4321',
            'acudiente': {
                'nombres': 'Marcelo',
                'apellidos': 'Salgado Herrera',
                'telefono': '318 234 5678'
            },
            'jornada': 2
        },
        {
            'id': 182,
            'estado': 'Aprobado',
            'riesgo': 'Bajo',
            'nombres': 'Santiago',
            'apellidos': 'Montenegro Castano',
            'direccion': 'Diagonal 15 #56-78',
            'telefono': '312 678 9012',
            'acudiente': {
                'nombres': 'Elvira',
                'apellidos': 'Castano Medina',
                'telefono': '319 987 6543'
            },
            'jornada': 1
        },
        {
            'id': 183,
            'estado': 'Retirado',
            'riesgo': 'Alto',
            'nombres': 'Natalia Alejandra',
            'apellidos': 'Marquez Pineda',
            'direccion': 'Avenida 45 #12-34',
            'telefono': '322 789 0123',
            'acudiente': {
                'nombres': 'Ramiro',
                'apellidos': 'Pineda Guzman',
                'telefono': '316 876 5432'
            },
            'jornada': 4
        },
        {
            'id': 184,
            'estado': 'Aprobado',
            'riesgo': 'Alto',
            'nombres': 'Gerardo',
            'apellidos': 'Linares Espinoza',
            'direccion': 'Carrera 99 #23-45',
            'telefono': '315 543 2109',
            'acudiente': {
                'nombres': 'Dolores',
                'apellidos': 'Espinoza Herrera',
                'telefono': '320 765 4321'
            },
            'jornada': 2
        },
        {
            'id': 185,
            'estado': 'Aprobado',
            'riesgo': 'Bajo',
            'nombres': 'Alfonso',
            'apellidos': 'Bermúdez Salinas',
            'direccion': 'Calle 33 #56-78',
            'telefono': '311 567 8901',
            'acudiente': {
                'nombres': 'Leticia',
                'apellidos': 'Salinas Guzman',
                'telefono': '317 432 1098'
            },
            'jornada': 3
        },
        {
            'id': 186,
            'estado': 'Aprobado',
            'riesgo': 'Medio',
            'nombres': 'Beatriz Elena',
            'apellidos': 'Morales Quintana',
            'direccion': 'Carrera 22 #45-67',
            'telefono': '320 654 3210',
            'acudiente': {
                'nombres': 'Julian',
                'apellidos': 'Quintana Rojas',
                'telefono': '318 567 4321'
            },
            'jornada': 2
        },
        {
            'id': 187,
            'estado': 'Aprobado',
            'riesgo': 'Bajo',
            'nombres': 'Camilo Andres',
            'apellidos': 'Lopez Figueroa',
            'direccion': 'Diagonal 12 #67-89',
            'telefono': '312 789 0123',
            'acudiente': {
                'nombres': 'Margarita',
                'apellidos': 'Figueroa Mendoza',
                'telefono': '319 210 9876'
            },
            'jornada': 1
        },
        {
            'id': 188,
            'estado': 'Aprobado',
            'riesgo': 'Alto',
            'nombres': 'Daniela Fernanda',
            'apellidos': 'Perez Villalba',
            'direccion': 'Avenida 56 #23-45',
            'telefono': '322 321 0987',
            'acudiente': {
                'nombres': 'Rodrigo',
                'apellidos': 'Villalba Herrera',
                'telefono': '316 678 5432'
            },
            'jornada': 4
        },
        {
            'id': 189,
            'estado': 'Aprobado',
            'riesgo': 'Alto',
            'nombres': 'Ernesto',
            'apellidos': 'Suarez Padilla',
            'direccion': 'Carrera 88 #12-34',
            'telefono': '315 987 6543',
            'acudiente': {
                'nombres': 'Rosa',
                'apellidos': 'Padilla Guzman',
                'telefono': '320 345 6789'
            },
            'jornada': 2
        },
        {
            'id': 190,
            'estado': 'Aprobado',
            'riesgo': 'Bajo',
            'nombres': 'Fabian',
            'apellidos': 'Herrera Salgado',
            'direccion': 'Calle 44 #67-89',
            'telefono': '311 890 1234',
            'acudiente': {
                'nombres': 'Luisa',
                'apellidos': 'Salgado Pena',
                'telefono': '317 543 6789'
            },
            'jornada': 3
        },
        {
            'id': 191,
            'estado': 'Inscrito',
            'riesgo': 'Medio',
            'nombres': 'Andrea Carolina',
            'apellidos': 'Mendoza Quiroga',
            'direccion': 'Carrera 32 #12-34',
            'telefono': '320 765 0987',
            'acudiente': {
                'nombres': 'Ricardo',
                'apellidos': 'Quiroga Medina',
                'telefono': '318 654 2109'
            },
            'jornada': 2
        },
        {
            'id': 192,
            'estado': 'Aprobado',
            'riesgo': 'Bajo',
            'nombres': 'Esteban',
            'apellidos': 'Guzman Lopez',
            'direccion': 'Diagonal 14 #23-56',
            'telefono': '312 987 6540',
            'acudiente': {
                'nombres': 'Maria Eugenia',
                'apellidos': 'Lopez Ramirez',
                'telefono': '319 210 8765'
            },
            'jornada': 1
        },
        {
            'id': 193,
            'estado': 'Aprobado',
            'riesgo': 'Alto',
            'nombres': 'Liliana Fernanda',
            'apellidos': 'Pena Villalobos',
            'direccion': 'Avenida 67 #45-78',
            'telefono': '322 210 5432',
            'acudiente': {
                'nombres': 'Hernan',
                'apellidos': 'Villalobos Ortega',
                'telefono': '316 678 9012'
            },
            'jornada': 4
        },
        {
            'id': 194,
            'estado': 'Aprobado',
            'riesgo': 'Alto',
            'nombres': 'German',
            'apellidos': 'Ramirez Salinas',
            'direccion': 'Carrera 99 #34-56',
            'telefono': '315 432 1098',
            'acudiente': {
                'nombres': 'Diana',
                'apellidos': 'Salinas Herrera',
                'telefono': '320 876 5432'
            },
            'jornada': 2
        },
        {
            'id': 195,
            'estado': 'Aprobado',
            'riesgo': 'Bajo',
            'nombres': 'Joaquin',
            'apellidos': 'Valderrama Cifuentes',
            'direccion': 'Calle 55 #12-34',
            'telefono': '311 987 6543',
            'acudiente': {
                'nombres': 'Laura',
                'apellidos': 'Cifuentes Ramirez',
                'telefono': '317 234 5678'
            },
            'jornada': 3
        },
        {
            'id': 196,
            'estado': 'Inscrito',
            'riesgo': 'Medio',
            'nombres': 'Emilia Fernanda',
            'apellidos': 'Ortega Zambrano',
            'direccion': 'Carrera 88 #45-67',
            'telefono': '320 543 2109',
            'acudiente': {
                'nombres': 'Fernando',
                'apellidos': 'Zambrano Herrera',
                'telefono': '318 765 0987'
            },
            'jornada': 2
        },
        {
            'id': 197,
            'estado': 'Aprobado',
            'riesgo': 'Bajo',
            'nombres': 'Cristobal',
            'apellidos': 'Pineda Salinas',
            'direccion': 'Diagonal 23 #67-89',
            'telefono': '312 210 8765',
            'acudiente': {
                'nombres': 'Beatriz',
                'apellidos': 'Salinas Gomez',
                'telefono': '319 987 6543'
            },
            'jornada': 1
        },
        {
            'id': 198,
            'estado': 'Retirado',
            'riesgo': 'Alto',
            'nombres': 'Margarita Alejandra',
            'apellidos': 'Gomez Villanueva',
            'direccion': 'Avenida 45 #12-34',
            'telefono': '322 678 5432',
            'acudiente': {
                'nombres': 'Luis',
                'apellidos': 'Villanueva Ortega',
                'telefono': '316 789 0123'
            },
            'jornada': 4
        },
        {
            'id': 199,
            'estado': 'Aprobado',
            'riesgo': 'Alto',
            'nombres': 'Gustavo',
            'apellidos': 'Zapata Herrera',
            'direccion': 'Carrera 99 #34-56',
            'telefono': '315 543 2109',
            'acudiente': {
                'nombres': 'Dora',
                'apellidos': 'Herrera Guzman',
                'telefono': '320 876 5432'
            },
            'jornada': 2
        },
        {
            'id': 200,
            'estado': 'Aprobado',
            'riesgo': 'Bajo',
            'nombres': 'Leonardo',
            'apellidos': 'Martinez Rojas',
            'direccion': 'Calle 12 #34-56',
            'telefono': '311 234 5678',
            'acudiente': {
                'nombres': 'Margarita',
                'apellidos': 'Rojas Perez',
                'telefono': '317 456 7890'
            },
            'jornada': 3
        },
        {
            'id': 201,
            'estado': 'Inscrito',
            'riesgo': 'Medio',
            'nombres': 'Camila Andrea',
            'apellidos': 'Fernandez Quintana',
            'direccion': 'Carrera 45 #67-89',
            'telefono': '320 678 1234',
            'acudiente': {
                'nombres': 'Rodrigo',
                'apellidos': 'Quintana Lopez',
                'telefono': '318 890 5678'
            },
            'jornada': 2
        },
        {
            'id': 202,
            'estado': 'Aprobado',
            'riesgo': 'Bajo',
            'nombres': 'Santiago',
            'apellidos': 'Gonzalez Salazar',
            'direccion': 'Diagonal 78 #12-34',
            'telefono': '312 345 6789',
            'acudiente': {
                'nombres': 'Ana Maria',
                'apellidos': 'Salazar Mendez',
                'telefono': '319 567 8901'
            },
            'jornada': 1
        },
        {
            'id': 203,
            'estado': 'Retirado',
            'riesgo': 'Alto',
            'nombres': 'Daniela Fernanda',
            'apellidos': 'Mendoza Villalobos',
            'direccion': 'Avenida 34 #56-78',
            'telefono': '322 789 0123',
            'acudiente': {
                'nombres': 'Carlos',
                'apellidos': 'Villalobos Ortega',
                'telefono': '316 901 2345'
            },
            'jornada': 4
        },
        {
            'id': 204,
            'estado': 'Aprobado',
            'riesgo': 'Alto',
            'nombres': 'Fernando',
            'apellidos': 'Zapata Herrera',
            'direccion': 'Carrera 56 #78-90',
            'telefono': '315 012 3456',
            'acudiente': {
                'nombres': 'Diana',
                'apellidos': 'Herrera Guzman',
                'telefono': '320 234 5678'
            },
            'jornada': 2
        },
        {
            'id': 205,
            'estado': 'Aprobado',
            'riesgo': 'Bajo',
            'nombres': 'Martin',
            'apellidos': 'Ortega Valderrama',
            'direccion': 'Calle 67 #45-23',
            'telefono': '311 890 1234',
            'acudiente': {
                'nombres': 'Gloria',
                'apellidos': 'Valderrama Pena',
                'telefono': '317 543 6789'
            },
            'jornada': 3
        },
        {
            'id': 206,
            'estado': 'Aprobado',
            'riesgo': 'Medio',
            'nombres': 'Juliana Andrea',
            'apellidos': 'Perez Ramirez',
            'direccion': 'Carrera 78 #12-45',
            'telefono': '320 987 6543',
            'acudiente': {
                'nombres': 'Fernando',
                'apellidos': 'Ramirez Herrera',
                'telefono': '318 765 1234'
            },
            'jornada': 2
        },
        {
            'id': 207,
            'estado': 'Aprobado',
            'riesgo': 'Bajo',
            'nombres': 'Gabriel',
            'apellidos': 'Rodriguez Salazar',
            'direccion': 'Diagonal 45 #67-89',
            'telefono': '312 678 5432',
            'acudiente': {
                'nombres': 'Claudia',
                'apellidos': 'Salazar Medina',
                'telefono': '319 876 4321'
            },
            'jornada': 1
        },
        {
            'id': 208,
            'estado': 'Aprobado',
            'riesgo': 'Alto',
            'nombres': 'Camilo Andres',
            'apellidos': 'Guzman Torres',
            'direccion': 'Avenida 90 #34-12',
            'telefono': '322 543 2109',
            'acudiente': {
                'nombres': 'Patricia',
                'apellidos': 'Torres Gomez',
                'telefono': '316 678 9012'
            },
            'jornada': 4
        },
        {
            'id': 209,
            'estado': 'Aprobado',
            'riesgo': 'Alto',
            'nombres': 'Raúl',
            'apellidos': 'Zambrano Herrera',
            'direccion': 'Carrera 23 #78-56',
            'telefono': '315 987 6543',
            'acudiente': {
                'nombres': 'Dolores',
                'apellidos': 'Herrera Ramirez',
                'telefono': '320 765 4321'
            },
            'jornada': 2
        },
        {
            'id': 210,
            'estado': 'Inscrito',
            'riesgo': 'Bajo',
            'nombres': 'Juan Fernando',
            'apellidos': 'Umana',
            'direccion': 'Calle 45#34 - 67',
            'telefono': '345 547 4352',
            'acudiente': {
                'nombres': 'Fernanda',
                'apellidos': 'Umana Gonzalez',
                'telefono': '312 483 4563'
            },
            'jornada': '3'
        }
    ],
    'coordinadores': [
        {
            'nombres': 'Mariana',
            'apellidos': 'Lopez Ramirez',
            'usuario': 'Mariana.Coordinador',
            'contrasena': 'cm_4567*'
        }
    ]
};

//Desarrollado por : Simón Dante Salamanca Galvis - 1.097.498.423.