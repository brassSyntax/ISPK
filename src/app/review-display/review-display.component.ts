import {Component, Input, OnInit} from '@angular/core';
import {Review} from "../review";

@Component({
  selector: 'app-review-display',
  templateUrl: './review-display.component.html',
  styleUrls: ['./review-display.component.css']
})
export class ReviewDisplayComponent implements OnInit {
  @Input() reviews: Review[] | undefined;

  constructor() { }

  ngOnInit(): void {
  }

}
