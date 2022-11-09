import {FC} from "react";

import * as style from "./ListOfResidents.module.scss"
import clsx from "clsx";

import {ICharacterCard} from "../../types/types";
import React from "react";
import {Link} from "gatsby";

interface IListOfResidents {
    residents: ICharacterCard[]
    label: string
    className?: string
}

export const ListOfResidents: FC<IListOfResidents> = ({
                                                          residents,
                                                          label,
                                                          className
                                                      }) => {
    return (
        <div className={clsx(style.listOfResidents, Boolean(className) && className)}>
            <div className={style.info}>
                <p className={style.label}>{`List of characters who have been seen in the ${label}:`}</p>
                <p className={style.count}>{residents.length}</p>
            </div>

            <div className={style.residents}>
                {
                    residents.map(({id, name, image}) => (
                        <Link to={`/character/${id}`}
                              key={id}
                              className={style.characterChip}
                        >
                                <div className={style.imgWrapper}>
                                    <img src={image} alt=""/>
                                    {/*<Image src={character.image}*/}
                                    {/*       layout="fill"*/}
                                    {/*       objectFit="fill"*/}
                                    {/*       width={300}*/}
                                    {/*       height={300}*/}
                                    {/*       alt={character.name}*/}
                                    {/*/>*/}
                                </div>
                                <p>{name}</p>
                        </Link>
                    ))
                }
            </div>
        </div>
    )
}
