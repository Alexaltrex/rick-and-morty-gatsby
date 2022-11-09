import React, {FC} from "react";
import * as style from "./Episodes.module.scss";
import {TitleBlock} from "../../components/Title/Title";
import {graphql, HeadFC, Link} from "gatsby";
import {IEpisodeBadge} from "../../types/types";
import {Seo} from "../../components/Seo/Seo";

interface IEpisodes {
    pageContext: {
        ids: number[]
    }
    data: {
        swapi: {
            episodesByIds: IEpisodeBadge[]
        }
    }
}

const Episodes: FC<IEpisodes> = ({
                                     data: {swapi: {episodesByIds}}
                                 }) => {

    return (
        <div className={style.episodes}>
            <TitleBlock title="episodes"/>

            <div className={style.episodesList}>
                {
                    episodesByIds.map(({id, episode, name}) => (
                        <Link key={id}
                            to={`/episode/${id}`}
                              className={style.episodesListItem}

                        >
                            {`${episode} - ${name}`}
                        </Link>
                    ))
                }
            </div>
        </div>
    )
}

export default Episodes

export const Head: HeadFC = () => {
    return (
        <Seo title="Episodes"/>
    )
}

export const query = graphql`
    query($ids: [ID!]!) {
        swapi {
            episodesByIds(ids: $ids) {
                id
                name
                episode                
            }
        }
    }
`
