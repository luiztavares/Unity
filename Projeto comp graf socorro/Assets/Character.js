#pragma strict
var speed: float = 10f;;
function Start () {

}

function Update () {
	
	if (Input.GetKey(KeyCode.LeftArrow))
	{
		gameObject.transform.Rotate(-Vector3.up);
		print("entrei aqui222");
	}
	if (Input.GetKey(KeyCode.UpArrow))
	{
		gameObject.animation.Play("run");
		gameObject.transform.Translate(Vector3.forward*Time.deltaTime*speed);
		print("entrei aquiUP");
	}
	if (Input.GetKey(KeyCode.RightArrow))
	{
		gameObject.transform.Rotate(Vector3.up);
		print("entrei aqui222");
	}
	if (Input.GetKey(KeyCode.DownArrow))
	{
		gameObject.animation.Play("run");
		gameObject.transform.Translate(Vector3.back*Time.deltaTime*speed);
		print("entrei aquiUP");
	}
	

		

}