import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-informative-card',
  templateUrl: './informative-card.component.html',
  styleUrls: ['./informative-card.component.css'],
})

export class InformativeCardComponent implements OnInit {
  @Input()
  id:string = '0'
  @Input()
  imgCover: string = '';
  @Input()
  title: string = '';

  constructor(
    private route:ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe(value => console.log(value))
  }
}
