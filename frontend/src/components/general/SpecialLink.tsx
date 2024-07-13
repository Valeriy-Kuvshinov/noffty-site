import { LinkTypeTwo } from "../../interfaces/utility"
import { SvgRender } from "./../general/SvgRender"

export function SpecialLink({ iconName, link, ariaLabel }: LinkTypeTwo) {

    return (<a href={link} target="_blank" rel="noopener noreferrer"
        aria-label={ariaLabel}>
        <SvgRender iconName="rhombus" />
        <SvgRender iconName={iconName} />
    </a>)
}