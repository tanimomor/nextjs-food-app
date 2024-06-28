'use client';

import Link from "next/link";
import classes from "@/components/main-header/nav-link.module.css";
import {usePathname} from "next/navigation";

export default function NavLink({href, children}) {
    const path = usePathname();
    return <li>
        <Link
            href={href}
            className={path.startsWith(href) ? classes.active : undefined}
        >
            {children}
        </Link>
    </li>
}