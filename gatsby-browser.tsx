import * as React from "react"
import type {GatsbyBrowser} from "gatsby";
import "./src/assets/style/global.css"
import MobxWrapper from "./src/store/MobxWrapper";
import {MainLayout} from "./src/layouts/MainLayout/MainLayout";

export const wrapPageElement: GatsbyBrowser["wrapPageElement"] = (props) => {
    console.log(props);
    //console.log(props.getResourceURLsForPathname())
    const {element} = props;
    return (
        <MainLayout pathname={props.props.location.pathname}>
            {element}
        </MainLayout>
    )
}

export const wrapRootElement: GatsbyBrowser["wrapRootElement"] = (props) => {
    const {element} = props;
    return (
        <MobxWrapper>
            {element}
        </MobxWrapper>
    )
}
