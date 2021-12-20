import PropTypes from 'prop-types'
import styled from '@emotion/styled'

import Image from '../Image'
import Name from '../Name'
import Email from '../Email'
import JoinedDate from '../Date'

const Wrapper = styled.div`
    border-bottom: 1px solid #eaeaea;
    margin-bottom: 24px;
    padding-bottom: 24px;
`

const UserImage = styled(Image)`
    grid-area: UserImage;
`

const UserName = styled(Name)`
    grid-area: UserName;
`

const UserEmail = styled(Email)`
    grid-area: UserEmail;
`

const UserJoinedDate = styled(JoinedDate)`
    grid-area: UserJoinedDate;
`

const Component = ({ user }) => (
    <Wrapper>
        <UserImage
            title={user.name.title}
            firstName={user.name.first}
            lastName={user.name.last}
            picture={user.picture.medium}
            rounded={false}
        />
        <UserName
            firstName={user.name.first}
            lastName={user.name.last}
        />
        <Email email={user.email} />
        <UserJoinedDate date={user.registered.date} />
    </Wrapper>
)

Component.propTypes = {
    user: PropTypes.any
}

export default Component


