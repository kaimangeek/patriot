export const siteConfig = {
  // Основная информация об агентстве
  agency: {
    name: 'Патриот слушает',
    shortName: 'ПС',
    description: 'Боты для MAX, которые работают',
    fullDescription: 'Создаем умных ботов, которые автоматизируют ваш бизнес, отвечают клиентам 24/7 и увеличивают продажи. От идеи до запуска за 7 дней.',
    mission: 'Помочь российскому бизнесу стать более эффективным и клиентоориентированным с помощью современных технологий автоматизации.',
    tagline: 'Ваш бизнес работает, пока вы спите'
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
    webhookUrl: import.meta.env.VITE_GITHUB_PAGES_URL ? `${import.meta.env.VITE_GITHUB_PAGES_URL}/webhook` : 'https://kaimangeek.github.io/patriot/webhook', // URL для webhook
    // Токен будет получен при создании бота
    accessToken: import.meta.env.VITE_MAX_BOT_TOKEN || 'your_bot_token_here'
  },

  // Преимущества агентства
  features: [
    {
      icon: '🚀',
      title: 'Запуск за 7 дней',
      description: 'От идеи до работающего бота всего за неделю. Быстро, качественно, без лишних разговоров.'
    },
    {
      icon: '💰',
      title: 'Окупаемость 30 дней',
      description: 'Наши клиенты окупают вложения в бота уже через месяц. Средний рост продаж +40%.'
    },
    {
      icon: '🎯',
      title: 'Персонализация под ваш бизнес',
      description: 'Каждый бот создается под вашу нишу, аудиторию и задачи. Никаких шаблонов.'
    },
    {
      icon: '🛡️',
      title: 'Поддержка и развитие',
      description: 'Не бросаем после запуска. Помогаем развивать бота и масштабировать бизнес.'
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
    url: import.meta.env.VITE_GITHUB_PAGES_URL || 'https://kaimangeek.github.io/patriot'
  }
}
