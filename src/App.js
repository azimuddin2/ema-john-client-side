import { RouterProvider } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
 import 'react-toastify/dist/ReactToastify.css';
import './App.css';
import router from './routes/Routes';

function App() {
  return (
    <div className='app'>
      <RouterProvider router={router}></RouterProvider>
      <ToastContainer />
    </div>
  );
}

export default App;
