import React from "react";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import {Helmet} from "react-helmet";

export default function NotFound() {
    return (
        <>
            <head>
                <Helmet>
                    <title>Page non trouvée</title>
                </Helmet>
            </head>
            <div>
                <Container>
                    <Row><h1>Page non trouvée</h1></Row>
                </Container>
            </div>
        </>
    )
}