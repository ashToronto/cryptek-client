class Validate {

  static passwrodMatch = (a, b) => {
    if (a !== b){
      return alert("Passwords don't match")
    } else if (a.length < 6) {
      return alert("Password length must be 6 characters or more")
    }
  }

  static emailCheck = (a) => {
    const regEx = /\S+@\S+/
    if (!regEx.test(String(a).toLowerCase())) {
      return alert("Email not valid")
    }
  }

  static blankFields = (a, b, c, d) => {
    if (!a || !b || !c || !d) {
      return alert('Fields cannot be left empty')
    }
  }
}

export default Validate
