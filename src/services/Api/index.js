async function getMockData() {
    return await fetch('http://localhost:3000/users.json')
        .then(res => res.json())
        .then(({ data }) => data)
}

async function getApiData() {
    return await fetch('https://randomuser.me/api/?results=10')
        .then(res => res.json())
        .then(({ results}) => results)
}

async function get() {
    return await getApiData()
}

export default get
