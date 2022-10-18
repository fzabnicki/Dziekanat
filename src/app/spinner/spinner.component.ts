import { Component, OnInit } from '@angular/core';
import { SpinnerService } from './shared/spinner.service';

@Component({
  selector: 'app-spinner',
  templateUrl: './spinner.component.html',
  styleUrls: ['./spinner.component.scss']
})
export class SpinnerComponent {

  loading$ = this.loader.loading$;
  constructor(public loader: SpinnerService) { }
}
