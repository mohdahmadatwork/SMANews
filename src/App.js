import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import News from './components/News';
// import Spinner from './components/Spinner';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";
import React, { Component } from 'react'

export default class App extends Component {
  pageSize = 15;
  render() {
    return (
      <>
        <Router>
          <header>
            <Navbar />
          </header>
          <Routes>
            <Route exact path="/business" element={<main key={"business"}><News pagesize={this.pageSize} country="in" category="business" /></main>}></Route>
            <Route exact path="/entertainment" element={<main key={"entertainment"}><News pagesize={this.pageSize} country="in" category="entertainment" /></main>}></Route>
            <Route exact path="/general" element={<main key={"general"}><News pagesize={this.pageSize} country="in" category="general" /></main>}></Route>
            <Route exact path="/" element={<main key={"home"}><News pagesize={this.pageSize} country="in" category="general" /></main>}></Route>
            <Route exact path="/health" element={<main key={"health"}><News pagesize={this.pageSize} country="in" category="health" /></main>}></Route>
            <Route exact path="/science" element={<main key={"science"}><News pagesize={this.pageSize} country="in" category="science" /></main>}></Route>
            <Route exact path="/sports" element={<main key={"sports"}><News pagesize={this.pageSize} country="in" category="sports" /></main>}></Route>
            <Route exact path="/technology" element={<main key={"technology"}><News pagesize={this.pageSize} country="in" category="technology" /></main>}></Route>
          </Routes>
        </Router>
      </>

    )
  }
}
