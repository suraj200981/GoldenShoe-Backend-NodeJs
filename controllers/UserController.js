require('dotenv').config({ path: 'config.env', encoding: 'latin1'})

const { send } = require('express/lib/response');
const { Connection, Request } = require("tedious");

// Create connection to database
const config = {
  authentication: {
    options: {
      userName: process.env.userName, 
      password: process.env.password
    },
    type: "default"
  },
  server: process.env.server, 
  options: {
    database: process.env.database,
    encrypt: true
  }
};

const connection = new Connection(config);

// Attempt to connect and execute queries if connection goes through
connection.on("connect", err => {
    if (err) {
      console.error(err.message);
    } else {
     this.getAllUsers
    }
  });

  connection.connect();

module.exports = {

     getAllUsers: function (req, res) {
        console.log("Reading rows from the Table...");

        // Read all rows from table
        const request = new Request(
          "select * from userdetails",
          (err, rowCount) => {
            if (err) {
              console.error(err.message);
            } else {
              
              console.log(`${rowCount} row(s) returned`);
            }
          }
        );

        var result = "";
        request.on("row", columns => {
            columns.forEach(column => {
             // console.log(column.metadata.colName, column.value);
              result += column.value.toString() + " ";
            });
            console.log(result);
            res.send(result.toString());

          });



          connection.execSql(request);


    }
  }
