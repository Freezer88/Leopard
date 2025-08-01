import React from 'react'
import { motion } from 'framer-motion'
import { cn } from '../../lib/utils'

export interface BarChartProps {
  data: Array<{
    label: string
    value: number
    color?: 'primary' | 'secondary' | 'accent' | 'success' | 'warning'
  }>
  maxValue?: number
  showValues?: boolean
  className?: string
}

/**
 * Bar Chart Component
 * 
 * Implements psychological design principles from the Design Report:
 * - Clear visual hierarchy for confidence
 * - Semantic color use for emotional resonance
 * - Accessible data presentation
 * - Smooth animations for reduced cognitive load
 */
export const BarChart: React.FC<BarChartProps> = ({
  data,
  maxValue,
  showValues = false,
  className,
}) => {
  const max = maxValue || Math.max(...data.map(d => d.value))
  
  const colorClasses = {
    primary: 'bg-primary-500',
    secondary: 'bg-secondary-500',
    accent: 'bg-accent-500',
    success: 'bg-success-500',
    warning: 'bg-warning-500',
  }

  return (
    <div className={cn('w-full space-y-3', className)}>
      {data.map((item, index) => {
        const percentage = (item.value / max) * 100
        const color = colorClasses[item.color || 'primary']
        
        return (
          <motion.div
            key={item.label}
            className="space-y-1"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.3, delay: index * 0.1 }}
          >
            <div className="flex items-center justify-between">
              <span className="text-sm font-medium text-neutral-700">
                {item.label}
              </span>
              {showValues && (
                <span className="text-sm text-neutral-500">
                  {item.value.toLocaleString()}
                </span>
              )}
            </div>
            
            <div className="w-full bg-neutral-100 rounded-full h-3 overflow-hidden">
              <motion.div
                className={cn('h-full rounded-full', color)}
                initial={{ width: 0 }}
                animate={{ width: `${percentage}%` }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              />
            </div>
          </motion.div>
        )
      })}
    </div>
  )
}

export interface PieChartProps {
  data: Array<{
    label: string
    value: number
    color?: 'primary' | 'secondary' | 'accent' | 'success' | 'warning'
  }>
  size?: 'sm' | 'md' | 'lg'
  showLegend?: boolean
  className?: string
}

/**
 * Simple Pie Chart Component
 * 
 * Provides a basic pie chart visualization for data comparison
 */
export const PieChart: React.FC<PieChartProps> = ({
  data,
  size = 'md',
  showLegend = true,
  className,
}) => {
  const total = data.reduce((sum, item) => sum + item.value, 0)
  
  const sizeClasses = {
    sm: 'w-32 h-32',
    md: 'w-48 h-48',
    lg: 'w-64 h-64',
  }

  const colorClasses = {
    primary: 'fill-primary-500',
    secondary: 'fill-secondary-500',
    accent: 'fill-accent-500',
    success: 'fill-success-500',
    warning: 'fill-warning-500',
  }

  let currentAngle = 0

  return (
    <div className={cn('flex flex-col items-center space-y-4', className)}>
      <div className={cn('relative', sizeClasses[size])}>
        <svg
          className="w-full h-full"
          viewBox="0 0 100 100"
        >
          {data.map((item, index) => {
            const percentage = (item.value / total) * 100
            const angle = (percentage / 100) * 360
            const startAngle = currentAngle
            const endAngle = currentAngle + angle
            
            // Convert angles to radians
            const startRad = (startAngle - 90) * (Math.PI / 180)
            const endRad = (endAngle - 90) * (Math.PI / 180)
            
            // Calculate arc coordinates
            const x1 = 50 + 40 * Math.cos(startRad)
            const y1 = 50 + 40 * Math.sin(startRad)
            const x2 = 50 + 40 * Math.cos(endRad)
            const y2 = 50 + 40 * Math.sin(endRad)
            
            // Determine if arc is large
            const largeArcFlag = angle > 180 ? 1 : 0
            
            // Create path
            const path = [
              `M 50 50`,
              `L ${x1} ${y1}`,
              `A 40 40 0 ${largeArcFlag} 1 ${x2} ${y2}`,
              'Z'
            ].join(' ')
            
            currentAngle += angle
            
            return (
              <motion.path
                key={item.label}
                d={path}
                className={colorClasses[item.color || 'primary']}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
              />
            )
          })}
        </svg>
      </div>
      
      {showLegend && (
        <div className="flex flex-wrap justify-center gap-4">
          {data.map((item, index) => (
            <motion.div
              key={item.label}
              className="flex items-center space-x-2"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: index * 0.1 }}
            >
              <div
                className={cn(
                  'w-3 h-3 rounded-full',
                  colorClasses[item.color || 'primary']
                )}
              />
              <span className="text-sm text-neutral-700">
                {item.label} ({((item.value / total) * 100).toFixed(1)}%)
              </span>
            </motion.div>
          ))}
        </div>
      )}
    </div>
  )
}

export interface StatCardProps {
  title: string
  value: string | number
  change?: {
    value: number
    type: 'increase' | 'decrease'
  }
  icon?: React.ReactNode
  variant?: 'default' | 'success' | 'warning' | 'danger'
  className?: string
}

/**
 * Stat Card Component
 * 
 * Displays key statistics with visual emphasis
 */
export const StatCard: React.FC<StatCardProps> = ({
  title,
  value,
  change,
  icon,
  variant = 'default',
  className,
}) => {
  const variantClasses = {
    default: 'text-neutral-700',
    success: 'text-success-700',
    warning: 'text-warning-700',
    danger: 'text-warning-700',
  }

  const changeClasses = {
    increase: 'text-success-600',
    decrease: 'text-warning-600',
  }

  return (
    <motion.div
      className={cn(
        'p-4 bg-white rounded-lg border border-neutral-200 shadow-sm',
        'hover:shadow-md transition-shadow duration-200',
        className
      )}
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.2 }}
    >
      <div className="flex items-center justify-between">
        <div className="flex-1">
          <p className="text-sm font-medium text-neutral-500">{title}</p>
          <p className={cn('text-2xl font-bold', variantClasses[variant])}>
            {value}
          </p>
          {change && (
            <p className={cn('text-sm font-medium', changeClasses[change.type])}>
              {change.type === 'increase' ? '+' : '-'}{Math.abs(change.value)}%
            </p>
          )}
        </div>
        {icon && (
          <div className="text-neutral-400">
            {icon}
          </div>
        )}
      </div>
    </motion.div>
  )
}

BarChart.displayName = 'BarChart'
PieChart.displayName = 'PieChart'
StatCard.displayName = 'StatCard' 