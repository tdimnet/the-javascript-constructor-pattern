import PropTypes from 'prop-types'
import styled from '@emotion/styled'

const FullName = styled.p`
    margin-top: 0;
    margin-bottom: 0;
    color: #4ba6c3;
    font-weight: bold;
`

const Component = ({ className, firstName, lastName }) => (
    <FullName className={className}>
        {firstName} {lastName}
    </FullName>
)

Component.propTypes = {
    className: PropTypes.string,
    firstName: PropTypes.string.isRequired,
    lastName: PropTypes.string.isRequired
}

Component.defaultProps = {
    className: ''
}

export default Component

