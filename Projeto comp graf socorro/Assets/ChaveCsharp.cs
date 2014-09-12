using UnityEngine;
using System.Collections;

public class ChaveCsharp : MonoBehaviour {

	float velocidadeRotationY;

	void Start () {
	velocidadeRotationY = 80;



	}
	
	// Update is called once per frame
	void Update () {
		transform.Rotate(0, velocidadeRotationY*Time.deltaTime, 0, Space.World);

	}	



	void OnTriggerStay(Collider alvo ){
		if(alvo.gameObject.tag == "Player")
			if(Input.GetMouseButtonDown(0)){
				Inventario.chaveFlag = true;
				Destroy(this.gameObject);
		
			}
	}
}