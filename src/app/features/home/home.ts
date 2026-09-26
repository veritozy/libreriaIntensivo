import { Component } from '@angular/core';
import { Navbar } from "../../shared/navbar/navbar";
import { Hero } from "../../shared/hero/hero";
import { Specialties } from "../../shared/specialties/specialties";

@Component({
  selector: 'app-home',
  imports: [Navbar, Hero, Specialties],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home {}
