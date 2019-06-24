export interface Films {
    count: number;
    next?: string;
    previous?: string;
    films: Film[];
}

export interface Film {
    title: string
    opening_crawl: string;
    director: string;
    producer: string;
    release_date: string;
    episode_id: number;
    characters: string[];
    planets: string[];
    starships: string[];
    vehicles: string[];
    species: string[];
    created: string;
    edited: string;
    url: string;
}
