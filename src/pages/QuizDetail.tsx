import { Button } from "@chakra-ui/button";
import { Flex } from "@chakra-ui/layout";
import { useQuery } from "react-query";
import { useNavigate, useParams } from "react-router-dom";
import { QuizItemList } from "../components/QuizItemList";

export function QuizDetail() {
  const navigate = useNavigate();
  const handleNavigate = () => navigate("/");

  let { category } = useParams();

  const { isLoading, error, data } = useQuery("quiz", () =>
    fetch(
      `https://opentdb.com/api.php?amount=10&type=multiple&category=${category}`
    ).then((res) => {
      return res.json();
    })
  );
  if (isLoading) return <>Loading...</>;

  if (error) return <>An error has occurred!</>;
  return (
    <>
      <Button onClick={handleNavigate}>Go back</Button>

      <Flex justify="center" align="center" flexDirection="column">
        <Flex w="40vw" flexDirection="column">
          {data.results.map((quiz: any) => {
            return <QuizItemList {...quiz} />;
          })}
        </Flex>
      </Flex>
    </>
  );
}
