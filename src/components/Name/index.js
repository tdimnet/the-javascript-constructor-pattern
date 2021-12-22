import PropTypes from 'prop-types'
import styled from '@emotion/styled'

const FullName = styled.p`
    color: #4ba6c3;
    font-weight: bold;
    margin-bottom: 0;
    margin-top: 0;
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

