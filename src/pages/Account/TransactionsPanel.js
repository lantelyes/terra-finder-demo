import { isEmpty } from 'lodash'
import React from 'react'
import ReactLoading from 'react-loading'
import { Card, Table } from 'react-bootstrap'
import { convertToHumanReadableNumber } from '../../utils/terra'
import { LoadingContainer } from './styles'

const TransactionsPanel = ({ txs }) => (
  <Card>
    <Card.Header>Transactions</Card.Header>
    {isEmpty(txs) ? (
      <LoadingContainer>
        <ReactLoading type="spin" height={150} width={150}></ReactLoading>
      </LoadingContainer>
    ) : (
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>Tx Hash</th>
            <th>Type</th>
            <th>Block</th>
            <th>Timestamp</th>
            <th>Fee</th>
          </tr>
        </thead>
        <tbody>
          {txs.map((tx) => (
            <tr key={tx.txhash}>
              <td>{tx.txhash}</td>
              <td>{tx.tx.value.msg[0].type.split('/')[1]}</td>
              <td>{tx.height}</td>
              <td>{tx.timestamp}</td>
              <td>
                {convertToHumanReadableNumber(tx.tx.value.fee.amount[0].amount)}{' '}
                {tx.tx.value.fee.amount[0].denom.toUpperCase()}
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    )}
  </Card>
)

export default TransactionsPanel
