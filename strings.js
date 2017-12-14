let button = document.getElementById("submit"); 
let testString = "";

function reversal(x) {
    document.getElementById("reversal").innerHTML = x.split("").reverse().join("");
}

function alphabits(x) {
    document.getElementById("alphabits").innerHTML = x.split("").sort().join("");
}

function palindrome(x) {
    if (x === x.split("").reverse().join("")){
        document.getElementById("palindrome").innerHTML = "'tis a palindrome";
    } else {
        document.getElementById("palindrome").innerHTML = "not a palindrome";
    }
}

button.addEventListener("click", function() {
    testString = document.getElementById("input").value;
    reversal(testString);
    alphabits(testString);
    palindrome(testString);
});