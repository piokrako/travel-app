import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { AppComponent } from "./app.component";
import { TravelDataService } from "./travel-data.service";
import { Travel } from "./travel";
import { FormsModule } from '@angular/forms';
import { TravelFooterComponent } from "./travel-footer/travel-footer.component";
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { TravelListComponent } from './travel-list/travel-list.component';
import { TravelListItemComponent } from './travel-list-item/travel-list-item.component';
import { TravelAddComponent } from './travel-add/travel-add.component';

@NgModule({
  declarations: [AppComponent, TravelFooterComponent, HeaderComponent, FooterComponent, TravelListComponent, TravelListItemComponent, TravelAddComponent],
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
