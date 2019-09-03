import { Travel } from './travel';

describe('Travel', () => {
  it('should create an instance', () => {
    expect(new Travel()).toBeTruthy();
  });

  it('should accept values in the constructor', () => {
    let travel = new Travel({
      id: 1,
      city: 'Poznan',
      description: 'City of the best food in Poland',
      date: '01/09/2019'
    });
    expect(travel.id).toEqual(1);
    expect(travel.city).toEqual('Poznan');
    expect(travel.description).toEqual('City of the best food in Poland');
    expect(travel.date).toEqual('01/09/2019');
  });
});