import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Table from 'react-bootstrap/Table';

export default function Cart({cart}) {
    return (
        <Container>
            <Row>
                <h1>Panier</h1>
            </Row>
            <Table striped bordered hover size="sm">
            <thead>
                <tr>
                    <th>Nom</th>
                    <th>Prix</th>
                </tr>
            </thead>
            <tbody>
                {cart.map((product, index) => (
                <tr key={index}>
                    <td>{product.name}</td>
                    <td>{product.price}</td>
                </tr>))}
            </tbody>
            </Table>
        </Container>
    )
}