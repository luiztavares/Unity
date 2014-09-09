#pragma strict

function OnTriggerEnter(other: Collider)
{	print("AREEEEEIA");
	
	
}
function OnTriggerStay (other : Collider) {
		print("fooooorca");
		//other.transform.position.y =other.transform.position.y*0.001;
		if (other.attachedRigidbody) {
			other.attachedRigidbody.AddForce(Vector3.down * 0.02);
		}
	}