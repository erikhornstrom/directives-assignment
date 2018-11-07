import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'directives-assignment';

  isHidden = false;

  elementsArray = [];
  needsStyling = false;

  elementName = 'Element';

  onAddButtonClick() {
    // toggles the 'Shown' paragraph
    this.isHidden = !this.isHidden;
    this.elementsArray.push(new Date());
  }

  getColor() {
    return this.elementsArray.length >= 5 ? 'blue' : '';
  }

}
