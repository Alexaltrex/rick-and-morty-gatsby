import React, {FC} from "react";
import * as style from "./LocationItem.module.scss";
import {graphql, navigate} from "gatsby";
import {ILocation} from "../../types/types";
import {NavigateBlock} from "../../components/NavigateBlock/NavigateBlock";
import {InfoItem} from "../../components/InfoItem/InfoItem";
import {ListOfResidents} from "../../components/ListOfResidents/ListOfResidents";

interface ILocationItem {
    pageContext: {
        id: number
    }
    data: {
        swapi: {
            locations: {
                info: {
                    count: number
                }
            }
            location: ILocation
        }
    }
}

const LocationItem: FC<ILocationItem> = ({
                                             data: {
                                                 swapi: {
                                                     locations: {
                                                         info: {count}
                                                     },
                                                     location: {id, name, type, dimension, residents}
                                                 }
                                             }
                                         }) => {

    return (
        <div className={style.locationItem}>
            <NavigateBlock onPrevClick={() => navigate(`/location/${Number(id) - 1}`)}
                           onNextClick={() => navigate(`/location/${Number(id) + 1}`)}
                           prevDisabled={id <= 1}
                           nextDisabled={id >= count}
                           btnLabel="location"
            />

            <div className={style.content}>
                <InfoItem label="name" value={name}/>
                {dimension && <InfoItem label="dimension" value={dimension}/>}
                {type && <InfoItem label="type" value={type}/>}
            </div>

            <ListOfResidents residents={residents} label="location"/>
        </div>
    )
}

export default LocationItem

export const query = graphql`
    query($id: ID!) {
        swapi {
            locations {
                info {
                    count
                }
            }
            location(id: $id) {
                id
                name
                type
                dimension
                residents {
                    id
                    name
                    image
                }

            }
        }
    }
`
