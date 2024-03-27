export interface Pokemon {
  name: string;
  types: { type: { name: string } }[];
  abilities: { ability: { name: string } }[];
  id: number;
  sprites: {
    front_default: string;
  };
  stats: { base_stat: number; stat: { name: string } }[];
}
