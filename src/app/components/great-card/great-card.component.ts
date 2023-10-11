import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-great-card',
  templateUrl: './great-card.component.html',
  styleUrls: ['./great-card.component.css'],
})
export class GreatCardComponent {
  @Input()
  id:string = '0';
  @Input()
  imgCover: string =
    '';
  @Input()
  title: string = 'Roock Lee quase leva o farelo';
  @Input()
  description: string =
    'Lorem Ipsum is simply dummy text of the printing and typesetting industry.';

  constructor() {}
}
