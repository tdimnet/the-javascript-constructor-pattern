import {
    useQuery,
    useQueryClient
} from 'react-query'

import Header from '../../components/Layout/Header'

const Page = () => {
    const { isLoading, error, data } = useQuery('users', () => fetch('https://randomuser.me/api/?results=10').then(res => res.json()))

    if (isLoading) return <div>Loading...</div>

    if (error) return <div>An error occurs...</div>

    console.log('======')
    console.log(data)
    console.log('======')

    return (
        <div>
            <Header>
                <h1>Students</h1>
            </Header>
        </div>
    )
} 

export default Page

