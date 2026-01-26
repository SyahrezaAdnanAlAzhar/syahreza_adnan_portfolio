/**
 * Global Theme Colors
 * 
 * Defines the 8-color palette used across the portfolio
 * for consistent styling in Tech Stack, Experience, and other sections.
 */

export type ColorKey = 'indigo' | 'orange' | 'blue' | 'purple' | 'green' | 'pink' | 'cyan' | 'amber';

export interface ColorConfig {
    border: string;      // Main color for borders
    hover: string;       // Solid color for hover states
    light: string;       // Light background variant
}

/**
 * 8-Color Palette Configuration
 * 
 * Colors cycle in this order:
 * indigo → orange → blue → purple → green → pink → cyan → amber
 */
export const THEME_COLORS: Record<ColorKey, ColorConfig> = {
    indigo: {
        border: '#6366f1',
        hover: '#6366f1',
        light: '#e0e7ff',
    },
    orange: {
        border: '#f97316',
        hover: '#f97316',
        light: '#ffedd5',
    },
    blue: {
        border: '#3b82f6',
        hover: '#3b82f6',
        light: '#dbeafe',
    },
    purple: {
        border: '#a855f7',
        hover: '#a855f7',
        light: '#f3e8ff',
    },
    green: {
        border: '#22c55e',
        hover: '#22c55e',
        light: '#dcfce7',
    },
    pink: {
        border: '#ec4899',
        hover: '#ec4899',
        light: '#fce7f3',
    },
    cyan: {
        border: '#06b6d4',
        hover: '#06b6d4',
        light: '#cffafe',
    },
    amber: {
        border: '#f59e0b',
        hover: '#f59e0b',
        light: '#fef3c7',
    },
};

/**
 * Color order for cycling through colors by index
 * Use with: COLOR_ORDER[index % COLOR_ORDER.length]
 */
export const COLOR_ORDER: ColorKey[] = [
    'indigo',
    'orange',
    'blue',
    'purple',
    'green',
    'pink',
    'cyan',
    'amber',
];

/**
 * Get color config by index (cycles through COLOR_ORDER)
 * @param index - Zero-based index
 * @returns ColorConfig for the color at that index
 */
export function getColorByIndex(index: number): ColorConfig {
    const colorKey = COLOR_ORDER[index % COLOR_ORDER.length];
    return THEME_COLORS[colorKey];
}
