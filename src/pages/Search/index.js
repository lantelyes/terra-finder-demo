import React, { useState } from 'react'
import { Button, Form } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'
import { isValidTerraAddress } from '../../utils/terra'
import { SearchBarContainer } from './styles'

function SearchBar() {
  const navigate = useNavigate()
  const [query, setQuery] = useState(
    'terra1rsgr6xstzcyf9ce4sevmnxup7sxwlmmt8eqc42',
  )

  const onSubmit = () => {
    if (isValidTerraAddress(query)) {
      navigate(`/account/${query}`)
    } else {
      toast.error(
        `${query} is not a valid address, please enter a valid account`,
      )
    }
  }

  return (
    <SearchBarContainer>
      <Form className="w-100">
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Enter an account address on Terra</Form.Label>
          <Form.Control
            onChange={(e) => setQuery(e.target.value)}
            type="text"
            placeholder="Terra Address"
          />
        </Form.Group>
        <Button variant="primary" type="button" onClick={() => onSubmit()}>
          Search
        </Button>
      </Form>
    </SearchBarContainer>
  )
}

export default SearchBar
