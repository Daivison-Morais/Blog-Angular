import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { mockData } from '../../data/mockData';
@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css'],
})
export class ContentComponent implements OnInit {
  @Input()
  imgCover: string = '';
  @Input()
  title: string = '';
  @Input()
  description: string = '';

  private id: string | null = '0';

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe((value) => (this.id = value.get('id')));
    this.setValueToComponent(this.id)
  }

  setValueToComponent(id: string | null){
    const result = mockData.filter(value =>value.id.toString() === this.id)
    this.imgCover = result[0].imgCover
    this.title = result[0].title;
    this.description = result[0].description;
  };
}
