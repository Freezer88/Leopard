import React from 'react'
import { motion } from 'framer-motion'
import { cn } from '../../lib/utils'

export interface ProgressProps {
  value: number
  max?: number
  size?: 'sm' | 'md' | 'lg'
  variant?: 'default' | 'success' | 'warning' | 'danger'
  showLabel?: boolean
  label?: string
  className?: string
}

/**
 * Progress Component
 * 
 * Implements psychological design principles from the Design Report:
 * - Positive reinforcement through visual progress
 * - Clear feedback for confidence building
 * - Semantic color use for emotional resonance
 * - Smooth animations for reduced cognitive load
 */
export const Progress: React.FC<ProgressProps> = ({
  value,
  max = 100,
  size = 'md',
  variant = 'default',
  showLabel = false,
  label,
  className,
}) => {
  const percentage = Math.min(Math.max((value / max) * 100, 0), 100)

  const sizeClasses = {
    sm: 'h-2',
    md: 'h-3',
    lg: 'h-4',
  }

  const variantClasses = {
    default: 'bg-primary-500',
    success: 'bg-success-500',
    warning: 'bg-warning-500',
    danger: 'bg-warning-600',
  }

  const trackClasses = {
    default: 'bg-primary-100',
    success: 'bg-success-100',
    warning: 'bg-warning-100',
    danger: 'bg-warning-100',
  }

  return (
    <div className={cn('w-full', className)}>
      {(showLabel || label) && (
        <div className="flex items-center justify-between mb-2">
          <span className="text-sm font-medium text-neutral-700">
            {label || `${Math.round(percentage)}%`}
          </span>
          {showLabel && label && (
            <span className="text-sm text-neutral-500">
              {Math.round(percentage)}%
            </span>
          )}
        </div>
      )}
      
      <div
        className={cn(
          'w-full rounded-full overflow-hidden',
          trackClasses[variant],
          sizeClasses[size]
        )}
      >
        <motion.div
          className={cn(
            'h-full rounded-full transition-all duration-300',
            variantClasses[variant]
          )}
          initial={{ width: 0 }}
          animate={{ width: `${percentage}%` }}
          transition={{ duration: 0.5, ease: 'easeOut' }}
        />
      </div>
    </div>
  )
}

/**
 * Circular Progress Component
 * 
 * Alternative progress indicator for more compact spaces
 */
export interface CircularProgressProps {
  value: number
  max?: number
  size?: 'sm' | 'md' | 'lg'
  variant?: 'default' | 'success' | 'warning' | 'danger'
  showLabel?: boolean
  label?: string
  className?: string
}

export const CircularProgress: React.FC<CircularProgressProps> = ({
  value,
  max = 100,
  size = 'md',
  variant = 'default',
  showLabel = false,
  label,
  className,
}) => {
  const percentage = Math.min(Math.max((value / max) * 100, 0), 100)
  const radius = 45
  const circumference = 2 * Math.PI * radius
  const strokeDasharray = circumference
  const strokeDashoffset = circumference - (percentage / 100) * circumference

  const sizeClasses = {
    sm: 'w-16 h-16',
    md: 'w-20 h-20',
    lg: 'w-24 h-24',
  }

  const strokeWidthClasses = {
    sm: 'stroke-2',
    md: 'stroke-2',
    lg: 'stroke-3',
  }

  const variantClasses = {
    default: 'stroke-primary-500',
    success: 'stroke-success-500',
    warning: 'stroke-warning-500',
    danger: 'stroke-warning-600',
  }

  const trackClasses = {
    default: 'stroke-primary-100',
    success: 'stroke-success-100',
    warning: 'stroke-warning-100',
    danger: 'stroke-warning-100',
  }

  return (
    <div className={cn('flex flex-col items-center', className)}>
      <div className={cn('relative', sizeClasses[size])}>
        <svg
          className="w-full h-full transform -rotate-90"
          viewBox="0 0 100 100"
        >
          {/* Background circle */}
          <circle
            cx="50"
            cy="50"
            r={radius}
            className={cn('fill-none', trackClasses[variant], strokeWidthClasses[size])}
          />
          
          {/* Progress circle */}
          <motion.circle
            cx="50"
            cy="50"
            r={radius}
            className={cn('fill-none', variantClasses[variant], strokeWidthClasses[size])}
            strokeDasharray={strokeDasharray}
            initial={{ strokeDashoffset: circumference }}
            animate={{ strokeDashoffset }}
            transition={{ duration: 0.5, ease: 'easeOut' }}
          />
        </svg>
        
        {(showLabel || label) && (
          <div className="absolute inset-0 flex items-center justify-center">
            <span className="text-sm font-medium text-neutral-700">
              {label || `${Math.round(percentage)}%`}
            </span>
          </div>
        )}
      </div>
    </div>
  )
}

Progress.displayName = 'Progress'
CircularProgress.displayName = 'CircularProgress' 