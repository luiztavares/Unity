#pragma strict
var player : GameObject;
function OnTriggerEnter(player: Collider)
{	print("ola");
	player.GetComponent(ThirdPersonController).hasKey = true;
	Destroy(gameObject);
	
		
		
}