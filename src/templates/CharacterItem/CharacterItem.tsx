import React, {FC} from "react";
import {ICharacter} from "../../types/types";
import * as style from "./CharacterItem.module.scss";
import {NavigateBlock} from "../../components/NavigateBlock/NavigateBlock";
import {graphql, HeadFC, navigate} from "gatsby";
import {InfoItem} from "../../components/InfoItem/InfoItem";
import {EpisodesOfCharacter} from "../../components/EpisodesOfCharacter/EpisodesOfCharacter";
import {Seo} from "../../components/Seo/Seo";

interface ICharacterItem {
    pageContext: {
        id: number
    }
    data: {
        swapi: {
            character: ICharacter
            characters: {
                info: {
                    count: number
                }
            }
        }
    }
}

const CharacterItem: FC<ICharacterItem> = ({
                                               //pageContext: {id},
                                               data: {swapi: {
                                                   character,
                                                   characters: {info: {count}}}
                                               }
}) => {
    const {id, name, status, species,type, location, origin, episode, image, gender} = character;

    return (
            <div className={style.characterItem}>
                <NavigateBlock onPrevClick={() => navigate(`/character/${Number(id) - 1}`)}
                               onNextClick={() => navigate(`/character/${Number(id) + 1}`)}
                               prevDisabled={id <= 1}
                               nextDisabled={id >= count}
                               btnLabel="character"
                />

                <div className={style.content}>
                    <div className={style.imageWrapper}>
                        <img src={image} alt=""/>
                        {/*<Image src={character.image}*/}
                        {/*       layout="fill"*/}
                        {/*       objectFit="fill"*/}
                        {/*       width={300}*/}
                        {/*       height={300}*/}
                        {/*       alt={character.name}*/}
                        {/*/>*/}
                    </div>

                    <div className={style.info}>
                        <InfoItem label="name" value={character.name}/>
                        <InfoItem label="gender" value={character.gender}/>
                        <InfoItem label="species" value={character.species}/>
                        <InfoItem label="status" value={character.status}/>
                        {character.type && <InfoItem label="type" value={character.type}/>}
                        <InfoItem label="location" value={character.location.name}
                                  href={character.location.id ? `/location/${character.location.id}` : ""}/>
                        <InfoItem label="origin" value={character.origin.name}
                                  href={character.origin.id ? `/location/${character.origin.id}` : ""}/>

                        <EpisodesOfCharacter episodesOfCharacter={episode}/>
                    </div>
                </div>
            </div>
    )
}

export default CharacterItem;

export const Head: HeadFC<any, { id: number }> = (props) => {
    return (
        <Seo title={`Character | ID ${props.pageContext.id}`}/>
    )
}

export const query = graphql`
    query($id: ID!) {
        swapi {
            character(id: $id) {
                id
                name
                status
                species
                type                
                gender
                origin {
                    id
                    name
                }
                location {
                    id
                    name
                }
                image
                episode {
                    id
                    episode
                    name
                }
                
            }
            characters {
                info {
                    count                    
                }                
            }
        }
    }
`
