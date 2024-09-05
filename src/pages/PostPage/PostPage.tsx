import React, { useEffect } from "react";
import PostList from "../../components/PostList";
import { AppDispatch } from "../../store/store";
import { useDispatch } from "react-redux";
import { fetchPostAsync } from "../../store/slices/fetchPostSliceReducer";

const PostPage: React.FC = () => {
  const dispatch = useDispatch<AppDispatch>();

  useEffect(() => {
    dispatch(fetchPostAsync());
  }, [dispatch]);
  
  return (
    <main className="pt-[100px]">
      <div className="max-w-[1200px] mx-auto my-[20px] flex gap-20">
        <PostList />
      </div>
    </main>
  );
};

export default PostPage;
