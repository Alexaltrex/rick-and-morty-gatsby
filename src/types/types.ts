export interface ICharacterCard {
    id: string
    name: string
    image: string
}

interface IOrigin {
    id: string
    name: string
}

export interface IEpisodeBadge {
    id: string
    episode: string
    name: string
}

export interface ICharacter {
    id: number
    name: string
    status: string
    species: string
    type: string
    gender: string
    origin: IOrigin
    location: IOrigin
    image: string
    episode: IEpisodeBadge[]
}

export interface ILocationItem {
    id: number
    name: string
    dimension: string
    type: string
}

export interface ILocation {
    id: number
    name: string
    type: string
    dimension: string
    residents: ICharacterCard[]
}

export interface IEpisode {
    id: number
    name: string
    episode: string
    air_date: string
    characters: ICharacterCard[]
}



