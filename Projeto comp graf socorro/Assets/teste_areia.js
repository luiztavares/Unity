#pragma strict
var chao : GameObject;
var player : GameObject;
function OnTriggerEnter (other: Collider)
{
	if (other.tag == "Player")
	{
		chao.animation.Play("areia_oficial");
		//player.gameObject.GetComponent(ThirdPersonController).areia_movedica=true;
	}
	
	//Debug.Log("OI");
	//print("VIDA LOKA");
}

function OnTriggerExit (other:Collider)
{
	if (other.tag == "Player")
	{
		//player.gameObject.GetComponent(ThirdPersonController).areia_movedica=false;
		chao.animation.Stop("areia_oficial");
		chao.transform.localPosition.y = 0.04698277;
	}
	
	//print("OOOOOPA");
}