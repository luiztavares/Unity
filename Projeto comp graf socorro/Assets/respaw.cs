using UnityEngine;
using System.Collections;

public class respaw : MonoBehaviour {
	public GameObject aranha;
	public GameObject parede;
	int nroDeAranhas;
	float tempoRespaw;

	void Start () {
//		Instantiate (aranha);
//		nroDeAranhas += 1;


	}
	

	void Update () {
	
		tempoRespaw += Time.deltaTime;

		if (nroDeAranhas < 0 && tempoRespaw > 4) {
			Instantiate (aranha);
			nroDeAranhas += 1;
			tempoRespaw = 0;
		
		}


	}
}
