import PropTypes from 'prop-types'
import styled from '@emotion/styled'

const Wrapper = styled.div``

const FullName = styled.p``

const Component = ({ firstName, lastName }) => (
    <Wrapper>
        <FullName>
            {firstName} {lastName}
        </FullName>
    </Wrapper>
)

Component.propTypes = {
    firstName: PropTypes.string.isRequired,
    lastName: PropTypes.string.isRequired
}

export default Component

