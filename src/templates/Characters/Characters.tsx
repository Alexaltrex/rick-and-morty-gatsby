import React, {FC} from "react";
import {graphql, HeadFC} from "gatsby";
import {Seo} from "../../components/Seo/Seo";
import {TitleBlock} from "../../components/Title/Title";
import * as style from "./Characters.module.scss"
import {Pagination} from "@mui/material";
import {navigate} from "gatsby";
import {ICharacterCard} from "../../types/types";
import {CharacterCard} from "../../components/CharacterCard/CharacterCard";

interface ICharactersPage {
    pageContext: {
        page: number
    }
    data: {
        swapi: {
            characters: {
                info: {
                    count: number
                    pages: number
                }
                results: ICharacterCard[]
            }
        }
    }
}

const Characters: FC<ICharactersPage> = ({
                                             pageContext,
                                             data
                                         }) => {
    const onChangeHandler = (event: React.ChangeEvent<unknown>, page: number) => {
        navigate(`/characters/${page}`)
    }
    return (
            <div className={style.characters}>
                <TitleBlock title="characters"/>

                <Pagination variant="outlined"
                            size="small"
                            shape="rounded"
                            count={data.swapi.characters.info.pages}
                            page={pageContext.page}
                            showFirstButton
                            showLastButton
                            onChange={onChangeHandler}
                            sx={{
                                marginTop: "10px",
                                alignSelf: "center",
                                "& .Mui-selected": {
                                    "backgroundColor": "rgba(0, 0, 0, 0.3)!important"
                                }
                            }}
                />

                <div className={style.cards}>
                    {
                        data.swapi.characters.results.map((character) => (
                            <CharacterCard key={character.id} {...character}/>
                        ))
                    }
                </div>
            </div>
    )
}

export default Characters;

export const Head: HeadFC<any, { page: number }> = (props) => {
    return (
        <Seo title={`Characters | Page ${props.pageContext.page}`}/>
    )
}

export const query = graphql`
    query($page: Int) {
        swapi {
            characters(page: $page) {
                info {
                    count
                    pages
                }
                results {
                    id
                    name
                    image
                }
            }
        }
    }
`
