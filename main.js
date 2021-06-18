var main_Array = [];

function add(){
    addedmember = document.getElementById("added").value;
    added = main_Array.push(addedmember)
    console.log(addedmember);
    console.log(main_Array);
    val = document.getElementById("val").innerHTML = addedmember;
    list = document.getElementById("list").innerHTML = main_Array;

}