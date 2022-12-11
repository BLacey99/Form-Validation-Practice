const pass = document.getElementById("password");
const confPass = document.getElementById("confirmPass");

const verifyMatch = () => {
  const password = pass.value;
  const confirmPass = confPass.value;
  console.log(password);
  console.log(confirmPass);

  if (password == confirmPass && password != "" && confirmPass != "") {
    console.log("Match!");
    pass.className = "passAccept";
    confPass.className = "passAccept";
  } else {
    console.log("Must match!");
    pass.className = "error";
    confPass.className = "error";
  }
};


const submitBtn = document.querySelector("#createAcc");
submitBtn.addEventListener("click", verifyMatch);
