import { Character } from "./Character";
import { Person } from "./Person";

export interface ShowCast {
  person: Person;
  character: Character;
  self: boolean;
  voice: boolean;
}

export default ShowCast;
