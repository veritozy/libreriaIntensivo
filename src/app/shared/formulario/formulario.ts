import { Component, inject, signal } from '@angular/core';
import { UsuarioService } from '../../services/usuario-service';
import { Usuario } from '../../models/usuario';
import { FormsModule } from '@angular/forms';
import { AuthenticationService } from '../../services/authentication-service';

@Component({
  selector: 'app-formulario',
  imports: [FormsModule],
  templateUrl: './formulario.html',
  styleUrl: './formulario.css',
})
export class Formulario {

  private usuarioService = inject(UsuarioService);
  public authService = inject(AuthenticationService);

  //Variable para controlar si es un put o un post
  editando = false;

  listaUsuarios = signal<Usuario[]>([]);

  //Objeto para vincular el formulario con el post
  nuevoUsuario: Usuario={
    nombre:'',
    email:'',
    password:'',
    rol:'EMPLEADO'
  }

  ngOnInit(){
    this.obtenerUsuarios();
  }
  //Método para traer los usuarios a la tabla
  obtenerUsuarios(){
    this.usuarioService.getUsuarios().subscribe(datos =>{
      this.listaUsuarios.set(datos)
    });
  }

  //Eliminar
  eliminarUsuario(id:string){
    if(confirm('¿Estás seguro que deseas eliminar el registro?')){
      this.usuarioService.deleteUsuario(id).subscribe(()=>{
        this.listaUsuarios.set(this.listaUsuarios().filter(u=> u.id !== id));
      });
    }
  }

  //Para editar un usuarios
editarUsuario(usuario: Usuario){
  this.editando=true;
  this.nuevoUsuario={ ...usuario};
}

  //Método registrar usuario
  registrarUsuario(){
    if(this.editando && this.nuevoUsuario.id){
      this.usuarioService.putUsuario(this.nuevoUsuario.id, this.nuevoUsuario).subscribe(()=>{
        this.obtenerUsuarios();
        this.limpiarFormulario()
      });
    }else{
      this.usuarioService.postUsuario(this.nuevoUsuario).subscribe(()=>{
        this.obtenerUsuarios();
        this.limpiarFormulario();
      });
    }
  }

  //Limpiar formulario
  limpiarFormulario(){
    this.editando=false;
    this.nuevoUsuario={nombre:'', email:'', password:'', rol:'EMPLEADO'};
  }
}
