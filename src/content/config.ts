import { defineCollection, z } from 'astro:content';

/**
 * Content Collections Schema Configuration
 * This file defines the structure and validation for all portfolio content
 */

// ===================================
// EXPERIENCE COLLECTION
// ===================================
const experienceCollection = defineCollection({
    type: 'content',
    schema: z.object({
        title: z.string(),
        company: z.string(),
        location: z.string(),
        startDate: z.string(), // Format: "Month YYYY" e.g., "October 2025"
        endDate: z.string().optional(), // Leave empty for current position or use "Present"
        image: z.string(), // Path relative to public folder e.g., "images/experiences/company-logo.png"
        techStack: z.array(z.string()),
        order: z.number(), // Lower number = more recent (1 = most recent)
        isRemote: z.boolean().optional().default(false),
    }),
});

// ===================================
// PROJECT COLLECTION
// ===================================
const projectCollection = defineCollection({
    type: 'content',
    schema: z.object({
        title: z.string(),
        projectType: z.enum(['software', 'ai']), // Determines card color: software=blue, ai=indigo
        category: z.string(), // Single category badge (e.g., "Mobile Application", "Semantic Segmentation")
        image: z.string(), // Path relative to public folder (e.g., "images/projects/project-slug/cover.png")
        description: z.string(), // Brief description shown on card
        techStack: z.array(z.string()).default([]), // Tech badges (can be empty)
        order: z.number(), // Order within projectType (lower = first)
        projectLink: z.string().url().optional(), // GitHub or live demo URL
    }),
});

// ===================================
// AWARDS COLLECTION
// ===================================
const awardsCollection = defineCollection({
    type: 'content',
    schema: z.object({
        title: z.string(), // Award title with achievement (e.g., "1st Place at UI SDGs Summit Hackathon")
        organizer: z.string(), // Who hosted
        date: z.string(), // Format: "Month YYYY"
        image: z.string(), // Organizer logo path (e.g., "images/awards/award-slug/logo.png")
        order: z.number(), // Lower number = more recent
    }),
});

// ===================================
// EXPORT COLLECTIONS
// ===================================
export const collections = {
    experiences: experienceCollection,
    projects: projectCollection,
    awards: awardsCollection,
};
