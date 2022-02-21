function start() {
    // Math: https://www.w3schools.com/js/js_math.asp
    // Demonstrate the use of round, ceil, floor, trunc, sign
    // pow, min, and random and display to the appropriate paragraphs


    let round = Math.round(3.1);
    let ceil = Math.ceil(4.4);
    let floor = Math.floor(8.8);
    let trunc = Math.trunc(44.8);
    let sign = Math.sign(-88);
    let pow = Math.pow(4, 4);
    let min = Math.min(4, 44, 77, 88);
    let random = Math.random();


    document.getElementById("round").innerText = round;
    document.getElementById("ceil").innerText = ceil;
    document.getElementById("floor").innerText = floor;
    document.getElementById("trunc").innerText = trunc;
    document.getElementById("sign").innerText = sign;
    document.getElementById("pow").innerText = pow;
    document.getElementById("min").innerText = min;
    document.getElementById("random").innerText = random;


    // Random: https://www.w3schools.com/js/js_random.asp
    // create a random integer between 1 and 100 and display in the random2 paragraph


    let randomInt = Math.floor(Math.random() * 101);
    document.getElementById("random2").innerText = randomInt;


    // Booleans: https://www.w3schools.com/js/js_booleans.asp
    // read the reference


    // Comparisons: https://www.w3schools.com/js/js_comparisons.asp
    // demonstrate and explain the difference between == and === in the
    // comparisons paragraph


    let numberFour = 4;
    let stringFour = "4";


    document.getElementById("comparisons").innerText = `4 == \"4\": returns ${numberFour == stringFour} \n` + 
    `4 === \"4\": returns ${numberFour === stringFour}`;


    // Conditions: https://www.w3schools.com/js/js_if_else.asp
    // Read the conditions page
}

