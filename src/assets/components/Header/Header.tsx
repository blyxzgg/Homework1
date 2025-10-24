import { Container, HeaderWrapper, StyledLink } from "./HEader.styled"

const Header = () => {
    return (
        <>
            <HeaderWrapper>
                <Container>
                    <StyledLink to="/" end>
                        ToDo
                    </StyledLink>
                    <StyledLink to="/list">
                        List
                    </StyledLink>
                </Container>
            </HeaderWrapper>
        </>
    )
}

export default Header