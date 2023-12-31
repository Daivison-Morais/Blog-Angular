import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { mockData } from '../../data/mockData';
@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css'],
})
export class ContentComponent implements OnInit {
  imgCover: string = '';
  title: string = '';
  description: string = '';
  private id: string | null = '0';

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe((value) => (this.id = value.get('id')));
    this.setValueToComponent(this.id);
    window.scrollTo(0, 0);
  }

  setValueToComponent(id: string | null) {
    const result = mockData.filter((value) => value.id.toString() === this.id);
    this.imgCover = result[0].imgCover;
    this.title = result[0].title;
    this.description = result[0].description;
  }
}
