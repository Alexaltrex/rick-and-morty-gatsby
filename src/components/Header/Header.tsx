import React, {FC} from "react";
import * as style from "./Header.module.scss"
import {Link} from "gatsby";
// @ts-ignore
import logo from "../../assets/png/gatsby.png";
import {observer} from "mobx-react-lite";
import {useStore} from "../../store/useStore";
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import {IconButton} from "@mui/material";
import clsx from "clsx";
import {links} from "./links";

interface IHeader {
    pathname: string
}

export const Header: FC<IHeader> = observer(({pathname}) => {
    const {
        burgerMenu,
        setBurgerMenu
    } = useStore();


    return (
        <header className={style.header}>
            <div className={style.inner}>
                <Link to="/"
                      className={style.logo}
                >
                    <img src={logo} alt=""/>
                    <span>Rick and Morty</span>
                </Link>

                <nav className={style.links}>
                    {
                        links.map(({label, to, slug}, index) => (
                            <Link key={index}
                                  to={to}
                                  className={clsx({
                                      [style.link]: true,
                                      [style.link_active]: pathname.includes(slug),
                                  })}
                            >
                                {label}
                            </Link>
                        ))
                    }
                </nav>

                <IconButton size="small"
                            className={clsx({
                                [style.burgerBtn]: true,
                                [style.burgerBtn_showBurgerMenu]: burgerMenu,
                            })}
                            onClick={() => setBurgerMenu(!burgerMenu)}
                >
                    {burgerMenu ? <CloseIcon/> : <MenuIcon/>}
                </IconButton>

            </div>
        </header>
    )
})
