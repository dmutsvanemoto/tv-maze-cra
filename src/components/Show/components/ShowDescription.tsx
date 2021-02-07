import React, { FC } from "react";
import { sanitize } from "dompurify";
import { ShowDescriptionProps } from "../types/ShowDescriptionProps";

export const ShowDescription: FC<ShowDescriptionProps> = ({ description }) => {
  const safeHtml = sanitize(description);

  return (
    <div
      data-testid="showdescription"
      dangerouslySetInnerHTML={{ __html: safeHtml }}
    />
  );
};

export default ShowDescription;
