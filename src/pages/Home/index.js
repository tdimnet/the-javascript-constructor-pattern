import {
    useQuery,
    useQueryClient
} from 'react-query'
import React from 'react'

const Page = () => {
    const { isLoading, error, data } = useQuery('users', () => fetch('https://randomuser.me/api/').then(res => res.json()))

    if (isLoading) return <div>Loading...</div>

    if (error) return <div>An error occurs...</div>

    console.log('======')
    console.log(data)
    console.log('======')

    return (
        <div>
            <h1>Hello, world</h1>
        </div>
    )
} 

export default Page

