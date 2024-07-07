import React from 'react'
import { Container, CoverBtnGroup, CoverImage, Icons, Wrapper } from './style'
import { Button } from '../Geniric'
import { useNavigate } from 'react-router-dom'

function Error() {
  const navigate = useNavigate()
  return (
    <Wrapper>
      <Container>
        <CoverImage>
          <Icons.NotFound />
          <CoverBtnGroup>
            <Button onClick={() => navigate('/home')} type={"primary"} width={"240px"}>Go Home Page</Button>
            <Button width={"240px"}>Reload Page</Button>
          </CoverBtnGroup>
        </CoverImage>
      </Container>
    </Wrapper>
  )
}

export default Error