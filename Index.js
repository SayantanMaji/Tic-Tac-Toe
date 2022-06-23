var sflag = 0,f1=0,f2=0,f3=0,f4=0,f5=0,f6=0,f7=0,f8=0,f9=0;
var si=[10,11,2,3,4,5,6,7,8,9],i=0;
var p1=0,p2=0;
console.log(si);
 function switcher(id)
{
    switch(id)
    {
    case 'b1':
        if(f1==0)
        {
            f1=1;
            i=1;
            change('b1',i);
            break;
        }
        else if(f1==1)
        {
            alert("Box filled");
            break;
        }
        else
        {
            alert("Game over");
            break
        }
    case 'b2':
        if(f2==0)
        {
            f2=1;
            i=2;
            change('b2',i);
            break;
        }
        else if(f2==1)
        {
            alert("Box filled");
            break;
        }
        else
        {
            alert("Game over");
            break
        }
    case 'b3':
        if(f3==0)
        {   
            f3=1;
            i=3;
            change('b3',i);
            break;
        }
        else if(f3==1)
        {
            alert("Box filled");
            break;
        }
        else
    {
        alert("Game over");
        break
        }
    case 'b4':
        if(f4==0)
        {
            f4=1;
            i=4;
            change('b4',i);
            break;
        }
        else if(f4==1)
        {
            alert("Box filled");
            break;
        }
        else
        {
            alert("Game over");
            break
        }
    case 'b5':
        if(f5==0)
        {
            f5=1;
            i=5;
            change('b5',i);
            break;
        }
        else if(f5==1)
        {
            alert("Box filled");
            break;
        }
        else
        {
            alert("Game over");
            break
        }
    case 'b6':
        if(f6==0)
        {
            f6=1;
            i=6;
            change('b6',i);
            break;
        }
        else if(f6==1)
        {
            alert("Box filled");
            break;
        }
        else
        {
            alert("Game over");
            break
        }
    case 'b7':
        if(f7==0)
        {
            f7=1;
            i=7;
            change('b7',i);
            break;
        }
        else if(f7==1)
        {
            alert("Box filled");
            break;
        }
        else
        {
            alert("Game over");
            break
        }
    case 'b8':
        if(f8==0)
        {
            f8=1;
            i=8;
            change('b8',i);
            break;
        }
        else if(f8==1)
        {
            alert("Box filled");
            break;
        }
        else
        {
            alert("Game over");
            break
        }
    case 'b9':
        if(f9==0)
        {
            f9=1;
            i=9;
            change('b9',i);
            break;
        }
        else if(f9==1)
        {
            alert("Box filled");
            break;
        }
        else
        {
            alert("Game over");
            break
        }
            }
}
function change(id,ind) 
{
    var elem = document.getElementById(id);
    document.getElementById(id).style.fontSize="xxx-large";
    document.getElementById(id).style.fontWeight="700";
    if(sflag == 0 )
    {
        elem.value = "X"
        document.getElementById(id).style.color="#1fd625";
        si[ind]=1;
        sflag = 1;
        win(si);
    }
    else
    {
        elem.value = "O";
        document.getElementById(id).style.color="#ff0000";
        si[ind]=0;
        sflag = 0;
        win(si);
    }
}
function win(si)
{
    if((si[1]==si[2] && si[2]==si[3])||(si[4]==si[5] && si[5]==si[6])||(si[7]==si[8] && si[8]==si[9])||(si[1]==si[4] && si[4]==si[7])||(si[2]==si[5] && si[5]==si[8])||(si[3]==si[6] && si[6]==si[9])||(si[1]==si[5] && si[5]==si[9])||(si[3]==si[5] && si[5]==si[7]))
    {
        if(si[i]==0)
        { 
            document.getElementById("ch").innerHTML="Winner : Player 2 -- gets 3 points";
            p2+=3;
            document.getElementById("p2s").innerHTML="Player 2 : "+p2;
            document.getElementById("p2s").style.color="#ff0000";
        }
        if(si[i]==1)
        {
            document.getElementById("ch").innerHTML="Winner : Player 1 -- gets 3 points";
            p1+=3;
            document.getElementById("p1s").innerHTML="Player 1 : "+p1;
            document.getElementById("p1s").style.color="#ff0000";
        }
        f1=f2=f3=f4=f5=f6=f7=f8=f9=2;
    }
    else if(f1==1 && f2==1 && f3==1 && f4==1 && f5==1 && f6==1 && f7==1 && f8==1 && f9==1)
    {
        document.getElementById("ch").innerHTML="Game Tied : Both get 1 point";;
        p2+=1;
        p1+=1;
        document.getElementById("p1s").innerHTML="Player 1 : "+p1;
        document.getElementById("p1s").style.color="#0000ff";
        document.getElementById("p2s").innerHTML="Player 2 : "+p2;
        document.getElementById("p2s").style.color="#0000ff";
    }
    if(p1>=15 && p1>p2)
    {
        document.getElementById("ch").innerHTML="Player 1 WINS the MATCH";
    }
    if(p2>=15 && p2>p1)
    {
        document.getElementById("ch").innerHTML="Player 2 WINS the MATCH";
    }
}
function reset()
{
    var e1 = document.getElementById('b1');
    e1.value=""
    f1=0;
    var e2 = document.getElementById('b2');
    e2.value=""
    f2=0;
    var e3 = document.getElementById('b3');
    e3.value=""
    f3=0;
    var e4 = document.getElementById('b4');
    e4.value=""
    f4=0;
    var e5 = document.getElementById('b5');
    e5.value=""
    f5=0;
    var e6 = document.getElementById('b6');
    e6.value=""
    f6=0;
    var e7 = document.getElementById('b7');
    e7.value=""
    f7=0;
    var e8 = document.getElementById('b8');
    e8.value=""
    f8=0;
    var e9 = document.getElementById('b9');
    e9.value=""
    f9=0;
    si=[10,11,2,3,4,5,6,7,8,9];
    i=0;
    sflag=0;
    document.getElementById("ch").innerHTML=" ";
    document.getElementById("p1s").style.color="black";
    document.getElementById("p2s").style.color="black";
    if((p1 >= 15 || p2>=15) && (p1-p2>=1 || p2-p1>=1))
    {
        resetgame();
    }

}
function resetgame()
{
    var e1 = document.getElementById('b1');
    e1.value=""
    f1=0;
    var e2 = document.getElementById('b2');
    e2.value=""
    f2=0;
    var e3 = document.getElementById('b3');
    e3.value=""
    f3=0;
    var e4 = document.getElementById('b4');
    e4.value=""
    f4=0;
    var e5 = document.getElementById('b5');
    e5.value=""
    f5=0;
    var e6 = document.getElementById('b6');
    e6.value=""
    f6=0;
    var e7 = document.getElementById('b7');
    e7.value=""
    f7=0;
    var e8 = document.getElementById('b8');
    e8.value=""
    f8=0;
    var e9 = document.getElementById('b9');
    e9.value=""
    f9=0;
    si=[10,1,2,3,4,5,6,7,8,9];
    i=0;
    sflag=0;
    document.getElementById("ch").innerHTML=" ";
    p1=0;
    p2=0;
    document.getElementById("p1s").innerHTML="Player 1 : "+p1;
    document.getElementById("p2s").innerHTML="Player 2 : "+p2;

}