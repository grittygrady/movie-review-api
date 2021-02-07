# Add review

Add a review to the collection.

**URL** : `/api/addreview/`

**Method** : `POST`

**Data Structure**

```json
{
    "id": "[uuid provided by client]",
    "title": "[varchar]",
    "rating": "[integer]",
    "author": "[varchar]",
    "body": "[varchar]"
  }
```

**Example Input**

```json
{
    "id": "13876b4c-4057-4460-80d3-7b7193693086",
    "title": "Goodfellas",
    "rating": 5,
    "author": "Grady",
    "body": "Best mafia movie ever!"
  }
```

## Success Response

**Code** : `201 Created`

**Content example**

```json
{
    "token": "93144b288eb1fdccbe46d6fc0f241a51766ecd3d"
}
```

## Error Response

**Condition** : If any field is not supplied, or of an invalid format.

**Code** : `400 BAD REQUEST`