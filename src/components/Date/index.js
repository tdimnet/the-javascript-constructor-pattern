import PropTypes from 'prop-types'
import styled from '@emotion/styled'
import moment from 'moment'

const Text = styled.p``

const Component = ({ date }) => <Text>Joined {moment(date).format('MM-DD-YYYY')}</Text>


Component.propTypes = {
    date: PropTypes.string.isRequired
}

export default Component

