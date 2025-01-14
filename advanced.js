/*
  # MongoDB Shell Commands
    - Operators
      - Query operators
        - Comparison operators
          - Syntax: 
            - All except $in and $nin: 
              { property1: { operator: value1 } }
            - $in and $nin
              { property1: { operator: [value1, value2, ...] } }
          - Types
            - $eq: Equals to
            - $ne: Not equals to
            - $gt: Greater than
            - $lt: Less than
            - $gte: Greater than or equals to
            - $lte: Less than or equals to
            - $in: (IN) Returns the document if the property value matches any of the specified values given in the array
            - $nin: (NOT IN) Returns the document if the property value does not match any of the specified values given in the array
        - Logical operators
          - Syntax:
            - All except $not: 
              { 
                operator: [
                  { property1: { operator: value1 } },
                  { property2: { operator: value2 } }
                ]
              }
            - $not: Logical NOT
              { property1: { $not: { operator: value1 } } }
          - Types:
            - $and: Logical AND
            - $or: Logical OR
            - $nor: Logical NOR
            - $not: Logical NOT
        - Element operators:
          - $exists: Whether a particual property exists or not
            - Syntax: { property1: { $exists: boolean }}
      - Update operators:
        - $set: Set the value of a property. If the property does not exist, it creates that property
        - $unset: Removes the specified property from the document
        - $inc: Increment the value of a property by a specified amount
        - $rename: Rename a property
        - $push: Add an element to an array value
          - Alternative
            - $addToSet: Add an element to an array value only if it doesn't already exist
        - $pop: Remove an element from an array value
          - Syntax: { $pop: { property1: 1/-1 } }
            - -1: Remove the element from the start of the array
            -  1: Remove the element from the end of the array
          - Alternative
            - $pull: Remove all element(s) from an array value that matches a specified value
            - $pullAll: Remove all elements(s) from an array value that matches any of the value in the given set of values
        - $currentDate: Set a property to the current date and time
          - Syntax: { $currentDate: { property1: true } }
*/




/*
  # References:
    - Operators: https://www.mongodb.com/docs/manual/reference/operator/

  # Additional Notes:
    - AND
      - T + T = T
      - T + F = F
      - F + T = F
      - F + F = F
    - OR              - NOR (Only when all values are false, result is true)
      - T + T = T       - T + T = F
      - T + F = T       - T + F = F
      - F + T = T       - F + T = F
      - F + F = F       - F + F = T
*/