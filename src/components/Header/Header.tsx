import React from "react";
import * as style from "./Header.module.scss"
import {Link} from "gatsby";
// @ts-ignore
import logo from "../../assets/png/gatsby.png";
import {observer} from "mobx-react-lite";
import {useStore} from "../store/useStore";
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import {IconButton} from "@mui/material";
import clsx from "clsx";

const links = [
    {label: "characters", to: "/characters/1"},
    {label: "locations", to: "/locations/1"},
    {label: "episodes", to: "/episodes/1"},
]


export const Header = observer(() => {
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
                        links.map(({label, to}, index) => (
                            <Link key={index}
                                  className={style.link}
                                  to={to}
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
