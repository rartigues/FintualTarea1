

let input = '( () ( () ) () )';

let valido=true;
let valor;
let stack= []
for (let i = 0; i < input.length; i++) {
    if(input[i]=='(' || input[i]==')') valor= input[i];
    else continue;
    if(valor== '(') {
        stack.push(input[i]);
        console.log(stack);
    } else {
        //')'?
        if(stack.length == 0) {
            valido=false; //HABIA ) PERO NO ( malo
            break;
        }
        else {
            stack.pop();
        }

    }

}

if(stack.length == 0) valido=false;
if(valido) console.log('Balanceado')
else console.log('No balanceado')
