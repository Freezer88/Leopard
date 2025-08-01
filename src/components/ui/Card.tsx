import React from 'react'
import { motion } from 'framer-motion'
import { cn } from '../../lib/utils'

export interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: 'default' | 'elevated' | 'outlined' | 'ghost'
  padding?: 'none' | 'sm' | 'md' | 'lg' | 'xl'
  children: React.ReactNode
}

export interface CardHeaderProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode
}

export interface CardContentProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode
}

export interface CardFooterProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode
}

/**
 * Card Component
 * 
 * Implements psychological design principles from the Design Report:
 * - Generous whitespace for cognitive load reduction
 * - Clear visual hierarchy for confidence
 * - Comforting visual design with rounded corners
 * - Subtle shadows for depth without intimidation
 */
export const Card = React.forwardRef<HTMLDivElement, CardProps>(
  ({ className, variant = 'default', padding = 'md', children, ...props }, ref) => {
    const baseClasses = cn(
      'rounded-lg border transition-all duration-200',
      'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-500 focus-visible:ring-offset-2',
      className
    )

    const variantClasses = {
      default: cn(
        'bg-white border-neutral-200 shadow-sm',
        'hover:shadow-md hover:border-neutral-300'
      ),
      elevated: cn(
        'bg-white border-neutral-200 shadow-md',
        'hover:shadow-lg hover:border-neutral-300'
      ),
      outlined: cn(
        'bg-transparent border-neutral-300',
        'hover:border-neutral-400'
      ),
      ghost: cn(
        'bg-transparent border-transparent',
        'hover:bg-neutral-50'
      ),
    }

    const paddingClasses = {
      none: '',
      sm: 'p-3',
      md: 'p-4',
      lg: 'p-6',
      xl: 'p-8',
    }

    const cardClasses = cn(
      baseClasses,
      variantClasses[variant],
      paddingClasses[padding]
    )

    return (
      <motion.div
        ref={ref}
        className={cardClasses}
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.2 }}
        {...props}
      >
        {children}
      </motion.div>
    )
  }
)

Card.displayName = 'Card'

/**
 * CardHeader Component
 * 
 * Provides clear visual separation for card headers
 */
export const CardHeader = React.forwardRef<HTMLDivElement, CardHeaderProps>(
  ({ className, children, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={cn('flex flex-col space-y-1.5 pb-4', className)}
        {...props}
      >
        {children}
      </div>
    )
  }
)

CardHeader.displayName = 'CardHeader'

/**
 * CardContent Component
 * 
 * Main content area with appropriate spacing
 */
export const CardContent = React.forwardRef<HTMLDivElement, CardContentProps>(
  ({ className, children, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={cn('flex-1', className)}
        {...props}
      >
        {children}
      </div>
    )
  }
)

CardContent.displayName = 'CardContent'

/**
 * CardFooter Component
 * 
 * Footer area with top border for visual separation
 */
export const CardFooter = React.forwardRef<HTMLDivElement, CardFooterProps>(
  ({ className, children, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={cn('flex items-center pt-4 border-t border-neutral-200', className)}
        {...props}
      >
        {children}
      </div>
    )
  }
)

CardFooter.displayName = 'CardFooter' 