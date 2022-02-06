import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';


@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css']
})
export class CategoriesComponent implements OnInit {
  categories=["electronics","jewelery","men's clothing","women's clothing"]
  constructor() { }

  ngOnInit(): void {
  }

}
