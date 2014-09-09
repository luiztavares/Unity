#pragma strict

    
    var target : Transform; //the enemy's target
    var moveSpeed = 3; //move speed
    var rotationSpeed = 3; //speed of turning
    var range : float=20f;
    var range2 : float=20f;
    var stop : float=10;
    var myTransform : Transform; //current transform data of this enemy
    var attackDelayTime : float;
    var tempoRotate : float;
    var teia : GameObject;
    var attackRange : float;
    
    function Awake()
    {
    myTransform = transform; //cache transform data for easy access/preformance
    }
     
    function Start()
    {
    target = GameObject.FindWithTag("Player").transform; //target the player
    this.animation.wrapMode = WrapMode.Loop;
    animation.Play("Walk");
     
    }
     
    function Update () {
    
    tempoRotate += Time.deltaTime;
    //rotate to look at the player
    var distance = Vector3.Distance(myTransform.position, target.position);
    if (distance<=range2 && distance>=range){
    myTransform.rotation = Quaternion.Slerp(myTransform.rotation,
    Quaternion.LookRotation(target.position - myTransform.position), rotationSpeed*Time.deltaTime);
	animation.Play("Walk");
    }
     
     
    else if(distance<=range && distance>stop){
     
    //move towards the player
    myTransform.rotation = Quaternion.Slerp(myTransform.rotation,
    Quaternion.LookRotation(target.position - myTransform.position), rotationSpeed*Time.deltaTime);
    myTransform.position += myTransform.forward * moveSpeed * Time.deltaTime;
    animation.Play("Run");
    }
    else if (distance<=stop) {
    myTransform.rotation = Quaternion.Slerp(myTransform.rotation,
    Quaternion.LookRotation(target.position - myTransform.position), rotationSpeed*Time.deltaTime);
  
    
    animation["Attack"].wrapMode = WrapMode.Once;
    animation["Attack"].speed = 1;
    animation.CrossFade("Attack");
    
    
        
    if((animation["Attack"].time % 1) >= 0.9){
    
    	attackDelayTime += Time.deltaTime;
    	if (attackDelayTime >= 0.07){
    		Instantiate(teia, Vector3(transform.position.x,transform.position.y+1,transform.position.z)
    			, myTransform.rotation);
			attackDelayTime = 0;
		}
    }
    else attackDelayTime = 0;		
    }
    else { 
    	if (tempoRotate > 2) {
   				transform.Rotate (0, 360 * Random.value, 0);
   				tempoRotate = 0;
   				animation.Play("Walk");
		}
			transform.Translate (0, 0, 1 * Time.deltaTime);
				animation.Play("Walk");
	}     
  }
