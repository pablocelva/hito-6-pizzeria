import { useContext } from 'react'
import { Card, Button, Row, Col, ListGroup } from 'react-bootstrap'
import { CartContext } from '../context/CartContext'
import { PizzaContext } from '../context/PizzaContext'

export const Pizza = () => {
    const { agregarAlCarrito } = useContext(CartContext)
    const { pizzas, error } = useContext(PizzaContext)
    const pizza = pizzas && pizzas.length > 0 ? pizzas[3] : null

    return (
    <>
        {error ? (
            <p>Error:{error}</p>
        ) : (
            pizza && (
                <Card 
                className="pizza-page mx-auto my-5 p-3" 
                style={{ maxWidth: '1200px' }}
                >
                    <Row>
                        {/* Imagen a la izquierda */}
                        <Col md={6}>
                            <Card.Img
                            src={pizza.img} 
                            alt={pizza.name}
                            
                            />
                        </Col>

                        {/* Contenido a la derecha */}
                        <Col md={6}>
                            <Card.Body>
                                <Card.Title>🍕 Pizza {pizza.name || "Nombre del producto"}</Card.Title>
                                <Card.Text>
                                {pizza.desc || "Descripción del producto"}
                                </Card.Text>

                                {/* Lista de ingredientes */}
                                {pizza.ingredients && (
                                <ListGroup variant="flush">
                                    {pizza.ingredients.map((ingredient, index) => (
                                    <ListGroup.Item key={index}>{ingredient}</ListGroup.Item>
                                    ))}
                                </ListGroup>
                                )}

                                {/* Precio y botón */}
                                <div className="d-flex justify-content-between align-items-center mt-3">
                                <h4>Precio: ${pizza.price || "Precio"}</h4>
                                <Button variant="dark" onClick={() => agregarAlCarrito(pizza)}>Añadir al carrito</Button>
                                </div>
                            </Card.Body>
                        </Col>
                    </Row>
                </Card>
            )
        )}
    </>
    )
}