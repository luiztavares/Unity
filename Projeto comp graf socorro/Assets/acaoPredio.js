#pragma strict

var player : GameObject;
function OnTriggerEnter(player: Collider)
{
	player.GetComponent(ThirdPersonCamera).distance = 1;
	
		
		
}

function OnTriggerExit(player: Collider)
{
	player.GetComponent(ThirdPersonCamera).distance = 5;
	
		
		
}