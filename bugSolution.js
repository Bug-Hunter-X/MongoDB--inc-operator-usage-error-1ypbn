```javascript
//Correct usage of $inc operator
db.collection('myCollection').updateOne({"_id":ObjectId("650e42b49672734567890abc")},{"$inc":{"field":1}});

//More robust solution with error handling
db.collection('myCollection').updateOne({"_id":ObjectId("650e42b49672734567890abc")},{"$inc":{"field":1}},{upsert:true});
```