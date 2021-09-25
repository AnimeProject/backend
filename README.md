# Animenu

## Summary of project

The following tutorial explains how to set up this project using PostgreSQL and Heroku.

[![Setting up PostgreSQL for Build Week](https://img.youtube.com/vi/kTO_tf4L23I/maxresdefault.jpg)](https://www.youtube.com/watch?v=kTO_tf4L23I)

## Documentation

| Endpoint | params | input | output | requires Auth token |
| -------- | ------ | ----- | ------ | ------------------- |
| [GET] /api/users | none | username | username, user_id | No |
| [GET] /api/users/:id | id | none | username, user_id | No |
| [POST] /api/users/register | no | username, password | username, user_id | No |
| [POST] /api/users/login | no | username, password | username, user_id | No |
