/*Importación de clases*/
import {Cliente} from './Cliente.js'
import { Empleado } from './Empleados/Empleado.js';
import { Gerente } from './Empleados/Gerente.js';
import { Director } from './Empleados/Director.js';
import { SistemaAutenticacion } from './SistemaAutenticacion.js';


//const cliente2 = new Cliente('María','16979808','8989');

const empleado = new Empleado('Antonio', '1032381303',10000);
empleado.asignarClave('12345');
console.log(SistemaAutenticacion.login(empleado,'12345'));

const gerente = new Gerente('Jenifer Bautista', '53084066',12000);
gerente.asignarClave('655');
console.log(SistemaAutenticacion.login(gerente,'655'));

//const director = new Director('Dante Gomez', '123456',15000);

const cliente = new Cliente('Leonardo','13804050','123224');
cliente.asignarClave('01111');
console.log(SistemaAutenticacion.login(cliente,'1111'));