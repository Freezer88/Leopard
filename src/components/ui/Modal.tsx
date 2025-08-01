import React, { useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { X } from 'lucide-react'
import { cn } from '../../lib/utils'
import { Button } from './Button'

export interface ModalProps {
  isOpen: boolean
  onClose: () => void
  title?: string
  children: React.ReactNode
  size?: 'sm' | 'md' | 'lg' | 'xl' | 'full'
  showCloseButton?: boolean
  closeOnOverlayClick?: boolean
  closeOnEscape?: boolean
}

export interface ModalHeaderProps {
  children: React.ReactNode
  onClose?: () => void
}

export interface ModalContentProps {
  children: React.ReactNode
}

export interface ModalFooterProps {
  children: React.ReactNode
}

/**
 * Modal Component
 * 
 * Implements psychological design principles from the Design Report:
 * - Clear visual hierarchy for confidence
 * - Accessible focus management for empowerment
 * - Comforting visual design with proper spacing
 * - Smooth animations for reduced cognitive load
 */
export const Modal: React.FC<ModalProps> = ({
  isOpen,
  onClose,
  title,
  children,
  size = 'md',
  showCloseButton = true,
  closeOnOverlayClick = true,
  closeOnEscape = true,
}) => {
  // Handle escape key
  useEffect(() => {
    if (!closeOnEscape) return

    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        onClose()
      }
    }

    if (isOpen) {
      document.addEventListener('keydown', handleEscape)
      // Prevent body scroll
      document.body.style.overflow = 'hidden'
    }

    return () => {
      document.removeEventListener('keydown', handleEscape)
      document.body.style.overflow = 'unset'
    }
  }, [isOpen, onClose, closeOnEscape])

  const sizeClasses = {
    sm: 'max-w-sm',
    md: 'max-w-md',
    lg: 'max-w-lg',
    xl: 'max-w-xl',
    full: 'max-w-full mx-4',
  }

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="fixed inset-0 z-modal flex items-center justify-center p-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
        >
          {/* Backdrop */}
          <motion.div
            className="absolute inset-0 bg-neutral-900/50 backdrop-blur-sm"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={closeOnOverlayClick ? onClose : undefined}
          />
          
          {/* Modal Content */}
          <motion.div
            className={cn(
              'relative w-full bg-white rounded-lg shadow-xl',
              'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-500 focus-visible:ring-offset-2',
              sizeClasses[size]
            )}
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ duration: 0.2 }}
            role="dialog"
            aria-modal="true"
            aria-labelledby={title ? 'modal-title' : undefined}
          >
            {children}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}

/**
 * ModalHeader Component
 */
export const ModalHeader: React.FC<ModalHeaderProps> = ({ children, onClose }) => {
  return (
    <div className="flex items-center justify-between p-6 pb-4">
      <div className="flex-1">
        {children}
      </div>
      {onClose && (
        <Button
          variant="ghost"
          size="sm"
          onClick={onClose}
          className="ml-2"
          aria-label="Close modal"
        >
          <X className="h-4 w-4" />
        </Button>
      )}
    </div>
  )
}

/**
 * ModalContent Component
 */
export const ModalContent: React.FC<ModalContentProps> = ({ children }) => {
  return (
    <div className="px-6 pb-6">
      {children}
    </div>
  )
}

/**
 * ModalFooter Component
 */
export const ModalFooter: React.FC<ModalFooterProps> = ({ children }) => {
  return (
    <div className="flex items-center justify-end gap-2 p-6 pt-4 border-t border-neutral-200">
      {children}
    </div>
  )
}

Modal.displayName = 'Modal'
ModalHeader.displayName = 'ModalHeader'
ModalContent.displayName = 'ModalContent'
ModalFooter.displayName = 'ModalFooter' 