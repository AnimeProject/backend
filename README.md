# Animenu Backend

## Summary of project

The following tutorial explains how to set up this project using PostgreSQL and Heroku.

## Documentation

| Endpoint | params | input | output | requires Auth token |
| -------- | ------ | ----- | ------ | ------------------- |
| [GET] /api/users | none | username | username, user_id | No |
| [GET] /api/users/:id | id | none | username, user_id | No |
| [POST] /api/users/register | no | username, password | username, user_id | No |
| [POST] /api/users/login | no | username, password | username, user_id | No |
