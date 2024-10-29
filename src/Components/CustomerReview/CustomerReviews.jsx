/* eslint-disable react/prop-types */
// Dependacies

// import { styled } from 'styled-components';

// Components
// import { FlexDiv } from '@components/StyledComponents/StyledContainers';
import { CardContainer, CardsShell } from '@components/CustomerReview/StyledContainers';




function CustomerReviews ({ data }) {
  if (!data || !Array.isArray(data.testimonials)) {
    return <p>No Reviews yet 😥</p>; // Fallback message if data is unavailable
  }

  return (
    <CardsShell>
      {data.testimonials.map((customer)=> {
        return (
        <CardContainer key={customer.id}>
          <h4>{customer.name}</h4>
          <h5>{customer.occupation}</h5>
          <p>{customer.testimony}</p>
          <p>⭐⭐⭐⭐⭐</p>
        </CardContainer>
        )
      })}
    </CardsShell>
  )
}

export default CustomerReviews
