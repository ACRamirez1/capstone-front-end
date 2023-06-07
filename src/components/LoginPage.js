import { useEffect, useState } from "react";
import axios from "axios";
// import { Link, useNavigate } from "react-router-dom";
import {
  FormControl,
  FormLabel,
  Input,
} from "@chakra-ui/react";
import { Button } from "@chakra-ui/react";

const LoginPage = (props) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  useEffect(() => {
    console.log({ email, password });
  }, [email, password]);

  return (
    <>
    <FormControl isRequired 
    className="form" 
    >
      <FormLabel>Email</FormLabel>
      <Input placeholder="email" className="input" onChange={(e) => setEmail(e.target.value)} />
    </FormControl>
    <FormControl isRequired>
      <FormLabel>Password</FormLabel>
      <Input placeholder="Password" className="input" onChange={(e) => setPassword(e.target.value)} />
    </FormControl>
    <Button onClick={(e) => {
        e.preventDefault();
        console.log("test")

        axios.post(
            "https://capstone-ashen-zeta.vercel.app/login", {
                email,
                password
            }
        ).then((response) => {
            console.log(response)
            props.setToken(response.data.token);
        })
    }} colorScheme="teal" variant="outline">
        Button
      </Button>
    </>
  );
};

export default LoginPage;
