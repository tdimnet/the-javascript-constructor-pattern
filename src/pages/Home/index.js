import {
    useQuery,
    useQueryClient
} from 'react-query'

import Body from '../../components/Layout/Body'
import Main from '../../components/Layout/Main'
import Header from '../../components/Layout/Header'
import Title from '../../components/Title'
import UserCard from '../../components/UserCard'

const Page = () => {
    const { isLoading, error, data } = useQuery(
        'users',
        () => fetch('https://randomuser.me/api/?results=10')
            .then(res => res.json())
            .then(({ results }) => results)
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
                    <Title text='Students' />
                </Header>
                {
                    results.map(user => <UserCard key={user.id.value} />)
                }
            </Main>
        </Body>
    )
} 

export default Page

