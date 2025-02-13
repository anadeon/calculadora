// função verifica se foi digitado dois operadores consecutivos
function check() {

    const display = document.forms[0].display;
    const operators = ['+', '-', '*', '/', '.'];
    const lastChar = display.value.charAt(display.value.length - 1);
    const secondLastChar = display.value.charAt(display.value.length - 2);

    if (operators.includes(lastChar) && operators.includes(secondLastChar)) {
        display.value = 'syntax error';
    }
}