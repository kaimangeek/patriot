# 🚀 Настройка GitHub Pages

## Автоматическая настройка

GitHub Actions workflow автоматически настроит Pages при первом запуске.

## Ручная настройка (если автоматическая не работает)

### 1. Включение GitHub Pages

1. **Перейдите в репозиторий:** https://github.com/kaimangeek/patriot
2. **Откройте Settings** → **Pages**
3. **В разделе "Source" выберите:** "GitHub Actions"
4. **Нажмите "Save"**

### 2. Настройка переменных окружения

1. **Перейдите в** Settings → **Secrets and variables** → **Actions**
2. **Нажмите "New repository secret"**
3. **Добавьте переменную:**
   - **Name:** `MAX_BOT_TOKEN`
   - **Value:** ваш_токен_бота
   - **Нажмите "Add secret"**

### 3. Проверка настройки

После настройки:
- Сайт будет доступен по адресу: `https://kaimangeek.github.io/patriot`
- Webhook URL для бота: `https://kaimangeek.github.io/patriot/webhook`

## Устранение неполадок

### Ошибка "Pages site failed"

Если возникает ошибка:
```
Error: Get Pages site failed. Please verify that the repository has Pages enabled
```

**Решение:**
1. Перейдите в Settings → Pages
2. Убедитесь, что выбран источник "GitHub Actions"
3. Сохраните настройки
4. Перезапустите workflow

### Ошибка "Not Found"

Если возникает ошибка 404:
1. Проверьте, что репозиторий публичный
2. Убедитесь, что Pages включены
3. Дождитесь завершения первого развертывания (может занять 5-10 минут)

### Проверка статуса развертывания

1. **Перейдите в** Actions в репозитории
2. **Найдите workflow** "Deploy to GitHub Pages"
3. **Проверьте логи** на наличие ошибок
4. **Дождитесь завершения** всех этапов

## Альтернативный workflow

Если основной workflow не работает, используйте упрощенный:
- Файл: `.github/workflows/deploy-simple.yml`
- Автоматически включается при push в master

## Создание бота в MAX

1. **Откройте @MasterBot** в MAX
2. **Отправьте:** `/create`
3. **Ник бота:** `patriotlistensbot`
4. **Имя бота:** `Патриот слушает`
5. **Сохраните токен** и добавьте в GitHub Secrets

## Тестирование

После развертывания:
1. **Откройте сайт:** https://kaimangeek.github.io/patriot
2. **Заполните форму** заявки
3. **Проверьте** получение сообщения в MAX
