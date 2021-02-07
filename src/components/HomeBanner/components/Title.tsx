import { FC } from "react";
import { TitleProps } from "../types/TitleProps";
import Typography from "@material-ui/core/Typography";

export const Title: FC<TitleProps> = ({ title }) => {
  return (
    <Typography
      data-testid="title"
      component="h1"
      variant="h3"
      color="inherit"
      gutterBottom
    >
      {title}
    </Typography>
  );
};
