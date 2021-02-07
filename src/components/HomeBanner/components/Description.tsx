import { FC } from "react";
import { HomeBannerDescriptionProps } from "../types/HomeBannerDescriptionProps";
import Typography from "@material-ui/core/Typography";

export const Description: FC<HomeBannerDescriptionProps> = ({
  description,
}) => {
  return (
    <Typography
      data-testid="description"
      variant="h5"
      color="inherit"
      paragraph
    >
      {description}
    </Typography>
  );
};
