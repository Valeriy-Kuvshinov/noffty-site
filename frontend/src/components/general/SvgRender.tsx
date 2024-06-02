import { SvgService } from "../../services/svg.service"
import { SvgProp } from "../../models/utility"

export function SvgRender({ iconName }: SvgProp) {
    const svgService = new SvgService()

    const rawSvg = svgService.getSvg(iconName)
    const sanitizedSvg = simpleSanitize(rawSvg)

    function simpleSanitize(svgContent: string): string {
        svgContent = svgContent.replace(/<\/?(script|iframe|link|object|embed|use)[^>]*>/gi, '')

        svgContent = svgContent.replace(/on\w+="[^"]*"/gi, '')

        svgContent = svgContent.replace(/(xlink:href|href|src)="[^"]*"/gi, '')

        svgContent = svgContent.replace(/style="([^"]*)"/gi, p1 =>
            `style="${sanitizeStyles(p1)}"`)

        svgContent = svgContent.replace(/<!--.*?-->/gs, '')

        return svgContent
    }

    function sanitizeStyles(styleValue: string) {
        const safeStyleProps = ['color', 'fill', 'stroke',
            'stroke-width', 'opacity', 'visibility']
        return styleValue.split(';').filter(style => {
            const [prop] = style.split(':')
            return safeStyleProps.includes(prop.trim())
        }).join(';')
    }

    return (
        <div className="svg-cmp flex fast-trans"
            dangerouslySetInnerHTML={{ __html: sanitizedSvg }} />
    )
}