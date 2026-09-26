import { Component } from '@angular/core';

@Component({
  selector: 'app-specialties',
  imports: [],
  templateUrl: './specialties.html',
  styleUrl: './specialties.css',
})
export class Specialties {
  subtitulo:string='Puedes encontrar libros de todos los gustos';

  especialidadSeleccionada:string='ninguno';

  especialidades =[
    {
    id:1, 
    nombre:"Novela", 
    descripcion:"Historias que te cautivan",
    imagen:"https://i.pinimg.com/736x/05/df/34/05df348917d103fbe921a7facf674e15.jpg",
    activo:true
  },
  {
    id:2, 
    nombre:"Cuentos", 
    descripcion:"Historias que hacen volar la imaginación de los más pequeños",
    imagen:"https://www.lexuseditores.com.ec/wp-content/uploads/2024/06/CIPLC1.jpg.webp",
    activo:true
  },
  {
    id:3, 
    nombre:"Terror", 
    descripcion:"Historias que te llenarán de miedo y suspenso",
    imagen:"https://media.vogue.es/photos/5cc7566515d9a36371e83c62/master/w_1600%2Cc_limit/living__469389592.jpg",
    activo:false
  }
  ];

  especialidadesFiltradas = this.especialidades;

  //Función para seleccionar la especialidad
  seleccionar(nombre:string){
    this.especialidadSeleccionada=nombre;
  }

  //Función para buscar el libro
  buscar(event:Event){
    const libroBuscar=(event.target as HTMLInputElement).value;

    this.subtitulo= `Resultados para: ${libroBuscar}`;

    this.especialidadesFiltradas= this.especialidades.filter(e => e.nombre.toLowerCase().includes(libroBuscar.toLowerCase()));
  }
}
