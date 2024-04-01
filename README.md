# Инструкция по запуску проекта
---
Для запуска проекта необходим [Docker](https://www.docker.com/get-started/).  

1) Склонируйте проект с помошью команды ```git clone https://github.com/yeeeip/SovcomTrade```

2) Далее, разместите в главной папке проекта файл .env, который содержит переменные окружения, необходимые для старта приложения

Ниже есть пример заполнения этого файла:
```
SPRING_DATASOURCE_DB_NAME=currency_app_db
SPRING_DATASOURCE_USERNAME=postgres
SPRING_DATASOURCE_PASSWORD=password
JWT_SECRET_KEY=jwtkey
OPENAI_KEY=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
```

Вы можете поменять значения на свои **(кроме OPENAI_KEY)**, либо же просто скопировать данные.
