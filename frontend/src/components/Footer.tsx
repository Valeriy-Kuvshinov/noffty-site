'use client'
import Link from "next/link"
import { usePathname } from "next/navigation"
import { utilityService } from "../services/utility-service"
import { SpecialLink } from "./general/SpecialLink"

export function Footer() {
    const pathname = usePathname()

    const socialLinks = utilityService.getSocialLinks()

    function isActive(path: string) {
        return pathname === path
    }

    return (<footer className="full">
        <section className="footer-contents w-h-100 grid layout-row">
            <div className="links grid">
                <h2>Navigation</h2>
                <Link href="/games" className={`${isActive('/games/') ? 'active' : ''} w-fit`}
                    title="Go to games index?" aria-label="Navigate to games page">
                    <span>Games</span>
                </Link>
                <Link href="/about" className={`${isActive('/about/') ? 'active' : ''} w-fit`}
                    title="Go to about page?" aria-label="Navigate to about page">
                    <span>About</span>
                </Link>
                <Link href="/contact" className={`${isActive('/contact/') ? 'active' : ''} w-fit`}
                    title="Go to contact page?" aria-label="Navigate to contact page">
                    <span>Contact</span>
                </Link>
                <Link href="/privacy" className={`${isActive('/privacy/') ? 'active' : ''} w-fit`}
                    title="Go to privacy policy page?" aria-label="Navigate to privacy policy page">
                    <span>Privacy</span>
                </Link>
            </div>
            <div className="outside-links flex column">
                <h2>Follow Us</h2>
                <div className="noffty-links flex row">
                    {socialLinks.map(link => (
                        <SpecialLink key={link.iconName} iconName={link.iconName}
                            link={link.link} ariaLabel={link.ariaLabel} />))}
                </div>
            </div>
            <span className="copyright">&copy; 2024 Noffty Productions. All Rights Reserved.</span>
        </section>
    </footer>)
}