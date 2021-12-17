import PropTypes from 'prop-types'

const Component = ({ children }) => (
    <div>
        { children }
    </div>
)

Component.propTypes = {
    children: PropTypes.node.isRequired
}

export default Component

