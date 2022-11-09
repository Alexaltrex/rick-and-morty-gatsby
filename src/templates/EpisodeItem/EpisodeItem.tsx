import React, {FC} from "react";
import * as style from "./EpisodeItem.module.scss";
import {graphql, navigate} from "gatsby";
import {IEpisode} from "../../types/types";
import {NavigateBlock} from "../../components/NavigateBlock/NavigateBlock";
import {InfoItem} from "../../components/InfoItem/InfoItem";
import {ListOfResidents} from "../../components/ListOfResidents/ListOfResidents";

interface IEpisodeItem {
    pageContext: {
        id: number
    }
    data: {
        swapi: {
            episodes: {
                info: {
                    count: number
                }
            }
            episode: IEpisode
        }
    }
}

const EpisodeItem: FC<IEpisodeItem> = ({
                                           data: {
                                               swapi: {
                                                   episodes: {
                                                       info: {count}
                                                   },
                                                   episode: {id, name, episode, air_date, characters}
                                               }
                                           }
                                       }) => {
    return (
        <div className={style.episodeItem}>
            <NavigateBlock onPrevClick={() => navigate(`/episode/${Number(id) - 1}`)}
                           onNextClick={() => navigate(`/episode/${Number(id) + 1}`)}
                           prevDisabled={Number(id) <= 1}
                           nextDisabled={Number(id) >= count}
                           btnLabel="episode"
            />

            <div className={style.content}>
                <InfoItem label="name" value={name}/>
                <InfoItem label="episode" value={episode}/>
                <InfoItem label="air date" value={air_date}/>
            </div>

            <ListOfResidents residents={characters} label="episode"/>

        </div>
    )
}

export default EpisodeItem

export const query = graphql`
    query($id: ID!) {
        swapi {
            episodes {
                info {
                    count
                }
            }
            episode(id: $id) {
                id
                name
                episode
                air_date
                characters {
                    id
                    name
                    image
                }
            }
        }
    }
`
