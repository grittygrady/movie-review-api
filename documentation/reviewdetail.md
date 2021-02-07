# Show Review Details

Show the details of a single review.

**URL** : `/api/reviews/:pk/`

**URL Parameters** : `pk=[varchar]` where `pk` is the ID of the review on the
server.

**Method** : `GET`

**Data**: `{}`

## Success Response

**Code** : `200 OK`

**Content example**

```json
{
  "id": "13876b4c-4057-4460-80d3-7b7193693086",
  "title": "Goodfellas",
  "rating": 5,
  "author": "Grady",
  "body": "Favorite film!"
}
```

## Error Responses

**Condition** : If Account does not exist with `id` of provided `pk` parameter.

**Code** : `404 NOT FOUND`

**Content** : `{}`
