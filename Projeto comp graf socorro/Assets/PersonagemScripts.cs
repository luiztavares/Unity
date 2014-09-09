using UnityEngine;
using System.Collections;

public class PersonagemScripts : MonoBehaviour {


	public GameObject lancaChamas;
	public static bool chave;
	bool flagChamas;
	public static Vector3 posicao;
	public static int vida;


	void Start () {
		Time.timeScale = 1;
		flagChamas = false;
		chave = false;
		vida = 100;

	}



	// Update is called once per frame
	void Update () {
	}




}