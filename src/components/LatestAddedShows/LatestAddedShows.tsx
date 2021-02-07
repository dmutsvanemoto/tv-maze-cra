import { FC } from "react";
import { LatestAddedShowsProps } from "./types/LatestAddedShowsProps";
import { LatestAddedShowTitle } from "./components/LatestAddedShowTitle";
import { LatestAddedShowPending } from "./components/LatestAddedShowPending";
import { LatestAddedShow } from "./components/LatestAddedShow";

import { makeStyles, createStyles, Theme } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      flexGrow: 1,
    },
    paper: {
      padding: theme.spacing(2),
      textAlign: "center",
      color: theme.palette.text.secondary,
    },
  })
);

export const LatestAddedShows: FC<LatestAddedShowsProps> = ({ episodes }) => {
  const classes = useStyles();

  return (
    <div data-testid="latestshows" className={classes.root}>
      <LatestAddedShowTitle />

      <Grid container spacing={3}>
        {!episodes && <LatestAddedShowPending />}
        {episodes?.map((episode) => (
          <LatestAddedShow key={episode.id} episode={episode} />
        ))}
      </Grid>
    </div>
  );
};
