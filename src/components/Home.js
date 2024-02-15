import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { useEffect, useState } from "react";
import Avatar from "@mui/material/Avatar";
import { useNavigate } from "react-router-dom";
import { USERS_URL } from "../utils/constants";
import { Box } from "@mui/material";

const Home = () => {
  const [usersList, setUsersList] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    fetchingData();
  }, []);

  const fetchingData = async () => {
    const data = await fetch(USERS_URL);
    const jsonData = await data.json();
    setUsersList(jsonData);
  };

  const userDetails = (user) => {
    navigate("/userDetails/" + user.login);
  };

  if (usersList.length === 0) {
    return <h1>Loading...</h1>;
  }

  return (
    <Box
      sx={{
        backgroundColor: "#c7c6c3",
        display: "flex",
        justifyContent: "center",
        padding: 4,
      }}
    >
      <TableContainer component={Paper} sx={{ width: "60%" }}>
        <Table sx={{ minWidth: 450 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell sx={{ fontWeight: "bold" }}>Avatar</TableCell>
              <TableCell sx={{ fontWeight: "bold" }}>Users</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {usersList.map((user) => {
              return (
                <TableRow
                  key={user.id}
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                  onClick={() => {
                    userDetails(user);
                  }}
                >
                  <TableCell>
                    <Avatar alt="Remy Sharp" src={user.avatar_url} />
                  </TableCell>
                  <TableCell>{user.login}</TableCell>
                </TableRow>
              );
            })}
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  );
};

export default Home;
