import { Component } from "@angular/core";
import { Travel } from "../travel";
import { TravelDataService } from '../travel-data.service';
import { NgForm } from '@angular/forms';
import { Capability } from 'protractor';

@Component({
  selector: "app-travel-add",
  templateUrl: "./travel-add.component.html",
  styleUrls: ["./travel-add.component.scss"]
})
export class TravelAddComponent {
  showDialog: boolean = false;

  newTravel: Travel = new Travel();

  
  constructor(private travelDataService: TravelDataService) {}

  toggleDialog() {
    this.showDialog = !this.showDialog;
  }

  addTravel(form: NgForm) {
    if(form.valid) {
      this.travelDataService.addTravel(this.newTravel);
      this.newTravel = new Travel();
      this.toggleDialog();
    }
  }

}
