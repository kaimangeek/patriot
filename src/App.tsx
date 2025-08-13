import { 
  Grid, 
  Container, 
  Flex, 
  Typography, 
  Button, 
  Input, 
  Textarea,
  Spinner
} from '@maxhub/max-ui'
// Logo import - will use fallback if not available
let logoImage: string = '/logo.png' // Default fallback to public folder

import { useState } from 'react'
import { sendApplicationToManager } from './utils/maxApi'
import Notification from './components/Notification'
import type { FormData, NotificationState } from './types'
import { siteConfig } from './config/site'
import './App.css'



const App = () => {
  const [formData, setFormData] = useState<FormData>({
    name: '',
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
        {/* Основная панель жидкого стекла */}
        <div className="main-glass-panel">
          <Container>
            <Grid gap={40} cols={1}>
              
              {/* Hero секция */}
              <div className="hero-section">
                <Grid gap={32} cols={1}>
                                  <Flex direction="column" align="center" gap={24}>
                  <div className="hero-avatar-custom">
                    <div 
                      className="logo-image"
                      style={{ 
                        backgroundImage: `url(${logoImage})`,
                        backgroundSize: 'cover',
                        backgroundPosition: 'center 25%',
                        backgroundRepeat: 'no-repeat',
                        width: '100%',
                        height: '100%'
                      }}
                      onError={() => {
                        console.error('Ошибка загрузки изображения');
                        // Fallback на текстовый логотип
                        const element = document.querySelector('.logo-image') as HTMLElement;
                        if (element) {
                          element.style.backgroundImage = 'none';
                          element.textContent = siteConfig.agency.shortName;
                          element.style.display = 'flex';
                          element.style.alignItems = 'center';
                          element.style.justifyContent = 'center';
                          element.style.fontSize = '2rem';
                          element.style.fontWeight = 'bold';
                          element.style.color = 'white';
                        }
                      }}
                    />
                  </div>
                    <div style={{ textAlign: 'center' }}>
                      <Typography.Display style={{ fontSize: '3rem', fontWeight: '700', color: 'white' }}>
                        {siteConfig.agency.name}
                      </Typography.Display>
                    </div>
                    <div style={{ textAlign: 'center' }}>
                      <Typography.Headline style={{ fontSize: '1.5rem', fontWeight: '500', opacity: 0.9, color: 'white' }}>
                        {siteConfig.agency.description}
                      </Typography.Headline>
                    </div>
                    <div style={{ textAlign: 'center', maxWidth: '600px' }}>
                      <Typography.Body style={{ fontSize: '1.1rem', lineHeight: '1.6', opacity: 0.8, color: 'white' }}>
                        {siteConfig.agency.fullDescription}
                      </Typography.Body>
                    </div>
                    <div style={{ textAlign: 'center', marginTop: '16px' }}>
                      <Typography.Body style={{ fontSize: '1rem', opacity: 0.7, fontStyle: 'italic', color: 'white' }}>
                        {siteConfig.agency.tagline}
                      </Typography.Body>
                    </div>
                  </Flex>
                </Grid>
              </div>

              {/* Преимущества */}
              <div className="features-section">
                <Grid gap={32} cols={1}>
                  <div style={{ textAlign: 'center' }}>
                    <Typography.Title style={{ color: 'white', fontSize: '2.5rem', fontWeight: '700' }}>
                      Почему выбирают нас?
                    </Typography.Title>
                  </div>
                  
                  <Grid gap={20} cols={1}>
                    <Flex gap={20} align="flex-start">
                      <div className="feature-icon">{siteConfig.features[0].icon}</div>
                      <Flex direction="column" gap={8}>
                        <Typography.Title style={{ color: 'white', fontSize: '1.3rem', fontWeight: '600' }}>
                          {siteConfig.features[0].title}
                        </Typography.Title>
                        <Typography.Body style={{ color: 'rgba(255, 255, 255, 0.8)', lineHeight: '1.5' }}>
                          {siteConfig.features[0].description}
                        </Typography.Body>
                      </Flex>
                    </Flex>

                    <Flex gap={20} align="flex-start">
                      <div className="feature-icon">{siteConfig.features[1].icon}</div>
                      <Flex direction="column" gap={8}>
                        <Typography.Title style={{ color: 'white', fontSize: '1.3rem', fontWeight: '600' }}>
                          {siteConfig.features[1].title}
                        </Typography.Title>
                        <Typography.Body style={{ color: 'rgba(255, 255, 255, 0.8)', lineHeight: '1.5' }}>
                          {siteConfig.features[1].description}
                        </Typography.Body>
                      </Flex>
                    </Flex>

                    <Flex gap={20} align="flex-start">
                      <div className="feature-icon">{siteConfig.features[2].icon}</div>
                      <Flex direction="column" gap={8}>
                        <Typography.Title style={{ color: 'white', fontSize: '1.3rem', fontWeight: '600' }}>
                          {siteConfig.features[2].title}
                        </Typography.Title>
                        <Typography.Body style={{ color: 'rgba(255, 255, 255, 0.8)', lineHeight: '1.5' }}>
                          {siteConfig.features[2].description}
                        </Typography.Body>
                      </Flex>
                    </Flex>

                    <Flex gap={20} align="flex-start">
                      <div className="feature-icon">{siteConfig.features[3].icon}</div>
                      <Flex direction="column" gap={8}>
                        <Typography.Title style={{ color: 'white', fontSize: '1.3rem', fontWeight: '600' }}>
                          {siteConfig.features[3].title}
                        </Typography.Title>
                        <Typography.Body style={{ color: 'rgba(255, 255, 255, 0.8)', lineHeight: '1.5' }}>
                          {siteConfig.features[3].description}
                        </Typography.Body>
                      </Flex>
                    </Flex>
                  </Grid>
                </Grid>
              </div>

              {/* О нас */}
              <div className="about-section">
                <Grid gap={32} cols={1}>
                  <div style={{ textAlign: 'center' }}>
                    <Typography.Title style={{ color: 'white', fontSize: '2.5rem', fontWeight: '700' }}>
                      О нашем агентстве
                    </Typography.Title>
                  </div>
                  <div style={{ textAlign: 'center', maxWidth: '800px', margin: '0 auto' }}>
                    <Typography.Body style={{ color: 'rgba(255, 255, 255, 0.9)', fontSize: '1.1rem', lineHeight: '1.7' }}>
                      "Патриот слушает" — это команда профессионалов, специализирующихся на создании 
                      интеллектуальных ботов для мессенджера MAX. Мы понимаем, что каждый бизнес уникален, 
                      поэтому создаем персонализированные решения, которые действительно работают.
                    </Typography.Body>
                  </div>
                  <div style={{ textAlign: 'center', maxWidth: '800px', margin: '0 auto' }}>
                    <Typography.Body style={{ color: 'rgba(255, 255, 255, 0.9)', fontSize: '1.1rem', lineHeight: '1.7' }}>
                      Наша миссия — помочь российскому бизнесу стать более эффективным и клиентоориентированным 
                      с помощью современных технологий автоматизации.
                    </Typography.Body>
                  </div>
                </Grid>
              </div>

              {/* Форма заявки */}
              <div className="form-section">
                <Grid gap={32} cols={1}>
                  <div style={{ textAlign: 'center' }}>
                    <Typography.Title style={{ color: 'white', fontSize: '2.5rem', fontWeight: '700' }}>
                      Заказать разработку бота
                    </Typography.Title>
                  </div>
                  <div style={{ textAlign: 'center' }}>
                    <Typography.Body style={{ color: 'rgba(255, 255, 255, 0.8)', fontSize: '1.1rem' }}>
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
              </div>

              {/* Футер */}
              <div className="footer">
                <Flex direction="column" align="center" gap={12}>
                  <Typography.Title style={{ color: 'white', fontSize: '1.5rem', fontWeight: '600' }}>
                    Патриот слушает
                  </Typography.Title>
                  <div style={{ textAlign: 'center' }}>
                    <Typography.Body style={{ color: 'rgba(255, 255, 255, 0.7)', fontSize: '0.9rem' }}>
                      Создание ботов для MAX • 2025
                    </Typography.Body>
                  </div>
                </Flex>
              </div>

            </Grid>
          </Container>
        </div>

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
