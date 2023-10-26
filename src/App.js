import logo from './logo.svg';
import './App.css';
import { Header } from './Component/Header';
import { Routes, Route } from 'react-router-dom';
import { Home } from './Component/Home';
import { About } from './Component/About';
import { Contact } from './Component/Contact';
import { Users } from './Component/Users';
import { QueryClientProvider, QueryClient } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import { UserById } from './Component/UserById';
import { DynamicParallelQueries } from './Component/DynamicParallelQueries';
import { DependentQueries } from './Component/DependentQueries';
import { PaginatedQueriesPage } from './Component/PaginatedQueries.page';
import InfiniteQueries from './Component/InfiniteQueries'

const queryClient = new QueryClient();

function App() {
  return (
    <>
      <QueryClientProvider client={queryClient}>


        <Header />

        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='/users' element={<Users />} />
          <Route path='/depend' element={
            <DependentQueries id="3" ></DependentQueries>
          } />
          <Route path='/user/:id' element={<UserById></UserById>} />
          <Route path='/dpq' element={
            <DynamicParallelQueries userIds={[1, 3]}></DynamicParallelQueries>
          } />
          <Route path='/infinite' element={<InfiniteQueries />} />
          <Route path='/page' element={<PaginatedQueriesPage />} />
          <Route path='*' element={<h1>404 Not Found</h1>} />
        </Routes>

      </QueryClientProvider>
    </>
  );
}

export default App;
