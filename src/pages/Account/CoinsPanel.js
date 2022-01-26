import { isEmpty } from 'lodash'
import React from 'react'
import ReactLoading from 'react-loading'
import { Card, Table } from 'react-bootstrap'
import { convertToHumanReadableNumber } from '../../utils/terra'
import { LoadingContainer } from './styles'

const CoinsPanel = ({ coins }) => (
  <Card>
    <Card.Header>Coins</Card.Header>
    {isEmpty(coins) ? (
      <LoadingContainer>
        <ReactLoading type="spin" height={150} width={150}></ReactLoading>
      </LoadingContainer>
    ) : (
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>Symbol</th>
            <th>Amount</th>
            <th>USD Value</th>
          </tr>
        </thead>
        <tbody>
          {coins.map((coin) => {
            const parsedCoin = coin
            return (
              <tr key={parsedCoin.denom}>
                <td className="d-flex align-items-center ml-3">
                  {parsedCoin.denom.toUpperCase()}
                </td>
                <td>{convertToHumanReadableNumber(parsedCoin.amount)}</td>
                <td>
                  {convertToHumanReadableNumber(parsedCoin.usdAmount)} USD
                </td>
              </tr>
            )
          })}
        </tbody>
      </Table>
    )}
  </Card>
)

export default CoinsPanel
