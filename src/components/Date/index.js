import PropTypes from 'prop-types'
import styled from '@emotion/styled'
import moment from 'moment'

const Text = styled.p`
    margin-top: 0;
    margin-bottom: 0;
`

const Component = ({ className, date }) => (
    <Text className={className}>
        Joined {moment(date).format('MM/DD/YYYY')}
    </Text>
)

Component.propTypes = {
    className: PropTypes.string,
    date: PropTypes.string.isRequired
}

Component.defaultProps = {
    className: ''
}

export default Component

