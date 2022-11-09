import React from "react";
import {FC} from "react";
import * as style from "./Locations.module.scss"
import {TitleBlock} from "../../components/Title/Title";
import {graphql, HeadFC} from "gatsby";
import {Seo} from "../../components/Seo/Seo";
import {ILocationItem} from "../../types/types";
import {LocationsTable} from "../../components/LocationsTable/LocationsTable";

interface ILocations {
    pageContext: {
        ids: number[]
    }
    data: {
        swapi: {
            locationsByIds: ILocationItem[]
        }
    }
}

const Locations: FC<ILocations> = ({
                                       pageContext,
                                       data: {swapi: {locationsByIds}}
                                   }) => {
    return (
        <div className={style.locations}>
            <TitleBlock title="locations"/>
            <LocationsTable locations={locationsByIds}/>
        </div>
    )
}

export default Locations

export const Head: HeadFC = () => {
    return (
        <Seo title="Locations"/>
    )
}

export const query = graphql`
    query($ids: [ID!]!) {
        swapi {
            locationsByIds(ids: $ids) {
                id
                name
                dimension
                type
            }
        }
    }
`
