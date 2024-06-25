'use client'
import React from 'react'

export function ReworkedText({ string }: { string: string }) {

    function convertLineBreaks(inputString: string): JSX.Element[] {
        return inputString.split('<br>').map((line, index, array) => (
            <React.Fragment key={index}>
                {line}
                {index < array.length - 1 && <br />}
            </React.Fragment>
        ))
    }

    return (<p>{convertLineBreaks(string)}</p>)
}