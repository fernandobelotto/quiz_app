
import { Button } from "@chakra-ui/button";
import { Flex } from "@chakra-ui/layout";
import React from "react";
import { useQuery } from "react-query";
import { useHistory, useParams } from "react-router-dom";
import QuizItemList from "../components/QuizItemList";

export default function QuizDetail() {
    const history = useHistory();
    const navigate = () => history.push('/');

    let { category } = useParams();


    const { isLoading, error, data } = useQuery("quiz", () =>
        fetch(`https://opentdb.com/api.php?amount=10&type=multiple&category=${category}`).then((res) => {
            return res.json();
        })
    );
    if (isLoading) return "Loading...";

    if (error) return "An error has occurred: " + error.message;
    return (
        <>
            <Button onClick={navigate}>Voltar</Button>

            <Flex justify="center" align="center" flexDirection="column">

                <Flex w="40vw" flexDirection="column">
                    {data.results.map((quiz) => {
                        return <QuizItemList {...quiz} />;
                    })}
                </Flex>

            </Flex>

        </>
    );
}
