function telephoneCheck(str) {
    

    return /^(1\s|1)?(\(\d{3}\)|\d{3})(-|\s)?\d{3}(-|\s)?\d{4}$/.test(str);

}
function validador() {
    let numeroValidar = document.getElementById("idNumeroTextField").value;

    if(telephoneCheck(numeroValidar)) alert("Es un formato Valido!")
    else alert("No es un formato valido :C")
}

