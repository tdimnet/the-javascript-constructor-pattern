import PropTypes from 'prop-types'
import styled from '@emotion/styled'

const Email = styled.a``

const Component = ({ email }) => <Email>{email}</Email>

Component.propTypes = {
    email: PropTypes.string.isRequired
}

export default Component

