import React, {FC, ReactNode} from "react";
import * as style from "./MainLayout.module.scss"
import {Header} from "../../components/Header/Header";
import {BurgerMenu} from "../../components/BurgerMenu/BurgerMenu";

interface IMainLayout {
    children: ReactNode
    pathname: string
}

export const MainLayout: FC<IMainLayout> = ({
                                                children,
                                                pathname,
                                                //headTitle
                                            }) => {
    return (
        <div className={style.mainLayout}>
            <Header pathname={pathname}/>
            <BurgerMenu pathname={pathname}/>
            <main className={style.main}>
                {children}
            </main>
        </div>
    )
}
