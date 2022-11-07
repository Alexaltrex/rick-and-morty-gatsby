import * as React from "react"
import type { GatsbyBrowser } from "gatsby";
import "./src/assets/style/global.css"
import MobxWrapper from "./src/components/store/MobxWrapper";

export const wrapPageElement: GatsbyBrowser["wrapPageElement"] = (props) => {
    console.log(props);
    //console.log(props.getResourceURLsForPathname())
    const {element} = props;
    return (
            <>
                {element}
            </>
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
