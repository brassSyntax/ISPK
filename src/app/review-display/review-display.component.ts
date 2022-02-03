import {Component, Input, OnInit} from '@angular/core';
import {Review, ReviewStatus} from "../review";
import {AccountService} from "../services/account.service";
import {map} from "rxjs";

@Component({
  selector: 'app-review-display',
  templateUrl: './review-display.component.html',
  styleUrls: ['./review-display.component.css']
})
export class ReviewDisplayComponent implements OnInit {
  @Input() reviews: Review[] | undefined;
  isUserAdmin = false;

  constructor(private account: AccountService) {
    this.reviews = JSON.parse(localStorage.getItem('reviews') || '{}');

    this.account.user
      .pipe(map(() => {
        this.isUserAdmin = this.account.userValue?.role === 'admin';
      }))
      .subscribe();
  }

  getReviewStatus(review: Review): ReviewStatus {
    return review.status;
  }

  setReviewStatus(review: Review, status: ReviewStatus) {
    review.status = status;
    localStorage.setItem('reviews', JSON.stringify(this.reviews));
  }

  ngOnInit(): void {
  }

}
