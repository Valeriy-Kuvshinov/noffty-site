'use client'
import { useState } from "react"
import { SvgRender } from "../../components/general/SvgRender"

interface Social {
    url: string
    iconName: string
    userName: string
}

interface Contribution {
    game: string
    role: string
}

interface Person {
    name: string
    social?: Social[]
    contributions: Contribution[]
}

export default function About() {
    const people: Person[] = [
        {
            name: 'T1mure',
            social: [
                {
                    url: 'https://www.youtube.com/@T1mure',
                    iconName: 'youtube',
                    userName: '@T1mure'
                },
                {
                    url: 'https://www.youtube.com/@T2mure',
                    iconName: 'youtube',
                    userName: '@T2mure'
                },
                {
                    url: 'https://t1mure.itch.io/',
                    iconName: 'itch',
                    userName: '@T1mure'
                },
                {
                    url: 'https://soundcloud.com/ultim8kex228',
                    iconName: 'soundcloud',
                    userName: '@T1mure'
                }
            ],
            contributions: [
                { game: '', role: 'Ceo of Noffty Productions' },
                { game: '', role: 'Lead Developer of Most Games' }
            ]
        },
        {
            name: 'Am Ben',
            social: [
                {
                    url: 'https://www.youtube.com/@Jen_Ayve',
                    iconName: 'youtube',
                    userName: '@Jen_Ayve'
                },
                {
                    url: 'https://soundcloud.com/am-jen-862126876',
                    iconName: 'soundcloud',
                    userName: '@Jen Ayve'
                },
                {
                    url: 'https://www.instagram.com/benayve/',
                    iconName: 'instagram',
                    userName: '@Benayve'
                }
            ],
            contributions: [
                { game: 'Gun Stick Dash Jump', role: 'Music' },
                { game: 'Betorched', role: 'Music' },
                { game: 'Boiling Point Classic', role: 'Music' }
            ]
        },
        {
            name: 'Valeriy',
            social: [
                {
                    url: 'https://www.youtube.com/@valeriykuvshinov',
                    iconName: 'youtube',
                    userName: '@valeriykuvshinov'
                },
                {
                    url: 'https://soundcloud.com/valerykuvshinuv',
                    iconName: 'soundcloud',
                    userName: '@Valeriy.Kuvshin.ov'
                },
                {
                    url: 'www.linkedin.com/in/valeriy-kuvshin-ov',
                    iconName: 'linkedin',
                    userName: '@valeriy-kuvshin-ov'
                }
            ],
            contributions: [
                { game: 'Betorched', role: 'Music' },
                { game: '', role: 'Developer of The Site' },
            ]
        },
        {
            name: 'Ics_de',
            social: [
                {
                    url: 'https://www.youtube.com/@ics_de',
                    iconName: 'youtube',
                    userName: '@ics_de'
                },
                {
                    url: 'https://ics-de.itch.io/',
                    iconName: 'itch',
                    userName: '@ics_de'
                }
            ],
            contributions: [
                { game: 'WavePunk', role: 'Art and Music' }
            ]
        },
        {
            name: 'Seriousbznz',
            social: [],
            contributions: [
                { game: '', role: 'Game Consulting' }
            ]
        },
        {
            name: 'Tynnyri',
            social: [
                {
                    url: 'https://soundcloud.com/user-tynnyri',
                    iconName: 'soundcloud',
                    userName: '@Tynnyri'
                }
            ],
            contributions: [
                { game: 'Betroched', role: 'Art' }
            ]
        },
        {
            name: 'Excustic',
            social: [
                {
                    url: 'https://www.youtube.com/@michael.kushnir',
                    iconName: 'youtube',
                    userName: '@michael.kushnir'
                },
                {
                    url: 'https://soundcloud.com/excustic',
                    iconName: 'soundcloud',
                    userName: '@Excustic'
                }
            ],
            contributions: [
                { game: 'WordDart', role: 'Lead Developer' }
            ]
        },
        {
            name: 'Maya K',
            social: [],
            contributions: [
                { game: 'Absurd^2', role: 'Writer' }
            ]
        },
        {
            name: 'Ollie',
            social: [
                {
                    url: 'https://www.youtube.com/@ollie_',
                    iconName: 'youtube',
                    userName: '@ollie_'
                }
            ],
            contributions: [
                { game: '', role: 'Playtesting' }
            ]
        },
        {
            name: 'Ded',
            social: [],
            contributions: [
                { game: '', role: 'Playtesting' }
            ]
        }
    ]

    const [selectedMember, setSelectedMember] = useState<Person>(people[0])

    function handleCrewClick(person: any) {
        setSelectedMember(person)
    }

    return (
        <main className="about-page full w-h-100">
            <section className="page-contents grid w-h-100 layout-row">
                <article className="intro-part grid w-100">
                    <h3 className="text-center">About Noffty Productions</h3>

                    <p className="text-center">
                        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Error
                        pariatur at odit aperiam id, velit repellendus minima, officia
                        repudiandae dolor, deserunt rem labore minus nesciunt aliquid magnam
                        beatae quia expedita.
                    </p>
                </article>

                <article className="credits grid w-100">
                    <h3 className="text-center">Special Thanks To</h3>

                    <div className="crew-list grid">
                        {people.map((person, index) => (<button
                            className={`flex row align-center ${selectedMember.name === person.name ? 'active' : ''}`}
                            key={index} onClick={() => handleCrewClick(person)}
                            aria-label={`Select ${person.name} to view their contributions`}>
                            <SvgRender iconName='crown' />
                            <span>{person.name}</span>
                            <SvgRender iconName='crown' />
                        </button>))}
                    </div>
                </article>

                {selectedMember && (<article className="member-info grid w-100">
                    <h3 className="text-center">{selectedMember.name}</h3>

                    <ul className="flex column">
                        {selectedMember.contributions.map((contribution, index) => (
                            <li key={index}>
                                {contribution.game && <span>
                                    {`${contribution.game} - `}
                                </span>}
                                {contribution.role}
                            </li>))}
                    </ul>
                    {selectedMember.social && selectedMember.social.length > 0 && (
                        <div className="social-links-area flex column">
                            <h4 className="text-center">Follow Them On:</h4>

                            <div className="social-links grid">
                                {selectedMember.social.map((social, index) => (
                                    <a className="flex column align-center" key={index}
                                        href={social.url} target="_blank" rel="noopener noreferrer"
                                        aria-label={`Navigate to ${selectedMember.name}'s ${social.iconName} account`}>
                                        <SvgRender iconName={social.iconName} />
                                        <span>{social.userName}</span>
                                    </a>))}
                            </div>
                        </div>)}
                </article>)}
            </section>
        </main>
    )
}