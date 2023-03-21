import { z, defineCollection } from 'astro:content';
// Define the projects
const projectsCollection = defineCollection({
    schema: z.object({
        title: z.string(),
        description: z.string().max(150),
        tags: z.array(z.string()),
        images: z.array(z.object({
            src: z.string(),
            alt: z.string(),
        })).optional()
    })
})

export const collections = {
    'projects': projectsCollection,
};