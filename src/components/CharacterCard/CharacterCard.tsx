import React, {FC} from "react";
import * as style from "./CharacterCard.module.scss";

import {ICharacterCard} from "../../types/types";
import {Link} from "gatsby";



export const CharacterCard: FC<ICharacterCard> = ({id, name, image}) => {
    return (
       <Link to={`/character/${id}`}
              className={style.characterCard}
              >
                <div className={style.imgWrapper}>
                    <img src={image} alt=""/>
                </div>
                <p>{name}</p>
        </Link>

    )
}
