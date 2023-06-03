window.onload=function(){
   render()

}

const firebaseConfig = {
  apiKey: "AIzaSyBivSHQolKlNQqdgyY7MZ-iL5kNeML3hfE",
  authDomain: "login-f0577.firebaseapp.com",
  projectId: "login-f0577",
  storageBucket: "login-f0577.appspot.com",
  messagingSenderId: "486293356773",
  appId: "1:486293356773:web:e46268abd53554df06140c"
};

firebase.initializeApp(firebaseConfig);
const auth= firebase.auth();
const database =firebase.database();

function render(){
    window.recaptchaVerifier=new firebase.auth.RecaptchaVerifier('recaptcha-container');
    recaptchaVerifier.render();
}

function login(){
  var mobile=document.getElementById("mobilenum").value
  console.log(mobile)
  var number="+91"+mobile;
  console.log(number)
  if(mobile.length<10){
    window.alert("Enter correct mobile number")
  }
  else{
    firebase.auth().signInWithPhoneNumber(number,window.recaptchaVerifier).then(function(confirmResult){
      Window.confirmResult=confirmResult;
      coderesult=confirmResult;
      console.log(coderesult);

      var a=document.getElementById("mobileenter")
      a.remove();

      document.getElementById("otpenter").style.visibility="visible";
    }).catch(function(error){
      document.getElementById("error").innerHTML=error.message;
    })
  }
}

function verify(){
  var otp=document.getElementById("otpvalue").value;
  coderesult.confirm(otp).then(function(result){
    var user=result.user;
    window.location.replace("user.html");
  }).catch(function(error){
    document.getElementById("errorotp").innerHTML=error.message;
  })
}