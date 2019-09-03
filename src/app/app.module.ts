import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { AppComponent } from "./app.component";
import { TravelDataService } from "./travel-data.service";
import { Travel } from "./travel";
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
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
