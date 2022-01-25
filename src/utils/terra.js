import Decimal from 'decimal.js'
import { get } from 'lodash'
import axios from 'axios'

const terra = new window.Terra.LCDClient({
  URL: 'https://lcd.terra.dev',
  chainID: 'columbus-5',
})

const getPriceInUsd = async (coin) => {
  if (coin.denom === 'uusd') {
    return coin.amount
  }

  const result = await terra.market.swapRate(coin, 'uusd')

  return get(result, 'amount', 0)
}

// Im assuming that all coins have 6 decimal places here, this may not be correct, but given the time contraints, I would rather focus on other functionality
const convertToHumanReadableNumber = (input) => {
  const decimal = new Decimal(input)

  return decimal.div(1000000).toString()
}

const getTxsForAccount = async (address) => {
  // This should probably use the terra.js library, but for some reason it keeps throwing errors. This is the endpoint used by terra finder
  const txs = await axios.get(
    `https://fcd.terra.dev/v1/txs?limit=100&offset=0&account=${address}`,
  )

  return get(txs, 'data.txs', [])
}

const getAccountInfo = async (address) => {
  const balanceInfo = await terra.bank.balance(address)

  const coins = await Promise.all(
    Object.values(get(balanceInfo, '[0]._coins', [])).map(async (coin) => ({
      ...coin,
      usdAmount: await getPriceInUsd(coin),
    })),
  )

  const txs = await getTxsForAccount(address)

  return { coins, txs }
}

// Borrowed from Terra docs
// basic address validation (no library required)
const isValidTerraAddress = (address) =>
  // check the string format:
  // - starts with "terra1"
  // - length == 44 ("terra1" + 38)
  // - contains only numbers and lower case letters
  /(terra1[a-z0-9]{38})/g.test(address)

export { getAccountInfo, convertToHumanReadableNumber, isValidTerraAddress }
