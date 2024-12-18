// Write your code here
import {useState} from 'react'
import {
  MainContainer,
  CreditCardSection,
  Heading,
  PaymentMethodDetailsCard,
  HeadingContainer,
  CreditCardContainer,
  CardInput,
  CardHolderName,
  PaymentMethodHeading,
  CardInputText,
} from './styledComponents'

const CreditCard = () => {
  const [cardNumber, setCardNumber] = useState('')
  const [cardHolderName, setCardHolderName] = useState('')

  const onChangeCardNumber = event => {
    setCardNumber(event.target.value)
  }

  const onChangeCardHolderName = event => {
    let value = event.target.value
    setCardHolderName(value)
  }

  const renderPaymentMethodDetailsCard = () => (
    <PaymentMethodDetailsCard>
      <PaymentMethodHeading>Payment Method</PaymentMethodHeading>
      <CardInput
        type="text"
        placeholder="Card Number"
        onChange={onChangeCardNumber}
        value={cardNumber}
      />
      <CardInput
        type="text"
        placeholder="Cardholder Name"
        onChange={onChangeCardHolderName}
        value={cardHolderName}
      />
    </PaymentMethodDetailsCard>
  )
  return (
    <MainContainer>
      <CreditCardSection>
        <HeadingContainer>
          <Heading>CREDIT CARD</Heading>
        </HeadingContainer>
        <CreditCardContainer data-testid="creditCard">
          <CardInputText>{cardNumber}</CardInputText>
          <CardHolderName>CARDHOLDER NAME</CardHolderName>
          <CardInputText name>{cardHolderName}</CardInputText>
        </CreditCardContainer>
      </CreditCardSection>
      {renderPaymentMethodDetailsCard()}
    </MainContainer>
  )
}
export default CreditCard
