import { clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs) {
    return twMerge(clsx(inputs));
}

export const STATUS = {
    TODO: 'todo',
    IN_PROGRESS: 'in_progress',
    ONREVIEW: 'on_review',
    DONE: 'done',
    UNKNOWN: 'unknown',
};

export const PRIORITY = {
    UNKNOWN: 'unknown',
    LOW: 'low',
    MEDIUM: 'medium',
    HIGH: 'high',
    URGENT: 'urgent',
};


