#!/usr/bin/env node

import { getBotInfo, setWebhook } from '../src/utils/maxApi'
import { siteConfig } from '../src/config/site'

async function setupBot() {
  console.log('🤖 Настройка бота "Патриот слушает"...\n')

  // Проверяем информацию о боте
  console.log('📋 Получение информации о боте...')
  const botInfo = await getBotInfo()
  
  if (botInfo) {
    console.log('✅ Бот найден:')
    console.log(`   Имя: ${botInfo.first_name}`)
    console.log(`   Ник: @${botInfo.username}`)
    console.log(`   ID: ${botInfo.id}`)
  } else {
    console.log('❌ Не удалось получить информацию о боте')
    console.log('   Убедитесь, что:')
    console.log('   1. Бот создан в MAX через @MasterBot')
    console.log('   2. Токен правильно указан в конфигурации')
    console.log('   3. Токен не истек')
    return
  }

  // Настраиваем webhook
  console.log('\n🔗 Настройка webhook...')
  const webhookUrl = siteConfig.max.webhookUrl
  
  if (webhookUrl && webhookUrl !== 'https://patriot-listens.ru/webhook') {
    const webhookSuccess = await setWebhook(webhookUrl)
    
    if (webhookSuccess) {
      console.log('✅ Webhook успешно настроен')
      console.log(`   URL: ${webhookUrl}`)
    } else {
      console.log('❌ Не удалось настроить webhook')
    }
  } else {
    console.log('⚠️  Webhook URL не настроен')
    console.log('   Обновите webhookUrl в src/config/site.ts')
  }

  console.log('\n📝 Инструкции по настройке:')
  console.log('1. Откройте @MasterBot в MAX')
  console.log('2. Отправьте команду /create')
  console.log('3. Придумайте ник: patriotlistensbot')
  console.log('4. Укажите имя: Патриот слушает')
  console.log('5. Сохраните полученный токен')
  console.log('6. Обновите токен в src/config/site.ts')
  console.log('7. Запустите этот скрипт снова')
}

// Запускаем настройку
setupBot().catch(console.error)
