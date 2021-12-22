import PropTypes from 'prop-types'
import styled from '@emotion/styled'

const FullName = styled.p`
    color: #4ba6c3;
    font-weight: bold;
    margin-bottom: 0;
    margin-top: 0;
`

const Component = ({ className, fullName }) => (
    <FullName className={className}>
        {fullName}
    </FullName>
)

Component.propTypes = {
    className: PropTypes.string,
    fullName: PropTypes.string.isRequired
}

Component.defaultProps = {
    className: ''
}

export default Component

