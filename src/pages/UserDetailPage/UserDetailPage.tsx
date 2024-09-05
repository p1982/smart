import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { AppDispatch, RootState } from "../../store/store";
import { User } from "../../types/users";
import UserDetail from "../../components/UserDetail/UserDetail";
import { fetchUsersByIdAsync } from "../../store/slices/fetchUsersSliceReducer";

interface RouteParams extends Record<string, string> {
    id: string;
  }

const UserDetailPage: React.FC = () => {
  const dispatch = useDispatch<AppDispatch>();
  const { id } = useParams<RouteParams>();

  const user = useSelector<RootState, User | null>((state) =>
    state.users.user
  );
  console.log(user);
  useEffect(() => {
    if (id) {
      dispatch(fetchUsersByIdAsync(id));
    }
  }, [dispatch, id]);

  return (
    <div className="container mx-auto my-10 p-5">
      <div className="bg-white shadow-lg rounded-lg p-6">
        {user && <UserDetail/>}
      </div>
    </div>
  );
};

export default UserDetailPage;
