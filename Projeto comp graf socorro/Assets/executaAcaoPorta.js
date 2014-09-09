#pragma strict
var porta : GameObject;
var player : GameObject;
var comecando : boolean;
var hasKey: boolean;
var portaAberta : boolean = false;
function OnTriggerEnter(player: Collider)
{	print("entrei");
	comecando = player.GetComponent(ThirdPersonController).comecando;
	hasKey = player.GetComponent(ThirdPersonController).hasKey;
	if (comecando || hasKey)
	{
		if (!portaAberta)
		{
			portaAberta = true;
			porta.GetComponent(DoorBehavior).abrirPorta();
		}
		
		if (comecando)
		{
			player.GetComponent(ThirdPersonController).comecando = false;
		}
	}
		
		
}

function OnTriggerExit(player: Collider)
{
	print("sai");
	if (portaAberta)
	{
		porta.GetComponent(DoorBehavior).fecharPorta();
		portaAberta = false;
	}
	
	
}