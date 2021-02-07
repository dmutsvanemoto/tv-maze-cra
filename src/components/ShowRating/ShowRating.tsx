import { FC } from "react";
import { ShowRatingProps } from "../types/ShowRatingProps";
import Box from "@material-ui/core/Box";
import Rating from "@material-ui/lab/Rating";

export const ShowRating: FC<ShowRatingProps> = ({ rating: { average } }) => {
  return (
    <Box
      component="fieldset"
      mb={3}
      borderColor="transparent"
      data-testid="show-rating"
    >
      <Rating name="read-only" value={average} readOnly />
    </Box>
  );
};
