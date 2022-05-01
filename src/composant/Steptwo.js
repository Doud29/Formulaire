const Steptwo = (props) => {
  return (
    <div className="page2">
      <h1>Results</h1>
      <div className="profile">
        <span> Name : {props.name}</span>
        <span>Email : {props.email}</span>
        <span>Password :{props.password}</span>
      </div>
      <button
        onClick={() => {
          props.setSwitch1(false);
        }}
      >
        Edit your Profile
      </button>
    </div>
  );
};

export default Steptwo;
