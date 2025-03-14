# Тестовое задание на позицию Frontend junior в Mindbox

 [Задание](https://docs.google.com/document/d/1TO9k9aKPClI5ms2vJmCeChIgXLTpMF0C9fs4kZa9bQk/edit?tab=t.0).

## Описание проекта

Простое веб-приложение "Матч-трекер". 
Загружает список матчей с API.
Показывает названия команд, счет, статус матча.
Позволяет обновлять данные по нажатию кнопки "Обновить".
Отображает индикатор загрузки при запросе данных.
Показывает сообщение об ошибке, если API недоступно.

## Стек технологий

- **Frontend:** React, TypeScript

## Структура проекта
```
├── public/               # Статические файлы  
├── src/  
│   ├── app/              # Основное приложение  
│   ├── assets/           # Глобальные ресурсы (иконки, шрифты)  
│   ├── components/       # UI-компоненты  
│   ├── hooks/            # Кастомные хуки React  
│   ├── shared/           # Общие модули (api, утилиты, стили)  
│   └── styles/           # Глобальные стили  
├── package.json          # Метаданные проекта  
├── tsconfig.json         # Конфигурация TypeScript  
├── vite.config.ts        # Конфигурация Vite  
└── README.md             # Документация проекта  
```

## Установка

```bash
# Клонировать репозиторий
git clone https://github.com/Alexandr-Prokhorenkov/matchTracker.git

# Перейти в директорию проекта
cd matchTracker

# Установить зависимости
npm install

# Запустить приложение
npm run dev
```
