import { Person } from "../../interfaces/utility"
import { CrewInfo } from "../../components/general/CrewInfo"

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
                { game: 'Boiling Point Classic', role: 'Music' },
                { game: 'Yapping Wizards Goblin Defenders', role: 'Music & Voice Acting' },
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
                { game: 'WavePunk', role: 'Art & Music' }
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
                { game: 'Absurd^2', role: 'Writer' },
                { game: 'Yapping Wizards Goblin Defenders', role: 'Voice Acting' },
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
                { game: '', role: 'General Game Playtesting' }
            ]
        },
        {
            name: 'Ded',
            social: [],
            contributions: [
                { game: '', role: 'General Game Playtesting' }
            ]
        },
        {
            name: 'AbiodaDev',
            social: [
                {
                    url: 'https://www.youtube.com/@AbiodaDev',
                    iconName: 'youtube',
                    userName: '@AbiodaDev'
                },
                {
                    url: 'https://abiodapro.itch.io/',
                    iconName: 'itch',
                    userName: '@Abio'
                }
            ],
            contributions: [
                { game: 'Purple Prince or something guy', role: 'Ruining The Game' }
            ]
        }
    ]

    return (<main className="about-page full w-h-100">
        <section className="page-contents grid w-h-100 layout-row">
            <article className="intro-part flex column w-100">
                <h3 className="text-center">Name of The Year Productions</h3>
                <p className="text-center">
                    {`A "company" made of sweat and tears, originated from the last table of boring history lessons. 
                    Is here take over your mind, as well as the whole world!`}
                </p>
                <p className="text-center">
                    I would have released all of these games just under T1mure.
                    But I colaborate so often I deicded it wouldnt be fair to imply that the game are fully made by me.
                    So here we are, since 2018, still making games instead of doing homework :)
                </p>
            </article>
            <CrewInfo people={people} />
        </section>
    </main>)
}