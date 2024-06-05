import Link from "next/link"
import { usePathname } from "next/navigation"

export function AsideMenu() {
    const pathname = usePathname()

    function isActive(path: string) {
        return pathname === path
    }

    return (
        <dialog className="modal-wrapper full">
            <nav>
                <Link href="/" className={`fast-trans ${isActive('/') ? 'active' : ''}`}
                    title="Go to home page?" aria-label="Navigate to home page">
                    <span>Home</span>
                </Link>
                <Link href="/games" className={`fast-trans ${isActive('/games') ? 'active' : ''}`}
                    title="Go to games page?" aria-label="Navigate to games page">
                    <span>Games</span>
                </Link>
                <Link href="/about/introduction" className={`fast-trans ${isActive('/about/introduction') ? 'active' : ''}`}
                    title="Go to about page?" aria-label="Navigate to about page">
                    <span>About</span>
                </Link>
                <Link href="/about/contact" className={`fast-trans ${isActive('/about/contact') ? 'active' : ''}`}
                    title="Go to contact page?" aria-label="Navigate to contact page">
                    <span>Contact</span>
                </Link>
            </nav>
        </dialog>
    )
}