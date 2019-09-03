import { TestBed, async, inject } from '@angular/core/testing';
import { Travel } from './travel';
import { TravelDataService } from './travel-data.service';

describe('TravelDataService', () => {
  beforeEach(() => TestBed.configureTestingModule({
    providers: [TravelDataService]
  }));


  it('should work', inject([TravelDataService], (service: TravelDataService) => {
    expect(service).toBeTruthy();
  }));

  describe('#getAllTravels()', () => {

    it('should return empty array', inject([TravelDataService], (service: TravelDataService) => {
      expect(service.getAllTravels()).toEqual([]);
    }));

    it('should return all travels', inject([TravelDataService], (service: TravelDataService) => {
      let travel1 = new Travel({id: 1, city: 'Łódź', description: 'Hometown', date: '28/08/2019'});
      let travel2 = new Travel({id: 2, city: 'Poznań', description: 'Current town', date: '29/08/2019'});
      service.addTravel(travel1);
      service.addTravel(travel2);
      expect(service.getAllTravels()).toEqual([travel1, travel2]);
    }));

  });

  describe('#save(travel)', () => {

    it('should automatically assign an incrementing id', inject([TravelDataService], (service: TravelDataService) => {
      let travel1 = new Travel({city: 'Łódź', description: 'Hometown', date: '28/08/2019'});
      let travel2 = new Travel({city: 'Poznań', description: 'Current town', date: '29/08/2019'});
      service.addTravel(travel1);
      service.addTravel(travel2);
      expect(service.getTravelById(1)).toEqual(travel1);
      expect(service.getTravelById(2)).toEqual(travel2);
    }));

  });

  describe('#deleteTravelById(id)', () => {

    it('should remove travel with the same id', inject([TravelDataService], (service: TravelDataService) => {
      let travel1 = new Travel({city: 'Łódź', description: 'Hometown', date: '28/08/2019'});
      let travel2 = new Travel({city: 'Poznań', description: 'Current town', date: '29/08/2019'});
      service.addTravel(travel1);
      service.addTravel(travel2);
      expect(service.getAllTravels()).toEqual([travel1, travel2]);
      service.deleteTravelById(1);
      expect(service.getAllTravels()).toEqual([travel2]);
      service.deleteTravelById(2);
      expect(service.getAllTravels()).toEqual([]);
    }));

    it('should not removing anything if travel with the same id does not exist', inject([TravelDataService], (service: TravelDataService) => {
      let travel1 = new Travel({city: 'Łódź', description: 'Hometown', date: '28/08/2019'});
      let travel2 = new Travel({city: 'Poznań', description: 'Current town', date: '29/08/2019'});
      service.addTravel(travel1);
      service.addTravel(travel2);
      expect(service.getAllTravels()).toEqual([travel1, travel2]);
      service.deleteTravelById(3);
      expect(service.getAllTravels()).toEqual([travel1, travel2]);
    }));

  });

  describe('#updateTravelById(id, values)', () => {

    it('should return travel with the same id and updated it data', inject([TravelDataService], (service: TravelDataService) => {
      let travel = new Travel({city: 'Łódź', description: 'Hometown', date: '28/08/2019'});
      service.addTravel(travel);
      let updatedTravel = service.updateTravelById(1, {
        city: 'Warszawa'
      });
      expect(updatedTravel.city).toEqual('Warszawa');
    }));

    it('should return null if travel is not found', inject([TravelDataService], (service: TravelDataService) => {
      let travel = new Travel({city: 'Łódź', description: 'Hometown', date: '28/08/2019'});
      service.addTravel(travel);
      let updatedTravel = service.updateTravelById(2, {
        city: 'Rzeszów'
      });
      expect(updatedTravel).toEqual(null);
    }));

  });


});
