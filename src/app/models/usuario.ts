export interface Usuario{
    id?:string;
    nombre:string;
    email:string;
    password:string;
    rol:'ADMIN' | 'EMPLEADO';
}