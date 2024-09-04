import React from "react";
import UsersList from "../../components/UsersList/UsersList";

const HomePage: React.FC = () => {
  return (
    <main className="pt-[100px]">
      <div className="max-w-[1200px] mx-auto my-[20px] flex gap-20">
        <UsersList/>
      </div>
    </main>
  );
};

export default HomePage;
