'use client'
import React from 'react'

interface ReworkedTextProps {
    string: string
    custom?: string
}

export function ReworkedText({ string, custom }: ReworkedTextProps) {
    function convertLineBreaks(inputString: string): JSX.Element[] {
        return inputString.split('<br>').map((line, index, array) => (
            <React.Fragment key={index}>
                {line}
                {index < array.length - 1 && <br />}
            </React.Fragment>
        ))
    }

    return (<p className={custom}>{convertLineBreaks(string)}</p>)
}