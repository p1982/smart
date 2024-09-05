import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { AppDispatch, RootState } from "../../store/store";
import { User } from "../../types/users";
import UserDetail from "../../components/UserDetail";
import { fetchUsersByIdAsync } from "../../store/slices/fetchUsersSliceReducer";

interface RouteParams extends Record<string, string> {
  id: string;
}

const UserDetailPage: React.FC = () => {
  const dispatch = useDispatch<AppDispatch>();
  const { id } = useParams<RouteParams>();

  const user = useSelector<RootState, User | null>((state) => state.users.user);

  const loading = useSelector<RootState, boolean>(
    (state) => state.users.loading
  );

  useEffect(() => {
    if (id) {
      dispatch(fetchUsersByIdAsync(id));
    }
  }, [dispatch, id]);

  if (loading) {
    return (
      <main className="pt-[100px]">
        <div className="container mx-auto">
          <div className="flex justify-center items-center h-64">
            <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-blue-500"></div>
          </div>
        </div>
      </main>
    );
  }

  return (
    <div className="container mx-auto my-10 p-5">
      <div className="bg-white shadow-lg rounded-lg p-6">
        {user && <UserDetail />}
      </div>
    </div>
  );
};

export default UserDetailPage;
