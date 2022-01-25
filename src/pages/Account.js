import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { getAccountInfo } from '../utils/terra'
import { AccountPageContainer, AccountInfoContainer } from './styles'

function Account() {
  const { address } = useParams()
  const [account, setAccount] = useState(false)

  console.log(account)

  useEffect(() => {
    getAccount()
  }, [account])

  const getAccount = async () => {
    const accountInfo = await getAccountInfo(address)
    setAccount(accountInfo)
  }

  return (
    <AccountPageContainer>
      <AccountInfoContainer></AccountInfoContainer>
    </AccountPageContainer>
  )
}

export default Account
