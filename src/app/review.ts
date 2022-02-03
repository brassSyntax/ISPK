import {User} from "./user";

export interface Review {
  id: number,
  key: number,
  content: string,
  author?: User,
  //rating: number // TODO: switch to RatingValue later?
  status: ReviewStatus
}

export const enum ReviewStatus {
  APPROVED,
  PENDING,
  REJECTED
}
