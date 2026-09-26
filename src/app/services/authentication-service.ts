import { inject, Injectable, signal } from '@angular/core';
import { UsuarioService } from './usuario-service';
import { map, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthenticationService {

  private usuarioService = inject(UsuarioService);

  loginTrue = signal<boolean>(localStorage.getItem('sesion')==='true');

  rolActual = signal<string | null>(localStorage.getItem('rol'));
  //Función para inicio de sesión
  login(email:string, pass:string):Observable<boolean>{
    return this.usuarioService.getUsuarios().pipe(
      map(usuarios =>{
        const usuarioExiste = usuarios.find(u => u.email===email && u.password === pass);
        if(usuarioExiste){
          localStorage.setItem('sesion', 'true');
          localStorage.setItem('user', JSON.stringify(usuarioExiste));
          localStorage.setItem('rol', usuarioExiste.rol);

          this.rolActual.set(usuarioExiste.rol);

          this.loginTrue.set(true);
          return true;
        }
        return false;
      })
    );
  }

  logout(){
    localStorage.removeItem('sesion');
    localStorage.removeItem('user');
    localStorage.removeItem('rol');
    this.loginTrue.set(false);
    this.rolActual.set(null);
  }

}
