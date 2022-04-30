
let selectedState = 1;
let selectedTip = "(No)";


function setup(){
  createCanvas(1400, 640);
  formBubles();
}
function draw(){
  background(255);
  fill(0);
  textSize(15);
  text("selected color:",2,15);
  text(selectedTip,122,15);
  if(selectedState == 0) {fill(255);selectedTip = "(Empty/IDK)";}
  else if (selectedState == 1) {fill('#5F0202');selectedTip = "(No)";}
  else if (selectedState == 2) {fill('#D87614');selectedTip = "(Maybe)";}
  else if (selectedState == 3) {fill('#E7F256');selectedTip = "(Okay)";}
  else if (selectedState == 4) {fill('#45FF39');selectedTip = "(Like)";}
  else if (selectedState == 5) {fill('#88BDE8');selectedTip = "(Favorite)";}
  rect(100,0,20,20);
  fill(0,255,0);
  rect(1380,620,20,20);
  form();
  choiceBubbles.render();
}
function mouseClicked(){
  choiceBubbles.update();
  if(mouseX>1380 && mouseY>620 && mouseX<1400 && mouseY<640)saveForm();
  if(mouseX>100&& mouseY>0 && mouseX<120 && mouseY<20){
    selectedState += -1;
    if(selectedState > 5) selectedState = 0;
    else if (selectedState < 0) selectedState = 5;
  }
}
function mouseWheel(event) {
  selectedState += event.delta/-100;
  if(selectedState > 5) selectedState = 0;
  else if (selectedState < 0) selectedState = 5;
}

function saveForm(){
  background(255);
  
  fill(255);selectedTip = "(Empty/IDK)";
  rect(100,0,20,20);
  fill(0);
  text(selectedTip,122,15);

  
  fill('#5F0202');selectedTip = "(No)";
  rect(200,0,20,20);
  fill(0);
  text(selectedTip,222,15);
  
  fill('#D87614');selectedTip = "(Maybe)";
  rect(300,0,20,20);
  fill(0);
  text(selectedTip,322,15);
  
  fill('#E7F256');selectedTip = "(Okay)";
  rect(400,0,20,20);
  fill(0);
  text(selectedTip,422,15);
  
  fill('#45FF39');selectedTip = "(Like)";
  rect(500,0,20,20);
  fill(0);
  text(selectedTip,522,15);
  
  fill('#88BDE8');selectedTip = "(Favorite)";
  rect(600,0,20,20);
  fill(0);
  text(selectedTip,622,15);
  
  
  form();
  choiceBubbles.render();
  saveCanvas("kinkList",".png");
}


function form(){
  fill(0);
  //bodies
  textSize(20);
  text("Bodies",45,60);
  textSize(15);
  text("Skinny",80,80);
  text("Chubby",80,100);
  text("Small breasts",80,120);
  text("Large breasts",80,140);
  text("Small cocks",80,160);
  text("Large cocks",80,180);
  
  //-------
  tableModY = 160;
  count = 0;
  tableModX=0;
  //Clothing
  textSize(20);
  text("Clothing",45+tableModX,50+tableModY);
  textSize(10);
  text("Self, Partner",45+tableModX,60+tableModY);
  textSize(15);
  text("Clothed sex",80+tableModX,(count*20)+80+tableModY);
  count++;
  text("Lingerie",80+tableModX,(count*20)+80+tableModY);
  count++;
  text("Stockings",80+tableModX,(count*20)+80+tableModY);
  count++;
  text("Heels",80+tableModX,(count*20)+80+tableModY);
  count++;
  text("Leather",80+tableModX,(count*20)+80+tableModY);
  count++;
  text("Latex",80+tableModX,(count*20)+80+tableModY);
  count++;
  text("Uniform / costume",80+tableModX,(count*20)+80+tableModY);
  count++;
  text("Cross-dressing",80+tableModX,(count*20)+80+tableModY);
  count++;
  
   //-------
  tableModY = 360;
  count = 0;
  tableModX=0;
  //Groupings
  textSize(20);
  text("Groupings",45+tableModX,60+tableModY);
  textSize(15);
  text("You and 1 male",80+tableModX,(count*20)+80+tableModY);
  count++;
  text("You and 1 female",80+tableModX,(count*20)+80+tableModY);
  count++;
  text("You and MtF trans",80+tableModX,(count*20)+80+tableModY);
  count++;
  text("You and FtM trans",80+tableModX,(count*20)+80+tableModY);
  count++;
  text("You and GenderNonconforming",80+tableModX,(count*20)+80+tableModY);
  count++;
  text("You and 2 of different genders",80+tableModX,(count*20)+80+tableModY);
  count++;
  text("you and 2 males",80+tableModX,(count*20)+80+tableModY);
  count++;
  text("you and 2 females",80+tableModX,(count*20)+80+tableModY);
  count++;
  text("you and 2 GenderNonconforming",80+tableModX,(count*20)+80+tableModY);
  count++;
  text("Orgy",80+tableModX,(count*20)+80+tableModY);
  count++;
  
  //-------
  tableModY = 10;
  count = 0;
  tableModX=200;
  //General
  
  textSize(20);
  text("General",45+tableModX,50+tableModY);
  textSize(10);
  text("Giving, Receiving",45+tableModX,60+tableModY);
  textSize(15);
  text("Romance / Affection",80+tableModX,(count*20)+80+tableModY);
  count++;
  text("Handjob / fingering",80+tableModX,(count*20)+80+tableModY);
  count++;
  text("Blowjob",80+tableModX,(count*20)+80+tableModY);
  count++;
  text("Deep throat",80+tableModX,(count*20)+80+tableModY);
  count++;
  text("Swallowing",80+tableModX,(count*20)+80+tableModY);
  count++;
  text("Facials",80+tableModX,(count*20)+80+tableModY);
  count++;
  text("Cunnilingus",80+tableModX,(count*20)+80+tableModY);
  count++;
  text("Face-sitting",80+tableModX,(count*20)+80+tableModY);
  count++;
  text("Edging",80+tableModX,(count*20)+80+tableModY);
  count++;
  text("Teasing",80+tableModX,(count*20)+80+tableModY);
  count++;
  text("Overstimulation",80+tableModX,(count*20)+80+tableModY);
  count++;
  text("JOI, SI",80+tableModX,(count*20)+80+tableModY);
  count++;
  
   //-------
  tableModY =290;
  count = 0;
  tableModX=200;
  //Ass play
  
  textSize(20);
  text("Ass play",45+tableModX,50+tableModY);
  textSize(10);
  text("Giving, Receiving",45+tableModX,62+tableModY);
  textSize(15);
  text("Anal toys",80+tableModX,(count*20)+80+tableModY);
  count++;
  text("Anal sex, pegging",80+tableModX,(count*20)+80+tableModY);
  count++;
  text("Rimming",80+tableModX,(count*20)+80+tableModY);
  count++;
  text("Double penetration",80+tableModX,(count*20)+80+tableModY);
  count++;
  text("Anal fisting",80+tableModX,(count*20)+80+tableModY);
  count++;
  
  //-------
  tableModY = 10;
  count = 0;
  tableModX=400;
  //Restrictive
  
  textSize(20);
  text("Restrictive",45+tableModX,50+tableModY);
  textSize(10);
  text("Self, Partner",45+tableModX,60+tableModY);
  textSize(15);
  text("Gag",80+tableModX,(count*20)+80+tableModY);
  count++;
  text("Collar",80+tableModX,(count*20)+80+tableModY);
  count++;
  text("Leash",80+tableModX,(count*20)+80+tableModY);
  count++;
  text("Harness",80+tableModX,(count*20)+80+tableModY);
  count++;
  text("Chastity",80+tableModX,(count*20)+80+tableModY);
  count++;
  text("Bondage (Light)",80+tableModX,(count*20)+80+tableModY);
  count++;
  text("Bondage (Heavy)",80+tableModX,(count*20)+80+tableModY);
  count++;
  text("Encasement",80+tableModX,(count*20)+80+tableModY);
  count++;
  
  
  //-------
  tableModY = 220;
  count = 0;
  tableModX=400;
  //Toys
  
  textSize(20);
  text("Toys",45+tableModX,50+tableModY);
  textSize(10);
  text("Self, Partner",45+tableModX,62+tableModY);
  textSize(15);
  text("Dildos",80+tableModX,(count*20)+80+tableModY);
  count++;
  text("Plugs",80+tableModX,(count*20)+80+tableModY);
  count++;
  text("Vibrators",80+tableModX,(count*20)+80+tableModY);
  count++;
  text("Sounding",80+tableModX,(count*20)+80+tableModY);
  count++;
  
  //-------
  tableModY = 350;
  count = 0;
  tableModX=400;
  //Domination
  textSize(20);
  text("Domination",45+tableModX,50+tableModY);
  textSize(10);
  text("Dominant, Submissive",45+tableModX,60+tableModY);
  textSize(15);
  text("Dominant/Submissive",80+tableModX,(count*20)+80+tableModY);
  count++;
  text("Domestic servitude",80+tableModX,(count*20)+80+tableModY);
  count++;
  text("Slavery",80+tableModX,(count*20)+80+tableModY);
  count++;
  text("Pet play",80+tableModX,(count*20)+80+tableModY);
  count++;
  text("DD/lg, MD/lb, etc.",80+tableModX,(count*20)+80+tableModY);
  count++;
  text("Discipline",80+tableModX,(count*20)+80+tableModY);
  count++;
  text("Begging",80+tableModX,(count*20)+80+tableModY);
  count++;
  text("Forced orgasm",80+tableModX,(count*20)+80+tableModY);
  count++;
  text("Orgasm control",80+tableModX,(count*20)+80+tableModY);
  count++;
  text("Orgasm denial",80+tableModX,(count*20)+80+tableModY);
  count++;
  text("Power exchange",80+tableModX,(count*20)+80+tableModY);
  count++;
  
  //-------
  tableModY = 0;
  count = 0;
  tableModX=600;
  //nc
  textSize(20);
  text("Consentual non consent",tableModX,50+tableModY);
  textSize(10);
  text("Agressor, Target",45+tableModX,60+tableModY);
  textSize(15);
  text("Non-con/rape",80+tableModX,(count*20)+80+tableModY);
  count++;
  text("Blackmail/coercion",80+tableModX,(count*20)+80+tableModY);
  count++;
  text("Kidnapping",80+tableModX,(count*20)+80+tableModY);
  count++;
  text("Drugs/alcohol",80+tableModX,(count*20)+80+tableModY);
  count++;
  text("Sleep play",80+tableModX,(count*20)+80+tableModY);
  count++;
  
    //-------
  tableModY = 160;
  count = 0;
  tableModX=600;
  //taboo
  textSize(20);
  text("Taboo",45+tableModX,50+tableModY);
  textSize(15);
  text("Incest",80+tableModX,(count*20)+80+tableModY);
  count++;
  text("Ageplay",80+tableModX,(count*20)+80+tableModY);
  count++;
  text("Interracial/Raceplay (as a kink)",80+tableModX,(count*20)+80+tableModY);
  count++;
  text("Bestiality",80+tableModX,(count*20)+80+tableModY);
  count++;
  text("Necrophillia",80+tableModX,(count*20)+80+tableModY);
  count++;
  text("Cheating",80+tableModX,(count*20)+80+tableModY);
  count++;
  text("Exhibitionism",80+tableModX,(count*20)+80+tableModY);
  count++;
  text("Voyeurism",80+tableModX,(count*20)+80+tableModY);
  count++;
  
  
     //-------
  tableModY = 360;
  count = 0;
  tableModX=600;
  //surrealism
  textSize(20);
  text("Surrealism",45+tableModX,50+tableModY);
  textSize(10);
  text("Self, Partner",45+tableModX,60+tableModY);
  textSize(15);
  text("Futanari",80+tableModX,(count*20)+80+tableModY);
  count++;
  text("Furry",80+tableModX,(count*20)+80+tableModY);
  count++;
  text("Vore",80+tableModX,(count*20)+80+tableModY);
  count++;
  text("Transformation",80+tableModX,(count*20)+80+tableModY);
  count++;
  text("Tentacles",80+tableModX,(count*20)+80+tableModY);
  count++;
  text("Monster or Alien",80+tableModX,(count*20)+80+tableModY);
  count++;
  
     //-------
  tableModY = 0;
  count = 0;
  tableModX=900;
  //Fluids
  textSize(20);
  text("Fluids",60+tableModX,60+tableModY);
  textSize(15);
  text("Blood",80+tableModX,(count*20)+80+tableModY);
  count++;
  text("Watersports",80+tableModX,(count*20)+80+tableModY);
  count++;
  text("Scat",80+tableModX,(count*20)+80+tableModY);
  count++;
  text("Lactation",80+tableModX,(count*20)+80+tableModY);
  count++;
  text("Diapers",80+tableModX,(count*20)+80+tableModY);
  count++;
  text("Cum play",80+tableModX,(count*20)+80+tableModY);
  count++;
  text("Omarashi",80+tableModX,(count*20)+80+tableModY);
  count++;
  
       //-------
  tableModY = 180;
  count = 0;
  tableModX=900;
  //deg
  textSize(20);
  text("Degradation",45+tableModX,50+tableModY);
  textSize(10);
  text("Giving, Receiving",45+tableModX,62+tableModY);
  textSize(15);
  text("Glory hole",80+tableModX,(count*20)+80+tableModY);
  count++;
  text("Name calling",80+tableModX,(count*20)+80+tableModY);
  count++;
  text("Humiliation",80+tableModX,(count*20)+80+tableModY);
  count++;
  
    //-------
  tableModY = 280;
  count = 0;
  tableModX=900;
  //touch stim
  textSize(20);
  text("Touch & Stimulation",45+tableModX,50+tableModY);
  textSize(10);
  text("Actor, Subject",45+tableModX,60+tableModY);
  textSize(15);
  text("Cock/Pussy worship",80+tableModX,(count*20)+80+tableModY);
  count++;
  text("Ass worship",80+tableModX,(count*20)+80+tableModY);
  count++;
  text("Foot play",80+tableModX,(count*20)+80+tableModY);
  count++;
  text("Tickling",80+tableModX,(count*20)+80+tableModY);
  count++;
  text("Sensation Play",80+tableModX,(count*20)+80+tableModY);
  count++;
  text("Electro stimulation",80+tableModX,(count*20)+80+tableModY);
  count++;
  
    //-------
  tableModY = 0;
  count = 0;
  tableModX=1150;
  //misc
  textSize(20);
  text("Misc. Fetish",45+tableModX,50+tableModY);
  textSize(10);
  text("Giving, Receiving",45+tableModX,60+tableModY);
  textSize(15);
  text("Fisting",80+tableModX,(count*20)+80+tableModY);
  count++;
  text("Gangbang",80+tableModX,(count*20)+80+tableModY);
  count++;
  text("Breath play",80+tableModX,(count*20)+80+tableModY);
  count++;
  text("Impregnation",80+tableModX,(count*20)+80+tableModY);
  count++;
  text("Pregnancy",80+tableModX,(count*20)+80+tableModY);
  count++;
  text("Feminization",80+tableModX,(count*20)+80+tableModY);
  count++;
  text("Cuckold/Cuckquean",80+tableModX,(count*20)+80+tableModY);
  count++;
  text("Oviposition",80+tableModX,(count*20)+80+tableModY);
  count++;
  
  
     //-------
  tableModY = 200;
  count = 0;
  tableModX=1150;
  //pain
  textSize(20);
  text("Pain",45+tableModX,50+tableModY);
  textSize(10);
  text("Giving, Receiving",45+tableModX,60+tableModY);
  textSize(15);
  text("Light pain",80+tableModX,(count*20)+80+tableModY);
  count++;
  text("Heavy pain",80+tableModX,(count*20)+80+tableModY);
  count++;
  text("Nipple clamps",80+tableModX,(count*20)+80+tableModY);
  count++;
  text("Clothes pins",80+tableModX,(count*20)+80+tableModY);
  count++;
  text("Caning",80+tableModX,(count*20)+80+tableModY);
  count++;
  text("Flogging",80+tableModX,(count*20)+80+tableModY);
  count++;
  text("Beating",80+tableModX,(count*20)+80+tableModY);
  count++;
  text("Spanking",80+tableModX,(count*20)+80+tableModY);
  count++;
  text("Cock/Pussy slapping",80+tableModX,(count*20)+80+tableModY);
  count++;
  text("Cock/Pussy torture",80+tableModX,(count*20)+80+tableModY);
  count++;
  text("Hot Wax",80+tableModX,(count*20)+80+tableModY);
  count++;
  text("Scratching",80+tableModX,(count*20)+80+tableModY);
  count++;
  text("Biting",80+tableModX,(count*20)+80+tableModY);
  count++;
  text("Cutting",80+tableModX,(count*20)+80+tableModY);
  count++;
  
}

function formBubles(){
  choiceBubbles.addBubble(65,75,15,0,false);
  choiceBubbles.addBubble(65,95,15,0,false);
  choiceBubbles.addBubble(65,115,15,0,false);
  choiceBubbles.addBubble(65,135,15,0,false);
  choiceBubbles.addBubble(65,155,15,0,false);
  choiceBubbles.addBubble(65,175,15,0,false);
  //-------
  tableModY = 160;
  count = 0;
  tableModX=0;
  //Clothing
  choiceBubbles.addBubble(65+tableModX,(count*20)+75+tableModY,15,0,false);
  choiceBubbles.addBubble(45+tableModX,(count*20)+75+tableModY,15,0,false);
  count++;
  choiceBubbles.addBubble(65+tableModX,(count*20)+75+tableModY,15,0,false);
  choiceBubbles.addBubble(45+tableModX,(count*20)+75+tableModY,15,0,false);
  count++;
  choiceBubbles.addBubble(65+tableModX,(count*20)+75+tableModY,15,0,false);
  choiceBubbles.addBubble(45+tableModX,(count*20)+75+tableModY,15,0,false);
  count++;
  choiceBubbles.addBubble(65+tableModX,(count*20)+75+tableModY,15,0,false);
  choiceBubbles.addBubble(45+tableModX,(count*20)+75+tableModY,15,0,false);
  count++;
  choiceBubbles.addBubble(65+tableModX,(count*20)+75+tableModY,15,0,false);
  choiceBubbles.addBubble(45+tableModX,(count*20)+75+tableModY,15,0,false);
  count++;
  choiceBubbles.addBubble(65+tableModX,(count*20)+75+tableModY,15,0,false);
  choiceBubbles.addBubble(45+tableModX,(count*20)+75+tableModY,15,0,false);
  count++;
  choiceBubbles.addBubble(65+tableModX,(count*20)+75+tableModY,15,0,false);
  choiceBubbles.addBubble(45+tableModX,(count*20)+75+tableModY,15,0,false);
  count++;
  choiceBubbles.addBubble(65+tableModX,(count*20)+75+tableModY,15,0,false);
  choiceBubbles.addBubble(45+tableModX,(count*20)+75+tableModY,15,0,false);
  count++;
  
   //-------
  tableModY = 360;
  count = 0;
  tableModX=0;
  //Groupings
  choiceBubbles.addBubble(65+tableModX,(count*20)+75+tableModY,15,0,false);
  count++;
  choiceBubbles.addBubble(65+tableModX,(count*20)+75+tableModY,15,0,false);
  count++;
  choiceBubbles.addBubble(65+tableModX,(count*20)+75+tableModY,15,0,false);
  count++;
  choiceBubbles.addBubble(65+tableModX,(count*20)+75+tableModY,15,0,false);
  count++;
  choiceBubbles.addBubble(65+tableModX,(count*20)+75+tableModY,15,0,false);
  count++;
  choiceBubbles.addBubble(65+tableModX,(count*20)+75+tableModY,15,0,false);
  count++;
  choiceBubbles.addBubble(65+tableModX,(count*20)+75+tableModY,15,0,false);
  count++;
  choiceBubbles.addBubble(65+tableModX,(count*20)+75+tableModY,15,0,false);
  count++;
  choiceBubbles.addBubble(65+tableModX,(count*20)+75+tableModY,15,0,false);
  count++;
  choiceBubbles.addBubble(65+tableModX,(count*20)+75+tableModY,15,0,false);
  count++;
  
  //-------
  tableModY = 10;
  count = 0;
  tableModX=200;
  //General
  
  choiceBubbles.addBubble(65+tableModX,(count*20)+75+tableModY,15,0,false);
  choiceBubbles.addBubble(45+tableModX,(count*20)+75+tableModY,15,0,false);
  count++;
  choiceBubbles.addBubble(65+tableModX,(count*20)+75+tableModY,15,0,false);
  choiceBubbles.addBubble(45+tableModX,(count*20)+75+tableModY,15,0,false);
  count++;
  choiceBubbles.addBubble(65+tableModX,(count*20)+75+tableModY,15,0,false);
  choiceBubbles.addBubble(45+tableModX,(count*20)+75+tableModY,15,0,false);
  count++;
  choiceBubbles.addBubble(65+tableModX,(count*20)+75+tableModY,15,0,false);
  choiceBubbles.addBubble(45+tableModX,(count*20)+75+tableModY,15,0,false);
  count++;
  choiceBubbles.addBubble(65+tableModX,(count*20)+75+tableModY,15,0,false);
  choiceBubbles.addBubble(45+tableModX,(count*20)+75+tableModY,15,0,false);
  count++;
  choiceBubbles.addBubble(65+tableModX,(count*20)+75+tableModY,15,0,false);
  choiceBubbles.addBubble(45+tableModX,(count*20)+75+tableModY,15,0,false);
  count++;
  choiceBubbles.addBubble(65+tableModX,(count*20)+75+tableModY,15,0,false);
  choiceBubbles.addBubble(45+tableModX,(count*20)+75+tableModY,15,0,false);
  count++;
  choiceBubbles.addBubble(65+tableModX,(count*20)+75+tableModY,15,0,false);
  choiceBubbles.addBubble(45+tableModX,(count*20)+75+tableModY,15,0,false);
  count++;
  choiceBubbles.addBubble(65+tableModX,(count*20)+75+tableModY,15,0,false);
  choiceBubbles.addBubble(45+tableModX,(count*20)+75+tableModY,15,0,false);
  count++;
  choiceBubbles.addBubble(65+tableModX,(count*20)+75+tableModY,15,0,false);
  choiceBubbles.addBubble(45+tableModX,(count*20)+75+tableModY,15,0,false);
  count++;
  choiceBubbles.addBubble(65+tableModX,(count*20)+75+tableModY,15,0,false);
  choiceBubbles.addBubble(45+tableModX,(count*20)+75+tableModY,15,0,false);
  count++;
  choiceBubbles.addBubble(65+tableModX,(count*20)+75+tableModY,15,0,false);
  choiceBubbles.addBubble(45+tableModX,(count*20)+75+tableModY,15,0,false);
  count++;
  
   //-------
  tableModY =290;
  count = 0;
  tableModX=200;
  //Ass play

  choiceBubbles.addBubble(65+tableModX,(count*20)+75+tableModY,15,0,false);
  choiceBubbles.addBubble(45+tableModX,(count*20)+75+tableModY,15,0,false);
  count++;
  choiceBubbles.addBubble(65+tableModX,(count*20)+75+tableModY,15,0,false);
  choiceBubbles.addBubble(45+tableModX,(count*20)+75+tableModY,15,0,false);
  count++;
  choiceBubbles.addBubble(65+tableModX,(count*20)+75+tableModY,15,0,false);
  choiceBubbles.addBubble(45+tableModX,(count*20)+75+tableModY,15,0,false);
  count++;
  choiceBubbles.addBubble(65+tableModX,(count*20)+75+tableModY,15,0,false);
  choiceBubbles.addBubble(45+tableModX,(count*20)+75+tableModY,15,0,false);
  count++;
  choiceBubbles.addBubble(65+tableModX,(count*20)+75+tableModY,15,0,false);
  choiceBubbles.addBubble(45+tableModX,(count*20)+75+tableModY,15,0,false);
  count++;
  
  //-------
  tableModY = 10;
  count = 0;
  tableModX=400;
  //Restrictive
  
  choiceBubbles.addBubble(65+tableModX,(count*20)+75+tableModY,15,0,false);
  choiceBubbles.addBubble(45+tableModX,(count*20)+75+tableModY,15,0,false);
  count++;
  choiceBubbles.addBubble(65+tableModX,(count*20)+75+tableModY,15,0,false);
  choiceBubbles.addBubble(45+tableModX,(count*20)+75+tableModY,15,0,false);
  count++;
  choiceBubbles.addBubble(65+tableModX,(count*20)+75+tableModY,15,0,false);
  choiceBubbles.addBubble(45+tableModX,(count*20)+75+tableModY,15,0,false);
  count++;
  choiceBubbles.addBubble(65+tableModX,(count*20)+75+tableModY,15,0,false);
  choiceBubbles.addBubble(45+tableModX,(count*20)+75+tableModY,15,0,false);
  count++;
  choiceBubbles.addBubble(65+tableModX,(count*20)+75+tableModY,15,0,false);
  choiceBubbles.addBubble(45+tableModX,(count*20)+75+tableModY,15,0,false);
  count++;
  choiceBubbles.addBubble(65+tableModX,(count*20)+75+tableModY,15,0,false);
  choiceBubbles.addBubble(45+tableModX,(count*20)+75+tableModY,15,0,false);
  count++;
  choiceBubbles.addBubble(65+tableModX,(count*20)+75+tableModY,15,0,false);
  choiceBubbles.addBubble(45+tableModX,(count*20)+75+tableModY,15,0,false);
  count++;
  choiceBubbles.addBubble(65+tableModX,(count*20)+75+tableModY,15,0,false);
  choiceBubbles.addBubble(45+tableModX,(count*20)+75+tableModY,15,0,false);
  count++;
  
  //-------
  tableModY = 220;
  count = 0;
  tableModX=400;
  //Restrictive
  
  choiceBubbles.addBubble(65+tableModX,(count*20)+75+tableModY,15,0,false);
  choiceBubbles.addBubble(45+tableModX,(count*20)+75+tableModY,15,0,false);
  count++;
  choiceBubbles.addBubble(65+tableModX,(count*20)+75+tableModY,15,0,false);
  choiceBubbles.addBubble(45+tableModX,(count*20)+75+tableModY,15,0,false);
  count++;
  choiceBubbles.addBubble(65+tableModX,(count*20)+75+tableModY,15,0,false);
  choiceBubbles.addBubble(45+tableModX,(count*20)+75+tableModY,15,0,false);
  count++;
  choiceBubbles.addBubble(65+tableModX,(count*20)+75+tableModY,15,0,false);
  choiceBubbles.addBubble(45+tableModX,(count*20)+75+tableModY,15,0,false);
  count++;
  
  //-------
  tableModY = 350;
  count = 0;
  tableModX=400;
  //Restrictive
  
  choiceBubbles.addBubble(65+tableModX,(count*20)+75+tableModY,15,0,false);
  choiceBubbles.addBubble(45+tableModX,(count*20)+75+tableModY,15,0,false);
  count++;
  choiceBubbles.addBubble(65+tableModX,(count*20)+75+tableModY,15,0,false);
  choiceBubbles.addBubble(45+tableModX,(count*20)+75+tableModY,15,0,false);
  count++;
  choiceBubbles.addBubble(65+tableModX,(count*20)+75+tableModY,15,0,false);
  choiceBubbles.addBubble(45+tableModX,(count*20)+75+tableModY,15,0,false);
  count++;
  choiceBubbles.addBubble(65+tableModX,(count*20)+75+tableModY,15,0,false);
  choiceBubbles.addBubble(45+tableModX,(count*20)+75+tableModY,15,0,false);
  count++;
  choiceBubbles.addBubble(65+tableModX,(count*20)+75+tableModY,15,0,false);
  choiceBubbles.addBubble(45+tableModX,(count*20)+75+tableModY,15,0,false);
  count++;
  choiceBubbles.addBubble(65+tableModX,(count*20)+75+tableModY,15,0,false);
  choiceBubbles.addBubble(45+tableModX,(count*20)+75+tableModY,15,0,false);
  count++;
  choiceBubbles.addBubble(65+tableModX,(count*20)+75+tableModY,15,0,false);
  choiceBubbles.addBubble(45+tableModX,(count*20)+75+tableModY,15,0,false);
  count++;
  choiceBubbles.addBubble(65+tableModX,(count*20)+75+tableModY,15,0,false);
  choiceBubbles.addBubble(45+tableModX,(count*20)+75+tableModY,15,0,false);
  count++;
  choiceBubbles.addBubble(65+tableModX,(count*20)+75+tableModY,15,0,false);
  choiceBubbles.addBubble(45+tableModX,(count*20)+75+tableModY,15,0,false);
  count++;
  choiceBubbles.addBubble(65+tableModX,(count*20)+75+tableModY,15,0,false);
  choiceBubbles.addBubble(45+tableModX,(count*20)+75+tableModY,15,0,false);
  count++;
  choiceBubbles.addBubble(65+tableModX,(count*20)+75+tableModY,15,0,false);
  choiceBubbles.addBubble(45+tableModX,(count*20)+75+tableModY,15,0,false);
  count++;
  
   //-------
  tableModY = 0;
  count = 0;
  tableModX=600;
  //non c

  choiceBubbles.addBubble(65+tableModX,(count*20)+75+tableModY,15,0,false);
  choiceBubbles.addBubble(45+tableModX,(count*20)+75+tableModY,15,0,false);
  count++;
  choiceBubbles.addBubble(65+tableModX,(count*20)+75+tableModY,15,0,false);
  choiceBubbles.addBubble(45+tableModX,(count*20)+75+tableModY,15,0,false);
  count++;
  choiceBubbles.addBubble(65+tableModX,(count*20)+75+tableModY,15,0,false);
  choiceBubbles.addBubble(45+tableModX,(count*20)+75+tableModY,15,0,false);
  count++;
  choiceBubbles.addBubble(65+tableModX,(count*20)+75+tableModY,15,0,false);
  choiceBubbles.addBubble(45+tableModX,(count*20)+75+tableModY,15,0,false);
  count++;
  choiceBubbles.addBubble(65+tableModX,(count*20)+75+tableModY,15,0,false);
  choiceBubbles.addBubble(45+tableModX,(count*20)+75+tableModY,15,0,false);
  count++;
  
  tableModY = 160;
  count = 0;
  tableModX=600;
  //non c

  choiceBubbles.addBubble(65+tableModX,(count*20)+75+tableModY,15,0,false);
  count++;
  choiceBubbles.addBubble(65+tableModX,(count*20)+75+tableModY,15,0,false);
  count++;
  choiceBubbles.addBubble(65+tableModX,(count*20)+75+tableModY,15,0,false);
  count++;
  choiceBubbles.addBubble(65+tableModX,(count*20)+75+tableModY,15,0,false);
  count++;
  choiceBubbles.addBubble(65+tableModX,(count*20)+75+tableModY,15,0,false);
  count++;
  choiceBubbles.addBubble(65+tableModX,(count*20)+75+tableModY,15,0,false);
  count++;
  choiceBubbles.addBubble(65+tableModX,(count*20)+75+tableModY,15,0,false);
  count++;
  choiceBubbles.addBubble(65+tableModX,(count*20)+75+tableModY,15,0,false);
  count++;
  
  //-------
  tableModY = 360;
  count = 0;
  tableModX=600;
  //non c

  choiceBubbles.addBubble(65+tableModX,(count*20)+75+tableModY,15,0,false);
  choiceBubbles.addBubble(45+tableModX,(count*20)+75+tableModY,15,0,false);
  count++;
  choiceBubbles.addBubble(65+tableModX,(count*20)+75+tableModY,15,0,false);
  choiceBubbles.addBubble(45+tableModX,(count*20)+75+tableModY,15,0,false);
  count++;
  choiceBubbles.addBubble(65+tableModX,(count*20)+75+tableModY,15,0,false);
  choiceBubbles.addBubble(45+tableModX,(count*20)+75+tableModY,15,0,false);
  count++;
  choiceBubbles.addBubble(65+tableModX,(count*20)+75+tableModY,15,0,false);
  choiceBubbles.addBubble(45+tableModX,(count*20)+75+tableModY,15,0,false);
  count++;
  choiceBubbles.addBubble(65+tableModX,(count*20)+75+tableModY,15,0,false);
  choiceBubbles.addBubble(45+tableModX,(count*20)+75+tableModY,15,0,false);
  count++;
  choiceBubbles.addBubble(65+tableModX,(count*20)+75+tableModY,15,0,false);
  choiceBubbles.addBubble(45+tableModX,(count*20)+75+tableModY,15,0,false);
  count++;
  
   //-------
  tableModY = 0;
  count = 0;
  tableModX=900;
  //non c

  choiceBubbles.addBubble(65+tableModX,(count*20)+75+tableModY,15,0,false);
  count++;
  choiceBubbles.addBubble(65+tableModX,(count*20)+75+tableModY,15,0,false);
  count++;
  choiceBubbles.addBubble(65+tableModX,(count*20)+75+tableModY,15,0,false);
  count++;
  choiceBubbles.addBubble(65+tableModX,(count*20)+75+tableModY,15,0,false);
  count++;
  choiceBubbles.addBubble(65+tableModX,(count*20)+75+tableModY,15,0,false);
  count++;
  choiceBubbles.addBubble(65+tableModX,(count*20)+75+tableModY,15,0,false);
  count++;
  choiceBubbles.addBubble(65+tableModX,(count*20)+75+tableModY,15,0,false);
  count++;
  
   //-------
  tableModY =180;
  count = 0;
  tableModX=900;
  //non c

  choiceBubbles.addBubble(65+tableModX,(count*20)+75+tableModY,15,0,false);
  choiceBubbles.addBubble(45+tableModX,(count*20)+75+tableModY,15,0,false);
  count++;
   choiceBubbles.addBubble(65+tableModX,(count*20)+75+tableModY,15,0,false);
  choiceBubbles.addBubble(45+tableModX,(count*20)+75+tableModY,15,0,false);
  count++;
   choiceBubbles.addBubble(65+tableModX,(count*20)+75+tableModY,15,0,false);
  choiceBubbles.addBubble(45+tableModX,(count*20)+75+tableModY,15,0,false);
  count++;
  
  
  //-------
  tableModY = 280;
  count = 0;
  tableModX=900;
  //non c

  choiceBubbles.addBubble(65+tableModX,(count*20)+75+tableModY,15,0,false);
  choiceBubbles.addBubble(45+tableModX,(count*20)+75+tableModY,15,0,false);
  count++;
  choiceBubbles.addBubble(65+tableModX,(count*20)+75+tableModY,15,0,false);
  choiceBubbles.addBubble(45+tableModX,(count*20)+75+tableModY,15,0,false);
  count++;
  choiceBubbles.addBubble(65+tableModX,(count*20)+75+tableModY,15,0,false);
  choiceBubbles.addBubble(45+tableModX,(count*20)+75+tableModY,15,0,false);
  count++;
  choiceBubbles.addBubble(65+tableModX,(count*20)+75+tableModY,15,0,false);
  choiceBubbles.addBubble(45+tableModX,(count*20)+75+tableModY,15,0,false);
  count++;
  choiceBubbles.addBubble(65+tableModX,(count*20)+75+tableModY,15,0,false);
  choiceBubbles.addBubble(45+tableModX,(count*20)+75+tableModY,15,0,false);
  count++;
  choiceBubbles.addBubble(65+tableModX,(count*20)+75+tableModY,15,0,false);
  choiceBubbles.addBubble(45+tableModX,(count*20)+75+tableModY,15,0,false);
  count++;
  
   //-------
  tableModY = 0;
  count = 0;
  tableModX=1150;
  //non c

  choiceBubbles.addBubble(65+tableModX,(count*20)+75+tableModY,15,0,false);
  choiceBubbles.addBubble(45+tableModX,(count*20)+75+tableModY,15,0,false);
  count++;
  choiceBubbles.addBubble(65+tableModX,(count*20)+75+tableModY,15,0,false);
  choiceBubbles.addBubble(45+tableModX,(count*20)+75+tableModY,15,0,false);
  count++;
  choiceBubbles.addBubble(65+tableModX,(count*20)+75+tableModY,15,0,false);
  choiceBubbles.addBubble(45+tableModX,(count*20)+75+tableModY,15,0,false);
  count++;
  choiceBubbles.addBubble(65+tableModX,(count*20)+75+tableModY,15,0,false);
  choiceBubbles.addBubble(45+tableModX,(count*20)+75+tableModY,15,0,false);
  count++;
  choiceBubbles.addBubble(65+tableModX,(count*20)+75+tableModY,15,0,false);
  choiceBubbles.addBubble(45+tableModX,(count*20)+75+tableModY,15,0,false);
  count++;
  choiceBubbles.addBubble(65+tableModX,(count*20)+75+tableModY,15,0,false);
  choiceBubbles.addBubble(45+tableModX,(count*20)+75+tableModY,15,0,false);
  count++;
  choiceBubbles.addBubble(65+tableModX,(count*20)+75+tableModY,15,0,false);
  choiceBubbles.addBubble(45+tableModX,(count*20)+75+tableModY,15,0,false);
  count++;
  choiceBubbles.addBubble(65+tableModX,(count*20)+75+tableModY,15,0,false);
  choiceBubbles.addBubble(45+tableModX,(count*20)+75+tableModY,15,0,false);
  count++;
  
  
   //-------
  tableModY = 200;
  count = 0;
  tableModX=1150;
  //non c

  choiceBubbles.addBubble(65+tableModX,(count*20)+75+tableModY,15,0,false);
  choiceBubbles.addBubble(45+tableModX,(count*20)+75+tableModY,15,0,false);
  count++;
  choiceBubbles.addBubble(65+tableModX,(count*20)+75+tableModY,15,0,false);
  choiceBubbles.addBubble(45+tableModX,(count*20)+75+tableModY,15,0,false);
  count++;
  choiceBubbles.addBubble(65+tableModX,(count*20)+75+tableModY,15,0,false);
  choiceBubbles.addBubble(45+tableModX,(count*20)+75+tableModY,15,0,false);
  count++;
  choiceBubbles.addBubble(65+tableModX,(count*20)+75+tableModY,15,0,false);
  choiceBubbles.addBubble(45+tableModX,(count*20)+75+tableModY,15,0,false);
  count++;
  choiceBubbles.addBubble(65+tableModX,(count*20)+75+tableModY,15,0,false);
  choiceBubbles.addBubble(45+tableModX,(count*20)+75+tableModY,15,0,false);
  count++;
  choiceBubbles.addBubble(65+tableModX,(count*20)+75+tableModY,15,0,false);
  choiceBubbles.addBubble(45+tableModX,(count*20)+75+tableModY,15,0,false);
  count++;
  choiceBubbles.addBubble(65+tableModX,(count*20)+75+tableModY,15,0,false);
  choiceBubbles.addBubble(45+tableModX,(count*20)+75+tableModY,15,0,false);
  count++;
  choiceBubbles.addBubble(65+tableModX,(count*20)+75+tableModY,15,0,false);
  choiceBubbles.addBubble(45+tableModX,(count*20)+75+tableModY,15,0,false);
  count++;
  choiceBubbles.addBubble(65+tableModX,(count*20)+75+tableModY,15,0,false);
  choiceBubbles.addBubble(45+tableModX,(count*20)+75+tableModY,15,0,false);
  count++;
  choiceBubbles.addBubble(65+tableModX,(count*20)+75+tableModY,15,0,false);
  choiceBubbles.addBubble(45+tableModX,(count*20)+75+tableModY,15,0,false);
  count++;
  choiceBubbles.addBubble(65+tableModX,(count*20)+75+tableModY,15,0,false);
  choiceBubbles.addBubble(45+tableModX,(count*20)+75+tableModY,15,0,false);
  count++;
  choiceBubbles.addBubble(65+tableModX,(count*20)+75+tableModY,15,0,false);
  choiceBubbles.addBubble(45+tableModX,(count*20)+75+tableModY,15,0,false);
  count++;
  choiceBubbles.addBubble(65+tableModX,(count*20)+75+tableModY,15,0,false);
  choiceBubbles.addBubble(45+tableModX,(count*20)+75+tableModY,15,0,false);
  count++;
  choiceBubbles.addBubble(65+tableModX,(count*20)+75+tableModY,15,0,false);
  choiceBubbles.addBubble(45+tableModX,(count*20)+75+tableModY,15,0,false);
  count++;
}



class bubblesOBJ {
  //rayList<bubble> bubbles;
  
  constructor() {
    //bubbles = new Array();
  }
  
  addBubble(x,y,scl,state,active){
    bubbles.push(new bubble(x,y,scl,state,active));
  }
  
  render() {
    for (let i = bubbles.length-1; i >= 0; i--) {
      let b = bubbles[i];
      b.drawBubble();
    }
  }
  
  update() {
    for (let i = bubbles.length-1; i >= 0; i--) {
      let b = bubbles[i];
      if(!b.isActive) b.updateState(selectedState);
    }
  }
}



class bubble {
  
  constructor(x,y,scl,state,active) {
    this.xPos = x;
    this.yPos = y;
    this.scale = scl;
    this.currentState = state;
    this.isActive = active;
  }
  
  updateState(state){
    if(dist(this.xPos,this.yPos,mouseX,mouseY)<=this.scale/2)this.currentState = state;
  }
  
  drawBubble(){
    if(this.currentState == 0) fill(255);
    else if (this.currentState == 1) fill('#5F0202');
    else if (this.currentState == 2) fill('#D87614');
    else if (this.currentState == 3) fill('#E7F256');
    else if (this.currentState == 4) fill('#45FF39');
    else if (this.currentState == 5) fill('#88BDE8');
    circle(this.xPos,this.yPos,this.scale);
    if(dist(this.xPos,this.yPos,mouseX,mouseY)<=this.scale/2){fill(0,0,0,100);circle(this.xPos,this.yPos,this.scale);}
    
  }
}

const choiceBubbles = new bubblesOBJ();
bubbles = new Array();
