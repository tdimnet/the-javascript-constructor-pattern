import PropTypes from 'prop-types'
import styled from '@emotion/styled'

const Body = styled.div`
    background-color: #e1f1f6;
    color: #222;
    font-family: Helvetica, sans-serif;
    padding-bottom: 56px;
    padding-top: 56px;
`

const Component = ({ children }) => (
    <Body>
        { children }
    </Body>
)

Component.propTypes = {
    children: PropTypes.node.isRequired
}

export default Component

