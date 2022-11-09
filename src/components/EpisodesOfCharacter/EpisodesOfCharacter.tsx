import {FC} from "react";
import * as style from "./EpisodesOfCharacter.module.scss"
import clsx from "clsx";
import LocalMoviesIcon from '@mui/icons-material/LocalMovies';
import {IEpisodeBadge} from "../../types/types";
import {Link} from "gatsby";
import React from "react";

interface IEpisodesOfCharacter {
    episodesOfCharacter: IEpisodeBadge[]
    className?: string
}

export const EpisodesOfCharacter: FC<IEpisodesOfCharacter> = ({
                                                                  episodesOfCharacter,
                                                                  className
}) => {
    return (
        <div className={clsx(style.episodesOfCharacter, className && className)}>
            <div className={style.info}>
                <p className={style.label}>List of episodes in which this character appeared:</p>
                <p className={style.count}>{episodesOfCharacter.length}</p>
            </div>

            <div className={style.episodes}>
                {
                    episodesOfCharacter.map(({id, name, episode}) => (
                        <Link key={id}
                            to={`/episode/${id}`}
                              className={style.episodeChip}
                        >

                                <div className={style.iconWrapper}>
                                    <LocalMoviesIcon className={style.icon}/>
                                </div>
                                <p>{`${episode} - ${name}`}</p>

                        </Link>
                    ))
                }
            </div>
        </div>
    )
}
