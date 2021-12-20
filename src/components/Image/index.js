import PropTypes from 'prop-types'
import styled from '@emotion/styled'

const Wrapper = styled.div``

const Image = styled.img``

const Component = ({ title, firstName, lastName, picture }) => (
    <Wrapper>
        <Image
            alt={`${title} ${firstName} ${lastName}`}
            src={picture}
        />
    </Wrapper>
)

Component.propTypes = {
    title: PropTypes.string.isRequired,
    firstName: PropTypes.string.isRequired,
    lastName: PropTypes.string.isRequired,
    picture: PropTypes.string.isRequired
}

export default Component

