import React from "react";
import Layout from "../components/Layout";

const Index = ({ currentUser }) => {
  return <Layout>{currentUser ? currentUser : "Please Sign In."}</Layout>;
};

export default Index;
