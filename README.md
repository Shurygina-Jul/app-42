# Star Wars React App

Pet-проект на основе [курса](https://www.youtube.com/playlist?list=PL7cTIfGFrdKkQAWKDu2NdFt5Cx38B-A3i/)

## Установка и запуск проекта

- `yarn install`
- `yarn start`

## Используемые технологии

- [React](https://ru.reactjs.org/docs/getting-started.html)
- [ReactRouter v6](https://reactrouter.com/docs/en/v6)
- [tailwindcss](https://tailwindcss.com/)

## Структура проекта


### Правила импорта файлов

1. Сторонние библиотеки, которые мы устанавливаем с npm/yarn
2. components (сначала компоненты, потом стили, всё отдельными блоками)
3. Внутренние компоненты
4. Работа со стором
5. lib
6. constants
7. types

#### Components
- [Button](./src/components/UI/Button/README.md) - кнопка
- [Spinner](./src/components/UI/Spinner/README.md) - спиннер

#### lib
- [hooks](./src/lib/hooks/README.md)
- [hooks](./src/lib/utils/README.md)