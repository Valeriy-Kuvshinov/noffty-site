'use client'
import { useState } from "react"
import { Person } from "../../models/utility"
import { SvgRender } from "./SvgRender"

interface CrewInfoProps {
    people: Person[]
}

export function CrewInfo({ people }: CrewInfoProps) {
    const [selectedMember, setSelectedMember] = useState<Person>(people[0])

    function handleCrewClick(person: Person) {
        setSelectedMember(person)
    }

    return (<>
        <article className="credits grid w-100">
            <h3 className="text-center">Special Thanks To</h3>

            <div className="crew-list grid">
                {people.map((person, index) => (
                    <button className={`flex row align-center ${selectedMember.name === person.name ? 'active' : ''}`}
                        key={index} onClick={() => handleCrewClick(person)}
                        aria-label={`Select ${person.name} to view their contributions`}>
                        <SvgRender iconName='crown' />
                        <span>{person.name}</span>
                        <SvgRender iconName='crown' />
                    </button>
                ))}
            </div>
        </article>

        {selectedMember && (
            <article className="member-info grid w-100">
                <h3 className="text-center">{selectedMember.name}</h3>

                <ul className="flex column">
                    {selectedMember.contributions.map((contribution, index) => (
                        <li key={index}>
                            {contribution.game && <span>
                                {`${contribution.game} - `}
                            </span>}
                            {contribution.role}
                        </li>
                    ))}
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
                                </a>
                            ))}
                        </div>
                    </div>
                )}
            </article>
        )}
    </>)
}