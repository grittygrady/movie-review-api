# Show All Reviews

Show all user reviews.

**URL** : `/api/`

**Method** : `GET`

## Success Responses

**Code** : `200 OK`

**Content** : `{[]}`

### Example

**Code** : `200 OK`

**Content** : Example reviews formatted properly:

```json
[
  {
    "id": "13876b4c-4057-4460-80d3-7b7193693086",
    "title": "Goodfellas",
    "rating": 5,
    "author": "Grady",
    "body": "Best mafia movie ever!"
  },
  {
    "id": "6e083093-a6a8-4954-81ce-3be2ab421864",
    "title": "Run Lola Run",
    "rating": 5,
    "author": "Grady",
    "body": "Awesome!"
  },
  {
    "id": "f5745eb2-9d38-4717-b6b3-204df2ae0491",
    "title": "Tenet",
    "rating": 4,
    "author": "Rory",
    "body": "Very trippy movie, will probably need to view again to fully understand. Great action scenes though! "
  }
]
```
