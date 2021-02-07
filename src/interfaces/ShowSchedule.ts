import { Links } from "./Links";
import { Show } from "./Show";

export interface ShowSchedule {
  id: number;
  url: string;
  name: string;
  season: number;
  number: number;
  type: string;
  airdate: string;
  airtime: string;
  airstamp: Date;
  runtime: number;
  image?: any;
  summary?: any;
  show: Show;
  _links: Links;
}

export default ShowSchedule;
