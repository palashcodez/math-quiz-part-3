function adduser(){
    player1_name=document.getElementById("player1_username_input").value;
    player2_name=document.getElementById("player2_username_input").value;
    localStorage.setItem("player1_name",player1_name);
    localStorage.setItem("player2_name",player2_name);
    window.location="gamepage.html";
}