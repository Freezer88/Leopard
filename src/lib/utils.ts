import { type ClassValue, clsx } from 'clsx'
import { twMerge } from 'tailwind-merge'

/**
 * Utility function to merge Tailwind classes with proper conflict resolution
 * Uses clsx for conditional classes and tailwind-merge for deduplication
 */
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

/**
 * Utility function to create component variants
 * Based on the psychological design principles from the Design Report
 */
export function createVariants<T extends Record<string, any>>(
  baseClasses: string,
  variants: T
) {
  return function variantFn(props: {
    [K in keyof T]?: keyof T[K]
  } & { className?: string }) {
    const { className, ...variantProps } = props
    const variantClasses = Object.entries(variantProps)
      .map(([key, value]) => variants[key]?.[value as keyof T[typeof key]])
      .filter(Boolean)
      .join(' ')
    
    return cn(baseClasses, variantClasses, className)
  }
}

/**
 * Utility function to create responsive variants
 */
export function createResponsiveVariants<T extends Record<string, any>>(
  baseClasses: string,
  variants: T
) {
  return function variantFn(props: {
    [K in keyof T]?: keyof T[K]
  } & { className?: string }) {
    const { className, ...variantProps } = props
    const variantClasses = Object.entries(variantProps)
      .map(([key, value]) => variants[key]?.[value as keyof T[typeof key]])
      .filter(Boolean)
      .join(' ')
    
    return cn(baseClasses, variantClasses, className)
  }
}

/**
 * Utility function to create animation variants
 * Based on the motion design principles from the Design Report
 */
export const animationVariants = {
  fadeIn: 'animate-fade-in',
  slideUp: 'animate-slide-up',
  slideDown: 'animate-slide-down',
  scaleIn: 'animate-scale-in',
  pulseSoft: 'animate-pulse-soft',
  shimmer: 'animate-shimmer',
} as const

/**
 * Utility function to create color variants
 * Based on the psychological color principles from the Design Report
 */
export const colorVariants = {
  primary: 'text-primary-700 bg-primary-50 border-primary-200',
  secondary: 'text-secondary-700 bg-secondary-50 border-secondary-200',
  accent: 'text-accent-700 bg-accent-50 border-accent-200',
  warning: 'text-warning-700 bg-warning-50 border-warning-200',
  success: 'text-success-700 bg-success-50 border-success-200',
  neutral: 'text-neutral-700 bg-neutral-50 border-neutral-200',
} as const

/**
 * Utility function to create size variants
 * Based on the spacing system from the Design Report
 */
export const sizeVariants = {
  sm: 'px-3 py-1.5 text-sm',
  md: 'px-4 py-2 text-base',
  lg: 'px-6 py-3 text-lg',
  xl: 'px-8 py-4 text-xl',
} as const

/**
 * Utility function to create border radius variants
 * Based on the friendliness principles from the Design Report
 */
export const radiusVariants = {
  none: 'rounded-none',
  sm: 'rounded-sm',
  md: 'rounded-md',
  lg: 'rounded-lg',
  xl: 'rounded-xl',
  full: 'rounded-full',
} as const 