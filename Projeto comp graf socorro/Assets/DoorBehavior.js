#pragma strict

function Start () {

}

function Update () {
	abrirPorta();
}

function abrirPorta()
{
	animation.Play("abrirPorta");
	
}
function fecharPorta()
{
	animation.Play("fecharPorta");
	
}