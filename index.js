  //Call for jsonfile,moment amd simple-git node file
  const jsonfile=require('jsonfile');
  const moment=require('moment');
  const simpleGit=require('simple-git');

//Initiate the write path
  const FILE_PATH='./data.json';

  //Time from the  initial time initiate
  const DATE=moment().subtract(8,'d').format();
  const data={date:DATE}

  //Try catch for counter methods
//Counter methods 

  
  jsonfile.writeFile(FILE_PATH,data, ()=>{ simpleGit().add([FILE_PATH]).commit(DATE, {'--date':DATE}).push();});
  
  //Git commit --date=""
 
