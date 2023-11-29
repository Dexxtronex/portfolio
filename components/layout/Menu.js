import Link from "next/link"
import { useRouter } from "next/router"

export default function Menu() {
    const router = useRouter()

    return (
        <>
            <ul className="wsmenu-list nav-theme">
                <li className="nl-simple" aria-haspopup="true"><Link href="#person" className="h-link">About</Link></li>
                <li className="nl-simple" aria-haspopup="true"><Link href="#experience" className="h-link">Experencie</Link></li>
                <li className="nl-simple" aria-haspopup="true"><Link href="#plus" className="h-link">Plus</Link></li>
                <li className="nl-simple" aria-haspopup="true"><Link href="#skills" className="h-link">Skills</Link></li>
                <li className="nl-simple" aria-haspopup="true"><Link href="#featured-solutions" className="h-link">Featured Solutions</Link></li>
                <li className="nl-simple" aria-haspopup="true">
                    <Link href="https://wa.me/593996911729" target="_blank"  className="btn r-04 btn--theme hover--tra-white last-link">
                        WS
                    </Link>
                </li>
            </ul>
        </>
    )
}