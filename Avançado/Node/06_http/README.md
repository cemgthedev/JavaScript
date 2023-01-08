# Comandos
- **OPTIONS**: curl -X OPTIONS http://localhost:3000/posts -i
- **GET** : curl http://localhost:3000/posts
- **HEAD**: curl -I http://localhost:3000/posts
- **POST**: curl -d '{"id": 4, "title": "json-server", "author": "java"}' -H "Content-type: application/json" -X POST http://localhost:3000/posts
- **PUT**: curl -d '{"name": "javascript"}' -H 'Content-type: application/json' -X PUT http://localhost:3000/profile
- **PATCH**: curl -d '{"title": "my-title"}' -H "Content-type: application/json" -X PATCH http://localhost:3000/posts/1
- **DELETE**: curl -X DELETE http://localhost:3000/posts/1  
