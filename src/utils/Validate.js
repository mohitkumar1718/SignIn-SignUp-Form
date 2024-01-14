

const Validate = (email,password) => {
  
    const emailValidate= /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/.test(email);
    const passwordValidate=/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/.test(password);

    if(!emailValidate) return "Email is not valid";
    if(!passwordValidate)return "Password is not valid"
    return null;
   
}

export default Validate