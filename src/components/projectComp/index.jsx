import React, { Component } from "react";
import classes from "./main.module.css"
import Button from './button';
class Nav extends Component {
    render() {
        return (
          <div>
            {/* <Home name = 'Home'/> */}
            <div className={classes.divColor}>
              <Button name='Home' />
              <Button name='About' />
            </div>
          </div>
        );
    }
}
export default Nav