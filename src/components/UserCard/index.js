import PropTypes from 'prop-types'
import styled from '@emotion/styled'

import Email from '../Email'
import Image from '../Image'
import JoinedDate from '../Date'
import Name from '../Name'

const Wrapper = styled.div`
    border-bottom: 1px solid #eaeaea;
    display: grid;
    grid-column-gap: 8px;
    grid-template-areas: "image name date" 
                         "image email date";
    grid-template-columns: min-content 1fr max-content;
    grid-template-rows: min-content min-content;
    margin-bottom: 24px;
    padding-bottom: 24px;
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
    align-self: center;
    grid-area: date;
`

const Component = ({ user }) => (
    <Wrapper>
        <UserImage
            fullName={user.fullName}
            picture={user.picture}
        />
        <UserName
            fullName={user.fullName}
        />
        <UserJoinedDate date={user.registeredDate} />
        <UserEmail email={user.email} />
    </Wrapper>
)

Component.propTypes = {
    user: PropTypes.any
}

export default Component


