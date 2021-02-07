import { FC } from "react";
import Container from "@material-ui/core/Container";
import HomePageConstants from "../../constants/HomePage.constants";

export type HomePageProps = {};

export const HomePage: FC<HomePageProps> = () => {
  return (
    <>
      <div>
        <h1>{HomePageConstants.title}</h1>
        <p>{HomePageConstants.description}</p>
      </div>
      <div>
        <h2>{HomePageConstants.title}</h2>
        <div></div>
      </div>
    </>
  );
};
