import { Injectable } from "@angular/core";
import { Travel } from "./travel";

@Injectable({
  providedIn: "root"
})
export class TravelDataService {
  //Cause there are 2 records already
  lastId: number = 2;

  travels: Travel[] = [
    { id: 1, city: "Paris", description: "Paris is the capital city of France and is very popular. It is regarded as the City of Light. It is located on the Seine River which divides the city. Many tourists visit it and have been fascinated towards its status of being one of the most appealing, glamorous, and romantic of all the cities.", date: "23/04/2019" },
    {
      id: 2,
      city: "London",
      description:
        "For a bird's eye view of London, take a spin on the London Eye, the Ferris wheel overlooking the Thames landmarks like Big Ben, the Tower of London, St Paul's Cathedral and the Globe Theatre. Spend a day in the Tate Modern or shopping along Portobello Road in Notting Hill. See the Cabinet War Rooms that housed Winston Churchill in a WWII bunker and watch the changing of the guard at Buckingham Palace. Need a break ? Have a pint in a pub or a famous London tea room.",
      date: "06/02/2018"
    }
  ];

  constructor() {}

  // Simulate POST /travels
  addTravel(travel: Travel): TravelDataService {
    if (!travel.id) {
      travel.id = ++this.lastId;
    }
    this.travels.push(travel);
    return this;
  }

  // Simulate DELETE /travels/:id
  deleteTravelById(id: number): TravelDataService {
    this.travels = this.travels.filter(travel => travel.id !== id);
    return this;
  }

  // Simulate PUT /travels/:id
  updateTravelById(id: number, values: Object = {}): Travel {
    let travel = this.getTravelById(id);
    if (!travel) {
      return null;
    }
    Object.assign(travel, values);
    return travel;
  }

  // Simulate GET /travels
  getAllTravels(): Travel[] {
    return this.travels;
  }

  // Simulate GET /travels/:id
  getTravelById(id: number): Travel {
    return this.travels.filter(travel => travel.id === id).pop();
  }
}
