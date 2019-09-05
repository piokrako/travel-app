import { Component, Input } from '@angular/core';
import { Travel } from '../travel';

@Component({
  selector: 'app-travel-footer',
  templateUrl: './travel-footer.component.html',
  styleUrls: ['./travel-footer.component.scss']
})

export class TravelFooterComponent {

  @Input()
  travels: Travel[];
  
  constructor() { }


}
