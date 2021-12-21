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
    display: grid;
    grid-template-areas: "image name date"
                         "image email date";
    grid-template-columns: min-content 1fr max-content;
    grid-template-rows: min-content min-content;
    grid-column-gap: 8px;
`

const UserImage = styled(Image)`
    grid-area: image;
`

const UserName = styled(Name)`
    grid-area: name;
`

const UserEmail = styled(Email)`
    grid-area: email;
`

const UserJoinedDate = styled(JoinedDate)`
    grid-area: date;
    align-self: center;
`

const Component = ({ user }) => (
    <Wrapper>
        <UserImage
            title={user.name.title}
            firstName={user.name.first}
            lastName={user.name.last}
            picture={user.picture.thumbnail}
            rounded={false}
        />
        <UserName
            firstName={user.name.first}
            lastName={user.name.last}
        />
        <UserJoinedDate date={user.registered.date} />
        <UserEmail email={user.email} />
    </Wrapper>
)

Component.propTypes = {
    user: PropTypes.any
}

export default Component


