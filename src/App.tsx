import React, { useState, useEffect } from "react";
//
import { Grid } from "@material-ui/core";
//
import axios from "axios";
//
import PeopleCard from "./components/PeopleCard";
import {IUser} from "./interfaces"
//
import "./App.css";

function App() {
  const [users, setUsers] = useState([]);
  const URL = "https://reqres.in/api/users?page=2";

  useEffect(() => {
    const fetchData = async () => {
      const result = await axios(URL);
      setUsers(result.data.data);
    };

    fetchData();
  }, []);
  /*
  useEffect(() => {
    const fetchData = async () => {
      setUsers(
        await fetch(URL)
          .then(res => res.json())
          .then(res => res.data)
          .catch(err => console.log(err, "Fetch, waring."))
      );
    };
    fetchData();
  }, []);
  */

  return (
    <div className="App">
      <h3>Materia UI</h3>

      <Grid container spacing={10} style={{ padding: "24px" }}>
        {users.map(
          (user:IUser): JSX.Element => (
            <Grid item xs={12} sm={6} lg={4} xl={4}>
              <PeopleCard email={user.email}></PeopleCard>
            </Grid>
          )
        )}
      </Grid>
    </div>
  );
}

export default App;
  