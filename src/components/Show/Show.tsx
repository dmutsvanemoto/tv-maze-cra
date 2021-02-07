import { FC } from "react";
import Container from "@material-ui/core/Container";
import IShow from "../../interfaces/Show";

export const Show: FC<IShow> = (props) => {
  return <Container maxWidth="lg">{JSON.stringify(props)}</Container>;
};

export default Show;
