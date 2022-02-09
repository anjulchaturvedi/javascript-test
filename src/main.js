document.getElementById("submit").addEventListener("click", function (e) {
    document.getElementById("error").innerText = ""
    document.getElementById("error2").innerText = ""
    e.preventDefault()
    var name = document.getElementById("name").value
    var number = document.getElementById("number").value
    document.getElementById("name").style.border = "2px solid black"
    document.getElementById("number").style.border = "2px solid black"
    document.getElementById("nm").innerText = ""
    document.getElementById("num").innerText = ""
    var ele = name.match(/\d/g)
    console.log(ele, isNaN(ele))
    if (name == "") {
        document.getElementById("name").style.border = "2px solid red"
        document.getElementById("error").innerText = "can't be empty"
        document.getElementById("nm").style.color = "red"
        document.getElementById("nm").innerText = "*"
    }
    if (name != "") {
        if (ele) {
            document.getElementById("name").style.border = "2px solid red"
            document.getElementById("error").innerText = "Name can't have numbers"
            document.getElementById("nm").style.color = "red"
            document.getElementById("nm").innerText = "*"
        }
    }
    if (number == "") {
        document.getElementById("number").style.border = "2px solid red"
        document.getElementById("error2").innerText = "can't be empty"
        document.getElementById("num").style.color = "red"
        document.getElementById("num").innerText = "*"
    }
    if (number != "") {
        if (number.length != 10) {
            document.getElementById("number").style.border = "2px solid red"
            document.getElementById("error2").innerText = "number should be of 10 digits"
            document.getElementById("num").style.color = "red"
            document.getElementById("num").innerText = "*"
        }
        else {
            document.getElementById("error2").innerText = ""
        }
    }
    console.log(name, number)

})