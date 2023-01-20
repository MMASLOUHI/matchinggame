let v=document.getElementById('case');
var id=0;
let verify=0;
var count=0;
var score=0;
var cards = document.querySelectorAll('.flip-card-inner');
[...cards].forEach((card)=>{
    card.addEventListener( 'click', function() {
        
    card.classList.toggle('is-flipped');


});
});
function rollback(a,b){
setTimeout(function(){
    document.getElementsByClassName("flip-card-inner")[a-1].classList.toggle('is-flipped');
    document.getElementsByClassName("flip-card-inner")[b-1].classList.toggle('is-flipped');
},500);}

// card.classList.remove('is-flipped');
let z=0;
let w=0;
var o=0;
let t=["./images/bmw.png","./images/bmw.png","./images/ferrari.png","./images/ferrari.png","./images/ford.png","./images/ford.png","./images/mercedes.png","./images/mercedes.png","./images/minicooper.png","./images/minicooper.png","./images/r4.png","./images/r4.png","./images/rolls.png","./images/rolls.png","./images/rimac.png","./images/rimac.png"]
// document.getElementById('1').src=t[0];
let b=[];
while(b.length<16){
    var c=0; // indice pour comparaison
    let a= Math.floor(Math.random() * 16) + 1;// generation d'un nombre aleatoire entre 16 et 1
    for(var i=0; i<=b.length; i++){//verification de l'existence du nombre generé dans le tableau b
        if(b[i]==a){        
            c=1;
        }  
    }
    if(c==0){ //ca veut dire qu'on a pas trouver d'alias dans le tableau b , et par consequent on l'introduit dans le tableau b
        b.push(a);
    }
}
    console.log(b);
for( var i=0;  i<=b.length; i++){
    var q=b[i];
    document.getElementById(q).src= t[i];
}
    console.log('hhhh');
    // document.getElementsById(2).removeEventListener("click", cards);
    // document.getElementsById(2).removeattribute
function check(id){
    var x=document.getElementById(id).id;
    var g=document.getElementById(id).id;

    console.log('previous'+o);
    console.log('actuel'+x);
    count++;
    if (z!=0){
        if(z==x){
            // document.getElementById(id).style.cards-events =='none';
            document.getElementsByClassName("flip-card-inner")[o-1].style.display='none';
            document.getElementsByClassName("flip-card-inner")[x-1].style.display='none';
            z=0; w=0; o=0;
            count=0;
            score=score+5;
            document.getElementById('score').innerHTML=score;
            
        
        }
        else{
            for(var i=0; i<=b.length; i++){
                if(b[i]==x){  
                    j=i;
                }  
            }
            if(j%2==0){
                k=j+1;  
            }else {
                k=j-1;
            }
            console.log('searched twin in:'+b[k]);
            score=score-1;
            document.getElementById('score').innerHTML=score;
            count++;
            if(count==3){
                rollback(o,g);
                count=0;
            } 
            console.log('not the same');
            z=0;w=0; o=0; x=0;  
        }
    }
    else{
    console.log(x);
    verify=1;
    for(var i=0; i<=b.length; i++){
        if(b[i]==x){  
            j=i;
        }  
    }
    if(j%2==0){
        k=j+1;  
    }else {
        k=j-1;
    }
    console.log('valeur chercchh');
    console.log(b[k]);
    z=b[k]; 
    if(g!=o){
        o= g;
    }
    }
    // document.getElementsByClassName('counterr')[0].innerHtml=score;
    // console.log('score is'+score)
    // var kkh=parseFloat(gh)+score;
    // console.log(kkh);
    // document.getElementById('counterr').value=kkh;

}











