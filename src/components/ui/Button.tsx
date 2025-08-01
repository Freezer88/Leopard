import React from 'react'
import { motion } from 'framer-motion'
import { cn } from '../../lib/utils'

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'accent' | 'ghost' | 'outline' | 'danger'
  size?: 'sm' | 'md' | 'lg' | 'xl'
  loading?: boolean
  icon?: React.ReactNode
  iconPosition?: 'left' | 'right'
  children: React.ReactNode
}

/**
 * Button Component
 * 
 * Implements psychological design principles from the Design Report:
 * - Trust-building colors (primary blue for main actions)
 * - Clear visual hierarchy for confidence
 * - Empowering action-oriented design
 * - Accessible focus states
 * - Smooth micro-interactions for feedback
 */
export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ 
    className, 
    variant = 'primary', 
    size = 'md', 
    loading = false,
    icon,
    iconPosition = 'left',
    disabled,
    children,
    ...props 
  }, ref) => {
    // Base classes for all buttons
    const baseClasses = cn(
      'inline-flex items-center justify-center font-medium transition-all duration-200',
      'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-500 focus-visible:ring-offset-2',
      'disabled:opacity-50 disabled:cursor-not-allowed disabled:pointer-events-none',
      'active:scale-[0.98]', // Subtle press feedback
      className
    )

    // Variant classes based on psychological color principles
    const variantClasses = {
      primary: cn(
        'bg-primary-500 text-white border border-primary-500',
        'hover:bg-primary-600 hover:border-primary-600',
        'active:bg-primary-700 active:border-primary-700',
        'shadow-sm hover:shadow-md'
      ),
      secondary: cn(
        'bg-secondary-500 text-white border border-secondary-500',
        'hover:bg-secondary-600 hover:border-secondary-600',
        'active:bg-secondary-700 active:border-secondary-700',
        'shadow-sm hover:shadow-md'
      ),
      accent: cn(
        'bg-accent-500 text-white border border-accent-500',
        'hover:bg-accent-600 hover:border-accent-600',
        'active:bg-accent-700 active:border-accent-700',
        'shadow-sm hover:shadow-md'
      ),
      ghost: cn(
        'bg-transparent text-primary-700 border border-transparent',
        'hover:bg-primary-50 hover:border-primary-200',
        'active:bg-primary-100 active:border-primary-300'
      ),
      outline: cn(
        'bg-transparent text-primary-700 border border-primary-300',
        'hover:bg-primary-50 hover:border-primary-400',
        'active:bg-primary-100 active:border-primary-500'
      ),
      danger: cn(
        'bg-warning-500 text-white border border-warning-500',
        'hover:bg-warning-600 hover:border-warning-600',
        'active:bg-warning-700 active:border-warning-700',
        'shadow-sm hover:shadow-md'
      ),
    }

    // Size classes based on spacing system
    const sizeClasses = {
      sm: 'px-3 py-1.5 text-sm gap-1.5',
      md: 'px-4 py-2 text-base gap-2',
      lg: 'px-6 py-3 text-lg gap-2.5',
      xl: 'px-8 py-4 text-xl gap-3',
    }

    // Loading state classes
    const loadingClasses = loading ? 'cursor-wait' : ''

    const buttonClasses = cn(
      baseClasses,
      variantClasses[variant],
      sizeClasses[size],
      loadingClasses
    )

    return (
      <motion.button
        ref={ref}
        className={buttonClasses}
        disabled={disabled || loading}
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        transition={{ duration: 0.1 }}
        {...props}
      >
        {loading && (
          <motion.div
            className="w-4 h-4 border-2 border-current border-t-transparent rounded-full"
            animate={{ rotate: 360 }}
            transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
          />
        )}
        
        {!loading && icon && iconPosition === 'left' && (
          <span className="flex-shrink-0">{icon}</span>
        )}
        
        <span className={cn(
          'flex items-center gap-1',
          loading && 'opacity-0'
        )}>
          {children}
        </span>
        
        {!loading && icon && iconPosition === 'right' && (
          <span className="flex-shrink-0">{icon}</span>
        )}
      </motion.button>
    )
  }
)

Button.displayName = 'Button' 