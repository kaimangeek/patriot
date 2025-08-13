// Типы для формы заявки
export interface FormData {
  name: string
  company: string
  phone: string
  email: string
  description: string
}

// Типы для уведомлений
export interface NotificationState {
  message: string
  type: 'success' | 'error'
  isVisible: boolean
}

// Типы для преимуществ
export interface Feature {
  icon: string
  title: string
  description: string
}

// Типы для MAX API
export interface MaxUserInfo {
  id: string
  name: string
  avatar?: string
}

// Типы для конфигурации сайта
export interface SiteConfig {
  agency: {
    name: string
    shortName: string
    description: string
    fullDescription: string
    mission: string
  }
  contacts: {
    managerId: string
    responseTime: string
    email: string
    phone: string
  }
  features: Feature[]
  colors: {
    primary: string
    secondary: string
    accent: string
    success: string
    error: string
    background: string
    dark: string
  }
  form: {
    fields: Array<{
      name: string
      label: string
      type: string
      required: boolean
    }>
    successMessage: string
    errorMessage: string
  }
  seo: {
    title: string
    description: string
    keywords: string
    url: string
  }
}
