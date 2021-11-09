# Animenu Backend

## Summary of project

The following tutorial explains how to set up this project using PostgreSQL and Heroku.

## Documentation

| Endpoint | params | input | output | requires Auth token |
| -------- | ------ | ----- | ------ | ------------------- |

### Users
| [GET] /api/users | none | username | user_id, username | Yes |
| [GET] /api/users/:id | id | none | user_id, username | Yes |
| [POST] /api/users/register | no | username, password | user_id, username | No |
| [POST] /api/users/login | no | username, password | user_id, username | No |

### Friends
| [GET] /api/friends/:id | ID | none | arrayu of user_id's, and usernames | Yes |
| [POST] /api/friends | no | username, password | user_id, username | Yes |

### Lists
| [GET] /api/lists/:id | USER ID | none | array containing user id, anime id, completed, and rating | Yes |
| [GET] /api/lists | none | none | array containing user id, list id, anime id, completed, and rating | Yes |
| [POST] /api/lists | none | user id, anime id, completed, rating | list id | Yes |
| [PUT] /api/lists/:id | LIST ID | user id, anime id, completed, rating | list id | Yes |
| [DELETE] /api/lists/:id | LIST ID | none | Success Message | Yes |
