import { useEffect } from 'react'
import {
    useQuery,
    useQueryClient
} from 'react-query'
import styled from '@emotion/styled'

import get from '../../services/Api'

import Body from '../../components/Layout/Body'
import Main from '../../components/Layout/Main'
import Header from '../../components/Layout/Header'
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

    console.log('======')
    console.log(data)
    console.log('======')

    return (
        <Body>
            <Main>
                <Header>
                    <PageTitle text='Students' />
                </Header>
                {
                    data.map(user => <UserCard key={user.cell} user={user} />)
                }
            </Main>
        </Body>
    )
} 

export default Page

