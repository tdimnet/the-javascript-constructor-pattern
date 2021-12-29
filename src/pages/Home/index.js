import { useEffect } from 'react'
import {
    useQuery,
    useQueryClient
} from 'react-query'
import styled from '@emotion/styled'

import get from '../../services/Api'

import MockedUser from '../../models/MockedUser'
import ApiUser from '../../models/ApiUser'

import Body from '../../components/Layout/Body'
import Header from '../../components/Layout/Header'
import Main from '../../components/Layout/Main'
import Title from '../../components/Title'
import UserCard from '../../components/UserCard'

const PageTitle = styled(Title)`
    margin-bottom: 24px;
`

const Page = () => {
    const { isLoading, error, data } = useQuery(
        'users',
        () => get(),
        {
            refetchOnWindowFocus: false
        }
        )

    if (isLoading) return <div>Loading...</div>

    if (error) return <div>An error occurs...</div>

    return (
        <Body>
            <Main>
                <Header>
                    <PageTitle text='Students' />
                </Header>
                {
                    data
                        .map(user => new MockedUser(user))
                        .map(user => <UserCard key={user.id} user={user} />)
                }
            </Main>
        </Body>
    )
} 

export default Page

