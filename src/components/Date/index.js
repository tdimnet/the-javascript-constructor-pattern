import PropTypes from 'prop-types'
import moment from 'moment'
import styled from '@emotion/styled'

const Text = styled.p`
    color: #999;
    font-size: 14px;
    margin-bottom: 0;
    margin-top: 0;
`

const Component = ({ className, date }) => (
    <Text className={className}>
        Joined {moment(date).format('MM/DD/YY')}
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

