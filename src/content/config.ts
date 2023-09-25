import { z, defineCollection } from 'astro:content';
// Define the projects
const projectsCollection = defineCollection({
    schema: z.object({
        title: z.string(),
        description: z.string().max(300),
        tags: z.array(z.string()),
        startDate: z.date().transform((str) => new Date(str)),
        endDate: z.date().transform((str) => new Date(str)).default(new Date()).optional(),
        images: z.array(z.object({
            src: z.string(),
            alt: z.string(),
        })).optional(),
        featured: z.boolean().default(false).optional()
    })
})

export const collections = {
    'projects': projectsCollection,
};