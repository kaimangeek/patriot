import { useState, useEffect } from 'react'
import { Panel, Typography, Button, Flex } from '@maxhub/max-ui'

interface NotificationProps {
  message: string
  type: 'success' | 'error'
  isVisible: boolean
  onClose: () => void
}

const Notification = ({ message, type, isVisible, onClose }: NotificationProps) => {
  const [isAnimating, setIsAnimating] = useState(false)

  useEffect(() => {
    if (isVisible) {
      setIsAnimating(true)
      const timer = setTimeout(() => {
        onClose()
      }, 5000) // Автоматически скрываем через 5 секунд

      return () => clearTimeout(timer)
    }
  }, [isVisible, onClose])

  if (!isVisible) return null

  const getIcon = () => {
    return type === 'success' ? '✅' : '❌'
  }

  const getBackgroundColor = () => {
    return type === 'success' 
      ? 'linear-gradient(135deg, #4CAF50, #45a049)' 
      : 'linear-gradient(135deg, #f44336, #d32f2f)'
  }

  return (
    <div 
      className="notification-overlay"
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        zIndex: 1000,
        animation: isAnimating ? 'fadeIn 0.3s ease-out' : 'fadeOut 0.3s ease-out'
      }}
    >
      <Panel 
        mode="primary"
        style={{
          maxWidth: '400px',
          width: '90%',
          background: getBackgroundColor(),
          color: 'white',
          transform: isAnimating ? 'scale(1)' : 'scale(0.9)',
          transition: 'transform 0.3s ease-out'
        }}
      >
        <Flex direction="column" gap={16} align="center">
          <div style={{ fontSize: '2rem' }}>
            {getIcon()}
          </div>
          
          <div style={{ textAlign: 'center' }}>
            <Typography.Body>
              {message}
            </Typography.Body>
          </div>
          
          <Button 
            onClick={onClose}
            style={{
              background: 'rgba(255, 255, 255, 0.2)',
              border: '1px solid rgba(255, 255, 255, 0.3)',
              color: 'white'
            }}
          >
            Закрыть
          </Button>
        </Flex>
      </Panel>
    </div>
  )
}

export default Notification
