const Form = (props) => {
  const handleSummit = (event) => {
    event.preventDefault();
    console.log("username", props.name);
    console.log("email", props.email);
    console.log("password", props.password);
    console.log("Confirme Password", props.passwordconfirmation);
  };
  return (
    <div className="forme">
      <h1>Create account</h1>
      <form onSubmit={handleSummit}>
        <span>Name</span>
        <input
          placeholder="Name"
          type="text"
          onChange={(event) => {
            //   console.log(event);
            props.setname(event.target.value);
          }}
          value={props.name}
        />
        <span>Email</span>
        <input
          placeholder="Email"
          type="email"
          onChange={(event) => {
            props.setemail(event.target.value);
          }}
          value={props.email}
        />
        <span>Password</span>
        <input
          placeholder="Password"
          type="password"
          onChange={(event) => {
            props.setpassword(event.target.value);
          }}
          value={props.password}
        />
        <span> Confir your Password</span>
        <input
          placeholder="Confirm your password"
          type="password"
          onChange={(event) => {
            props.setpasswordconfirmation(event.target.value);
          }}
          value={props.passwordconfirmation}
        />
        <input
          className="envoyer"
          type="submit"
          onClick={() => {
            {
              props.password === props.passwordconfirmation
                ? props.setSwitch1(true)
                : alert("noooooooooooo");
            }
          }}
        />
      </form>
    </div>
  );
};

export default Form;
