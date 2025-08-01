import React from 'react'
import { motion } from 'framer-motion'
import { cn } from '../../lib/utils'

export interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  variant?: 'default' | 'error' | 'success'
  size?: 'sm' | 'md' | 'lg'
  label?: string
  helperText?: string
  error?: string
  leftIcon?: React.ReactNode
  rightIcon?: React.ReactNode
}

/**
 * Input Component
 * 
 * Implements psychological design principles from the Design Report:
 * - Clear visual feedback for confidence
 * - Accessible focus states for empowerment
 * - Comforting visual design with proper spacing
 * - Progressive disclosure of validation states
 */
export const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ 
    className, 
    variant = 'default', 
    size = 'md',
    label,
    helperText,
    error,
    leftIcon,
    rightIcon,
    disabled,
    ...props 
  }, ref) => {
    const baseClasses = cn(
      'flex w-full rounded-md border bg-white text-neutral-900',
      'placeholder:text-neutral-400',
      'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-500 focus-visible:ring-offset-2',
      'disabled:cursor-not-allowed disabled:opacity-50',
      'transition-all duration-200',
      className
    )

    const variantClasses = {
      default: cn(
        'border-neutral-300',
        'hover:border-neutral-400',
        'focus:border-primary-500'
      ),
      error: cn(
        'border-warning-500',
        'hover:border-warning-600',
        'focus:border-warning-500 focus-visible:ring-warning-500'
      ),
      success: cn(
        'border-success-500',
        'hover:border-success-600',
        'focus:border-success-500 focus-visible:ring-success-500'
      ),
    }

    const sizeClasses = {
      sm: 'h-8 px-3 text-sm',
      md: 'h-10 px-3 text-base',
      lg: 'h-12 px-4 text-lg',
    }

    const inputClasses = cn(
      baseClasses,
      variantClasses[variant],
      sizeClasses[size],
      leftIcon && 'pl-10',
      rightIcon && 'pr-10'
    )

    return (
      <div className="w-full space-y-1.5">
        {label && (
          <label className="text-sm font-medium text-neutral-700">
            {label}
          </label>
        )}
        
        <div className="relative">
          {leftIcon && (
            <div className="absolute left-3 top-1/2 -translate-y-1/2 text-neutral-400">
              {leftIcon}
            </div>
          )}
          
          <motion.input
            ref={ref}
            className={inputClasses}
            disabled={disabled}
            whileFocus={{ scale: 1.01 }}
            transition={{ duration: 0.1 }}
            {...props}
          />
          
          {rightIcon && (
            <div className="absolute right-3 top-1/2 -translate-y-1/2 text-neutral-400">
              {rightIcon}
            </div>
          )}
        </div>
        
        {(helperText || error) && (
          <motion.p
            className={cn(
              'text-sm',
              error ? 'text-warning-600' : 'text-neutral-500'
            )}
            initial={{ opacity: 0, y: -5 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.2 }}
          >
            {error || helperText}
          </motion.p>
        )}
      </div>
    )
  }
)

Input.displayName = 'Input' 