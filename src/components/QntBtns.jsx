import React from 'react'
import { Button, ButtonGroup } from 'react-bootstrap'

function QntBtns() {
  return (
    <ButtonGroup aria-label="Basic example">
      <Button size="sm" variant="success">+</Button>
      <Button size="sm" variant="secondary">0</Button>
      <Button size="sm" variant="danger">-</Button>
    </ButtonGroup>
  )
}

export default QntBtns