# 🚀 Быстрый старт - Патриот слушает

## 1. Создание бота в MAX (5 минут)

1. **Откройте @MasterBot** в MAX
2. **Отправьте:** `/create`
3. **Ник бота:** `patriotlistensbot`
4. **Имя бота:** `Патриот слушает`
5. **Сохраните токен** ⚠️

## 2. Настройка проекта (2 минуты)

```bash
# Клонируйте проект
git clone https://github.com/kaimangeek/patriot.git
cd patriot
```

# Установите зависимости
npm install

# Настройте токен
cp env.example .env
# Отредактируйте .env: MAX_BOT_TOKEN=ваш_токен

# Проверьте настройку
npm run setup-bot
```

## 3. Развертывание на GitHub Pages (3 минуты)

1. **Настройте GitHub Pages** в Settings → Pages
2. **Выберите Source:** "GitHub Actions"
3. **Добавьте переменную** в Settings → Secrets and variables → Actions:
   - `MAX_BOT_TOKEN` = ваш_токен_бота

```bash
# Push в репозиторий
git add .
git commit -m "Add GitHub Pages deployment"
git push origin main
```

## 4. Готово! 🎉

- **Сайт:** `https://kaimangeek.github.io/patriot`
- **Бот:** @patriotlistensbot
- **Автоматическое развертывание** при каждом push

## 📝 Что дальше?

- [Подробная настройка](SETUP.md)
- [Инструкции по развертыванию](DEPLOYMENT.md)
- [Документация проекта](README.md)
