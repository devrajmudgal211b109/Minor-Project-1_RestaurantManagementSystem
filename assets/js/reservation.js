const bttn = document.getElementById('buttonsub');
bttn.addEventListener("click", getdata);

function getdata(){
  var nam = document.getElementById("name").value;
  var email = document.getElementById("email").value;
  var phone = document.getElementById("phone");

  var adult = document.getElementById("adult").value;
  var child = document.getElementById("child").value;
  var date = document.getElementById("checkin-date").value;
  
  const data = {
    Name: nam ,
    Email: email,
    PhoneNo: phone,
    noOfPeople: (adult,child),
    Date: date
   };
  return data;
}