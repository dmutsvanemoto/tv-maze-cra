import { FC } from "react";
import Container from "@material-ui/core/Container";
import HomePageConstants from "../../constants/HomePage.constants";
import { HomeBanner } from "../../components/HomeBanner/HomeBanner";
import useFetchTVMazeShowsApi from "../../hooks/useFetchTVMazeShowsApi";

export type HomePageProps = {};

export const HomePage: FC<HomePageProps> = () => {
  const { data, isLoading, isError } = useFetchTVMazeShowsApi();

  return (
    <Container maxWidth="lg">
      <HomeBanner
        title={HomePageConstants.title}
        description={HomePageConstants.description}
      />
      <div>
        <h2>{HomePageConstants.subtitle}</h2>
        {isLoading && <div>Loading Shows...</div>}
        {isError && <div>Failed to Load Shows!!!</div>}
        {data && (
          <div data-testid="shows-container">
            {data.map((show) => (
              <div key={show.id}>{show.name}</div>
            ))}
          </div>
        )}
      </div>
    </Container>
  );
};
