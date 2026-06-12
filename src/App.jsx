import React, { useState } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Loader from './components/common/Loader';
import MainLayout from './layouts/MainLayout';
import AppRoutes from './routes/AppRoutes';

function App() {
  const [loading, setLoading] = useState(true);

  return (
    <Router>
      {loading ? (
        <Loader onFinish={() => setLoading(false)} />
      ) : (
        <MainLayout>
          <AppRoutes />
        </MainLayout>
      )}
    </Router>
  );
}

export default App;
