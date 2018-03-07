

var friendArray = require("../data/friends");

module.exports = function(app) {

  app.get("/api/friends", function(req, res) {
    res.json(friendArray);
  });

  app.post("/api/friends", function(req, res) {

      var scores =  [
                    req.body.q1,
                    req.body.q2,
                    req.body.q3,
                    req.body.q4,
                    req.body.q5,
                    req.body.q6,
                    req.body.q7,
                    req.body.q8,
                    req.body.q9,
                    req.body.q10,
                    ]

      var data = { //user input display
          name: req.body.name,
          image: req.body.image,
          scores: scores
      }
      friendArray.push(data)
      res.json(friendArray);
  })

};




//
//   // API POST Requests
//   // Below code handles when a user submits a form and thus submits data to the server.
//   // In each of the below cases, when a user submits form data (a JSON object)
//   // ...the JSON is pushed to the appropriate JavaScript array
//   // (ex. User fills out a reservation request... this data is then sent to the server...
//   // Then the server saves the data to the tableData array)
//   // ---------------------------------------------------------------------------
//
//     // Note the code here. Our "server" will respond to requests and let users know if they have a table or not.
//     // It will do this by sending out the value "true" have a table
//     // req.body is available since we're using the body-parser middleware
//     if (tableData.length < 5) {
//       tableData.push(req.body);
//       res.json(true);
//     }
//     else {
//       waitListData.push(req.body);
//       res.json(false);
//     }
//   });
//
//   // ---------------------------------------------------------------------------
//   // I added this below code so you could clear out the table while working with the functionality.
//   // Don"t worry about it!
//
//   app.post("/api/clear", function() {
//     // Empty out the arrays of data
//     tableData = [];
//     waitListData = [];
//
//     console.log(tableData);
//   });
// };
