import React from 'react'
import { useSelector } from 'react-redux';
import { RootState } from '../../store/store';
import { User } from '../../types/users';

const UserDetail: React.FC = () => {
    const user = useSelector<RootState, User | null>((state) =>
        state.users.user
      );
    return (
        <div>
            <h1 className="text-3xl font-bold mb-4">{user?.name}</h1>
            <p className="text-gray-700 mb-2">
                <strong>Username:</strong> {user?.username}
            </p>
            <p className="text-gray-700 mb-2">
                <strong>Email:</strong> {user?.email}
            </p>
            <p className="text-gray-700 mb-2">
                <strong>Phone:</strong> {user?.phone}
            </p>
            <p className="text-gray-700 mb-2">
                <strong>Website:</strong> {user?.website}
            </p>
            <p className="text-gray-700 mb-2">
                <strong>Company:</strong> {user?.company?.name}
            </p>
            <p className="text-gray-700 mb-2">
                <strong>Catch Phrase:</strong> {user?.company?.catchPhrase}, {user?.company?.bs}
            </p>
            <p className="text-gray-700 mb-2">
                <strong>Address:</strong> {user?.address?.street}, {user?.address?.city}
            </p>
            <p className="text-gray-700 mb-2">
                <strong>Suite:</strong> {user?.address?.suite}
            </p>
            <p className="text-gray-700 mb-2">
                <strong>Zipcode:</strong> {user?.address?.zipcode}
            </p>
            
        </div>
    )
}

export default UserDetail