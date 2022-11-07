import React, {FC} from "react";
import {MainLayout} from "../../layouts/MainLayout/MainLayout";
import {graphql, HeadFC} from "gatsby";
import {Seo} from "../../components/Seo/Seo";
import {TitleBlock} from "../../components/Title/Title";
import * as style from "./Characters.module.scss"
import {Pagination} from "@mui/material";
import { navigate } from "gatsby"

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
                results: {
                    id: string
                    name: string
                }[]
            }
        }
    }
}

const Characters: FC<ICharactersPage> = ({
                                             pageContext,
    data
                                         }) => {

    console.log(data)

    const onChangeHandler = (event: React.ChangeEvent<unknown>, page: number) => {
        navigate(`/characters/${page}`)
    }
    return (
        <MainLayout>
            <div className={style.characters}>
                <TitleBlock title="characters"/>

                <Pagination variant="outlined"
                            size="small"
                            shape="rounded"
                            count={data.swapi.characters.info.pages}
                            //page={currentPage}
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
            </div>
        </MainLayout>
    )
}

export default Characters

export const Head: HeadFC<any, {page: number}> = (props) => {
    return (
        <Seo title={`Characters | Page ${props.pageContext.page}`}/>
    )
}

export const query = graphql`
    query {
        swapi {
            characters {
                info {
                    count
                    pages
                }
                results {
                    id
                    name
                }
            }
        }
    }
`
