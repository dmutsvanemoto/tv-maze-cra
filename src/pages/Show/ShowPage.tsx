import { FC } from "react";
import { useParams } from "react-router-dom";
import useFetchTVMazeShowApi from "../../hooks/useFetchTVMazeShowApi";
import Container from "@material-ui/core/Container";

type ShowPageParams = {
  id: string;
};

export const ShowPage: FC = () => {
  let { id } = useParams<ShowPageParams>();
  const { data, isLoading, isError } = useFetchTVMazeShowApi(Number(id));

  if (isLoading) return <>Loading Show...</>;

  if (isError) return <>Failed to load show...</>;

  if (data) return <Container maxWidth="lg">{JSON.stringify(data)}</Container>;

  return <>Oops, something went wrong!</>;
};
