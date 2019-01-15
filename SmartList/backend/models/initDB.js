
const mongoose = require('mongoose'), Schema = mongoose.Schema;
const ChecklistItems = require('./checklistItem');
const Checklist = require('./checklist');
const Group = require('./group');



	

exports.resetDB = function( ) {

  console.log("DB Initiating....");

  var _ = require( 'lodash' ) , 
  inportedGroupData = require( '../dataFromScraper/bakingmad2.json' )

  
	// get refs to the models we defined above
	var groups = mongoose.model( 'Group' );
	var checklists = mongoose.model( 'Checklist' );
	var checklistItems = mongoose.model( 'ChecklistItem' );

	// clear all existing documents from the collections
  checklistItems.find().remove((err)=>{
    console.log("checklistItems removed");
    console.log(err);
    checklists.find().remove((err)=>{
      console.log("checklists removed");
      console.log(err);
        groups.find().remove((err)=>{
          console.log("groups removed");
          console.log(err);


            // populate the groups collection from json data
            // nothing fancy here as group documents do not reference anything else
            
          const groupData = inportedGroupData.Groups;
          var groupMap = {};

          console.log(groupData);
            if( !(typeof groupData != 'undefined'=== 'undefined')) 
            {
              for( var i = 0; i < groupData.length; i++ ) {
                //new Group( groupData[ i ] ).save();
                console.log("Adding Group:" + groupData[ i ].GroupTitle);

                const group = new Group({
                  title: groupData[ i ].GroupTitle,
                  description: "(" + groupData[ i ].GroupTitle + ")",
                  imagePath: groupData[ i ].GroupURL
                  //group: req.body.group
                });
                
                groupMap[group.title] = groupData[i];
                group.save().then(createdGroup => {
                    group.id= createdGroup._id;
                    
                    
                    console.log("Adding Group:" + group._id + "---" + i);
                    
                      if( !(typeof groupMap[group.title].Checklists === 'undefined'))
                      {
                      var checklistMap = {};
                      for( var j = 0; j < groupMap[group.title].Checklists.length; j++ ) {
                        const checklist = new Checklist({
                          //_id: req.body.id,
                          title: groupMap[group.title].Checklists[j].ChecklistTitle,
                          description: groupMap[group.title].Checklists[j].checklistDescription,
                          //Ingrident................
                          imagePath: "", //imagePath,
                          group: group._id
                        });
                        
                        checklistMap[checklist.title] = groupMap[group.title].Checklists[j];

                        checklist.save().then(createdChecklist => {
                          checklist.id= createdChecklist._id;
                          //for( var i = 0; i < groupData.length; i++ ) 
                          {
                            //if( !(typeof checklistMap[checklist.title].Checklists === 'undefined'))
                            {
                            //for( var j = 0; j < groupMap[group.title].Checklists.length; j++ ) 
                            {
                              console.log("Adding checklist:" + checklist._id + "---" + j);

                                    if( checklistMap[checklist.title].ChecklistItems!=null  && !(typeof checklistMap[checklist.title].ChecklistItems === 'undefined'))
                                    {
                                      console.log("ChecklistItems" + checklistMap[checklist.title].ChecklistItems.length);
                                      
                                      for( var z = 0; z < checklistMap[checklist.title].ChecklistItems.length; z++ ) {
                                        const checklistItem = new ChecklistItems({
                                          //_id: req.body.id,
                                          title: checklistMap[checklist.title].ChecklistItems[z].name,
                                          //description: req.body.description,
                                          //imagePath: imagePath,
                                          checklistId: checklist._id
                                        });
                                        checklistItem.save();
                                      }
                                      
                                    }
                                  }
                                }
                              }

                        });
                      } 
                    }
                  
                  });

                }
              
            }
      });// remove groups
    });// remove checklists
  });// remove checklist items
}
  
  console.log("DB Initiated");
	//res.redirect( "/" );



