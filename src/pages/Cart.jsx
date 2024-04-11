import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Table from 'react-bootstrap/Table';
import { CartContext } from '../utils/context/CartContext'
import { useContext } from 'react';

export default function Cart() {
    const { cart } = useContext(CartContext)
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
                    <th>Quantité</th>
                </tr>
            </thead>
            <tbody>
                {cart.map((product, index) => (
                <tr key={index}>
                    <td>{product.name}</td>
                    <td>{product.price}</td>
                    <td>{product.quantity}</td>
                </tr>))}
            </tbody>
            </Table>
        </Container>
    )
}