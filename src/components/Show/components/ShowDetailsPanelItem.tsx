import React, { FC } from "react";
import {
  // Theme,
  // createStyles,
  // makeStyles,
  ListItem,
  ListItemText,
} from "@material-ui/core";

import { ShowDetailsPanelItemProps } from "../types/ShowDetailsPanelItemProps";

// const useStyles = makeStyles((theme: Theme) =>
//   createStyles({
//     root: {
//       width: "100%",
//       maxWidth: 360,
//       backgroundColor: theme.palette.background.paper,
//     },
//   })
// );

export const ShowDetailsPanelItem: FC<ShowDetailsPanelItemProps> = ({
  label,
  text,
}) => {
  // const classes = useStyles();
  return (
    <ListItem>
      <ListItemText
        primary={label}
        secondary={<ListItemText primary={text} />}
      />
    </ListItem>
  );
};

export default ShowDetailsPanelItem;
