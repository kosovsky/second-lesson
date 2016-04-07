/**
 * Created by yurii.kosovskyi on 07.04.2016.
 */


var user = {name:'Yurii',age:Math.round(Math.random()*100),isAdmin:true};

//Example 1
for (var i = 1; i <= user.age ;i++) console.log( i + ' ' + (i == 1 ? 'рік' : ( i > 4 ? 'років' : 'роки' )));

//Example 2
for(var i = 1; i <= user.age  ;i++) {
    switch(true) {
        case  i > 1: console.log(i + ( i > 4 ? ' років' : ' роки' )); break;
        default:console.log(i + ' рік');
    }
}

//Example 3
var i = 1;
do {
    if (i > 4) {
        console.log(i + ' років');
    }
    else if (2 <= i && i <= 5) {
        console.log(i + ' роки');
    }
    else {
        console.log(i + ' рік');
    }
    i++;
} while (i <= user.age)
