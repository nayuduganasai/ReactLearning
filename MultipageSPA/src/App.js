// import {RouterProvider,createBrowserRouter} from 'react-router-dom'; 
// import HomePage from './Pages/Home';

// const router = createBrowserRouter([
//   {path:'/',element:<HomePage/>}
// ])

// function App() {
//   return (
//     <div>
//         <RouterProvider router={router}/>
//     </div>
//   );
// }
import {
  createBrowserRouter,
   //createRoutesFromElements,
  RouterProvider,
  // Route,
} from 'react-router-dom';

import HomePage from './Pages/Home';
import ProductsPage from './Pages/Products';
import RootLayout from './Pages/Root';
import ErrorPage from './Pages/Error';

// const routeDefinitions = createRoutesFromElements(
//   <Route>
//     <Route path="/" element={<HomePage />} />
//     <Route path="/products" element={<ProductsPage />} /> 
//   </Route>
// );

const router = createBrowserRouter([{
  path:"/",
  element:<RootLayout/>,
  errorElement:<ErrorPage/>,
  children:[
          { path: '/', element: <HomePage /> },
          { path: '/products', element: <ProductsPage /> },
         ]
}
]);

 //const router = createBrowserRouter(routeDefinitions);

function App() {
  return <RouterProvider router={router} />;
}


export default App;
