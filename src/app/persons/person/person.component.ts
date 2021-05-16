import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { person } from './../../interfaces/person';

@Component({
  selector: 'app-person',
  templateUrl: './person.component.html',
  styleUrls: ['./person.component.css']
})
export class PersonComponent 

implements OnInit {

  personArray: Array<person> = []
  selectedPerson : person =  {
    id: 0,
    Nombre: "",
    Apellidos: "",
    Edad: "",
    DNI: "",
    Cumpleanos: "",
    ColorFavorito: "",
    Sexo: "",
  };
  
  constructor() { }

  ngOnInit(): void {}

  openForEdit(person: person):void
  { this.selectedPerson = person; }

  addOrEdit():void {
    let EdadPerson = parseInt(this.selectedPerson.Edad);
    let FechaNac = new Date(this.selectedPerson.Cumpleanos)
    let DiaNac = FechaNac.getDate();
    let MesNac = FechaNac.getMonth() + 1;
    let AnoNac = FechaNac.getFullYear();
    this.selectedPerson.Cumpleanos = DiaNac + "/" + MesNac + "/" + AnoNac;
    if (EdadPerson > 0 && EdadPerson <=125) {
      if(this.selectedPerson.id === 0) {
        this.selectedPerson.id = this.personArray.length+1;
        this.personArray.push(this.selectedPerson);
      }
    }
    this.selectedPerson =  {
      id: 0,
      Nombre: "",
      Apellidos: "",
      Edad: "",
      DNI: "",
      Cumpleanos: "",
      ColorFavorito: "",
      Sexo: ""
    };
  }

  delete():void {
    if (confirm('Está seguro de querer eliminarlo?')) {
      this.personArray=this.personArray.filter(x=>x !=this.selectedPerson);
      this.selectedPerson =  {
        id: 0,
        Nombre: "",
        Apellidos: "",
        Edad: "",
        DNI: "",
        Cumpleanos: "",
        ColorFavorito: "",
        Sexo: ""
      };
    }
  }
}
