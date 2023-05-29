const sql = require("mssql/msnodesqlv8")
var config ={
  server : "BSPUNL-021543\\SQLEXPRESS",
  database : "Demo",
  driver: "msnodesqlv8",
  options :{
    trustedConnection: true
  }
}

sql.connect(config,function(err){
  if(err)console.log(err);
  var request = new sql.Request();
  request.query("select * from SAP.AFPO",function(err,records){
    if(err)console.log(err);
    else console.log(records);
  })
})