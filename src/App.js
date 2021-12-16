import {
    QueryClient,
    QueryClientProvider
} from 'react-query'
import HomePage from './pages/Home'

const queryClient = new QueryClient()

function App() {
    return (
        <QueryClientProvider client={queryClient}>
            <HomePage />
        </QueryClientProvider>
    )
}

export default App;
