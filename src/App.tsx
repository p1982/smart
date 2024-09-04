import { useDispatch } from 'react-redux';
import { RouterProvider } from 'react-router-dom';
import router from './routers/routers';
import { useEffect } from 'react';
import { fetchUsersAsync } from './store/slices/fetchUsersSliceReducer';
import { AppDispatch } from './store/store';

const App: React.FC = () => {
  const dispatch = useDispatch<AppDispatch>();

  useEffect(() => {
    dispatch(fetchUsersAsync());
  }, [dispatch]);

  return <RouterProvider router={router} />;
};

export default App;