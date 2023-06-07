function area(){
    let rad=parseInt(document.getElementById('Radius').value);
    let hei=parseInt(document.getElementById('Height').value);
    document.getElementById('result').value=2*3.14*rad*hei+2*3.14*rad**2;
}

function volume(){
    let rad=parseInt(document.getElementById('Radius').value);
    let hei=parseInt(document.getElementById('Height').value);
    document.getElementById('result').value=3.14*rad**2*hei;;
}