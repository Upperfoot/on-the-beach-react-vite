import { render, within } from "@testing-library/react";
import { StarRating } from "./StarRating";

describe("renders StarRating Component", () => {
  test("renders StarRating Component", async () => {
      const rating: number = 5;
      const { container: starRating } = render(<StarRating rating={rating} />);

      // Lets get the Scope
      const starRatingScope = within(starRating);

      // Lets get the Child Icons
      const starIcons = await starRatingScope.findAllByText('star');

      // Check to see if it's 5
      expect(starIcons.length).toEqual(5);
  });
});