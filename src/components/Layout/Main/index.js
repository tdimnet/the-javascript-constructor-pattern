import PropTypes from 'prop-types'
import styled from '@emotion/styled'

const Main = styled.main`
    background-color: #fff;
    border-radius: 4px;
    margin-left: auto;
    margin-right: auto;
    padding: 56px;
    width: 80%;
`

const Component = ({ children }) => (
    <Main>
        { children }
    </Main>
)

Component.propTypes = {
    children: PropTypes.node.isRequired
}

export default Component

