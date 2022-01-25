import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { getAccountInfo } from '../../utils/terra'
import AddressPanel from './AddressPanel'
import CoinsPanel from './CoinsPanel'
import { AccountPageContainer, AccountInfoContainer } from './styles'
import TransactionsPanel from './TransactionsPanel'

function Account() {
  const { address } = useParams()
  const [account, setAccount] = useState({ coins: [], txs: [] })

  console.log(account)

  useEffect(() => {
    getAccount()
  }, [])

  const getAccount = async () => {
    const accountInfo = await getAccountInfo(address)
    setAccount(accountInfo)
  }

  return (
    <AccountPageContainer>
      <AccountInfoContainer>
        <AddressPanel address={address}></AddressPanel>
        <CoinsPanel coins={account.coins}></CoinsPanel>
        <TransactionsPanel txs={account.txs}></TransactionsPanel>
      </AccountInfoContainer>
    </AccountPageContainer>
  )
}

export default Account
