import { Component } from "@angular/core";
import { FormsModule } from '@angular/forms';
import { Travel } from './travel';
import { TravelDataService } from "./travel-data.service";
@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"],
  providers: [TravelDataService],
})


export class AppComponent {
  title = "Travel journal";

  newTravel: Travel = new Travel();

  constructor(private travelDataService: TravelDataService) {}

  addTravel() {
    this.travelDataService.addTravel(this.newTravel);
    this.newTravel = new Travel();
  }

  removeTravel(travel) {
    this.travelDataService.deleteTravelById(travel.id);
  }

  get travels() {
    return this.travelDataService.getAllTravels();
  }

}
