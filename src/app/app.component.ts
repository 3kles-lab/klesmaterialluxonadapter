import { KlesMatDateAdapter } from '@3kles/kles-material-datepicker';
import { Component, ViewEncapsulation } from '@angular/core';
import { DateAdapter } from '@angular/material/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  encapsulation: ViewEncapsulation.None,
  providers: [],
})
export class AppComponent {
  constructor(private dateAdapter: DateAdapter<any>, private klesDateAdapter: KlesMatDateAdapter<any>) { 
    console.log(this.dateAdapter);

    console.log(this.klesDateAdapter);
  }
}
