import { FC } from "react";
import { useHistory } from "react-router-dom";
import { ShowRating } from "../../ShowRating/ShowRating";
import { LatestAddedShowProps } from "../types/LatestAddedShowProps";
import { makeStyles, createStyles, Theme } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import Hidden from "@material-ui/core/Hidden";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      maxWidth: 345,
    },
  })
);

export const LatestAddedShow: FC<LatestAddedShowProps> = ({
  episode: {
    show: { id, name, rating, image },
  },
}) => {
  const classes = useStyles();
  let history = useHistory();
  const handleOnClick = () => {
    history.push(`/shows/${id}`);
  };

  return (
    <Grid
      item
      xs={12}
      sm={2}
      data-testid="latestshowitem"
      onClick={handleOnClick}
    >
      <Card className={classes.root}>
        <CardMedia
          data-testid="latestshowitemimage"
          component="img"
          alt={name}
          height="150"
          image={image?.original}
          title={name}
        />
        <CardContent data-testid="latestshowitemtitle">
          <ShowRating data-testid="latestshowitemrating" rating={rating} />
          <Typography component="h5" gutterBottom>
            {name}
          </Typography>
        </CardContent>
      </Card>
    </Grid>
  );
};
