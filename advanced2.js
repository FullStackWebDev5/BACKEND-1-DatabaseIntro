/*
  # MongoDB Shell Commands
    - Projection: Retrieve specific properties of the documents
      - Syntax: db.collection.find({}, { property: 0/1, property2: 0/1, ... })
        - 0: Exclude the property in the result
        - 1: Include the property in the result
      - Types:
        - Exlusion projection: All fields to be excluded are set to 0
        - Inclusion projection: All fields to be included are set to 1 (By default _id will be included)

    - Aggregation: A way to process data in stages and perform complex operations like filtering, grouping, and sorting.
      - Aggregation Stages:
        - $group: Group documents based on the specified condition
          - Syntax: 
            db.collection.aggregate([
              { $group: { _id: '$property1', ..., propertyX: { operator: '$property2' } } }
            ])
            - _id: Grouping key
            - propertyX: Store the accumulated value
        - $match: Filter documents based on the specified condition (Similar to find method with query)
          - Syntax: 
            db.collection.aggregate([
              { $match: { property1: { operator: value1 } } } 
            ])
        - $project: Project required properties
          - Syntax: 
            db.collection.aggregate([
              { $project: { property1: 0/1 } 
            ])
        - $sort: Sort the documents based on the specified condition
          - Syntax: 
            db.collection.aggregate([
              { $sort: { property1: -1/1 } 
            ])
            -  1: Ascending order
            - -1: Descending order
        - $count: Returns the number of documents
          - Syntax: 
            db.collection.aggregate([
              { $count: 'propertyX' } 
            ])
            - propertyX is the property that will be used to display the count
        

      - Aggregation Operators:
        - $avg: Average of the values for the property provided
        - $sum: Sum of the values for the property provided
        - $min: Minimum value for the property provided
        - $max: Minimum value for the property provided

      - Examples:
        - Find the average of percentage secured by students, by grouping them based on their age 
          db.students.aggregate([
            { $group: { _id: '$age', avgPercentage: { $avg: '$percentage' } } }
          ])
        - Find the average of percentage secured by students, by grouping them based on their state
          db.students.aggregate([
            { $group: { _id: '$address.state', avgPercentage: { $avg: '$percentage' } } }
          ])
        - Find the average of percentage secured by all the students
          db.students.aggregate([
            { $group: { _id: null, avgPercentage: { $avg: '$percentage' } } }
          ])
        - Find the minimum percentage secured by students of each age group
          db.students.aggregate([
            { $group: { _id: '$age', minPercentage: { $min: '$percentage' } } }
          ])
        - Find the average of percentage secured by students of age group 24
          db.students.aggregate([
            { $group: { _id: '$age', avgPercentage: { $avg: '$percentage' } } },
            { $match: { _id: { $eq: 24 } } }
          ])
        - Find the average of percentage secured by students of age group 24, just return the avgPercentage
          db.students.aggregate([
            { $group: { _id: '$age', avgPercentage: { $avg: '$percentage' } } },
            { $match: { _id : { $eq: 24 } } },
            { $project: { _id: 0 } }
          ])
        - Sort the documents based on student percentage in descending order
          db.students.aggregate([ { $sort: { percentage: -1 } } ])
        - Sort the documents based on student avgPercentage grouped by age in descending order
          db.students.aggregate([ 
            { $group: { _id: '$age', avgPercentage: { $avg: '$percentage' } } }, 
            { $sort: { avgPercentage: -1 } } 
          ])
        - Sort the documents based on student avgPercentage grouped by age in descending order, display only the top 2 documents
          db.students.aggregate([ 
            { $group: { _id: '$age', avgPercentage: { $avg: '$percentage' } } }, 
            { $sort: { avgPercentage: -1 } }, 
            { $limit: 2 } 
          ])
        - Return the count of students who are from Karnataka and have percentage greater than 85
          db.students.aggregate([ 
            { $match: { 'address.state': { $eq: 'Karnataka' }, percentage: { $gt: 85 } } },
            { $count: 'noOfStudents' } 
          ])

    - Additional notes:
      - For object values, projection can be added like below:
        - find({}, { 'obj1.a': 0/1, 'obj2.b': 0/1, ...})

*/