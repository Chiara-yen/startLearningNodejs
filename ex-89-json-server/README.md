
```bash
npm start
```

```
http://localhost:3000/posts
http://localhost:3000/posts/1
http://localhost:3000/users
http://localhost:3000/users/1
http://localhost:3000/comments
http://localhost:3000/comments/1
```



Based on the previous db.json, here are all the available routes.

```
GET   /posts
GET   /posts/1
GET   /posts/1/comments
GET   /posts?title=json-server&author=typicode
POST  /posts
PUT   /posts/1
PATCH /posts/1
DEL   /posts/1
```

To slice resources, add _start and _end or _limit. An X-Total-Count header is included in the response.

```
GET /posts?_start=20&_end=30
GET /posts?_start=20&_limit=10
GET /posts/1/comments?_start=20&_end=30
```



Enter `s` can create a snapshot of the db.
