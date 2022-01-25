import Decimal from 'decimal.js'
import { get } from 'lodash'

const terra = new window.Terra.LCDClient({
  URL: 'https://lcd.terra.dev',
  chainID: 'columbus-5',
})

const convertToDecimal = (input) => {
  const decimal = new Decimal(input)

  return decimal.div(10000000).toString()
}

const getAccountInfo = async (address) => {
  const accountInfo = {}

  const balanceInfo = await terra.bank.balance(address)

  const coins = Object.values(get(balanceInfo, '[0]._coins', [])).map(
    (value) => ({
      symbol: value.denom,
      amount: convertToDecimal(value.amount),
    }),
  )

  accountInfo.coins = coins

  return accountInfo
}

export { getAccountInfo }
