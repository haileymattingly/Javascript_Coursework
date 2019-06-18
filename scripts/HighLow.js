function guess() {

    var userNumber = document.getElementById('userInput').value;

    if (isNaN(userNumber)){
        alert("Please enter a valid number!");
        return;
    }

    var number = Math.round(Math.random() * 10);
    // alert(number);

    if (number < userNumber){
        alert("Too High");
    }else if (number > userNumber){
        alert("Too Low");
    }else if (number == userNumber){
        alert("Winner!");
    }

}