import { Button, Card, Elevation, Tag } from "@blueprintjs/core";
import React from 'react'
import "./QuizItemList.css"

export default function QuizItemList(props) {
    return (
        <div className="QuizItemList">
            <Card  elevation={Elevation.TWO}>

                <Tag
                    key={props.difficulty}
                >
                    {props.difficulty}
                </Tag>
                <h3>{props.question}</h3>

                {props.incorrect_answers.map((item) => {
                    return <Button className="QuizItemButton">{item}</Button>
                })}
                <Button>{props.correct_answer}</Button>
            </Card>
        </div>
    )
}