import React, { useState } from 'react'
import { Container, CoverBtnGroup, HighlightText, Icons, MainItem, MainText, ModalInput, NavbarWrapper, SubText, Wrapper } from './style'
import { Button, Input } from '../Geniric'
import { Modal } from 'antd';

function AddBook() {
  const [modal2Open, setModal2Open] = useState(false);
  const [isbnNumber, setIsbnNumber] = useState("");
  return (
    <Wrapper className="nocopy">
      <Container>
        <NavbarWrapper>

          <MainItem>
            <MainText>
              You’ve got <HighlightText>7 book</HighlightText>
            </MainText>
            <SubText>Your books today</SubText>
          </MainItem>
          <Button onClick={() => setModal2Open(true)} className="mdSize " width={"180px"} type={"primary"}>
            <Icons.Plus />
            Create a book
          </Button>
        </NavbarWrapper>
        <Modal
          title="Create a book"
          centered
          className='position:relative'
          open={modal2Open}
          onOk={() => setModal2Open(false)}
          onCancel={() => setModal2Open(false)}
          width={430}
          footer={false}
        >
          <ModalInput>
            <Icons.LinksIsbn />
            <Input
              onChange={({ target: { value } }) => {
                setIsbnNumber(value);
              }}
              value={isbnNumber}
              mt={20}
              pl={'30px'}
              type={'text'}
              placeholder={"___________________"}
              name="ISBN"
            />
          </ModalInput>
          <CoverBtnGroup>
            <Button width={"180px"}>Close</Button>
            <Button type={"primary"} width={"180px"}>Submit</Button>
          </CoverBtnGroup>
        </Modal>

      </Container>
    </Wrapper >

  )
}

export default AddBook