function displayNum(num){
    result.value+=num
}
function clearBox(){
    result.value=""
}
function evaluateExpression(){
    result.value=eval(result.value)
}
function backSpace(){
    result.value=result.value.slice(0,-1)
}