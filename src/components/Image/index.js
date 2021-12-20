import PropTypes from 'prop-types'
import styled from '@emotion/styled'

const Image = styled.img`
    border-radius: 50%;
`

const Component = ({
    title,
    firstName,
    lastName,
    picture,
    className,
}) => (
    <Image
        className={className}
        alt={`${title} ${firstName} ${lastName}`}
        src={picture}
    />
)

Component.propTypes = {
    className: PropTypes.string,
    firstName: PropTypes.string.isRequired,
    lastName: PropTypes.string.isRequired,
    picture: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
}

Component.defaultProps = {
    className: ''
}

export default Component

