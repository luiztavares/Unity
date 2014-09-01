using UnityEngine;
using System.Collections;

public class menu : MonoBehaviour {

	int tamanhoX;
	int tamanhoY;
	int posicaoCentroX;
	int posicaoCentroY;
	public GUISkin skin;
	public Texture imagem;



	void Start () {
		tamanhoX = 200;
		tamanhoY = 100;
		posicaoCentroX = Screen.width / 2;
		posicaoCentroY = Screen.height / 2;
	

			}
	
	// Update is called once per frame
	void Update () {



	}

	void OnGUI(){


		GUI.skin = skin;
		GUI.DrawTexture(new Rect(0,0,Screen.width,Screen.height), imagem);
		if (GUI.Button (new Rect(posicaoCentroX - tamanhoX/2,posicaoCentroY - tamanhoY/2 ,tamanhoX,tamanhoY), "Comecar"))
			Application.LoadLevel("jg");
	
	}
}
