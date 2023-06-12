import { useEffect, useState } from "react";
import axios from "axios";
import { FormControl, FormLabel, Input, Button, Container } from "@chakra-ui/react";
import { NavLink } from "react-router-dom";
import Navbar from "../components/Navbar";

const LoginPage = (props) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  useEffect(() => {
    console.log({ email, password });
  }, [email, password]);

  return (
    <>
    
    <Container>
      <FormControl isRequired mb="20px" mt="20px">
        <FormLabel>Email</FormLabel>
        <Input
          placeholder="email"
          className="input"
          onChange={(e) => setEmail(e.target.value)}
          value={email}
        />
      </FormControl>
      <FormControl isRequired mb="20px">
        <FormLabel>Password</FormLabel>
        <Input
          placeholder="Password"
          className="input"
          onChange={(e) => setPassword(e.target.value)}
          value={password}
        />
      </FormControl>
      <Button
        onClick={(e) => {
          e.preventDefault();
          console.log("test");

          axios
            .post("https://capstone-ashen-zeta.vercel.app/login", {
              email,
              password,
            })
            .then((response) => {
              console.log(response);
              props.setToken(response.data.token);
            });

          setEmail("");
          setPassword("");
        }}
        colorScheme="teal"
        variant="outline"
      >
        Submit
      </Button>
      <p>
        New User?{" "}
        <NavLink
          to="/register"
          style={{
            color: "teal",
          }}
        >
          Sign Up!
        </NavLink>{" "}
      </p>
      </Container>
      </>
  );
};

export default LoginPage;
