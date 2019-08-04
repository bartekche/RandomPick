const functions = require('firebase-functions');
const {dialogflow} = require('actions-on-google');
const WELCOME_INTENT = 'Default Welcome Intent';
const FALLBACK_INTENT = 'Default Fallback Intent';
const PICK_INTENT = 'Pick a champion';
const app = dialogflow();
const POSITION_ENTITY = 'Position';

function randomInt(low, high) {
  return Math.floor(Math.random() * (high - low) + low);
}

app.intent(WELCOME_INTENT, (conv) => {
  conv.ask("Hi! Tell me your position and I will pick you a champion! ");
});
app.intent(FALLBACK_INTENT, (conv) => {
  conv.ask("Sorry, I don't understand");
});
app.intent(PICK_INTENT, (conv) => {
  const position = conv.parameters[POSITION_ENTITY].toLowerCase();
  if(position == "top"){
    var possibleResponseTop = [
  'Amumu is a chill pick',
  'Caitlyn will do perfectly',
  'Go with AD Xerath, 100 percent win rate'
];

	var pickTop = randomInt(0,possibleResponseTop.length);
    var responseTop = possibleResponseTop[pickTop];
    conv.ask(responseTop);
  }
  else if(position == "mid"){
	var possibleResponseMid = [
  'I would go with AP Blitz',
  'Try Warwick, he is pretty strong on mid',
  'What about Draven?'
];

	var pickMid = randomInt(0,possibleResponseMid.length);
    var responseMid = possibleResponseMid[pickMid];
    conv.ask(responseMid);
  }
    else if(position == "support"){
	var possibleResponseSupport = [
  'Velkoz is actually not a bad choice',
  'Go disunio style and take Olaf',
  'Maybe Azir?'
];

	var pickSupport = randomInt(0,possibleResponseSupport.length);
    var responseSupport = possibleResponseSupport[pickSupport];
    conv.ask(responseSupport);
  }
    else if(position == "bot"){
	var possibleResponseBot = [
  'Wukong is really creative bot pick',
  'I would try Rengar',
  'Victor can be fun on bot'
];

	var pickBot = randomInt(0,possibleResponseBot.length);
    var responseBot = possibleResponseBot[pickBot];
    conv.ask(responseBot);
  }
      else if(position == "jungle"){
	var possibleResponseJungle = [
  'Lulu is excellent jungle champion',
  'AP Jinx can clear jungle camps quickly and do some really cool ganks',
  'Anivia can be a good choice'
];

	var pickJungle = randomInt(0,possibleResponseJungle.length);
    var responseJungle = possibleResponseJungle[pickJungle];
    conv.ask(responseJungle);
  }
});

exports.dialogflowFirebaseFulfillment = functions.https.onRequest(app);
