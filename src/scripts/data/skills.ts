import { TagGroups } from "@scripts/data/tags";
export interface Skill {
    name: string;
    tags: Array<string>;
}
export interface SkillGroup {
    name: string;
    skills: Array<Skill>;
}
export const skillGroups: SkillGroup[] = [
    {
        name: "Web Frontend",
        skills: [
            { name: "Salesforce Commerce Cloud", tags: [...TagGroups.SFCC] },
            { name: "JavaScript ES6", tags: [...TagGroups.JS] },
            { name: "TypeScript", tags: [...TagGroups.JS, ...TagGroups.TS] },
            {
                name: "React",
                tags: [...TagGroups.React, ...TagGroups.JS, ...TagGroups.TS],
            },
            { name: "Vue", tags: [...TagGroups.Vue, ...TagGroups.JS] },
            { name: "Svelte", tags: [...TagGroups.Svelte, ...TagGroups.JS] },
            {
                name: "Astro",
                tags: [...TagGroups.Astro, ...TagGroups.JS, ...TagGroups.TS]
            },
            { name: "Node JS", tags: [...TagGroups.Node, ...TagGroups.JS] },
            { name: "Webpack", tags: [...TagGroups.Webpack, ...TagGroups.JS] },
            { name: "Vite", tags: [...TagGroups.Vite, ...TagGroups.JS] },
            { name: "HTML5", tags: [...TagGroups.HTML] },
            { name: "CSS3", tags: [...TagGroups.CSS] },
            { name: "Sass", tags: [...TagGroups.Sass, ...TagGroups.CSS] },
        ],
    },
    {
        name: "Mobile",
        skills: [
            {
                name: "Flutter",
                tags: [
                    ...TagGroups.Flutter,
                    ...TagGroups.IOS,
                    ...TagGroups.Android,
                    ...TagGroups.Mobile,
                ],
            },
            {
                name: "React Native",
                tags: [
                    ...TagGroups.React,
                    ...TagGroups.ReactNative,
                    ...TagGroups.JS,
                    ...TagGroups.Android,
                    ...TagGroups.IOS,
                    ...TagGroups.Mobile,
                ],
            },
            {
                name: "Android",
                tags: [
                    ...TagGroups.Android,
                    ...TagGroups.Java,
                    ...TagGroups.Kotlin,
                    ...TagGroups.Mobile,
                ],
            },
            {
                name: "JetPack Compose",
                tags: [
                    ...TagGroups.Android,
                    ...TagGroups.Kotlin,
                    ...TagGroups.JetpackCompose,
                    ...TagGroups.Mobile,
                ],
            },
        ],
    },
];
