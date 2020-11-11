function check() 
{
    let text1  = document.getElementById('1');
    let text2 = document.getElementById('2');
    let result = document.getElementById("result");
    if (text1.value.length < 8)
    {
        alert("Needs to be at least length 8");
    }
    else{
    if (text1.value == text2.value)
    {
        result.innerHTML = "Same Pass";
    }
    else
    {
        result.innerHTML = "Not same pass";
    }
}
}