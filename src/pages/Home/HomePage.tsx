import { FC } from "react";
import Container from "@material-ui/core/Container";
import HomePageConstants from "../../constants/HomePage.constants";
import { HomeBanner } from "../../components/HomeBanner/HomeBanner";

export type HomePageProps = {};

export const HomePage: FC<HomePageProps> = () => {
  return (
    <Container maxWidth="lg">
      <HomeBanner
        title={HomePageConstants.title}
        description={HomePageConstants.description}
      />
      <div>
        <h2>{HomePageConstants.title}</h2>
        <div></div>
      </div>
    </Container>
  );
};
