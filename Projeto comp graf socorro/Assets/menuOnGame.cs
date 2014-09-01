using UnityEngine;
using System.Collections;

public class menuOnGame : MonoBehaviour {

	bool menuFlag;
	bool timeBackFlag;
	public GUISkin skin;
	int tamanhoX;
	int tamanhoY;
	int posicaoCentroX;
	int posicaoCentroY;
	
	void Start () {
		menuFlag = false;
		timeBackFlag = false;
		tamanhoX = 200;
		tamanhoY = 100;
		posicaoCentroX = Screen.width / 2;
		posicaoCentroY = Screen.height / 4;

	}
	
	// Update is called once per frame
	void Update () {
	
		if (Input.GetKeyDown (KeyCode.Escape)) {
			menuFlag = !menuFlag;

			if(menuFlag)
				Time.timeScale = 1;
			else
				Time.timeScale = 1;
		}

	}


	void OnGUI(){


		if (menuFlag) {
						GUI.Box(new Rect(0,0,Screen.width,Screen.height),"");

						if (GUI.Button (new Rect (posicaoCentroX - tamanhoX / 2, posicaoCentroY, tamanhoX, tamanhoY), "Voltar ao Jogo")) {
								Time.timeScale = 1;
								menuFlag = !menuFlag;
						}
						if (GUI.Button (new Rect (posicaoCentroX - tamanhoX / 2, posicaoCentroY +(3/2)*tamanhoY , tamanhoX, tamanhoY), "Menu")) {
								Application.LoadLevel("menu");
						}
			if (GUI.Button (new Rect (posicaoCentroX - tamanhoX / 2, posicaoCentroY +( 5/2)*tamanhoY  , tamanhoX, tamanhoY), "Sair")) {
							Application.Quit();
						}
		}
		
	}


}
