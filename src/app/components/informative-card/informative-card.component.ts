import { Component, OnInit } from '@angular/core';
import { mockData } from 'src/app/data/mockData';
@Component({
  selector: 'app-informative-card',
  templateUrl: './informative-card.component.html',
  styleUrls: ['./informative-card.component.css'],
})

export class InformativeCardComponent implements OnInit {
  id: string = '0';
  imgCover: string = '';
  title: string = '';
  listIformatives: any[] = mockData;

  ngOnInit(): void {
    this.setLstInformatives(this.listIformatives);
  }

  setLstInformatives(lst: any[]) {
    let result = lst.filter((value) => value.main === false);
    this.listIformatives = result;
  }
}
