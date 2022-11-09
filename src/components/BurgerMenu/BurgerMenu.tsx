import * as style from "./BurgerMenu.module.scss"
import clsx from "clsx";
import {useStore} from "../../store/useStore";
import {observer} from "mobx-react-lite";
import React, {FC} from "react";
import {links} from "../Header/links";
import {Link} from "gatsby";

interface IBurgerMenu {
    pathname: string
}

export const BurgerMenu: FC<IBurgerMenu> = observer(({pathname}) => {
    const {burgerMenu, setBurgerMenu} = useStore();

    return (
        <div className={clsx({
            [style.burgerMenu]: true,
            [style.burgerMenu_show]: burgerMenu
        })}>
            <div className={style.links}>
                {
                    links.map(({label, to, slug}, index) => (
                        <Link key={index}
                              to={to}
                              className={clsx({
                                  [style.link]: true,
                                  [style.link_active]: pathname.includes(slug),
                              })}
                              onClick={() => setBurgerMenu(false)}
                        >
                            {label}
                        </Link>
                    ))
                }
            </div>
        </div>
    )
})
