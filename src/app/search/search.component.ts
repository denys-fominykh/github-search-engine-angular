import { Component } from '@angular/core';
import { UserService } from '../user.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent {
  public searchStr = '';
  public minLenght = 3;
  public isLoaded = false;
  public user: any;

  constructor(private service: UserService) { }

  handleChange() {
    if (this.minLenght <= this.searchStr.length) {
      this.service.getUser(this.searchStr).subscribe(user => {
        this.user = user;
        this.isLoaded = true;
      });
    }
  }
}
