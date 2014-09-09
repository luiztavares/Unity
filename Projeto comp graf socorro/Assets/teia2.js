#pragma strict
var velocidade : float;
var posicaoInicial : Vector3;

function Start(){
	velocidade = 10;
	posicaoInicial = transform.position;
}

function Update(){
	transform.Translate (0, 0, velocidade * Time.deltaTime);
	transform.Rotate(0,0,180*Time.deltaTime);
	
	if(Vector3.Distance(posicaoInicial,transform.position) > 20)
		Destroy(this.gameObject);
		
}

function OnCollisionEnter(other : Collision){
	Destroy(this.gameObject);


}

function OnTriggerEnter(other: Collider)
{	
	if ( other.CompareTag("Player")){
		Destroy(this.gameObject);
	
	}	
}

