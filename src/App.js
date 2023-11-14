
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import routers from './router';
import Layout from './layouts';

function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          {
            routers.map((route, index) => {
              const Comp = route.element
              return <Route key={index} path={route.path} element={<Comp />} />
            })
          }
        </Routes>
      </Layout>
    </BrowserRouter>
  );
}

export default App;
