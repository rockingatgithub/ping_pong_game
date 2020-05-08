//we will define the rod first...
var rods= document.querySelectorAll(".rod");
var rod1= document.getElementById("bar1");
var rod2= document.getElementById("bar2");
//entry point of game...
var st= document.addEventListener('keydown', function(st)
{
    if(st.keyCode == 13)
    {
        moveball();
    }
});
//functions to move rods left and right..
function moverodsright()
    {
        let currentleft1= rod1.getBoundingClientRect().left;
        let currentleft2= rod2.getBoundingClientRect().left;
        if(currentleft2<=490 && currentleft1<=490)
        {
            let targetleft1= currentleft1 + 5;
            let targetleft2= currentleft2 + 5;
            rod1.style.left= targetleft1 + 'px';
            rod2.style.left= targetleft2 + 'px';
        } 
    }

    function moverodsleft()
    {
        let currentleft3= rod1.getBoundingClientRect().left;
        let currentleft4= rod2.getBoundingClientRect().left;
        if(currentleft3>=5 && currentleft4>=5)
        {
            let targetleft3= currentleft3 - 5;
            rod1.style.left= targetleft3 + 'px';
            let targetleft4= currentleft4 - 5;
            rod2.style.left= targetleft4 + 'px';
        } 
    }
//function for rod movement...
let moverods= document.addEventListener('keydown', function(moverods){
    if(moverods.keyCode == 65)
    {
        moverodsleft();
    }
    else
    if(moverods.keyCode == 68)
    {
        moverodsright();
    }
});

//function for ball movement..
var player1score=0;
var player2score=0;
var leftwall=0;
var rightwall=0;
var ball= document.getElementById("ball");
function moveball()
{
   //if ball is at player a aor b 
   if(ball.getBoundingClientRect().top==11)
   {
     if(leftwall==0)
     {
        leftwall=1;
        rightwall=0;
        moveballleftdown();
     }
     else
     {
        rightwall=1;
        leftwall=0;
        moveballrightdown();
     }
   }
   else
   if(ball.getBoundingClientRect().top == 575)
   {
        if(rightwall==0)
        {
            rightwall=1;
            leftwall=0;
            moveballrightup();
        }
        else{
            leftwall=1;
            rightwall=0;
            moveballleftup();
        }
   }
}

//now function to move balls diagonally...
function moveballleftdown()
{
    let currentleft= ball.getBoundingClientRect().left;
    let currenttop= ball.getBoundingClientRect().top;
    let intverval1= setInterval(function(){
        currentleft-=2;
        ball.style.left=currentleft + 'px';
        currenttop+=2;
        ball.style.top=currenttop + 'px';
        if(currentleft<=0)
        {
            clearInterval(intverval1);
            moveballleftdown2();
        }
    }, 5);
}

function moveballleftdown2()
{
    let currentleft= ball.getBoundingClientRect().left;
    let currenttop= ball.getBoundingClientRect().top;
    let intverval1= setInterval(function(){
        currentleft+=2;
        ball.style.left=currentleft + 'px';
        currenttop+=2;
        ball.style.top=currenttop + 'px';
        if(currenttop>=575)
        {
            clearInterval(intverval1);
           // now check if the bar2 is below the ball...
           let ballleftend=ball.getBoundingClientRect().left;
           let ballrightend= ballleftend + 16;
           let rodleftend= rod2.getBoundingClientRect().left;
           let rodrightend= rodleftend + 110;
           if(ballleftend>rodleftend && ballleftend<rodrightend)
           {
               moveballrightup();
           }
           else
           if(ballrightend>rodleftend && ballrightend<rodrightend)
           {
               moveballrightup();
           }
           else{
               window.alert("game over");
           }
        }
    }, 5);
}

//now we will write moveballrightup function...
function moveballrightup()
{
    let currentleft= ball.getBoundingClientRect().left;
    let currenttop= ball.getBoundingClientRect().top;
    let intverval1= setInterval(function()
    {
        currentleft+=2;
        ball.style.left=currentleft + 'px';
        currenttop-=2;
        ball.style.top=currenttop + 'px';
        if(currentleft>=582)
        {
            clearInterval(intverval1);
            moveballrightup2();
        }
    }, 5);
}

function moveballrightup2()
{
    let currentleft= ball.getBoundingClientRect().left;
    let currenttop= ball.getBoundingClientRect().top;
    let intverval1= setInterval(function(){
        currentleft-=2;
        ball.style.left=currentleft + 'px';
        currenttop-=2;
        ball.style.top=currenttop + 'px';
        if(currenttop<12)
        {
            clearInterval(intverval1);
           // now check if the bar2 is below the ball...
           let ballleftend=ball.getBoundingClientRect().left;
           let ballrightend= ballleftend + 16;
           let rodleftend= rod2.getBoundingClientRect().left;
           let rodrightend= rodleftend + 110;
           if(ballleftend>rodleftend && ballleftend<rodrightend)
           {
               moveballleftdown();
           }
           else
           if(ballrightend>rodleftend && ballrightend<rodrightend)
           {
               moveballleftdown();
           }
           else{
               window.alert("game over");
           }
        }
    }, 5);
}