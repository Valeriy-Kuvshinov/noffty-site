'use client'
import Link from "next/link"

interface CrewMember {
    name: string
    image: string
}

export function CrewLinks({ crewMembers }: { crewMembers: CrewMember[] }) {
    return (
        <div className="crew grid w-100">
            {crewMembers.map(member => (
                <Link key={member.name} href="/about/introduction"
                    passHref className="flex column justify-between">
                    <img src={member.image} alt={member.name} />
                    <h3 className="text-center">{member.name}</h3>
                </Link>
            ))}
        </div>
    )
}