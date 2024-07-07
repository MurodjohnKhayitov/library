import React, { useState } from 'react'
import { Card, CoverImage, Title, Text, NewBadge, SectionItem, ModalBackground, ModalContainer, Icons } from './style';
import { Container } from './style';
import { Wrapper } from './style';
import { Link } from 'react-router-dom';

function BookList() {
    const [isModalVisible, setModalVisible] = useState(false);

    const showModal = () => {
        setModalVisible(true);
    };

    const hideModal = () => {
        setModalVisible(false);
    };
    return (
        <Wrapper>
            <Container>
                <Card
                    onMouseEnter={showModal}
                    onMouseLeave={hideModal}
                >
                    <Card.ModalBackground onMouseEnter={showModal}
                        visible={isModalVisible}>
                        <ModalContainer>
                            <Card.BtnDelete>
                                <Icons.Delete></Icons.Delete>
                            </Card.BtnDelete>
                            <Card.BtnEdit>
                                <Icons.Edit></Icons.Edit>
                            </Card.BtnEdit>
                        </ModalContainer>
                    </Card.ModalBackground>
                    <Title>Raspberry Pi User Guide</Title>
                    <Text>Cover: <Link>http://url.to.book.cover</Link></Text>
                    <Text>Pages: 221</Text>
                    <Text>Published: 2012</Text>
                    <Text>Isbn: 9781118464465</Text>
                    <SectionItem>
                        <Text>Eben Upton / 2012</Text>
                        <NewBadge type={'reading'}>reading</NewBadge>
                    </SectionItem>
                </Card>
            </Container>
        </Wrapper>
    )
}

export default BookList