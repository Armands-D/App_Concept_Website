
var foods =["Burger", "Salad", "Noodles",
           "Pizza", "Salmon", "Bakes Potatoes",
           "Steak", "Chips", "Pasta",
           "Stir Fry", "Tuna", "Omlette",
           "Curry", "Tomato Soup", "Burritos",
           "Chicken Wings", "Duck", "Bacon Joint",
           "Cottage Pie", "Chicken Rice", "Kebab",
           "Tacos", "Spring Rolls", "COD Filets"

];

function food_picker(){

    var n = Math.floor(Math.random() * foods.length)
    var food = foods[n];
    document.getElementById("food").innerHTML = `YOU GOT!<br>${food}`;
    s = "imgs/foods/" + n + ".jpg"
    document.getElementById("myImage").src=s
}


function download(){
    window.open("./down.html")
}

function load(){
    for (i = 0; i < 10; i ++){
        console.log(i)
        var n = 36 * ((i + 1)/ 10);
        var m = 36 * ((10 - (i + 1)) / 10);
        console.log(n, m)
        s = "[" + "#".repeat(n) + "-".repeat(m) + "]"
        document.getElementById("bar").innerHTML =  s;
    }
}
