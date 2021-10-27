import { Component, OnInit } from '@angular/core';
import { Input } from '@angular/core';
import { IProduct } from '../../models';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss'],
})
export class ListComponent implements OnInit {
  @Input() loading: boolean = false;
  @Input() errorMessage: string = '';
  @Input() products: IProduct[] = [];
  constructor() {}

  ngOnInit(): void {}
}
