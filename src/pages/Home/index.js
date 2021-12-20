import {
    useQuery,
    useQueryClient
} from 'react-query'

import Body from '../../components/Layout/Body'
import Main from '../../components/Layout/Main'
import Header from '../../components/Layout/Header'
import Title from '../../components/Title'

const Page = () => {
    const { isLoading, error, data } = useQuery('users', () => fetch('https://randomuser.me/api/?results=10').then(res => res.json()))

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
            </Main>
        </Body>
    )
} 

export default Page

