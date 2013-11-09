/*
*
* BOBBLE 1D
* An HTML5 / Canvas game.
*
* (C) tom 2012 - http://www.channel23.de
*
*/

var GLOBAL_SCALE = 6
var GLOBAL_WIDTH = 1000

var STAGES = [
    {
         "opts":["Level 1",10,1000],
         "enemies":{
	         1:["m",0],
	         2:["m",0],
	         3:["m",0],
	         5:["m",1]
          }
	},
	{
       "opts":["Level 2",10,1000],
       "enemies":{
           1:["m",1],
           2:["m",0],
           3:["m",1],
		   5:["e",0]
       }
	},
	{
       "opts":["Level 3",10,1000],
       "enemies":{
           1:["m",0],
           2:["m",0,2],
           3:["n",1],
		   4:["n",1,2],
		   6:["e",0],
		   7:["e",1]
       }
	},
	{
       "opts":["Level 4",13,1000],
       "enemies":{
           1:["m",0],
           2:["m",0,2],
           3:["m",0,2],
           4:["n",1],
		   5:["n",1,2],
		   6:["n",1,2],
		   7:["e",0],
		   11:["e",1,2]
       }
	},
	{
       "opts":["Level 5 - Staccato",15,500],
       "enemies":{
           1:["m",0,2],
           2:["m",0,2],
           3:["m",0,2],
           4:["m",0,2],
           5:["m",0,2],
           6:["m",0,2],
           7:["m",0,2],
           8:["n",1,2],
		   9:["n",1,2],
		   10:["n",1,2],
		   11:["n",1,2],
		   12:["n",1,2],
		   13:["n",1,2],
		   14:["n",1,2],
       }
		},	
	{
       "opts":["Level 6",15,1000],
       "enemies":{
           1:["n",0],
           2:["m",0,2],
           3:["n",0,2],
           4:["n",1],
		   5:["m",1,2],
		   6:["n",1,2],
		   7:["n",0,2],
		   8:["e",1],
		   11:["e",1,2],
		   12:["e",0]
       }

	},
	{   
		"opts":["Level 7",15,1000],
		       "enemies":{
		           1:["n",0,2],
		           2:["n",1,2],
		           3:["n",0,2],
		           4:["n",1,2],
				   5:["n",0,2],
				   6:["n",1,2],
				   8:["n",0],
				   10:["n",0],
				   11:["e",1],
				   13:["e",1,2]
	       }
	 },
	// e: L/R/BOTH,size,SPEED,hits
	// n: L/R/BOTH,speed,  
		{
			"opts":["Level 8 - Mini Boss Level",14,1000],
			       "enemies":{
			           1:["e",0,0,3],			
			           4:["e",1,2,3],
			           7:["e",0,0,3],
			           8:["e",1,0,3],
			           9:["e",0,0,3],
			           11:["e",1,2],
		       }
		 },
	{
	"opts":["Level 9 ",15,1000],
		       "enemies":{
		           1:["e",0],
		           2:["e",1],
		           3:["e",0],
		           4:["e",1],
				   5:["n",0,2],
				   6:["n",0,2],
				   8:["n",0,2],
				   10:["n",0],
				   11:["e",1,2],
				   13:["e",1,2]
	       }
	 },		
	 {
		"opts":["Level 10 - Super Staccato ",15,500],
	       "enemies":{
	           1:["m",3,2],
	           2:["m",3,2],
	           3:["m",3,2],
	           4:["m",3,2],
	           5:["m",0,2],
	           6:["m",0,2],
	           7:["m",0,2],
	           8:["n",3,2],
			   9:["n",3,2],
			   10:["n",3,2],
			   11:["n",1,2],
			   12:["n",1,2],
			   13:["n",1,2],
			   14:["n",1,2],
			   16:["n",0,2]
	       }
    },
	// e: L/R/BOTH,size,SPEED,hits
	// n: L/R/BOTH,speed,      
	 {
		"opts":["Level 11 - Chaos",15,1000],
	    "enemies":{
	        1:["e",3,0,2],
    		2:["m",1],
    		3:["e",3,0,2],
    		4:["m",0],
    		6:["n",3,2],
    		7:["n",3,2],
    		8:["m",0]
	     }
    },    
	 {
		"opts":["Level 12 - Hardcore",15,500],
	    "enemies":{
	        1:["e",0,0,2],
    		2:["m",1],
    		3:["e",0,0,2],
    		4:["m",0],
    		6:["n",3,2],
    		7:["n",3,2],
    		8:["m",0],
			9:["n",3,2],
			10:["n",3,2],
			13:["e",3,0,3]
	     }
    },     
	 {
		"opts":["The big one",8,1000],
	    "enemies":{
	           1:["e",0,4,1,25]
	     }
     },
	 {
 		"opts":["Two big ones",10,1000],
 	    "enemies":{
 	         1:["e",0,4,1,25],
     		 3:["e",1,4,1,25]
 	     }
      },
 	 {
   		"opts":["The last level",25,400],
   	    "enemies":{
	           1:["m",3,2],
	           2:["m",3,2],
	           3:["m",3,2],
	           4:["m",3,2],
	           5:["m",0,2],
	           6:["m",0,2],
	           7:["m",0,2],
	           8:["n",3,2],
			   9:["n",3,2],
			   10:["n",3,2],
			   11:["n",1,2],
			   12:["n",1,2],
			   13:["n",1,2],
			   14:["n",1,2],
			   16:["e",0,2],
			   20:["e",1,4,1,25]
   	     }
        }        
 
]

var msg_tag
var game_time


//override collision detection. we want to be a bit sloppy (= pro player)
jaws.collideRects = function(rect1, rect2) {
	var r1center = rect1.x + ( (rect1.right-rect1.x)/2)
	return (r1center >= rect2.x && r1center <= rect2.right) 
}
jaws.Rect.prototype.collideRect = function(rect) {
	var r1center = rect.x + ( (rect.right-rect.x)/2)
	return ( (r1center >= this.x && r1center <= this.right))
}

var pausemessage = 0; 
function message(msg, endless) {
  if ( pausemessage ) { window.clearTimeout( pausemessage ) }
  msg_tag = msg_tag || document.getElementById("msg")
  if(msg_tag.innerHTML == msg) { return }
  msg_tag.innerHTML = msg
  if (!endless) {
	  pausemessage= window.setTimeout(function() { msg_tag.innerHTML = "" }, 5000)
  }
}

function PlayState() {
  var viewport
  var raw_terrain, raw_pixeldata
  var terrain
  var player
  var current_level
  var game_objects = new jaws.SpriteList()
  var game_enemies = new jaws.SpriteList()
  var level_enemies
  var level_infos
  var level_maxtime = 100;
  var level_starttime = 0;
  var levelspeed  
  var background_audio
  var pausestart = 0; 
  
  function initLevel(level) {
    jaws.log("switching to level: " + level, true)
    var song, terrain_image, start_pos, json_file
    continuelevel = current_level = level
    level_starttime = 0
    
    var leveldata = STAGES[level-1]
    if (!leveldata) {
    	// no more levels! you probably won the game
    	message('YOU <img src="media/heart.png" align="middle" /> WON!', true );
    	end_game()
    	return
    }
    level_infos = leveldata.opts
    message( level_infos[0] )
    level_maxtime = level_infos[1] 
    level_enemies = leveldata.enemies
    
    background_audio && background_audio.pause()
    
    switch(level) {
      default:
//        if(playsOGG()) song = "media/the_lab.ogg";
//        else 
    	  	if(playsMP3()) song = "audio/03_-_bubble_bobble_(original_version).mp3";
    }
   
   // background_audio = jaws.assets.get(song)
   // background_audio.addEventListener('ended', function(){ this.currentTime = 0 }, false)
   // background_audio.play()

    var terrain_image = "media/terrain.png"
    terrain = new jaws.Sprite({x: 0, y: 0, image: terrain_image, scale_image: 150})

    viewport = new jaws.Viewport({max_x: 800, max_y: 50})
    viewport.x = 0
    viewport.y = 0

    game_objects = new jaws.SpriteList()
    game_enemies = new jaws.SpriteList()

    jaws.on_keydown("space", function() {
    //		play_sound( "bubble" );
    	
	        var game_object = new Bubble({"x":player.x,"y":player.y, "vs":8, "flipped":player.flipped, "anchor":"center"});
	        game_object.scaleImage(GLOBAL_SCALE)
	        game_object.rect()
	        game_objects.push(game_object) 
    	}
    )

    jaws.on_keydown("p", function() {
    	if ( !pausestart ) {
    		message("Pause, hit 'P' to continue",  true)
    		jaws.game_loop.pause();
    		pausestart = getleveltime(); 
    	} else {
    		var pauseduration = getleveltime() - pausestart; 
    		message("Ok, GO!")
    		level_starttime += pauseduration; 
    		jaws.game_loop.unpause();
    		pausestart = 0; 
    	}
    })

    play_sound( "newmonster" );
  }

  this.setup = function() {
    jaws.context.mozImageSmoothingEnabled = false;
    live_info = document.getElementById("live_info")
    jaws.preventDefaultKeys(["w","a", "s","d","space","z","up","down","right","left"])
    player = new jaws.Sprite({x: 0, y: 0})
    player.animation = new jaws.Animation({scale_image: GLOBAL_SCALE, sprite_sheet: jaws.assets.get("media/player1.png"), frame_size: [8,1], frame_duration: 100})
    player.move_anim =  player.animation.slice(0,2)
    player.anchor("center")
    player.vx = player.vy = 0
    player.x = GLOBAL_WIDTH / 4; 
    player.y = GLOBAL_SCALE/2

    window.onblur = function()  { background_audio && background_audio.pause()  }
    window.onfocus = function() { background_audio && background_audio.play() }

    initLevel( continuelevel )
  }


  
  
  //
  //
  //         M A I N            G A M E   				L O O P 
  //
  this.update = function() {
    var frame = 0
    if(player.jumping)      { frame = 10 }
    else if(player.vx)      { frame = -1; player.setImage( player.move_anim.next() ) }
    if(frame >= 0)          { player.setImage( player.animation.frames[frame] ) }

    player.vx = 0
    if (jaws.pressed("left"))        { player.vx = -4; player.flipped = 1; }
    else if (jaws.pressed("right"))  { player.vx = +4; player.flipped = 0; }
    if (jaws.pressed("up"))  { if(!player.jumping && player.can_jump) { player.vy = -10; player.jumping = true; player.can_jump = false} }
    else { player.can_jump = true }
   
    player.x += player.vx;

    if ( player.x > GLOBAL_WIDTH + 5) {
    	player.x = -4
    } else if ( player.x < -4 ) {
    	player.x = GLOBAL_WIDTH + 4
    }
    
    // update bubbles and hit enemies
	game_objects.forEach( function(game_object, index) {
        if(game_object.hasOwnProperty("update")) { game_object.update() }
        if ( game_object.is_deadly ) {
        	game_enemies.forEach( function(enemy, index) {
        		if(enemy.rect().collideRect(game_object.rect())) {
        			if ( !( enemy.is_floating || enemy.is_dead )  ) {
            			enemy.hit( game_time );
        				game_objects.remove( game_object );
        			}
        		}
        	});
        }
	});
	
	// remove old bubbles
	game_objects.forEach( function(game_object, index) {
        if(game_object.anim_end.atLastFrame() ) { game_objects.remove( game_object ) }
	});
	
	// update enemies and check if floating enemies are killed
	game_enemies.forEach( function(game_object, index) {
        if(game_object.hasOwnProperty("update")) { game_object.update() }
		if(game_object.rect().collideRect(player.rect())) {
	        if ( game_object.is_floating ) {
	        	if ( !game_object.is_dead) {
					game_object.is_dead = true;
					add_points( "p1", game_object.points );
	        	}
	        } else if (!game_object.is_dead ) {
	    		player_died( player.x ); 
	        }
		}
        if(game_object.anim_die.atLastFrame() ) { game_enemies.remove( game_object ) }
	});
	
	levelspeed = level_infos[2]
	var currenttimer = getleveltime();
	if ( !level_starttime ) {
		level_starttime = currenttimer
	}
	var mytime = currenttimer - level_starttime; 
	if ( mytime > game_time ) {
		if ( level_enemies[mytime] ) {
			var my_enemy = level_enemies[mytime].slice(); //use "slice" to pass by value
			if ( my_enemy[1]>1 ) {
				my_enemy[1] = 0;
				game_enemies.push( create_monster( my_enemy.slice() ) )
				my_enemy[1]= 1;
			}
			game_enemies.push( create_monster( my_enemy ) )
		}
	}
	game_time = mytime; 
	if ( game_time > level_maxtime && game_enemies.length < 1 ) {
		initLevel( current_level +1 );
	}

/*
 * 
     live_info.innerHTML = jaws.game_loop.fps + " fps. Player: " + parseInt(player.x) + "/" + parseInt(player.y) + ". "
    live_info.innerHTML += "Viewport: " + parseInt(viewport.x) + "/" + parseInt(viewport.y) + " bubbles: " + game_objects.length
    live_info.innerHTML += " enemies: " + game_enemies.length +  " time: " + mytime 
*/
  }
  
  function getleveltime() {
	  return Math.floor( jaws.game_loop.runtime()/levelspeed );
  }
  
  function isOutsideCanvas(item) { return (item.x < 0 || item.y < 0 || item.x > jaws.width || item.y > jaws.height) }
  function isCollidingWithTerrain(item) { return terrainAt(item.x, item.y) }

  this.draw = function() {
    jaws.clear()
    
    viewport.apply( function() {
      terrain.draw()
      game_objects.draw()
      game_enemies.draw()
      player.draw()
    });
 
  }
 
}

function create_monster( my_enemy ) {
	var e_mode = (my_enemy[2]==undefined)?0:my_enemy[2];
	var e_double = (my_enemy[3]==undefined)?0:my_enemy[3];
	var e_th = (my_enemy[4]==undefined)?0:my_enemy[4];
	switch ( my_enemy[0] ) {
		case "n" : 
			var game_e = new Monster({"points":e_mode>0?150:100,"sprite":2,"vx":e_mode>0?e_mode:1,"x":my_enemy[1] > 0? 0:GLOBAL_WIDTH,"y":GLOBAL_SCALE/2, "flipped":(my_enemy[1] > 0?true:false), "anchor":"center"});
			break;
		case "m" : 
			var game_e = new Monster({"points":e_mode>0?75:50,"vx":e_mode>0?e_mode:1,"x":my_enemy[1] > 0? 0:GLOBAL_WIDTH,"y":GLOBAL_SCALE/2, "flipped":(my_enemy[1] > 0?true:false), "anchor":"center"});
			break;
		case "e": 
			var game_e = new Endboss({"points":e_mode>0?(e_mode*200):300,"third":e_th,"speed":e_double,"mode":e_mode,"x":my_enemy[1] > 0? 0:GLOBAL_WIDTH,"y":GLOBAL_SCALE/2, "flipped":(my_enemy[1] > 0?true:false), "anchor":"center"});
			break
	}	
	return game_e; 
}

function playsOGG() { var audio = new Audio(); return !!audio.canPlayType && audio.canPlayType( 'audio/ogg; codecs="vorbis"' ) }
function playsMP3() { var audio = new Audio(); return !!audio.canPlayType && audio.canPlayType( 'audio/mpeg;' ) }


function Bubble(options) {
  jaws.Sprite.call(this, options)
  this.vx = 3; 
  this.is_deadly = true; 
  this.animation = new jaws.Animation({scale_image: GLOBAL_SCALE,sprite_sheet:"media/bubble.png", frame_duration: 100, frame_size: [8,1], loop:false})
  this.anim_fly = this.animation.slice(0,7)
  this.anim_end = this.animation.slice(10,20)
  this.setImage( this.anim_fly.next() )
  this.update = function() { 
	  if ( this.vx > 0 ) {
		  this.x = this.x - (this.flipped?this.vx:0-this.vx);
		  this.vx = this.vx-0.05; 
		  this.setImage ( this.anim_fly.next() ) 
	  } else {
		  this.is_deadly = false; 
		  if ( !this.anim_end.atLastFrame() ) {
			  this.setImage( this.anim_end.next() )
		  }
	  }
  }
}

function Monster(options) {
	  jaws.Sprite.call(this, options)
	  var sprite = "enemy1.png"
	  this.basehits = this.hits = 1; 
	  if ( options.sprite > 0 ) {
		  sprite = "enemy2.png"
		  this.basehits = this.hits = 2;
	  }	  
	  this.vx = options.vx;
	  this.points = options.points;
	  this.is_floating = 0;
	  this.is_dead = false; 
	  this.animation = new jaws.Animation({scale_image: GLOBAL_SCALE,sprite_sheet:"media/"+sprite, frame_duration: 100, frame_size: [8,1], loop:true})
	  this.anim_fly = this.animation.slice(0,3)
	  this.anim_float = this.animation.slice(10,20)
	  this.anim_die = this.animation.slice(20,30)
	  this.setImage( this.anim_fly.next() )
	  this.update = function() { 
		  if ( this.is_dead ) {
			  this.setImage( this.anim_die.next() )
		  } else if ( this.is_floating ) {
			  if ( game_time > ( this.is_floating+2 ) ) {
				  this.is_floating = 0;
				  this.hits = this.basehits; 
				  this.vx += 1;
				  this.flipped = ( Math.random()*10 >= 5 ) ;
			  }
			  this.setImage( this.anim_float.next() )
		  } else {
			  this.x = this.x + (this.flipped?this.vx:0-this.vx);
			  this.setImage ( this.anim_fly.next() )
			  if ( this.flipped && this.x > GLOBAL_WIDTH ) { this.flipped = false}
			  else if ( (!this.flipped && this.x < 0 ) ) { this.flipped = true }
		  }
	  }
	  this.hit = function( time ) {
		  this.hits -=1; 
		  if ( this.hits <= 0 ) {
			  this.is_floating = time
			//  play_sound( "inbubble" );
		  }
	  }
}

function Endboss(options) {
	  jaws.Sprite.call(this, options)
	  myhits = 5; 
	  this.vx = 1 
	  var sprite = "enemy1.png"
	  var scale = 2; 
	  if ( options.mode > 0 ) {
		  sprite = "enemy2.png"
		  myhits = 7;
		  this.vx = 2;
		  scale = (options.mode>1)?options.mode:2
	  }
	  if ( options.third ) {
		  myhits = options.third
	  }
	  this.basehits = this.hits = myhits; 
	  if ( options.speed ) { this.vx = options.speed }
	  
	  this.points = options.points;
	  this.is_floating = 0;
	  this.is_dead = false; 
	  this.animation = new jaws.Animation({scale_image: GLOBAL_SCALE*scale,sprite_sheet:"media/" + sprite, frame_duration: 100, frame_size: [8,1], loop:true})
	  this.anim_fly = this.animation.slice(0,3)
	  this.anim_float = this.animation.slice(10,20)
	  this.anim_die = this.animation.slice(20,30)
	  this.setImage( this.anim_fly.next() )
	  this.update = function() { 
		  if ( this.is_dead ) {
			  this.setImage( this.anim_die.next() )
		  } else if ( this.is_floating ) {
			  if ( game_time >= ( this.is_floating+2 ) ) {
				  this.is_floating = 0; 
				  this.vx += 1;
				  this.hits = this.basehits;
				  this.flipped = ( Math.random()*10 >= 5 ) ;
			  }
			  this.setImage( this.anim_float.next() )
		  } else {
			  this.x = this.x + (this.flipped?this.vx:0-this.vx);
			  this.setImage ( this.anim_fly.next() )
			  if ( this.flipped && this.x > GLOBAL_WIDTH ) { this.flipped = false}
			  else if ( (!this.flipped && this.x < 0 ) ) { this.flipped = true }
		  }
	  }
	  this.hit = function( time ) {
		  this.hits -=1; 
		  if ( this.hits <= 0 ) {
			  this.is_floating = time
//			  play_sound( "inbubble" );
		  }
	  }	  
}


function player_died( xpos ) {
	document.getElementById("explosion").style.left=xpos - (GLOBAL_WIDTH/2 )+"px";
	document.getElementById("explosion").style.visibility="visible";
	var messages = [
		            "Oh no!",
		            "Ouch!",
		            "Bad luck.",
		            "That was tough.",
		            "You were hit.",
		            "Explodemon touched you!",
		            "You died.",
		            "Another try?",
		            "Maybe next time!",
		            "BOOM!",
		            "Och.."
	    ]
	var messy = Math.floor( Math.random()*(messages.length) )
	message( messages[messy] );
	end_game(); 
}

function end_game() {
	//save hiscore in cookie
	WertSetzen("HISCORE", p1points, 1000 * 60 * 60 * 24 * 365);
	
	jaws.game_loop.stop()
	window.setTimeout("show_game_controls()", 1000);	
	play_sound( "end" );
	game_running = false; 
}


var visi = 0;
function show_game_controls( ) {
	visi = visi?0:1 
	if (game_running) visi = 0;  
	var gc = document.getElementById("gamecontrols");
	gc.style.visibility=visi?"visible":"hidden";
	if ( !game_running) window.setTimeout("show_game_controls()", 1000);	
}

function play_sound( sound ) {
	if ( !sound_on ) return; 
	if(jaws.assets.get("audio/sfx_"+sound+".mp3")) {
		jaws.assets.get("audio/sfx_"+sound+".mp3").play();
	} else {
	}
}
function register_sound( sound ) {
	jaws.assets.add([ "audio/sfx_"+sound+".mp3"])
}

var sound_on = true; 

function toggleSound() {
	sound_on = !sound_on;
	var mydiv = document.getElementById("sound") 
	if ( sound_on ) {
		mydiv.innerHTML='<img src="media/sound_on.png" />';
	} else {
		mydiv.innerHTML='<img src="media/sound_off.png" />';
	}
}

var p1points = 0; 
var p1timeout; 
var p2points = 0;
function add_points( player, points ) {
	p1points +=points; 
	showpoints( player, p1points )
	if ( p1timeout ) { window.clearTimeout( p1timeout ) }
	document.getElementById("p1a").innerHTML = "+"+points
	p1timeout = window.setTimeout(function() {document.getElementById("p1a").innerHTML = "" }, 500)
	if ( p1points > p2points ) {
		document.getElementById("p2a").innerHTML = "NEW"
		p2points =  p1points; 
		showpoints( "p2", p2points );
	}
}
function showpoints(player, number ) {
	var length = 6
    var str = '' + number;
    while (str.length < length) {
        str = '0' + str;
    }
	document.getElementById(player + "p").innerHTML = str;
}


	Bubble.prototype = jaws.Sprite.prototype
	Monster.prototype = jaws.Sprite.prototype
	Endboss.prototype = jaws.Sprite.prototype
	var continuelevel = 1; 

	function startGame( code ) {
		if ( code != 67 ) {
			continuelevel = 1
		}
		document.getElementById("p2a").innerHTML = ""
		game_running = true; 
		var gc = document.getElementById("gamecontrols");
		gc.style.visibility="hidden"
		document.getElementById("explosion").style.visibility="hidden";
		p1points = 0; 
		showpoints( "p1", p1points );
		jaws.assets.root = ""
		jaws.assets.add(["media/player1.png", "media/terrain.png", "media/enemy1.png",  "media/bubble.png", "media/enemy2.png"])
	/*  

  if(playsOGG())      { jaws.assets.add(["the_lab.ogg", "outside.ogg", "cave.ogg", "outro.ogg"]) }
  else 
*/
		if(playsMP3()) { 
			jaws.assets.add([
			     "audio/03_-_bubble_bobble_(original_version).mp3",
			])
			register_sound( "bubble" );
			register_sound( "inbubble" );
			register_sound( "newmonster" );
			register_sound( "end" );
			register_sound( "start" );
		}
		jaws.start(PlayState)
	}
	
	show_game_controls()
	
	