import React from "react";
import { Button, Col, Container, Row, Table } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import HomeCSS from "./Home.module.css";
const Dashboard = () => {
  const loginUser = JSON.parse(localStorage.getItem("user_login"))[0];
  const allUserData = JSON.parse(localStorage.getItem("userData"))[0];

  const redirect = useNavigate();

  const userLogout = () => {
    localStorage.removeItem("user_login");
    redirect("/login");
  };

  return (
    <>
      <div className="mt-3 pt-3 text-center">
        <Container>
          <Row>
            <Col>
              <h1>Welcome, {`${loginUser.name}`}</h1>
              <Button className={`mb-5 ${HomeCSS.btn}`} onClick={userLogout}>
                Logout
              </Button>
            </Col>
            <Col>
              <table class="table table-hover table-striped">
                <thead>
                  <tr>
                    <th scope="col">#</th>
                    <th scope="col">Username</th>
                    <th scope="col">Name</th>
                    <th scope="col">Email</th>
                  </tr>
                </thead>
                <tbody>
                  {allUserData.map((user, i) => (
                    <tr key={i}>
                      <td>{i + 1}</td>
                      <td>{user.username}</td>
                      <td>{user.name}</td>
                      <td>{user.email}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
};

export default Dashboard;
