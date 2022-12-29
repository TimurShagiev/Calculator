function factorial(n){
    let answer = 1;
    for (let i = 1; i <= n; i++) {
        answer *= i;
    }
    return answer;
}
function check(m, l){
    if (m > l) {
        alert("Число " + m + " больше числа " + l + ". " + "Факториал числа " + m + " равен " + factorial(m))
    }else if (m < l) {
        alert("Число " + l + " больше числа " + m + ". " + "Факториал числа " + l +  " равен " + factorial(l))
    }else {
        alert("Числа равны. Их факториал равен " + factorial(m))
    }
}
function calculator1() {
    let a = prompt("Введите первое число")
    var c = parseFloat(a)
    a = Number(a)
    if (isNaN(a) === true){
        alert("Вы ввели не число.")
        calculator1()
    }else{
        function calculator2() {
            let b = prompt("Введите второе число")
            var d = parseFloat(b)
            b = Number(b)
            if (isNaN(b) === true) {
                alert("Вы ввели не число.")
                calculator2()
            }
            else {
                function calculator3() {
                    let pmmd = prompt("Введите операцию, которую хотите с ними провести(+, -, *, /)")
                    if (pmmd == "+"){
                        alert("Сумма равна " + (c + d))
                        check(c, d)
                    }else if(pmmd == "-"){
                        alert("Разность равна " + (c - d))
                        check(c, d)
                    }else if(pmmd == "*"){
                        alert("Произведение равно " + (c * d))
                        check(c, d)
                    }else if(pmmd == "/"){
                        alert("Частное равно " + (c / d))
                        check(c, d)
                    }else{
                        alert("Вы не правильно ввели операцию.")
                        calculator3()
                    }
                }
                calculator3()
            }
        }
        calculator2()
    }
}
calculator1()
