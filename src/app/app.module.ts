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
    let travel1 = new Travel({id: 1, city: 'Łódź', description: 'Hometown', date: '28/08/2019'});
    let travel2 = new Travel({id: 2, city: 'Poznań', description: 'Current town', date: '29/08/2019'});
    this.travelDataService.addTravel(travel1);
    this.newTravel = new Travel();
    this.travelDataService.addTravel(travel2);
    this.newTravel = new Travel();
    return this.travelDataService.getAllTravels();
  }
}
