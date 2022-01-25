import styled from 'styled-components'

const AccountPageContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 20px;
`

const AccountInfoContainer = styled.div`
  width: 1200px;
  border 1px solid black;
  border-radius 5px;
  min-height: 1600px
`

const LoadingContainer = styled.div`
  width: 100%;
  padding-top: 40px;
  padding-bottom: 40px;
  display: flex;
  justify-content: center;
  align-content: center;
`

export { AccountPageContainer, AccountInfoContainer, LoadingContainer }
