import { SvgRender } from "./SvgRender"

interface SpecialLink {
    iconName: string
    link: string
    ariaLabel: string
}

export function SpecialLink({ iconName, link, ariaLabel }: SpecialLink) {
    return (
        <a href={link} target="_blank" rel="noopener noreferrer"
            aria-label={ariaLabel}>
            <SvgRender iconName="rhombus" />
            <SvgRender iconName={iconName} />
        </a>
    )
}