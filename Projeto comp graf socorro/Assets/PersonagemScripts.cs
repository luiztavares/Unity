using UnityEngine;
using System.Collections;

public class PersonagemScripts : MonoBehaviour {


	public GameObject lancaChamas;
	public GameObject chaveObj;
	public static bool chave;
	bool flagChamas;
	public static Vector3 posicao;


	void Start () {
		Time.timeScale = 1;
		flagChamas = false;
		chave = false;
	}



	// Update is called once per frame
	void Update () {
				posicao = transform.position;

				if (Input.GetKeyUp (KeyCode.X)) {
						flagChamas = !flagChamas;
						if (flagChamas)
								lancaChamas = (GameObject)Instantiate (lancaChamas);
						else
								Destroy (lancaChamas);
		
				}
		}
	void OnTriggerEnter(Collider other){
		if (other.tag == "chave") {		
			chave = true;
			Destroy (chaveObj);
				}
	}


}