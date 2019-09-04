import React from 'react';
import Layout from './layouts/store/Layout';
import Book from './components/book/Book';

function App() {
  return (
    <Layout>
      <h1>Handpicked</h1>
      <div>
        <Book/>
      </div>
    </Layout>
  );
}

export default App;
