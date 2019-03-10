class Validate {

  static passwrodMatch = (a, b) => {
    if (a !== b){
      alert("Passwords don't match")
    } else if (a.length < 6) {
      alert("Password length must be 6 characters or more")
    }
  }

  static emailCheck = (a) => {
    const regEx = /\S+@\S+/
    if (!regEx.test(String(a).toLowerCase())) {
      alert("Email not valid")
    }
  }
}

export default Validate
