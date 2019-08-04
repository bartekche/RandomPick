# RandomPick
   
RandomPick action takes user's input message and, using Dialogflow Machine Learning, extracts  
parameter **Position**. Then, a champion is randomly picked from arrays representing their role choice.

All possible picks are predefined in arrays in fulfillment, and can be easily broaden in the future. 

Fulfillment is written in node.js, and it uses Firebase Functions for Dialogflow. 

## Entities 

Currently there is only one entity, **Position**  
![Entity](https://github.com/bartekche/RandomPick/blob/master/entity.PNG)  
**Position** supports five values listed above  

## Basic Logic 

Logic was implemented using node.js fullfillment, as it is not possible to use it in DialogFlow interface.  
There are five if statements, all representing different entity values, with their own possible champion ideas.

## To do 

*A lot ;)* 

