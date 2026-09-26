import { Component, inject } from '@angular/core';
import { AuthenticationService } from '../../services/authentication-service';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-login',
  imports: [FormsModule],
  templateUrl: './login.html',
  styleUrl: './login.css',
})
export class Login {
email:string='';
password:string='';

private authService = inject(AuthenticationService);
//Permitir la navegación a otra ruta
private route = inject(Router);

iniciarSesion(){
  this.authService.login(this.email, this.password).subscribe(success =>{
    if(success){
      alert('Bienvenido al sistema');
      this.route.navigate(['/galeria']);
    }else{
      alert('Email o password incorrectos')
    }
  });
}
cerrarSesion(){
  this.authService.logout();
}

}
