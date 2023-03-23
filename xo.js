let title = document.getElementById('title');

let i1 = document.getElementById('item1');
let i2 = document.getElementById('item2');
let i3 = document.getElementById('item3');

let i4 = document.getElementById('item4');
let i5 = document.getElementById('item5');
let i6 = document.getElementById('item6');

let i7 = document.getElementById('item7');
let i8 = document.getElementById('item8');
let i9 = document.getElementById('item9');
let w =[i1,i2,i3,i4,i5,i6,i7,i8,i9];
//console.log(i1);
function win(n1,n2,n3)
{
    if(w[n1-1].innerHTML === 'o')
    {
    title.innerHTML = 'o is winner';  
    }else {
        title.innerHTML = 'x is winner';    
    }
   //title.innerHTML = `${n1.innerHTML}` + 'is winner' ;
   document.getElementById('item' +n1).style.background = '#000';
   document.getElementById('item' +n2).style.background = '#000';
   document.getElementById('item' +n3).style.background = '#000';
   setInterval(function(){title.innerHTML += '.'},1000);
   setTimeout(function(){location.reload()},4000);
}
let turn = 'x';
function winner()
{
    if(i1.innerHTML === i2.innerHTML && i2.innerHTML === i3.innerHTML && i1.innerHTML != '')
    {
        win(1,2,3);
    }
    if(i6.innerHTML === i4.innerHTML && i4.innerHTML === i5.innerHTML && i5.innerHTML != '')
    {
        win(4,5,6);
    }
    if(i9.innerHTML === i7.innerHTML && i7.innerHTML === i8.innerHTML && i8.innerHTML != '')
    {
        win(7,8,9);
    }
    if(i1.innerHTML === i4.innerHTML && i4.innerHTML === i7.innerHTML && i7.innerHTML != '')
    {
        win(1,4,7);
    }
    if(i2.innerHTML === i5.innerHTML && i5.innerHTML === i8.innerHTML && i8.innerHTML != '')
    {
        win(2,5,8);
    }
    if(i3.innerHTML === i6.innerHTML && i6.innerHTML === i9.innerHTML && i9.innerHTML != '')
    {
        win(3,6,9);
    }
    if(i1.innerHTML === i5.innerHTML && i9.innerHTML === i1.innerHTML && i1.innerHTML != '')
    {
        win(1,5,9);
    }
    if(i3.innerHTML === i5.innerHTML && i3.innerHTML === i7.innerHTML && i7.innerHTML != '')
    {
        win(3,5,7);
    }


}

function game(id)
{
    let element = document.getElementById(id);
    if(turn === 'x' && element.innerHTML ===''){
        //console.log('hi');
        element.innerHTML = 'x';
        turn = 'o';
        title.innerHTML = ' turn  O';

    }else if(turn === 'o' && element.innerHTML ==='')
    {
        element.innerHTML = 'o';
        turn = 'x';
        title.innerHTML = ' turn  X';
    }
    winner();
}