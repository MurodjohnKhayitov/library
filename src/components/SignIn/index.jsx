import React, { useEffect, useState } from "react";
import { Container, Wrapper, Info, Error, InfoText } from "./style";
import { Input, Button } from "../Geniric";
import { Link, useNavigate } from "react-router-dom";

const { REACT_APP_BASE_URL: url } = process.env;

export const SignIn = () => {
  const [userName, setUsername] = useState();
  const [password, setPassword] = useState();
  const [error, setError] = useState(false);
  const navigate = useNavigate();

  // const { mutate } = useMutation(() => {
  //   return fetch(`${url}/public/auth/login`, {
  //     method: "POST",
  //     headers: { "Content-Type": "application/json" },
  //     body: JSON.stringify({ email, password }),
  //   }).then((res) => res.json());
  // });
  // const onSubmit = () => {
  //   if (email?.length && password?.length) {
  //     mutate(
  //       {},
  //       {
  //         onSuccess: (res) => {
  //           if (res?.authenticationToken) {
  //             localStorage.setItem("token", res?.authenticationToken);
  //             navigate("/home");
  //             setUsername("");
  //           } else {
  //             setError("Email yoki parolda xatolik");
  //           }
  //         },
  //         onError: (error, variables, context) => {},
  //         onSettled: (data, error, variables, context) => {},
  //       }
  //     );
  //   } else {
  //     setError("Bush maydon junatish mumkin emas");
  //   }
  // };
  return (
    <Container className="border border-red-500">
      <Wrapper>
        <div className="title text-center">Sign in</div>
        <Input
          onChange={({ target: { value } }) => {
            setError();
            setUsername(value);
          }}
          value={userName}
          mt={58}
          placeholder={"Username"}
          name="username"
        />
        <Input
          onChange={({ target: { value } }) => {
            setError();
            setPassword(value);
          }}
          value={password}
          mt={34}
          type={'password'}
          placeholder={"Repeat the password"}
          name="password"
        />
        {error?.length ? <Error>{error}</Error> : null}

        {/* <Button onClick={onSubmit} mt={32} type={"primary"}>
          Login
        </Button> */}
        <Button className="mdSize" mt={32} type={"primary"}>
          Login
        </Button>
        <InfoText>
          Already signed up? <Link to={'/signup'} className="ml-2 text-[#6200EE]"> Go to sign up.</Link>
        </InfoText>
      </Wrapper>
    </Container>
  );
};
export default SignIn;
