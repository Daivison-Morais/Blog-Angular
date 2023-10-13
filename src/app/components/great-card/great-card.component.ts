import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { mockData } from 'src/app/data/mockData';

@Component({
  selector: 'app-great-card',
  templateUrl: './great-card.component.html',
  styleUrls: ['./great-card.component.css'],
})

export class GreatCardComponent {
  id: string = '';
  imgCover: string = '';
  title: string = '';
  summary: string = '';
  listIformatives: any[] = mockData;

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.setLstInformatives(this.listIformatives);
  }

  setLstInformatives(lst: any[]) {
    let result = lst.filter((value) => value.main === true);
    this.listIformatives = result;
  }
}

