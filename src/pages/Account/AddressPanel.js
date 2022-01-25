import React from 'react'
import { Card } from 'react-bootstrap'

const AddressPanel = ({ address }) => (
  <Card>
    <Card.Header>Address</Card.Header>
    <Card.Body>
      <Card.Text>{address}</Card.Text>
    </Card.Body>
  </Card>
)

export default AddressPanel
