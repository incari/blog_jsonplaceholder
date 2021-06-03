import React, { useContext, useEffect, useState } from "react";
import { Heading, SimpleGrid, Text, Container,Button } from "@chakra-ui/react";
import UserCard from "components/UserCard";
import { getUsers } from "api/getUsers";
import  LoginContext  from "context/LoginContext";

 function Config() {
   const  {login, setLoginLocal}  = useContext(LoginContext);
  const [users, setUsers] = useState([]);

  useEffect(() => {
    getUsers().then((res) => setUsers(res));
  }, []);
  return (
    <Container>
      <Heading>Login </Heading>
      {login.hasOwnProperty("name") 
      ? <Button mt={5} colorScheme="teal" onClick ={()=>setLoginLocal({})}>Log out</Button> :
      <>
      <Text mb={5}>Please select the user wich you like to log in</Text>
      <SimpleGrid minChildWidth="200px">
        {users.map((user) => (
          <UserCard user={user} key={user.id}/>
        ))}
      </SimpleGrid>
      </>}
    </Container>
  );
}
export default React.memo(Config);
