import {GatsbyBrowser} from "gatsby";
import MobxWrapper from "./src/components/store/MobxWrapper";
import * as React from "react";

export const wrapRootElement: GatsbyBrowser["wrapRootElement"] = (props) => {
    const {element} = props;
    return (
        <MobxWrapper>
            {element}
        </MobxWrapper>
    )
}
