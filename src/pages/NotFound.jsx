import React from "react";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import {Helmet} from "react-helmet";

export default function NotFound() {
    return (
        <>
            <Helmet>
                <meta charset="utf-8" />
                <title>Page non trouvée</title>
            </Helmet>
            <div>
                <Container>
                    <Row><h1>Page non trouvée</h1></Row>
                </Container>
            </div>
        </>
    )
}