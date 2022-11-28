
let screen=document.getElementById('screen');
let buttons = document.querySelectorAll('button');
 let screenValue='';
 for(item of buttons){
    item.addEventListener('click',(e)=>{
        buttonText=e.target.innerText;
        console.log('button text is',buttonText);
        // if(buttonText=='X'){
        //     buttonText='*';
        //     screenValue= buttonText;
        //     screen.value+=screenValue;
        //    // console.log(screen);
        // }
        // else if(buttonText=='C'){
        //     screenValue = ""
        //     screen.value= screenValue;

        // }
        // else if(buttonText==')'){
        //     screenValue = ")"
        //     screen.value+= screenValue;


        // }
        // else if(buttonText=='('){
        //     screenValue = "("
        //     screen.value+= screenValue;


        // }
        // else if(buttonText=='del'){
        //     screenValue = screenValue.slice(0,(screenValue.length-1));
        //     screen.value= screenValue;


        // }
        // else {
        //     screen.value += buttonText;
        //     screen.value=screenValue;
        //     //alert(screen.Value)
        // }

        switch(buttonText){
            case '(':
                screenValue='(';
                screen.value+=screenValue;
                break;
            case ')':
                screenValue=')';
                screen.value+=screenValue;
                break;
            case 'C':
                screenValue="";
                screen.value=screenValue;
                break;
            case '/':
                screenValue='/';
                screen.value+=screenValue;
                break;
            case 'X':
                screenValue='*';
                screen.value+=screenValue;
                break;
            case '-':
                screenValue='-';
                screen.value+=screenValue;
                break;
            case '+':
                screenValue='+';
                screen.value+=screenValue;
                break;
            case '=':

                //console.log(screen.value);
                try{
                    screen.value= eval(screen.value);

                }
                catch(err){
                    screenValue="";
                    screen.value=screenValue;
                    alert("invalid inout");
                }
                  
                 break;
            case 'del':
                screenValue= screenValue.slice(0,(screenValue.length-1));
                screen.value=screenValue;
                break;
            default:
                screenValue = buttonText;
                screen.value += screenValue;
                break;
          
            
        }
    })
 }