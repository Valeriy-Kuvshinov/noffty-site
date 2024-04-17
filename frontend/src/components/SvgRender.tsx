import { useState, useEffect } from "react"
import DOMPurify from 'dompurify'
import { SvgProp } from "../models/utility"
import { SvgService } from "../services/svg.service"

const svgService = new SvgService()

export function SvgComponent({ iconName }: SvgProp) {
    const [svgMarkup, setSvgMarkup] = useState('')

    useEffect(() => {
        const rawSvg = svgService.getSvg(iconName)
        const sanitizedSvg = DOMPurify.sanitize(rawSvg)

        setSvgMarkup(sanitizedSvg)
    }, [iconName])

    return (
        <div className="svg-cmp" dangerouslySetInnerHTML={{ __html: svgMarkup }} />
    )
}