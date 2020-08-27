function men() {
  let a=document.getElementById('men_t');
  a.style.display="block";
}
function men_o() {
  let a=document.getElementById('men_t');
  a.style.display="none";
}
function women() {
  let a=document.getElementById('women_t');
  a.style.display="block";
}
function women_o() {
  let a=document.getElementById('women_t');
  a.style.display="none";
}
function kids() {
  let a=document.getElementById('kids_t');
  a.style.display="block";
}
function kids_o() {
  let a=document.getElementById('kids_t');
  a.style.display="none";
}
function home() {
  let a=document.getElementById('home_t');
  a.style.display="block";
}
function home_o() {
  let a=document.getElementById('home_t');
  a.style.display="none";
}


function ess() {
  let a=document.getElementById('ess_t');
  a.style.display="block";
}
function ess_o() {
  let a=document.getElementById('ess_t');
  a.style.display="none";
}

function pro() {
  let a=document.getElementById('login_t');
  a.style.display="block";
}
function pro_o() {
  let a=document.getElementById('login_t');
  a.style.display="none";
}
function Password() {
  let a = document.getElementById('email_p');
  let b = document.getElementById('Password_e');
  let c = document.getElementById('number_1');
  let d = document.getElementById('number_1_p');
  if (c.value == "Abhishek@gmail.com") {
    b.style.display = "block";
    a.style.display = "none";
  }
  else {
    alert("Incorrect Email!");
  }
}

function email() {
  let a = document.getElementById('login_b');
  let b = document.getElementById('create_b');
  let c = document.getElementById('number_1');
  let d = document.getElementById('number_1_p');
  if (d.value == "11906997") {
    location.replace("main.html")
  }
  else {
    alert("Incorrect Password!");
  }
}

function email_p() {
  let a = document.getElementById('login_b');
  let b = document.getElementById('create_b');
  let c = document.getElementById('number_1_p_p').value;
  let d = document.getElementById('number_2_p_p').value;
  let e = document.getElementById('number_3_p_p').value;
  if (c.length > 6 && d.length > 6 && e.length > 6) {
    if (d == e) {
      location.replace("main.html");
    }
    else {
      alert("password doesn't match!")
    }
  }
  else {
    alert("Please complete form , length of entry should be greater then 6!");
  }
}
function l_b() {
  location.replace("login.html");
}
function ca() {
  location.replace("ca.html");
}
function table_men_1() {
  location.replace("main.html");
}
function creat_me_p() {
  let a = document.getElementById('email_p');
  let b = document.getElementById('Password_e');
  let c = document.getElementById('Password_e_p');
  a.style.display = "none";
  b.style.display = "none";
  c.style.display = "block";

}
