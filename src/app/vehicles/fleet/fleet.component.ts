import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-fleet',
  templateUrl: './fleet.component.html',
  styleUrls: ['./fleet.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class FleetComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
