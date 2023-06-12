import { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { Container, FormControl, FormLabel, Input } from "@chakra-ui/react";
import { Button } from "@chakra-ui/react";
import Navbar from "../components/Navbar";

const RegisterPage = (props) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    console.log({ name, email, password });
  }, [name, email, password]);

  return (
    <>
    
    <Container>
      <FormControl isRequired mb="20px" mt="20px">
        <FormLabel>Name</FormLabel>
        <Input
          placeholder="Name"
          className="input"
          onChange={(e) => setName(e.target.value)}
          value={name}
        />
      </FormControl>
      <FormControl isRequired mb="20px">
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
      <Button p='8px'
        onClick={(e) => {
          e.preventDefault();
          console.log("test");

          axios
            .post("https://capstone-ashen-zeta.vercel.app/register", {
              name,
              email,
              password,
            })
            .then((response) => {
              console.log(response);
              props.setToken(response.data.token);
            });

          setName("");
          setEmail("");
          setPassword("");
          navigate("/");
        }}
        colorScheme="teal"
        variant="outline"
        className="button"
      >
        Submit
      </Button>
    </Container>
    </>
  );
};

export default RegisterPage;
