import { Schedule } from "../../../interfaces/Schedule";

export type ShowInfoProps = {
  streamOn?: string;
  schedule: Schedule;
  status?: string;
  genres: string[];
  characters?: any[];
};
