import PropTypes from 'prop-types'
import styled from '@emotion/styled'

import Image from '../Image'
import Name from '../Name'
import Email from '../Email'
import JoinedData from '../Date'

const Wrapper = styled.div`
    border-bottom: 1px solid #eaeaea;
    margin-bottom: 24px;
    padding-bottom: 24px;
`

const Component = ({ user }) => (
    <Wrapper>
        <Image
            title={user.name.title}
            firstName={user.name.first}
            lastName={user.name.last}
            picture={user.picture.medium}
        />
        <Name
            firstName={user.name.first}
            lastName={user.name.last}
        />
        <Email email={user.email} />
        <JoinedData date={user.registered.date} />
    </Wrapper>
)

Component.propTypes = {
    user: PropTypes.any
}

export default Component


