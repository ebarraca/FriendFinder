

var friendArray = require("../data/friends");

module.exports = function(app) {

  app.get("/api/friends", function(req, res) {
    res.json(friendArray);
  });

  app.post("/api/friends", function(req, res) {

      console.log(req.body);


      // var scores = [parseInt(req.body.q1), parseInt(req.body.q2), parseInt(req.body.q3), parseInt(req.body.q4), parseInt(req.body.q5)];
      // console.log(scores)

      function getSum(total,num) {
          return total + Math.round(num);
      }

          var leastDifferent = 50;
          var chosenFriend;
          var clientScore = req.body.scores.reduce(getSum,0);

           console.log(req.body.scores);
           console.log(req.body.scores)

         for (var i=0; i<friendArray.length; i++) {
             var friendScore = friendArray[i].scores.reduce(getSum, 0);

             console.log(leastDifferent)
             console.log (Math.abs(clientScore - friendScore));

             if (leastDifferent > Math.abs(clientScore - friendScore)) {
                 leastDifferent = Math.abs(clientScore - friendScore);
                 chosenFriend = friendArray[i];

             }
         }
         console.log(chosenFriend)
         friendArray.push(req.body);
         res.json(chosenFriend);
     })



};


      //data were sending to backend needs to be exactly the same as data were sending to friends.js
      // but not working b/c of scores[]

      //console.log req.body and make sure its exactly the same as the objects in friendArray;
      //for loop that loops through the scores in friendsArray; add up the scores in your req.body; add up the scores from friendArray;

      //subtract the scores; comparison with the least difference is your match.

      // var results = {}; //this creates an object that calls out stuff from results and show on the front end
      // var difference = 100;

      //looping through the object

      // var scores =  [
      //               req.body.q1,
      //               req.body.q2,
      //               req.body.q3,
      //               req.body.q4,
      //               req.body.q5,
      //               req.body.q6,
      //               req.body.q7,
      //               req.body.q8,
      //               req.body.q9,
      //               req.body.q10,
      // ]
      // var scores = req.body;
      // console.log(scores)

      // var data = req.body;
      // console.log(data)

      // var data = { //user input display
      //     name: req.body.name,
      //     image: req.body.image,
      //     scores: scores
      // };

      // for (var i = 0; i < scores.length; i++) {
      //     // console.log(scores)
      // }






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
