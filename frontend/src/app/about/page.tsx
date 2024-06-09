'use client'

export default function About() {
    const people = [{ name: 'T1mure' },
    { name: 'Am Ben' },
    { name: 'Valeriy' },
    { name: 'Ics_de' },
    { name: 'seriousbznz' },
    { name: 'Tynnyri' },
    { name: 'Excustic' },
    { name: 'Maya K' },
    { name: 'Ollie' },
    ]

    return (
        <main className="about-page full w-h-100">
            <div className="intro-part">
                <h3>About Noffty Productions</h3>
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                    Error pariatur at odit aperiam id, velit repellendus minima, officia repudiandae dolor,
                    deserunt rem labore minus nesciunt aliquid magnam beatae quia expedita.</p>
            </div>
            <div className="credits grid">
                <h3>Special Thanks To</h3>
                
            </div>
        </main>
    )
}
