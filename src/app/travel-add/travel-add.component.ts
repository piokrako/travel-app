import { Component } from "@angular/core";
import { Travel } from "../travel";
import { TravelDataService } from '../travel-data.service';

@Component({
  selector: "app-travel-add",
  templateUrl: "./travel-add.component.html",
  styleUrls: ["./travel-add.component.scss"]
})
export class TravelAddComponent {
  showDialog: boolean = false;

  newTravel: Travel = new Travel();

  
  constructor(private travelDataService: TravelDataService) {}

  showAddTravelDialog() {
    this.showDialog = true;
  }

  hideAddTravelDialog() {
    this.showDialog = false;
  }

  addTravel() {
    this.travelDataService.addTravel(this.newTravel);
    this.newTravel = new Travel();
    this.hideAddTravelDialog();
    this.newTravel.city = null;
    this.newTravel.description = null;
    this.newTravel.date = null;
  }

}
