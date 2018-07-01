

var friendArray = require("../data/friends");

module.exports = function(app) {

  app.get("/api/friends", function(req, res) {
    res.json(friendArray);
  });

  app.post("/api/friends", function(req, res) {

      console.log(req.body);

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
