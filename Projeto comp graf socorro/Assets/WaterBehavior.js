#pragma strict
var player : GameObject;
function OnTriggerEnter(other: Collider)
{	print("OOOOOOOOOOOOOOOOOOOOOOOI");
	other.GetComponent(ThirdPersonController).walkSpeed = 1;
	other.GetComponent(ThirdPersonController).runSpeed = 1;
	other.GetComponent(ThirdPersonController).trotSpeed = 1;
}

function OnTriggerExit(other: Collider)
{	print("OOOOOOOOOOOOOOOOOOOOOOOI");
	other.GetComponent(ThirdPersonController).walkSpeed = 3;
	other.GetComponent(ThirdPersonController).runSpeed = 8;
	other.GetComponent(ThirdPersonController).trotSpeed = 6;
}