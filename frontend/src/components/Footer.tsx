'use client'
import Link from "next/link"
import { usePathname } from "next/navigation"
import { UtilityService } from "../services/utility.service"
import { SpecialLink } from "./general/SpecialLink"

export function Footer() {
    const pathname = usePathname()

    const utilService = new UtilityService()
    const socialLinks = utilService.getSocialLinks()

    function isActive(path: string) {
        return pathname === path
    }

    return (
        <article className="footer full">
            <section className="footer-contents w-h-100 grid layout-row">
                <div className="links flex column">
                    <h3>Navigation</h3>
                    <Link href="/games" className={`fast-trans ${isActive('/games') ? 'active' : ''}`}
                        title="Go to games index?" aria-label="Navigate to games page">
                        <span>Games</span>
                    </Link>
                    <Link href="/about/contact" className={`fast-trans ${isActive('/about/contact') ? 'active' : ''}`}
                        title="Go to contact page?" aria-label="Navigate to contact page">
                        <span>Contact</span>
                    </Link>
                    <Link href="/about/introduction" className={`fast-trans ${isActive('/about/introduction') ? 'active' : ''}`}
                        title="Go to about page?" aria-label="Navigate to about page">
                        <span>About</span>
                    </Link>
                </div>
                <div className="outside-links flex column">
                    <h3>Follow Us</h3>
                    <div className="noffty-links flex row">
                        {socialLinks.map(link => (
                            <SpecialLink key={link.iconName} iconName={link.iconName}
                                link={link.link} ariaLabel={link.ariaLabel} />
                        ))}
                    </div>
                </div>
                <span className="copyright">&copy; 2024 Noffty Productions. All Rights Reserved.</span>
            </section>
        </article>
    )
}