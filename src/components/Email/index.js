import PropTypes from 'prop-types'
import styled from '@emotion/styled'

const Email = styled.a`
    color: #888;
    font-size: 14px;
`

const Component = ({ className, email }) => <Email className={className}>{email}</Email>

Component.propTypes = {
    className: PropTypes.string,
    email: PropTypes.string.isRequired
}

Component.defaultProps = {
    className: ''
}

export default Component

