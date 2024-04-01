import { useState } from "react";

const Register = () => {
  const [input, setInput] = useState({
    name: "",
    birth: "",
    email: "",
    password: "",
    bio: "",
  });

  const onChange = (e) => {
    setInput({
      ...input,
      [e.target.name]: e.target.value, //프로퍼티에 [변수] 넣으면 키값을 설정하겠다는 말이 된다.
    });
  };

  return (
    <div className="register">
      <input type="text" name="name" value={input.name} onChange={onChange} />
    </div>
  );
};

export default Register;
