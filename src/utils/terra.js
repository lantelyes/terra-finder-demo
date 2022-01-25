
const terra = new Terra.LCDClient({
    URL: 'https://lcd.terra.dev',
    chainID: 'columbus-5'
});

const getAccountInfo = async (address) => {

    const balance = await terra.bank.balance(address)

    console.log(balance)



}


export {getAccountInfo}