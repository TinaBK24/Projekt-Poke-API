export interface ITypesInfo {
    damage_relations:      DamageRelations;
    game_indices:          GameIndex[];
    generation:            Generation;
    id:                    number;
    move_damage_class:     Generation;
    moves:                 Generation[];
    name:                  string;
    names:                 Name[];
    past_damage_relations: any[];
    pokemon:               Pokemon[];
    sprites:               Sprites;
}

export interface DamageRelations {
    double_damage_from: Generation[];
    double_damage_to:   Generation[];
    half_damage_from:   Generation[];
    half_damage_to:     Generation[];
    no_damage_from:     any[];
    no_damage_to:       any[];
}

export interface Generation {
    name: string;
    url:  string;
}

export interface GameIndex {
    game_index: number;
    generation: Generation;
}

export interface Name {
    language: Generation;
    name:     string;
}

export interface Pokemon {
    pokemon: Generation;
    slot:    number;
}

export interface Sprites {
    "generation-iii":  GenerationIii;
    "generation-iv":   GenerationIv;
    "generation-ix":   GenerationIx;
    "generation-v":    GenerationV;
    "generation-vi":   { [key: string]: Colosseum };
    "generation-vii":  GenerationVii;
    "generation-viii": GenerationViii;
}

export interface GenerationIii {
    colosseum:           Colosseum;
    emerald:             Colosseum;
    "firered-leafgreen": Colosseum;
    "ruby-saphire":      Colosseum;
    xd:                  Colosseum;
}

export interface Colosseum {
    name_icon: string;
}

export interface GenerationIv {
    "diamond-pearl":        Colosseum;
    "heartgold-soulsilver": Colosseum;
    platinum:               Colosseum;
}

export interface GenerationIx {
    "scarlet-violet": Colosseum;
}

export interface GenerationV {
    "black-2-white-2": Colosseum;
    "black-white":     Colosseum;
}

export interface GenerationVii {
    "lets-go-pikachu-lets-go-eevee": Colosseum;
    "sun-moon":                      Colosseum;
    "ultra-sun-ultra-moon":          Colosseum;
}

export interface GenerationViii {
    "brilliant-diamond-and-shining-pearl": Colosseum;
    "legends-arceus":                      Colosseum;
    "sword-shield":                        Colosseum;
}