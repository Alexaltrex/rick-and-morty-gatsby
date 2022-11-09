import {FC} from "react";
import * as style from "./InfoItem.module.scss"
import clsx from "clsx";
import {Link} from "gatsby";
import React from "react";

interface IInfoItem {
    label: string
    value: string
    href?: string
}

export const InfoItem: FC<IInfoItem> = ({label, value, href}) => {
    return (
        <div className={style.infoItem}>
            <p className={(style.label)}>{label}</p>

            <div/>

            {
                href ? (
                    <Link to={href}
                          className={clsx({
                              [style.value]: true,
                              [style.value_name]: label === "name",
                          })}
                    >
                        {value}
                    </Link>

                ) : (
                    <p className={clsx({
                        [style.value]: true,
                        [style.value_name]: label === "name",
                    })}>
                        {value}
                    </p>
                )
            }

        </div>
    )
}
