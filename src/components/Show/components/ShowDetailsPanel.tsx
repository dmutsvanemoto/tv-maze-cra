import React, { FC } from "react";
import { ShowDetailsPanelProps } from "../types/ShowDetailsPanelProps";
import { ShowDetailsPanelItem } from "./ShowDetailsPanelItem";

export const ShowDetailsPanel: FC<ShowDetailsPanelProps> = ({
  streamOn = "Not Available",
  schedule,
  status = "Not Available",
  genres,
}) => {
  return (
    <div>
      <ShowDetailsPanelItem label="Stream on" text={streamOn} />
      <ShowDetailsPanelItem label="Schedule" text={schedule?.days.join(",")} />
      <ShowDetailsPanelItem label="Status" text={status} />
      <ShowDetailsPanelItem label="Genres" text={genres.join(",")} />
    </div>
  );
};

export default ShowDetailsPanel;
