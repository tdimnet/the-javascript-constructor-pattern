import PropTypes from 'prop-types'
import styled from '@emotion/styled'

const Image = styled.img`
    border-radius: 50%;
`

const Component = ({
    className,
    fullName,
    picture,
}) => (
    <Image
        alt={fullName}
        className={className}
        src={picture}
    />
)

Component.propTypes = {
    className: PropTypes.string,
    fullName: PropTypes.string,
    picture: PropTypes.string.isRequired,
}

Component.defaultProps = {
    className: ''
}

export default Component

