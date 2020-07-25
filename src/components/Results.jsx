import React from 'react'
import { ListGroup, Button } from 'react-bootstrap'

export default function Results () {
  let keys = Object.keys(localStorage)

  return (
    <ListGroup
      style={{
        width: '90%',
        margin: '50px auto',
        boxShadow: '3px 3px 15px #ccc',
        borderRadius: '10px'
      }}
    >
      <h2 style={{ padding: '20px' }}>Todos</h2>
      {keys.map((item, index) => (
        <ListGroup.Item
          style={{
            borderRadius: '10px',
            display: 'flex',
            justifyContent: 'space-between'
          }}
          key={index}
        >
          <h5>{item}</h5>
          <Button
            variant='danger'
            onClick={() => {
              localStorage.removeItem(keys[index])
              window.location.reload()
            }}
          >
            delete
          </Button>
        </ListGroup.Item>
      ))}
    </ListGroup>
  )
}
