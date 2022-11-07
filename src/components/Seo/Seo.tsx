import React, {FC} from "react";
import {graphql, useStaticQuery} from "gatsby";

interface IData {
    site: {
        siteMetadata: {
            title: string
        }
    }
}

interface ISeo {
    title: string
}

export const Seo: FC<ISeo> = ({title}) => {
    const data = useStaticQuery<IData>(graphql`
        query {
            site {
                siteMetadata {
                    title
                }
            }
        }
    `)
    return (
        <title>{data.site.siteMetadata.title} | {title}</title>
    )
}
