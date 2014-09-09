using UnityEngine;
using System.Collections;

public class Behavior : MonoBehaviour {
	Vector3 velocidade;
	bool chao;
	bool hasKey;
	// Use this for initialization
	void Start () {
		chao = true;
		hasKey = false;
		velocidade = Vector3.zero;
	}
	
	// Update is called once per frame
	void Update () 
	{
		velocidade = transform.forward.normalized * Time.deltaTime * 10;
		animar ();
	}

	void animar()
	{
		animation.Play ("run");
	}
}
