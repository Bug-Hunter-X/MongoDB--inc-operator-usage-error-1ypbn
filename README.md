# MongoDB $inc Operator Usage Error
This repository demonstrates a common error when using the `$inc` operator in MongoDB update operations. The error arises from providing a string value instead of a number to the `$inc` operator. 

## Bug Description
The `$inc` operator is used to increment a numerical field in a MongoDB document. However, if a string value is passed as the increment amount, the operation will fail or produce an unexpected result.

## Solution
The correct usage of the `$inc` operator requires providing a numerical value for the increment amount.  The corrected code ensures that the value provided to the `$inc` operator is a number.  Error handling is also included to handle situations where the field being incremented might not exist. 