import React, { Suspense, lazy } from 'react';
import './App.css';

const Header = lazy(() => import('./components/header'));
const Banner = lazy(() => import('./components/banner'));
const Tasks = lazy(() => import('./components/tasks'));
const News = lazy(() => import('./components/news'));

const App = () => {
  return (
    <div className="App">
      <Suspense fallback={
        <div className="loader">
          <div className="preloader"><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div></div>
        </div>}>
        <Header />
        <Banner />
        <Tasks />
        <News />
      </Suspense>
    </div >
  );
}

export default App;
