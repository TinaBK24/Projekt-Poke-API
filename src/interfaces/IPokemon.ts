export interface IPokemon {
    count: number;
    next: string;
    previous: null;
    results: IResults[]
}

export interface IResults {
    name: string;
    url: string;
}