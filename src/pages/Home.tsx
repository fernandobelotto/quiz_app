import { Button } from "@chakra-ui/button";
import { Flex, Heading } from "@chakra-ui/layout";
import { Select } from "@chakra-ui/select";
import { useState } from "react";
import { useQuery } from "react-query";
import { useNavigate } from "react-router-dom";

export function Home() {
  const [category, setCategory] = useState(0);
  const navigate = useNavigate();
  const handleNavigate = () => navigate(`/quiz/${category}`);
  const { isLoading, error, data } = useQuery("category", () =>
    fetch("https://opentdb.com/api_category.php").then((res) => {
      return res.json();
    })
  );
  if (isLoading) return <>Loading...</>;

  if (error) return <>An error has occurred</>;

  return (
    <>
      <Flex justify="center" align="center" h="100vh" flexDirection="column">
        <Flex w="25vw" flexDirection="column">
          <Heading style={{ margin: "1rem" }}>Quiz App</Heading>

          <form onSubmit={(data) => console.log(data)}>
            <Select
              placeholder="Select the category"
              onChange={(e) => setCategory(e.target.value)}
            >
              {data.trivia_categories.map((item) => (
                <option value={item.id}>{item.name}</option>
              ))}
            </Select>
          </form>

          <Button onClick={handleNavigate}>Start!</Button>
        </Flex>
      </Flex>
    </>
  );
}
