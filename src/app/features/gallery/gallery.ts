import { Component, inject, signal } from '@angular/core';
import { LibroService } from '../../services/libro-service';
import { Libro } from '../../models/libro';

@Component({
  selector: 'app-gallery',
  imports: [],
  templateUrl: './gallery.html',
  styleUrl: './gallery.css',
})
export class Gallery {

  private libroService = inject(LibroService);

  libros = signal<Libro[]>([]);

  ngOnInit() {
    this.libroService.obtenerLibros().subscribe(datos =>{
      this.libros.set(datos.results);
    });
  }
}
