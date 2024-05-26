'use client'
import Link from "next/link"
import { LinkTypeOne } from "../models/utility"
import { ImageContainer } from "./general/ImageContainer"

export function CrewLink({ name, image, ariaLabel }: LinkTypeOne) {
    return (
        <Link key={name} href="/about/introduction" passHref
            className="flex column justify-between" aria-label={ariaLabel}>
            <ImageContainer src={image} alt={name} />
            <h3 className="text-center">{name}</h3>
        </Link>
    )
}