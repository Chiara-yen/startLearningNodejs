
`POST localhost:3000/users/100?user_id=200`

body:

`user_id=300`

res json:

```json
{
    "queryUserId": "200",
    "bodyUserId": "300",
    "paramUserId": "100"
}
```
