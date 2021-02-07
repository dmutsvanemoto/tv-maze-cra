import React, { FC } from "react";
import Avatar from "@material-ui/core/Avatar";
import { ShowCastIntoItemProps } from "../types/ShowCastIntoItemProps";

export const ShowCastInfoItem: FC<ShowCastIntoItemProps> = ({
  showId,
  actor,
}) => {
  return (
    <>
      <Avatar src="/broken-image.jpg" />
      <span>
        {actor?.firstName}&nbsp;{actor?.lastName}
      </span>
      <span>{}</span>
    </>
  );
};

export default ShowCastInfoItem;
