export class Travel {
  id: number;
  city: string = '';
  description: string = '';
  date: string = '';

  constructor(values: Object = {}) {
    Object.assign(this, values);
  }

}
