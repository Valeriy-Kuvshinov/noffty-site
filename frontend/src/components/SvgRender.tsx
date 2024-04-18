import { SvgService } from "../services/svg.service"
import { SvgProp } from "../models/utility"

const svgService = new SvgService()

function simpleSanitize(svgContent: string): string {
    return svgContent.replace(/<script.*?>.*?<\/script>/gi, '')
        .replace(/on\w+="[^"]*"/gi, '')
}

export function SvgRender({ iconName }: SvgProp) {
    const rawSvg = svgService.getSvg(iconName)
    const sanitizedSvg = simpleSanitize(rawSvg)

    return (
        <div className="svg-cmp"
            dangerouslySetInnerHTML={{ __html: sanitizedSvg }} />
    )
}