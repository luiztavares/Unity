using UnityEngine;
using System.Collections;

public class TeiaSlow : MonoBehaviour {

	public GUITexture guiTexture;
	float fadeTime;

	// Use this for initialization
	void Start () {
	
	}
	
	// Update is called once per frame
	void Update () {
	
		 

		guiTexture.transform.localScale = new Vector3(3,3,1);
	}
}
