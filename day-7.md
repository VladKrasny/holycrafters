# День 7

## Цели

-   [x] Доделать базу данных, обязательно сегодня!
-   [x] Исправить сидинг.

## Факты

-   Есть Админ и есить Мастер.
-   Админ может редактировать, деактивировать мастеров.
-   Мастер может создать карточку клиента.
    -   Любой мастер может смотреть любую карточку и оставлять комментарии.
    -   Мастер может редактировать свои комментарии.
-   Админ может верифицировать карточку клиента, которую создал мастер.
-   Мастер может искать карточки по ФИО.
-   Админ может удалять карточки.
-   Админ может тоже самое что и Мастер.
-   Админ создает профиль мастера и отправляет ссылку на установление/сброс пароля.

## Описание/План действий

## Результаты

Мы пришли к выводу, что дальнейшая адаптация проекта под наши нужды не имеет смысла - слишком много турдозатрат.
Влад создаст новый проект в которым мы будем последовательно добалять нужный функционал.

## Что мы сегодня узнали?

-   У button может быть аттрибут value, который будет включен в formData при отправке формы.
-   Prisma - мидалвары задеприкейчены с 4.6.0.
-   Prisma - не делай сущьности без каскада, нельзя будет удалить при сыром SQL запросе.
-   Илья: узнал, что в Prism связи прямые (не во всех кейсах).
-   Илья: узнал что у Prism есть studio (веб-вью созданной базы данных).
