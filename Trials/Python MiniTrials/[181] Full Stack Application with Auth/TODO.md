# TODO: Full Stack Application with Auth

Write a Python script building a complete full-stack web application with user authentication.

## Requirements
- Backend: built on the web framework from task [100]
- Authentication: user registration, login, logout; passwords hashed with PBKDF2 (from task [119]); JWT-based sessions (implement JWT sign/verify with HMAC-SHA256)
- Authorization: role-based access control (ADMIN, USER, MODERATOR); `@require_role` decorator for routes
- Database: use the ORM from task [57] with User, Post, Comment, and Role models
- API: RESTful JSON API with proper HTTP status codes and error messages
- Frontend: server-rendered HTML using the template engine from task [100]
- Features: user profile page, CRUD for posts (paginated), comment threads, admin panel (list/ban users, delete posts)
- Security: CSRF tokens on all forms, rate limiting on login (max 5 attempts per 15 minutes), SQL injection prevention via parameterized queries
