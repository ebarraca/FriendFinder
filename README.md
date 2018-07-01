# Friend Finder -
Node and Express Servers


Friend Finder application is a compatibility friend-finding app. This full-stack site will take in results your users' surveys, then compare their answers with those from other users. The app will then display the name and picture of the user with the best overall match.

You can find the site here: https://serene-citadel-24690.herokuapp.com/


This is an app which uses routes to link the front end and the back end.

Steps:
* Created a survey and rated each question 1-5
* Created the friends and stored their results to the survey in an array
* Created API Routes:
  - GET route / used to display the JSON of the friends
  - POST route / handled the logic of the incoming survey results

  /survey -  displayed survey questions
  /home - home page default

Wrote code withc compared user scores to friend scores; the closest match with the least amount of difference between the scores will appear in the pop up modal  
  
