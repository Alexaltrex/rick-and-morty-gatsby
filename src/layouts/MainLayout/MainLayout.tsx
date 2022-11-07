import React, {FC, ReactNode} from "react";
import * as style from "./MainLayout.module.scss"
import {Header} from "../../components/Header/Header";

interface IMainLayout {
    children: ReactNode
    //headTitle: string
}

export const MainLayout: FC<IMainLayout> = ({
                                                children,
                                                //headTitle
                                            }) => {
    return (
        <div className={style.mainLayout}>
            <Header/>

            <main className={style.main}>
                {children}
            </main>
        </div>
    )
}
