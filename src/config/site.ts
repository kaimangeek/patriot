export const siteConfig = {
  // Основная информация об агентстве
  agency: {
    name: 'Патриот слушает',
    shortName: 'ПС',
    description: 'Создаем умных ботов для MAX',
    fullDescription: 'Профессиональное агентство по разработке ботов для мессенджера MAX. Мы помогаем бизнесу автоматизировать общение с клиентами и увеличить продажи.',
    mission: 'Помочь российскому бизнесу стать более эффективным и клиентоориентированным с помощью современных технологий автоматизации.'
  },

  // Контактная информация
  contacts: {
    managerId: 'patriotlistensbot', // Ник бота в MAX
    responseTime: '2 часа',
    email: 'info@patriot-listens.ru',
    phone: '+7 (XXX) XXX-XX-XX'
  },

  // Настройки MAX API
  max: {
    botUsername: 'patriotlistensbot',
    apiUrl: 'https://botapi.max.ru',
    webhookUrl: process.env.GITHUB_PAGES_URL ? `${process.env.GITHUB_PAGES_URL}/webhook` : 'https://kaimangeek.github.io/patriot/webhook', // URL для webhook
    // Токен будет получен при создании бота
    accessToken: process.env.MAX_BOT_TOKEN || 'your_bot_token_here'
  },

  // Преимущества агентства
  features: [
    {
      icon: '🤖',
      title: 'Опыт разработки',
      description: 'Более 50 успешно реализованных ботов для различных отраслей бизнеса'
    },
    {
      icon: '⚡',
      title: 'Быстрая разработка',
      description: 'Создаем ботов за 7-14 дней с полным тестированием и запуском'
    },
    {
      icon: '🎯',
      title: 'Индивидуальный подход',
      description: 'Каждый бот разрабатывается под специфику вашего бизнеса и аудитории'
    },
    {
      icon: '📈',
      title: 'Рост продаж',
      description: 'Наши клиенты увеличивают продажи в среднем на 30% после внедрения ботов'
    }
  ],

  // Цветовая схема
  colors: {
    primary: '#667eea',
    secondary: '#764ba2',
    accent: '#ff6b6b',
    success: '#4CAF50',
    error: '#f44336',
    background: '#f8f9fa',
    dark: '#2c3e50'
  },

  // Настройки формы
  form: {
    fields: [
      { name: 'name', label: 'Ваше имя', type: 'text', required: true },
      { name: 'company', label: 'Название компании', type: 'text', required: true },
      { name: 'phone', label: 'Телефон', type: 'tel', required: true },
      { name: 'email', label: 'Email', type: 'email', required: true },
      { name: 'description', label: 'Описание задачи', type: 'textarea', required: true }
    ],
    successMessage: 'Спасибо! Ваша заявка отправлена. Мы свяжемся с вами в течение 2 часов.',
    errorMessage: 'Произошла ошибка при отправке заявки. Попробуйте еще раз.'
  },

  // SEO настройки
  seo: {
    title: 'Патриот слушает - Создание ботов для MAX',
    description: 'Профессиональное агентство по созданию ботов для мессенджера MAX. Автоматизация общения с клиентами и увеличение продаж.',
    keywords: 'боты, MAX, мессенджер, автоматизация, чат-боты, разработка',
    url: process.env.GITHUB_PAGES_URL || 'https://kaimangeek.github.io/patriot'
  }
}
