import PropTypes from 'prop-types'
import styled from '@emotion/styled'


const Main = styled.main`
    width: 80%;
    background-color: #fff;
    padding: 56px;
    border-radius: 4px;
    margin-left: auto;
    margin-right: auto;
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

