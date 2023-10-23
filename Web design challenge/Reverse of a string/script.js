var element=document.getElementById('string')//input element
element.onkeyup=element.style.color='red';
element.onkeyup=Reverse;

//string reverse function
function Reverse(){
    let string=element.value;
    let rev='';

    for(let i=0;i<string.length;i++){
        rev=string[i]+rev;
    }
    document.getElementById('reverse').value=rev;
}
