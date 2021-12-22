import PropTypes from 'prop-types'
import styled from '@emotion/styled'

const Image = styled.img`
    border-radius: 50%;
`

const Component = ({
    className,
    firstName,
    lastName,
    picture,
}) => (
    <Image
        alt={`${firstName} ${lastName}`}
        className={className}
        src={picture}
    />
)

Component.propTypes = {
    className: PropTypes.string,
    firstName: PropTypes.string.isRequired,
    lastName: PropTypes.string.isRequired,
    picture: PropTypes.string.isRequired,
}

Component.defaultProps = {
    className: ''
}

export default Component

