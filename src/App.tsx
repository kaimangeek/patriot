import { 
  Panel, 
  Grid, 
  Container, 
  Flex, 
  Typography, 
  Button, 
  Input, 
  Textarea,
  Avatar,
  Spinner
} from '@maxhub/max-ui'
import { useState } from 'react'
import { sendApplicationToManager } from './utils/maxApi'
import Notification from './components/Notification'
import type { FormData, NotificationState } from './types'
import { siteConfig } from './config/site'
import './App.css'



const App = () => {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    company: '',
    phone: '',
    email: '',
    description: ''
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [notification, setNotification] = useState<NotificationState>({
    message: '',
    type: 'success',
    isVisible: false
  })

  const handleInputChange = (field: keyof FormData, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    
    try {
      // Отправляем заявку менеджеру
      const success = await sendApplicationToManager(formData)
      
      if (success) {
        // Показываем уведомление об успехе
        setNotification({
          message: 'Спасибо! Ваша заявка отправлена. Мы свяжемся с вами в течение 2 часов.',
          type: 'success',
          isVisible: true
        })
        
        // Очистка формы
        setFormData({
          name: '',
          company: '',
          phone: '',
          email: '',
          description: ''
        })
      } else {
        setNotification({
          message: 'Произошла ошибка при отправке заявки. Попробуйте еще раз.',
          type: 'error',
          isVisible: true
        })
      }
    } catch (error) {
      console.error('Ошибка при отправке формы:', error)
      setNotification({
        message: 'Произошла ошибка при отправке заявки. Попробуйте еще раз.',
        type: 'error',
        isVisible: true
      })
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <div className="app">
      <div className="app-content">
        {/* Hero секция */}
        <Panel mode="primary" className="hero-section">
        <Container>
          <Grid gap={24} cols={1}>
            <Flex direction="column" align="center" gap={16}>
              <Avatar.Container size={120} form="squircle" className="hero-avatar">
                <Avatar.Text>{siteConfig.agency.shortName}</Avatar.Text>
              </Avatar.Container>
              <div style={{ textAlign: 'center' }}>
                <Typography.Display>
                  {siteConfig.agency.name}
                </Typography.Display>
              </div>
              <div style={{ textAlign: 'center' }}>
                <Typography.Headline color="secondary">
                  {siteConfig.agency.description}
                </Typography.Headline>
              </div>
              <div style={{ textAlign: 'center' }}>
                <Typography.Body color="secondary">
                  {siteConfig.agency.fullDescription}
                </Typography.Body>
              </div>
            </Flex>
          </Grid>
        </Container>
      </Panel>

      {/* Преимущества */}
      <Panel mode="secondary" className="features-section">
        <Container>
          <Grid gap={24} cols={1}>
            <div style={{ textAlign: 'center' }}>
              <Typography.Title style={{ color: '#2c3e50' }}>
                Почему выбирают нас?
              </Typography.Title>
            </div>
            
            <Grid gap={16} cols={1}>
              <Flex gap={16} align="flex-start">
                <div className="feature-icon">🤖</div>
                <Flex direction="column" gap={8}>
                  <Typography.Title style={{ color: '#2c3e50' }}>
                    Опыт разработки
                  </Typography.Title>
                  <Typography.Body style={{ color: '#495057' }}>
                    Более 50 успешно реализованных ботов для различных отраслей бизнеса
                  </Typography.Body>
                </Flex>
              </Flex>

              <Flex gap={16} align="flex-start">
                <div className="feature-icon">⚡</div>
                <Flex direction="column" gap={8}>
                  <Typography.Title style={{ color: '#2c3e50' }}>
                    Быстрая разработка
                  </Typography.Title>
                  <Typography.Body style={{ color: '#495057' }}>
                    Создаем ботов за 7-14 дней с полным тестированием и запуском
                  </Typography.Body>
                </Flex>
              </Flex>

              <Flex gap={16} align="flex-start">
                <div className="feature-icon">🎯</div>
                <Flex direction="column" gap={8}>
                  <Typography.Title style={{ color: '#2c3e50' }}>
                    Индивидуальный подход
                  </Typography.Title>
                  <Typography.Body style={{ color: '#495057' }}>
                    Каждый бот разрабатывается под специфику вашего бизнеса и аудитории
                  </Typography.Body>
                </Flex>
              </Flex>

              <Flex gap={16} align="flex-start">
                <div className="feature-icon">📈</div>
                <Flex direction="column" gap={8}>
                  <Typography.Title style={{ color: '#2c3e50' }}>
                    Рост продаж
                  </Typography.Title>
                  <Typography.Body style={{ color: '#495057' }}>
                    Наши клиенты увеличивают продажи в среднем на 30% после внедрения ботов
                  </Typography.Body>
                </Flex>
              </Flex>
            </Grid>
          </Grid>
        </Container>
      </Panel>

      {/* О нас */}
      <Panel mode="primary" className="about-section">
        <Container>
          <Grid gap={24} cols={1}>
            <div style={{ textAlign: 'center' }}>
              <Typography.Title>
                О нашем агентстве
              </Typography.Title>
            </div>
            <div style={{ textAlign: 'center' }}>
              <Typography.Body color="secondary">
                "Патриот слушает" — это команда профессионалов, специализирующихся на создании 
                интеллектуальных ботов для мессенджера MAX. Мы понимаем, что каждый бизнес уникален, 
                поэтому создаем персонализированные решения, которые действительно работают.
              </Typography.Body>
            </div>
            <div style={{ textAlign: 'center' }}>
              <Typography.Body color="secondary">
                Наша миссия — помочь российскому бизнесу стать более эффективным и клиентоориентированным 
                с помощью современных технологий автоматизации.
              </Typography.Body>
            </div>
          </Grid>
        </Container>
      </Panel>

      {/* Форма заявки */}
      <Panel mode="secondary" className="form-section">
        <Container>
          <Grid gap={24} cols={1}>
            <div style={{ textAlign: 'center' }}>
              <Typography.Title style={{ color: '#2c3e50' }}>
                Заказать разработку бота
              </Typography.Title>
            </div>
            <div style={{ textAlign: 'center' }}>
              <Typography.Body style={{ color: '#495057' }}>
                Оставьте заявку, и наш менеджер свяжется с вами в течение 2 часов
              </Typography.Body>
            </div>

            <form onSubmit={handleSubmit}>
              <Grid gap={16} cols={1}>
                <Input
                  placeholder="Ваше имя"
                  value={formData.name}
                  onChange={(e) => handleInputChange('name', e.target.value)}
                  required
                />
                
                <Input
                  placeholder="Название компании"
                  value={formData.company}
                  onChange={(e) => handleInputChange('company', e.target.value)}
                  required
                />
                
                <Input
                  placeholder="Телефон"
                  type="tel"
                  value={formData.phone}
                  onChange={(e) => handleInputChange('phone', e.target.value)}
                  required
                />
                
                <Input
                  placeholder="Email"
                  type="email"
                  value={formData.email}
                  onChange={(e) => handleInputChange('email', e.target.value)}
                  required
                />
                
                <Textarea
                  placeholder="Опишите вашу задачу и желаемый функционал бота"
                  value={formData.description}
                  onChange={(e) => handleInputChange('description', e.target.value)}
                  rows={4}
                  required
                />
                
                <Button 
                  type="submit" 
                  disabled={isSubmitting}
                  className="submit-button"
                >
                  {isSubmitting ? (
                    <Flex gap={8} align="center">
                      <Spinner />
                      Отправляем...
                    </Flex>
                  ) : (
                    'Отправить заявку'
                  )}
                </Button>
              </Grid>
            </form>
          </Grid>
        </Container>
      </Panel>

      {/* Футер */}
      <Panel mode="primary" className="footer">
        <Container>
          <Flex direction="column" align="center" gap={8}>
            <Typography.Title>
              Патриот слушает
            </Typography.Title>
            <div style={{ textAlign: 'center' }}>
              <Typography.Body color="secondary">
                Создание ботов для MAX • 2024
              </Typography.Body>
            </div>
          </Flex>
        </Container>
      </Panel>

      {/* Уведомления */}
      <Notification
        message={notification.message}
        type={notification.type}
        isVisible={notification.isVisible}
        onClose={() => setNotification(prev => ({ ...prev, isVisible: false }))}
      />
        </div>
      </div>
  )
}

export default App
