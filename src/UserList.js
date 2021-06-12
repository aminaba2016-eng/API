import React, { useEffect, useState } from "react";

const UserList = () => {
    const [data, setData] = useState([])
 

    useEffect(() => {
        function fetchData() {
          fetch("https://jsonplaceholder.typicode.com/users")
            .then(res => res.json())
            // .then(res => setData(res.hits))

            .then(res => setData(res))
            
        }
     
        fetchData();
      }, []);
     
      return (
        <div>
        
            {data.map(user => (
                   
              
              <ul>
                <li >
                  {user.name} - {user.id} - {user.email}
                </li>

             </ul>
                  
            ))}
          
        </div>
      );
     };

export default UserList