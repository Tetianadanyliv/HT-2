let numberN = Number(prompt("Please, enter integer value N"));
while (Number.isInteger(numberN) === false){
    alert ('The value is not suitable!');
    numberN = Number(prompt("Please, enter integer value N"));
} 

let numberM = Number(prompt("Please, enter integer value M"));
while (Number.isInteger(numberM) === false){
    alert ('The value is not suitable!');
    numberM = Number(prompt("Please, enter integer value M"));
} 

const missEvenNumber = confirm("Чи потрібно пропускати парні числа?");

    let sum = 0;
    for (let i = numberN; i <= numberM; i++) {
        if ((i % 2)  ==0) {
            sum = sum;
        }
        else (i % 2 ==!0)
            sum = sum + i;
        }
    console.log (sum)


    