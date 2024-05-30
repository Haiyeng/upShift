var iphone, allTime, createAccount, createAccountFill, details, homeScreen, map1, map2, map3, myAccountDeliveries, myAccountInsights, myAccountSetting, onboarding, popUp, recent, setGoal, signIn, signInFill, stats, navBar;
var stage = 1;
var recentY = 450;
var statsY = 280;
var allTimeY = 280;

function preload(){
    iphone = loadImage("iphoneFrame.png");
    allTime = loadImage("allTime.png");
    createAccount = loadImage("createAccount.png");
    createAccountFill = loadImage("createAccountFill.png");
    details = loadImage("details.png");
    homeScreen = loadImage("homeScreen.png");
    map1 = loadImage("map1.png");
    map2 = loadImage("map2.png");
    map3 = loadImage("map3.png");
    myAccountDeliveries = loadImage("myAccountDeliveries.png");
    myAccountInsights = loadImage("myAccountInsights.png");
    myAccountSetting = loadImage("myAccountSetting.png");
    onboarding = loadImage("onboarding.png");
    popUp = loadImage("popUp.png");
    recent = loadImage("recent.png");
    setGoal = loadImage("setGoal.png");
    signIn = loadImage("signIn.png");
    signInFill = loadImage("signInFill.png");
    stats = loadImage("stats.png");
    navBar = loadImage("navBar.png");
}

function setup(){
    createCanvas(439, 883); 
}

function draw(){
    

    if (stage == 1){
        image(onboarding, 24, 20, 390, 844);

        //Masking
        image(iphone, 0 ,0, 439, 885); 

        
    }

    //Sign In
    if (stage == 2){
        image(signIn, 24, 20, 390, 844);

        //Masking
        image(iphone, 0 ,0, 439, 885); 
       
    }

    //Sign In Fill
    if (stage == 3){
        image(signInFill, 24, 20, 390, 844);

        //Masking
        image(iphone, 0 ,0, 439, 885); 
    }

    //Create Account
    if (stage == 4){
        image(createAccount, 24, 20, 390, 844);

        //Masking
        image(iphone, 0 ,0, 439, 885); 
    }

    //Create Account Fill
    if (stage == 5){
        image(createAccountFill, 24, 20, 390, 844);

        //Masking
        image(iphone, 0 ,0, 439, 885); 
    }

    //PopUp
    if (stage == 6){
        image(popUp, 24, 20, 390, 844);
        
        //Masking
        image(iphone, 0 ,0, 439, 885); 
       
    }

     //Home
     if (stage == 7){
        background(243);
        image(recent, 46, recentY, 360, 550);

        fill(243, 243, 243);
        noStroke();
        rect(24, 20, 390, 404);
        image(homeScreen, 46, 80, 360, 344);

        //cover
        noStroke();
        fill(243);
        rect(0, 860, 439, 23); 
        fill(243);
        rect(0, 0, 439, 23);

        //navBar
        image(navBar, 24, 802, 390, 62);
          
        //Masking
        image(iphone, 0 ,0, 439, 885); 
    }

    //Details
    if (stage == 8){
        background(243);
        image(details, 24, 20, 390, 844);

        //Masking
        image(iphone, 0 ,0, 439, 885);
    }

     //Map1
     if (stage == 9){
        background(243);
        image(map1, 24, 20, 390, 844);

        //Masking
        image(iphone, 0 ,0, 439, 885);
        
    }

     //Map2
     if (stage == 10){
        background(243);
        image(map2, 24, 20, 390, 844);

        //Masking
        image(iphone, 0 ,0, 439, 885);
    }

     //Map3
     if (stage == 11){
        background(243);
        image(map3, 24, 20, 390, 844);

        //Masking
        image(iphone, 0 ,0, 439, 885);  
    }

    //Account - setting
    if (stage == 12){
        background(243);
        image(myAccountSetting, 24, 20, 390, 844);

        //Masking
        image(iphone, 0 ,0, 439, 885);  
    }

    //Account - insights
    if (stage == 13){
        background(243);
        image(stats, 40, statsY, 360, 1069);
        image(myAccountInsights, 24, 20, 390, 254);

        //cover
        noStroke();
        fill(243);
        rect(0, 860, 439, 23);
        fill(243);
        rect(0, 0, 439, 23); 

        //navBar
        image(navBar, 24, 802, 390, 62);

        //Masking
        image(iphone, 0 ,0, 439, 885);  
    }

    //Account - deliveries
    if (stage == 14){
        background(243);
        image(allTime, 40, allTimeY, 360, 1019);
        image(myAccountDeliveries, 24, 20, 390, 254);

        //cover
        noStroke();
        fill(243);
        rect(0, 860, 439, 23);
        fill(243);
        rect(0, 0, 439, 23);

        //navBar
        image(navBar, 24, 802, 390, 62);

        //Masking
        image(iphone, 0 ,0, 439, 885);   
    }

    //Set profit goals
    if (stage == 15){
        background(243);
        image(setGoal, 24, 20, 390, 844);

        //Masking
        image(iphone, 0 ,0, 439, 885);  
    }

    updateCursor();


}


function mouseWheel(event){
    recentY -= event.delta;
    if(recentY <= 252){
        recentY = 252;
    }
    if(recentY >= 450){
        recentY = 450;
    }

    statsY -= event.delta;
    if(statsY <= -269){
        statsY = -269;
    }
    if(statsY >= 280){
        statsY = 280;
    }

    allTimeY -= event.delta;
    if(allTimeY <= -216){
        allTimeY = -216;
    }
    if(allTimeY >= 280){
        allTimeY = 280;
    }
    return false;
}

function updateCursor() {
    let hovering = false;

    if (stage == 1 && mouseX >= 88 && mouseX <= 352 && mouseY >= 594 && mouseY <= 642) hovering = true;
    else if (stage == 1 && mouseX >= 138 && mouseX <= 302 && mouseY >= 642 && mouseY <= 690) hovering = true;
    else if (stage == 2 && mouseX >= 68 && mouseX <= 371 && mouseY >= 404 && mouseY <= 452) hovering = true;
    else if (stage == 2 && mouseX >= 46 && mouseX <= 70 && mouseY >= 85 && mouseY <= 109) hovering = true;
    else if (stage == 3 && mouseX >= 46 && mouseX <= 70 && mouseY >= 85 && mouseY <= 109) hovering = true;
    else if (stage == 3 && mouseX >= 114 && mouseX <= 324 && mouseY >= 612 && mouseY <= 652) hovering = true;
    else if (stage == 4 && mouseX >= 68 && mouseX <= 371 && mouseY >= 305 && mouseY <= 353) hovering = true;
    else if (stage == 4 && mouseX >= 46 && mouseX <= 70 && mouseY >= 80 && mouseY <= 104) hovering = true;
    else if (stage == 5 && mouseX >= 88 && mouseX <= 352 && mouseY >= 746 && mouseY <= 794) hovering = true;
    else if (stage == 6 && mouseX >= 114 && mouseX <= 324 && mouseY >= 462 && mouseY <= 502) hovering = true;
    else if (stage == 7 && mouseX >= 57 && mouseX <= 392 && mouseY >= 214 && mouseY <= 409) hovering = true;
    else if (stage == 8 && mouseX >= 46 && mouseX <= 70 && mouseY >= 85 && mouseY <= 109) hovering = true;
    else if (stage == 7 && mouseX >= 203 && mouseX <= 233 && mouseY >= 818 && mouseY <= 848) hovering = true;
    else if (stage == 8 && mouseX >= 203 && mouseX <= 233 && mouseY >= 818 && mouseY <= 848) hovering = true;
    else if (stage == 10 && mouseX >= 203 && mouseX <= 233 && mouseY >= 818 && mouseY <= 848) hovering = true;
    else if (stage == 11 && mouseX >= 203 && mouseX <= 233 && mouseY >= 818 && mouseY <= 848) hovering = true;
    else if (stage == 12 && mouseX >= 203 && mouseX <= 233 && mouseY >= 818 && mouseY <= 848) hovering = true;
    else if (stage == 13 && mouseX >= 203 && mouseX <= 233 && mouseY >= 818 && mouseY <= 848) hovering = true;
    else if (stage == 14 && mouseX >= 203 && mouseX <= 233 && mouseY >= 818 && mouseY <= 848) hovering = true;
    else if (stage == 9 && mouseX >= 122 && mouseX <= 152 && mouseY >= 818 && mouseY <= 848) hovering = true;
    else if (stage == 10 && mouseX >= 122 && mouseX <= 152 && mouseY >= 818 && mouseY <= 848) hovering = true;
    else if (stage == 11 && mouseX >= 122 && mouseX <= 152 && mouseY >= 818 && mouseY <= 848) hovering = true;
    else if (stage == 12 && mouseX >= 122 && mouseX <= 152 && mouseY >= 818 && mouseY <= 848) hovering = true;
    else if (stage == 13 && mouseX >= 122 && mouseX <= 152 && mouseY >= 818 && mouseY <= 848) hovering = true;
    else if (stage == 14 && mouseX >= 122 && mouseX <= 152 && mouseY >= 818 && mouseY <= 848) hovering = true;
    else if (stage == 7 && mouseX >= 286 && mouseX <= 316 && mouseY >= 818 && mouseY <= 848) hovering = true;
    else if (stage == 8 && mouseX >= 286 && mouseX <= 316 && mouseY >= 818 && mouseY <= 848) hovering = true;
    else if (stage == 9 && mouseX >= 286 && mouseX <= 316 && mouseY >= 818 && mouseY <= 848) hovering = true;
    else if (stage == 10 && mouseX >= 286 && mouseX <= 316 && mouseY >= 818 && mouseY <= 848) hovering = true;
    else if (stage == 11 && mouseX >= 286 && mouseX <= 316 && mouseY >= 818 && mouseY <= 848) hovering = true;
    else if (stage == 12 && mouseX >= 163 && mouseX <= 275 && mouseY >= 146 && mouseY <= 258) hovering = true;
    else if (stage == 14 && mouseX >= 163 && mouseX <= 275 && mouseY >= 146 && mouseY <= 258) hovering = true;
    else if (stage == 15 && mouseX >= 46 && mouseX <= 70 && mouseY >= 85 && mouseY <= 109) hovering = true;
    else if (stage == 12 && mouseX >= 287 && mouseX <= 399 && mouseY >= 146 && mouseY <= 258) hovering = true;
    else if (stage == 13 && mouseX >= 163 && mouseX <= 399 && mouseY >= 146 && mouseY <= 258) hovering = true;
    else if (stage == 14 && mouseX >= 39 && mouseX <= 151 && mouseY >= 146 && mouseY <= 258) hovering = true;
    else if (stage == 13 && mouseX >= 348 && mouseX <= 372 && mouseY >= 632 && mouseY <= 654) hovering = true;
    else if (stage == 9 && mouseX >= 350 && mouseX <= 400 && mouseY >= 640 && mouseY <= 690) hovering = true;
    else if (stage == 11 && mouseX >= 375 && mouseX <= 499 && mouseY >= 483 && mouseY <= 507) hovering = true;

    if (hovering) {
        cursor(HAND);
    } else {
        cursor(ARROW);
    }
}

function mouseClicked(){
   if (stage == 1 && mouseX >= 88 && mouseX <= 352 && mouseY >= 594 && mouseY <= 642){
    stage = 2;
   }
   else if (stage == 1 && mouseX >= 138 && mouseX <= 302 && mouseY >= 642 && mouseY <= 690){
    stage = 4;
   }
   else if (stage == 2 && mouseX >= 68 && mouseX <= 371 && mouseY >= 404 && mouseY <= 452){
    stage = 3;
   }
   else if (stage == 2 && mouseX >= 46 && mouseX <= 70 && mouseY >= 85 && mouseY <= 109){
    stage = 1;
   }
   else if (stage == 3 && mouseX >= 46 && mouseX <= 70 && mouseY >= 85 && mouseY <= 109){
    stage = 1;
   }
   else if (stage == 3 && mouseX >= 114 && mouseX <= 324 && mouseY >= 612 && mouseY <= 652){
    stage = 7;
   }
   else if (stage == 4 && mouseX >= 68 && mouseX <= 371 && mouseY >= 305 && mouseY <= 353){
    stage = 5;
   }
   else if (stage == 4 && mouseX >= 46 && mouseX <= 70 && mouseY >= 80 && mouseY <= 104
    || stage == 5 && mouseX >= 46 && mouseX <= 70 && mouseY >= 80 && mouseY <= 104){
    stage = 1;
   }
   else if (stage == 5 && mouseX >= 88 && mouseX <= 352 && mouseY >= 746 && mouseY <= 794){
    stage = 6;
   }
   else if (stage == 6 && mouseX >= 114 && mouseX <= 324 && mouseY >= 462 && mouseY <= 502){
    stage = 3;
   }
   else if (stage == 7 && mouseX >= 57 && mouseX <= 392 && mouseY >= 214 && mouseY <= 409){
    stage = 8;
   }
   else if (stage == 8 && mouseX >= 46 && mouseX <= 70 && mouseY >= 85 && mouseY <= 109){
    stage = 7;
   }
   else if (stage == 7 && mouseX >= 203 && mouseX <= 233 && mouseY >= 818 && mouseY <= 848
    || stage == 8 && mouseX >= 203 && mouseX <= 233 && mouseY >= 818 && mouseY <= 848
    || stage == 10 && mouseX >= 203 && mouseX <= 233 && mouseY >= 818 && mouseY <= 848
    || stage == 11 && mouseX >= 203 && mouseX <= 233 && mouseY >= 818 && mouseY <= 848
    || stage == 12 && mouseX >= 203 && mouseX <= 233 && mouseY >= 818 && mouseY <= 848
    || stage == 13 && mouseX >= 203 && mouseX <= 233 && mouseY >= 818 && mouseY <= 848
    || stage == 14 && mouseX >= 203 && mouseX <= 233 && mouseY >= 818 && mouseY <= 848){
    stage = 9;
   }
   else if (stage == 9 && mouseX >= 122 && mouseX <= 152 && mouseY >= 818 && mouseY <= 848
    || stage == 10 && mouseX >= 122 && mouseX <= 152 && mouseY >= 818 && mouseY <= 848
    || stage == 11 && mouseX >= 122 && mouseX <= 152 && mouseY >= 818 && mouseY <= 848
    || stage == 12 && mouseX >= 122 && mouseX <= 152 && mouseY >= 818 && mouseY <= 848
    || stage == 13 && mouseX >= 122 && mouseX <= 152 && mouseY >= 818 && mouseY <= 848
    || stage == 14 && mouseX >= 122 && mouseX <= 152 && mouseY >= 818 && mouseY <= 848){
    stage = 7;
   }
   else if (stage == 7 && mouseX >= 286 && mouseX <= 316 && mouseY >= 818 && mouseY <= 848
    || stage == 8 && mouseX >= 286 && mouseX <= 316 && mouseY >= 818 && mouseY <= 848
    || stage == 9 && mouseX >= 286 && mouseX <= 316 && mouseY >= 818 && mouseY <= 848
    || stage == 10 && mouseX >= 286 && mouseX <= 316 && mouseY >= 818 && mouseY <= 848
    || stage == 11 && mouseX >= 286 && mouseX <= 316 && mouseY >= 818 && mouseY <= 848){
    stage = 12;
   }
   else if (stage == 12 && mouseX >= 163 && mouseX <= 275 && mouseY >= 146 && mouseY <= 258
    || stage == 14 && mouseX >= 163 && mouseX <= 275 && mouseY >= 146 && mouseY <= 258
    || stage == 15 && mouseX >= 46 && mouseX <= 70 && mouseY >= 85 && mouseY <= 109){
    stage = 13;
   }
   else if (stage == 12 && mouseX >= 287 && mouseX <= 399 && mouseY >= 146 && mouseY <= 258
    || stage == 13 && mouseX >= 163 && mouseX <= 399 && mouseY >= 146 && mouseY <= 258){
    stage = 14;
   }
   else if (stage == 14 && mouseX >= 39 && mouseX <= 151 && mouseY >= 146 && mouseY <= 258
    || stage == 13 && mouseX >= 39 && mouseX <= 151 && mouseY >= 146 && mouseY <= 258){
    stage = 12;
   }
   else if (stage == 13 && mouseX >= 348 && mouseX <= 372 && mouseY >= 632 && mouseY <= 654){
    stage = 15;
   }
   else if (stage == 9 && mouseX >= 350 && mouseX <= 400 && mouseY >= 640 && mouseY <= 690){
    stage = 11;
   }
   else if (stage == 11 && mouseX >= 375 && mouseX <= 499 && mouseY >= 483 && mouseY <= 507){
    stage = 10;
   }
}


