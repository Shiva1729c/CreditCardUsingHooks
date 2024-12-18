// Style your elements here
// Style your elements here
import styled from 'styled-components'

export const MainContainer = styled.div`
  background-color: #ffffff;
  height: 100vh;
  display: flex;
`

export const CreditCardSection = styled.div`
  background-color: #3b4b69;
  height: 100vh;
  width: 50%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  padding-bottom: 50px;
`
export const HeadingContainer = styled.div`
  border-bottom: 2px solid #ffd773;
  width: 100px;
  padding-top: 50px;
`
export const Heading = styled.h1`
  font-family: 'Roboto';
  font-size: 20px;
  color: #ffffff;
  font-weight: 500;
  width: 130px;
  margin-bottom: 5px;
`

export const CreditCardContainer = styled.div`
  background-image: url('https://assets.ccbp.in/frontend/hooks/credit-card-bg.png');
  width: 90%;
  height: 200px;
  background-size: cover;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding-left: 40px;
  padding-top: 50px;
  border-radius: 20px;
`
export const CardHolderName = styled.p`
  margin-bottom: 0px;
  font-family: 'Roboto';
  color: #d3d9e0;
  font-size: 12px;
`
export const CardInputText = styled.p`
  font-family: 'Roboto';
  font-size: ${props => (props.name ? '16px' : '26px')};
  color: #d3d9e0;
  font-weight: 500;
  margin-top: 5px;
  overflow-x: auto;
`
export const CardInput = styled.input`
  padding: 8px 16px 8px 16px;
  width: 100%;
  margin-bottom: 10px;
  box-shadow: 0px 2px 4px 0px #bfbfbf;
  border: none;
  font-family: 'Roboto';
  font-size: 10px;
`

export const PaymentMethodDetailsCard = styled.div`
  box-shadow: 0px 4px 8px 0px #bfbfbf;
  padding: 15px 48px 64px 48px;
  height: 220px;
  margin-left: 15px;
  align-self: center;
  border-radius: 5px;
  width: 350px;
`
export const PaymentMethodHeading = styled.h1`
  font-family: 'Roboto';
  font-size: 16px;
  text-align: center;
  color: #3b4b69;
  margin-bottom: 50px;
`
