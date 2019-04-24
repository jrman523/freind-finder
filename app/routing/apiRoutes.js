var friendsArr = require("../data/friends");
module.exports = function (app) {

    app.get("/api/friends", function (req, res) {
        res.json(friendsArr);
    });

    app.post("/api/friends", function (req, res) {
        var bestMatch = {
            name: "",
            photo: "",
            friendDifference: Infinity
        };

        var userData = req.body;
        var userScores = userData.scores;

        var totalDifference;

        for (var i = 0; i < friendsArr.length; i++) {
            var Friend = friendsArr[i];
            totalDifference = 0;

            console.log(Friend.name);

            for (var j = 0; j < Friend.scores.length; j++) {
                var FriendScore = Friend.scores[j];
                var currentUserScore = userScores[j];

                totalDifference += Math.abs(parseInt(currentUserScore) - parseInt(FriendScore));
            }

            if (totalDifference <= bestMatch.friendDifference) {
                bestMatch.name = Friend.name;
                bestMatch.photo = Friend.photo;
                bestMatch.friendDifference = totalDifference;
            }
        }

        friends.push(userData);

        res.json(bestMatch);
    });
};