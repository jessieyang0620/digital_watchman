import React from 'react';
import { Stack, Card, ListGroup } from 'react-bootstrap';
import questions from '../data/questions';
function InfoPage() {
    return (
        <Stack gap={3} className="d-flex flex-column align-items-center justify-content-center">
            {questions.questions.map(q => {
                return (
                <Card className="w-75">
                    <Card.Body>
                    <Card.Title>Question # {q.id}</Card.Title>
                    <Card.Subtitle className="mb-2 text-muted">{q.prompt}</Card.Subtitle>
                    <ListGroup variant="flush">
                        {q.options.map((o, i) => <ListGroup.Item><a href={q.sources[i]}>{o}</a></ListGroup.Item>)}
                    </ListGroup>

                </Card.Body>
              </Card>)
            })}
        <p><b>Disclaimer:</b> although I have tried to factcheck this information to the best of my ability, it is possible that I've made a mistake. If you spot something that is incorrect, please reach out and I will work on fixing it. <br/>
        <b>Coming Soon:</b> union resources and more info :)</p>
        </Stack>
    )
}

export default InfoPage;