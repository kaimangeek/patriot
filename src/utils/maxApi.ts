import { siteConfig } from '../config/site'
import type { FormData } from '../types'



// Интерфейс для ответа API
interface MaxApiResponse {
  ok: boolean
  result?: any
  error_code?: number
  description?: string
}

// Функция для отправки заявки через MAX Bot API
export const sendApplicationToManager = async (formData: FormData): Promise<boolean> => {
  try {
    // Проверяем, что мы в среде MAX
    if (typeof window !== 'undefined' && (window as any).MAX) {
      
      // Формируем сообщение для менеджера
      const message = `
🤖 *Новая заявка на создание бота*

👤 *Имя:* ${formData.name}
🏢 *Компания:* ${formData.company}
📞 *Телефон:* ${formData.phone}
📧 *Email:* ${formData.email}

📝 *Описание задачи:*
${formData.description}

---
*Отправлено с лендинга "Патриот слушает"*
      `.trim()

      // Отправляем сообщение через MAX API
      const success = await sendMessageViaMaxApi(message)
      return success
    } else {
      // Если не в MAX, отправляем через Bot API
      const success = await sendMessageViaBotApi(formData)
      return success
    }
  } catch (error) {
    console.error('Ошибка при отправке заявки:', error)
    return false
  }
}

// Функция отправки через MAX API (в среде MAX)
const sendMessageViaMaxApi = async (message: string): Promise<boolean> => {
  try {
    const maxApi = (window as any).MAX
    
    // Получаем ID пользователя (менеджера)
    const managerId = siteConfig.contacts.managerId
    
    await maxApi.sendMessage({
      peer_id: managerId,
      message: message,
      random_id: Math.random().toString(36).substring(7)
    })

    return true
  } catch (error) {
    console.error('Ошибка отправки через MAX API:', error)
    return false
  }
}

// Функция отправки через Bot API (вне среды MAX)
const sendMessageViaBotApi = async (formData: FormData): Promise<boolean> => {
  try {
    const message = `
🤖 *Новая заявка на создание бота*

👤 *Имя:* ${formData.name}
🏢 *Компания:* ${formData.company}
📞 *Телефон:* ${formData.phone}
📧 *Email:* ${formData.email}

📝 *Описание задачи:*
${formData.description}

---
*Отправлено с лендинга "Патриот слушает"*
    `.trim()

    // Отправляем через Bot API
    const response = await fetch(`${siteConfig.max.apiUrl}/sendMessage`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        access_token: siteConfig.max.accessToken,
        peer_id: siteConfig.contacts.managerId,
        message: message,
        random_id: Math.random().toString(36).substring(7)
      })
    })

    const result: MaxApiResponse = await response.json()
    
    if (result.ok) {
      console.log('Заявка успешно отправлена через Bot API')
      return true
    } else {
      console.error('Ошибка Bot API:', result.description)
      return false
    }
  } catch (error) {
    console.error('Ошибка отправки через Bot API:', error)
    return false
  }
}

// Функция для получения информации о боте
export const getBotInfo = async (): Promise<any> => {
  try {
    const response = await fetch(`${siteConfig.max.apiUrl}/me?access_token=${siteConfig.max.accessToken}`)
    const result: MaxApiResponse = await response.json()
    
    if (result.ok) {
      return result.result
    } else {
      console.error('Ошибка получения информации о боте:', result.description)
      return null
    }
  } catch (error) {
    console.error('Ошибка при получении информации о боте:', error)
    return null
  }
}

// Функция для настройки webhook
export const setWebhook = async (url: string): Promise<boolean> => {
  try {
    const response = await fetch(`${siteConfig.max.apiUrl}/subscriptions`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        access_token: siteConfig.max.accessToken,
        url: url
      })
    })

    const result: MaxApiResponse = await response.json()
    
    if (result.ok) {
      console.log('Webhook успешно настроен')
      return true
    } else {
      console.error('Ошибка настройки webhook:', result.description)
      return false
    }
  } catch (error) {
    console.error('Ошибка при настройке webhook:', error)
    return false
  }
}

// Функция для получения информации о пользователе MAX
export const getMaxUserInfo = async () => {
  try {
    if (typeof window !== 'undefined' && (window as any).MAX) {
      const max = (window as any).MAX
      const userInfo = await max.getUserInfo()
      return userInfo
    }
    return null
  } catch (error) {
    console.error('Ошибка при получении информации о пользователе:', error)
    return null
  }
}

// Функция для проверки авторизации в MAX
export const isMaxAuthorized = (): boolean => {
  return typeof window !== 'undefined' && !!(window as any).MAX
}
