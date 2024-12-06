```javascript
//Incorrect usage of $inc operator
db.collection('myCollection').updateOne({"_id":ObjectId("650e42b49672734567890abc")},{"$inc":{"field":'value' }});
```