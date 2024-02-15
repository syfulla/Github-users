import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import Avatar from "@mui/material/Avatar";
import { Box } from "@mui/material";
import Button from "@mui/material/Button";
import { useNavigate } from "react-router-dom";
import { USERS_URL } from "../utils/constants";

const UserDetails = () => {
  const { id } = useParams();
  const [userDetails, setUserDetails] = useState({});
  const navigate = useNavigate();

  useEffect(() => {
    fetchUserDetails();
  }, []);

  const fetchUserDetails = async () => {
    const data = await fetch(USERS_URL + "/" + id);
    const jsonData = await data.json();
    setUserDetails(jsonData);
  };

  const redirect = () => {
    navigate("/");
  };

  return (
    <Box sx={{ display: "flex", justifyContent: "center", marginTop: 4, }}>
      <Card sx={{ padding: 4 }}>
        <CardContent>
          <Box sx={{ display: "flex", alignItems: "center" }}>
            {userDetails.name && (
              <Typography
                sx={{ fontSize: 14, fontWeight: "bold" }}
                gutterBottom
              >
                Full Name: {userDetails.name}
              </Typography>
            )}
            <Avatar
              alt="Remy Sharp"
              src={userDetails.avatar_url}
              sx={{ width: 80, height: 80, marginLeft: 7 }}
            />
          </Box>
          {userDetails.login && (
            <Typography variant="body2">
              User Name: {userDetails.login}
            </Typography>
          )}
          {userDetails.twitter_username && (
            <Typography variant="body2">
              Twitter: {userDetails.twitter_username}
            </Typography>
          )}
          {userDetails.location && (
            <Typography variant="body2">
              Location: {userDetails.location}
            </Typography>
          )}
          {userDetails.followers && (
            <Typography variant="body2">
              Followers: {userDetails.followers}
            </Typography>
          )}
          {userDetails.following && (
            <Typography variant="body2">
              Following: {userDetails.following}
            </Typography>
          )}
          {userDetails.company && (
            <Typography variant="body2">
              Companies: {userDetails.company}
            </Typography>
          )}
          {userDetails.public_repos && (
            <Typography variant="body2">
              Public Repos: {userDetails.public_repos}
            </Typography>
          )}
          {userDetails.email && (
            <Typography variant="body2">
              Public Repos: {userDetails.email}
            </Typography>
          )}
        </CardContent>
        <Button variant="contained" onClick={redirect}>
          Back
        </Button>
      </Card>
    </Box>
  );
};

export default UserDetails;
