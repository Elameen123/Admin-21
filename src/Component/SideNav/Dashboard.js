import React from "react";
import Home from "../../Pages/Dashboard/HomePage/Home";
import Client from "../../Pages/Dashboard/ClientPage/Client";
import Product from "../../Pages/Dashboard/ProductPage/Product";
import Team from "../../Pages/Dashboard/TeamPage/Team";
// import Header from "../Header/Header"
import {
  CDBSidebar,
  CDBSidebarContent,
  CDBSidebarFooter,
  CDBSidebarHeader,
  CDBSidebarMenu,
  CDBSidebarMenuItem,
} from "cdbreact";
import { NavLink } from "react-router-dom";
// import { Navbar, Container, Nav } from "react-bootstrap";
import "./dashboard.css";


const Dashboard = () => {
 

  return (

    <div className="sidenav">
      {/* <Header /> */}


      <CDBSidebar className="sidebar-container">
        <CDBSidebarHeader prefix={<i className="fa fa-bars fa-large"></i>}>
          <a
            href="/"
            className="text-decoration-none"
            style={{ color: "inherit" }}
          >
            Sidehustle
          </a>
        </CDBSidebarHeader>

        <CDBSidebarContent className="sidebar-content">
          <CDBSidebarMenu>
            <NavLink
              exact
              to="/Home"
              element={<Home />}
              activeClassName="activeClicked"
            >
              <CDBSidebarMenuItem icon="table">Home</CDBSidebarMenuItem>
            </NavLink>
            <NavLink
              exact
              to="/Client"
              element={<Client />}
              activeClassName="activeClicked"
            >
              <CDBSidebarMenuItem icon="user">Client</CDBSidebarMenuItem>
            </NavLink>
            <NavLink
              exact
              to="/Product"
              element={<Product />}
              activeClassName="activeClicked"
            >
              <CDBSidebarMenuItem icon="user">Product</CDBSidebarMenuItem>
            </NavLink>
            <NavLink
              exact
              to="/Team"
              element={<Team />}
              activeClassName="activeClicked"
            >
              <CDBSidebarMenuItem icon="user">Team</CDBSidebarMenuItem>
            </NavLink>

            <NavLink exact to="/" activeClassName="activeClicked">
              <CDBSidebarMenuItem icon="columns">Log out</CDBSidebarMenuItem>
            </NavLink>
          </CDBSidebarMenu>
        </CDBSidebarContent>

       

        <CDBSidebarFooter style={{ textAlign: "center" }}>
          <div
            className="sidebar-btn-wrapper"
            style={{
              padding: "20px 5px",
            }}
          >
            Sidebar Footer
          </div>
        </CDBSidebarFooter>
      </CDBSidebar>
    </div>
  );
};

export default Dashboard;
