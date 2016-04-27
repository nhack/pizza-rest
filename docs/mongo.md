Commands:

* insert:


    db.jobinfos.insert({  
    	finishDate : new Date(), 
    	info : 'PROCESSING', 
    	name : 'resultsImporter.job.js', 
    	startDate : new Date(), 
    	status : 'RUNNING' })
    	
* update:


    db.pizzas.update({
      '_id': ObjectId('55422ff3f4da2d0055d0f600')
      },{
      $set: {
        'category': ObjectId('555c9116c1587545710f719e')
      }})
