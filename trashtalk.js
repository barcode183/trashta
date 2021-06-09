UI.AddCheckbox(["Misc.", "Helpers", "General"], "Killsay");
var killsay = UI.GetValue(["Misc.","Helpers","General","Killsay"]);

var wholesome = [
"Have a nice day!",
"Have a great weekend!",
"Merry Christmas!",
"I do heroin",
"Hope you're doing well",
"Happy Easter",
"Happy new year!",
"You make me un poco loco :)",
];


function getRandomArrayElement(arr){  // randomizing messages
    var min = 0;
    var max = (arr.length - 1);
    var randIndex = Math.floor(Math.random() * (max - min)) + min;
    return arr[randIndex];
}

function onPlayerDeath()
{
    if ( !killsay )
    return;
    attacker = Event.GetInt("attacker");
    attacker_index = Entity.GetEntityFromUserID(attacker);
    attacker_name = Entity.GetName(attacker_index);
    attacker_me = Entity.IsLocalPlayer(attacker_index);

    if (attacker_me)
    {
        Global.ExecuteCommand("say " + getRandomArrayElement(wholesome));
    }
}
Global.RegisterCallback("player_death", "onPlayerDeath");
