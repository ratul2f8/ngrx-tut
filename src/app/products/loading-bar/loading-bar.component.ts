import { Component, OnInit } from '@angular/core';
import { NgbProgressbarConfig } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-loading-bar',
  templateUrl: './loading-bar.component.html',
  styleUrls: ['./loading-bar.component.scss']
})
export class LoadingBarComponent implements OnInit {

  constructor(config: NgbProgressbarConfig) { 
    config.animated = true;
    config.striped = true;
    config.height = '20px';
    config.type = 'success';
    config.max = 1000;
  }

  ngOnInit(): void {
  }

}
