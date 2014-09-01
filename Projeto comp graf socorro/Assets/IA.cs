using UnityEngine;
using System.Collections;

public class IA : MonoBehaviour {

	Vector3 distancia;
	float velocidade;
	float distanciaMaxima;
	float positivoX;
	float positivoZ;
	float tempoRotate;
	float normaX;
	Vector3 fonte;
	Vector3 alvo;

	void Start () {
		distanciaMaxima = 10;
		transform.Rotate (0, 360 * Random.value, 0);


	}
	
	// Update is called once per frame
	void Update () {
				distancia = PersonagemScripts.posicao - transform.position;
				tempoRotate = tempoRotate + Time.deltaTime;

				fonte = transform.position;
				alvo = PersonagemScripts.posicao;

				

				positivoX = distancia.x > 0 ? distancia.x : -distancia.x;
				positivoZ = distancia.z > 0 ? distancia.z : -distancia.z;
			
				velocidade = 3 * Time.deltaTime;
	

				if (positivoX < distanciaMaxima && positivoZ < distanciaMaxima) { 

					transform.forward = alvo - fonte;
					transform.forward = Vector3.Normalize (transform.forward);
			
					transform.Translate (transform.forward*Time.deltaTime*3);


				} else { 
						if (tempoRotate > 2) {
								transform.Rotate (0, 360 * Random.value, 0);
								tempoRotate = 0;
						}
						transform.Translate (0, 0, 1 * Time.deltaTime);
				}
	}

}
