import { TagGroups, Tags } from "@scripts/data/tags";

export interface Tech {
    name: string;
    fstring?: string;
    tags: Tags[];
}
export interface Project {
    name: string;
    description: string[];
    tech: Tech[];
}
export const projects: Project[] = [
    {
        name: "My Portfolio",
        description: [
            "This is my personal website. You're looking at it right now!"
        ],
        tech: [
            {
                name: 'Astro',
                fstring: 'It was made using {} because I wanted as little js as possible',
                tags: [...TagGroups.Astro, ...TagGroups.Vite]
            },
            {
                name: 'HTML',
                tags: TagGroups.HTML
            },
            {
                name: 'TypeScript',
                tags: [...TagGroups.JS, ...TagGroups.TS]
            },
            {
                name: 'CSS',
                tags: TagGroups.CSS
            }
        ]
    },
];
