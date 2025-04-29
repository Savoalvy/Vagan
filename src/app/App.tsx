// import { useState } from 'react';
import * as React from 'react';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';

import CategoryPage from '~/pages/category';
import MainPage from '~/pages/main';
import RecipePage from '~/pages/recipe';
import SubCategory from '~/pages/subCategory';
// import { useGetPostsQuery } from '~/query/services/posts.ts';
import MainLayout from '~/widgets/layout';

function App() {
    // const [count, setCount] = useState(0);
    // const { data: _data, isLoading: _isLoading } = useGetPostsQuery();

    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<MainLayout />}>
                    <Route index element={<Navigate to='/main' replace />} />
                    <Route path='main' element={<MainPage />} />
                    <Route
                        path='main/juiciest'
                        element={<CategoryPage overrideCategory='juiciest' />}
                    />
                    <Route path=':category' element={<CategoryPage />} />
                    <Route path=':category/:option' element={<SubCategory />} />
                    <Route path=':category/:option/:id' element={<RecipePage />} />
                </Route>
            </Routes>
        </BrowserRouter>
    );
}

export default App;
