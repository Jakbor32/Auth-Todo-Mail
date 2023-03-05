import { useAuth0 } from "@auth0/auth0-react";
import React from "react";

const Profile = () => {
  const { user, isAuthenticated } = useAuth0();
  return (
    isAuthenticated && (
      <div className=" text-white rounded-lg flex flex-col items-center">
        <div
          className="w-32 h-32 rounded-full bg-cover bg-center mb-4"
          style={{ backgroundImage: `url(${user.picture})` }}
        />
        <table className="w-full text-left">
          <tbody>
            {user.given_name && (
              <tr>
                <td className="font-medium pr-2">Name:</td>
                <td>{user.given_name}</td>
              </tr>
            )}
            {user.family_name && (
              <tr>
                <td className="font-medium pr-2">Surname:</td>
                <td>{user.family_name}</td>
              </tr>
            )}
            <tr>
              <td className="font-medium pr-2">Email:</td>
              <td>{user.email ?? ""}</td>
            </tr>
            {user.locale && (
              <tr>
                <td className="font-medium pr-2">Country:</td>
                <td>{user.locale ?? ""}</td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    )
  );
};

export default Profile;
