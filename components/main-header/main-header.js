import Link from "next/link";

import logoImg from "@/assets/logo.png";
import classes from "./main-header.module.css";
import Image from "next/image";
import MainHeaderBackground from "@/components/main-header/main-header-background";
import NavLink from "@/components/main-header/nav-link";

export default function MainHeader() {
    return <>
        <MainHeaderBackground/>
        <header className={classes.header}>
            <Link href="/public" className={classes.logo}>
                <Image src={logoImg} alt="A plate with food on it" priority/>
                NextLevel Food
            </Link>
            <nav className={classes.nav}>
                <ul>
                    <NavLink href="/meals">Browse Meals</NavLink>
                    <NavLink href="/community">Foodies Community</NavLink>
                </ul>
            </nav>
        </header>
    </>
}