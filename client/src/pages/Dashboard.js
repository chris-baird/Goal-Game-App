import React, { useState, useEffect } from "react";
import API from "../API";

function Dashboard({ email }) {
  const [userData, setUserData] = useState(null);
  useEffect(() => {
    (async () => {
      console.log(userData);
      try {
        if (!userData) {
          const data = await API.getUserData(email);
          setUserData(data);
        }
      } catch (error) {
        if (error) return <p>Something Broke</p>;
      }
    })();
  }, [userData]);
  return (
    <div>
      Dashboard
      <p>Welcome {email}</p>
    </div>
  );
}
export default Dashboard;
