import * as React from "react"
import {Link, HeadFC} from "gatsby"
import * as style from "./404.module.scss";
// @ts-ignore
import img from "../assets/png/404.png";

const NotFoundPage = () => {
    return (
        <div className={style.notFound}>
            <div className={style.content}>
                <img src={img} alt=""/>

                <h1>Page Not Found</h1>
                <Link to="/">
                    Back to home
                </Link>

            </div>
        </div>
    )
}

export default NotFoundPage

export const Head: HeadFC = () => <title>Not found</title>
