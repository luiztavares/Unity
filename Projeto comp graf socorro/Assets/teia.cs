using UnityEngine;
using System.Collections;

public class teia : MonoBehaviour {
	float velocidade = 10;
	// Use this for initialization


	void Start () {
	}
	
	// Update is called once per frame
	void Update () {
		transform.Translate (0, 0, velocidade * Time.deltaTime);

	}

	
}
