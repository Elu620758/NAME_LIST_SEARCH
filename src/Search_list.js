import React, { useState } from "react";
import { Users } from './Data';
import './searchstyle.css';


function SearchList(){


    const [query, setquery] = useState('')

    return (
        <React.Fragment>
            
            <input type="text" 
                    placeholder="Search users...." 
                    className="Search"
                    onChange={(e) => setquery(e.target.value)}
                    
                        />
                    <ul className="list">
                        {
                            Users.filter((userdata) => userdata.Name.toLowerCase().includes(query.toLowerCase())).map((userdata) => 
                            (
                                <li key = {userdata.id}  className="listItem">
                                    {userdata.Name}
                                    </li>
                            ))
                        }

                    </ul>
            
                    
        </React.Fragment>
    )

}

export default SearchList;