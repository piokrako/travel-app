import { Injectable } from "@angular/core";
import { Travel } from "./travel";

@Injectable({
  providedIn: "root"
})
export class TravelDataService {
  lastId: number = 0;

  travels: Travel[] = [];

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
