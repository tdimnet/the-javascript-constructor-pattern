import PropTypes from 'prop-types'
import styled from '@emotion/styled'

const Title = styled.h1`
    color: #555;
    font-size: 24px;
    font-weight: bold;
    margin-bottom: 0;
    margin-top: 0;
    text-transform: uppercase;
`

const Component = ({ text }) => <Title>{text}</Title>

Component.propTypes = {
    text: PropTypes.string.isRequired
}

export default Component

