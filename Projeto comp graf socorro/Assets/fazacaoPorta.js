#pragma strict
var porta : GameObject;
var player : GameObject;
var comecando : boolean;
var hasKey: boolean;
var portaAberta : boolean = false;
function OnTriggerEnter(player: Collider)
{	print("ola");
	comecando = player.GetComponent(ThirdPersonController).comecando;
	hasKey = player.GetComponent(ThirdPersonController).hasKey;
	if (comecando || hasKey)
	{
		if (!portaAberta)
		{
			portaAberta = true;
			porta.GetComponent(acaoPorta).abrirPorta();
		}
		
		if (comecando)
		{
			player.GetComponent(ThirdPersonController).comecando = false;
		}
	}
		
		
}

function OnTriggerExit(player: Collider)
{
	if (portaAberta)
	{
		porta.GetComponent(acaoPorta).fecharPorta();
		portaAberta = false;
	}
	
	
}