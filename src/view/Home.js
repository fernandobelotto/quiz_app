
import { Button } from "@chakra-ui/button";
import { FormControl } from "@chakra-ui/form-control";
import { Flex, Heading } from "@chakra-ui/layout";
import { Select } from "@chakra-ui/select";
import { useState } from "react";
import { useQuery } from "react-query";
import { Link } from "react-router-dom";
import { useHistory } from 'react-router-dom';

export default function Home() {
  const [category, setCategory] = useState(0)
  const history = useHistory();
  const navigate = () => history.push(`/quiz/${category}`);
  const { isLoading, error, data } = useQuery("category", () =>
    fetch("https://opentdb.com/api_category.php").then((res) => {
      return res.json();
    })
  );
  if (isLoading) return "Loading...";

  if (error) return "An error has occurred: " + error.message;

  return (
    <>

      <Flex justify="center" align="center" h="100vh" flexDirection="column">
        <Flex w="25vw" flexDirection="column">

          <Heading style={{ margin: '1rem' }}>Quiz App</Heading>

          <form onSubmit={(data) => console.log(data)}>
            <Select placeholder="Selecione a categoria" onChange={e => setCategory(e.target.value)}>
              {data.trivia_categories.map((item) => (
                <option value={item.id}>{item.name}</option>
              ))
              }
            </Select>
          </form>

          <Button onClick={navigate}>Começar</Button>
        </Flex>

      </Flex>
    </>
  );
}


