 
 let a=0;
 let b=0;
 let x=1;
 let y=1;
 function bar_result()
{
    document.getElementById("r"+x).innerHTML="";
    document.getElementById("rr"+y).innerHTML="";
    a=Math.floor(Math.random()*3);
    b=Math.floor(Math.random()*3);
    document.getElementById("t2").innerHTML=a;
    document.getElementById("t1").innerHTML=b;
    
    if(x<16)
    {
        x=x+a;
        if(x>16)
    {
        x=x-a;
    }
        console.log(x);
    }
    else
    {
        var audio=new Audio('/mixkit-clapping-fast-480.wav');
        audio.play();
        alert("You won ...");
        
    }
   
    if(y<16)
    {
        y=y+b;
        console.log(y);
    
     if(y>16)
     {
        y=y-b;
     }
    }
    else
    {
        alert("You lost. Better luck next time ...");
    }
    document.getElementById("r"+x).innerHTML="You";
    document.getElementById("rr"+y).innerHTML="Comp";
    const you= document.getElementById("r"+x);
    you.style.backgroundColor='#befb46';
    you.style.border='1px solid black';
    you.style.borderRadius='19px';
    const c= document.getElementById("rr"+y);
    c.style.border='1px solid black';
    c.style.backgroundColor='#ff4293';
    c.style.borderRadius='19px';
    
}