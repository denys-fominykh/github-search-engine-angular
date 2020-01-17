import { Component } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent {
  public searchStr = '';
  public minLenght = 3;
  public isLoaded = false;

  constructor() { }

  handleChange() {
    console.log(this.searchStr);
  }
}
