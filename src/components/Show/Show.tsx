import React, { FC } from "react";
import {
  Container,
  Card,
  CardMedia,
  CardContent,
  CardHeader,
  Paper,
} from "@material-ui/core";
import IShow from "../../interfaces/Show";
// import { ShowIcon } from "./components/ShowIcon";
import { ShowInfo } from "./components/ShowInfo";
import { ShowDescription } from "./components/ShowDescription";
// import { ShowRating } from "../ShowRating/ShowRating";
import ShowCast from "../../interfaces/ShowCast";

type ShowProps = { show: IShow; cast?: ShowCast[] };

export const Show: FC<ShowProps> = ({
  show: { name, summary, status, image, network, schedule, genres },
  cast,
}) => {
  return (
    <Container maxWidth="lg">
      <Paper>
        <Card>
          <CardMedia
            component="img"
            alt={name}
            image={image?.medium}
            title={name}
          />
          <CardHeader title={name} />
          <CardContent>
            <ShowDescription description={summary} />
          </CardContent>
        </Card>
        <Card>
          <ShowInfo
            streamOn={network.name}
            schedule={schedule}
            status={status}
            genres={genres}
          />
        </Card>
      </Paper>
    </Container>
  );
};

export default Show;
