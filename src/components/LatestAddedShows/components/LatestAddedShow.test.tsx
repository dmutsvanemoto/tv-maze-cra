import { render, screen, waitFor } from "@testing-library/react";
import { LatestAddedShow } from "./LatestAddedShow";
import { ShowEpisode } from "../../../interfaces/ShowEpisode";

const episode: ShowEpisode = {
  id: 1998354,
  url:
    "http://www.tvmaze.com/episodes/1998354/cbs-news-sunday-morning-2021-02-07-episode-6",
  name: "Episode 6",
  season: 2021,
  number: 6,
  type: "regular",
  airdate: "2021-02-07",
  airtime: "09:00",
  airstamp: "2021-02-07T14:00:00+00:00",
  runtime: 90,
  image: null,
  summary: null,
  show: {
    id: 15779,
    url: "http://www.tvmaze.com/shows/15779/cbs-news-sunday-morning",
    name: "CBS News Sunday Morning",
    type: "News",
    language: "English",
    genres: [],
    status: "Running",
    runtime: 90,
    premiered: "1979-01-28",
    officialSite: "http://www.cbsnews.com/sunday-morning/",
    schedule: {
      time: "09:00",
      days: ["Sunday"],
    },
    rating: { average: 9.8 },
    weight: 91,
    network: {
      id: 2,
      name: "CBS",
      country: {
        name: "United States",
        code: "US",
        timezone: "America/New_York",
      },
    },
    webChannel: null,
    externals: {
      thetvdb: 264537,
      imdb: "tt0165001",
    },
    image: {
      medium:
        "http://static.tvmaze.com/uploads/images/medium_portrait/237/592585.jpg",
      original:
        "http://static.tvmaze.com/uploads/images/original_untouched/237/592585.jpg",
    },
    summary:
      "<p><b>CBS News Sunday Morning</b> is a early morning news and magazine program that airs on Sunday's on CBS.</p>",
    updated: 1612167349,
  },
};

describe("LatestShow", () => {
  describe("LatestShowItem", () => {
    test("renders LatestShowItem", () => {
      render(<LatestAddedShow episode={episode} />);
      const component = screen.getByTestId("latestshowitem");
      expect(component).toBeInTheDocument();
    });

    test("renders image", () => {
      render(<LatestAddedShow episode={episode} />);
      const component = screen.getByTestId("latestshowitemimage");
      expect(component).toBeInTheDocument();
    });

    test("renders title", () => {
      render(<LatestAddedShow episode={episode} />);
      const component = screen.getByTestId("latestshowitemtitle");
      expect(component).toBeInTheDocument();
    });
  });
});
