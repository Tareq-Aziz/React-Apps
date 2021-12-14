import React, { Component } from 'react';
import Section from './projectComp/section';
import Nav from './projectComp/naviMain';
import Expression from './projectComp/expressionBar';
import Boxes from './projectComp/boxes';
import Button from './projectComp/button';
import Image from './projectComp/image';
class App extends Component {
  render() {
    return (
      <div>
        <Section>
          <Nav color='blue' />
          <Expression />
          <Boxes
            width='190px'
            height='140px'
            margin='10px 20px 0px 80px'
            color='white'
            name='Total Revenue'
            digit='$ 65,650'
            pic={<Image picture='/revenue.png' width='35px' height='35px' />}
            type='65% Lower Growth'
          ></Boxes>

          <Boxes
            width='190px'
            height='140px'
            margin='10px 20px 0px 80px'
            color='white'
            name='Orders'
            digit='3,455'
            pic={<Image picture='/order.png' width='35px' height='35px' />}
            type='Weekly Sells'
          />
          <Boxes
            width='190px'
            height='140px'
            margin='10px 20px 0px 80px'
            color='white'
            name='Sells'
            digit='5,693'
            pic={<Image picture='/sell.jpg' width='40px' height='35px' />}
            type='Product-Wise Sell'
          />
          <Boxes
            width='190px'
            height='140px'
            margin='10px 20px 0px 80px'
            color='white'
            name='Employees'
            digit='246'
            pic={<Image picture='/employees.jpg' width='40px' height='35px' />}
            type='Weekly Sells'
          />
        </Section>
        <Section></Section>

        <Section>
          <Boxes
            width='270px'
            height='245px'
            margin='10px 20px 0px 80px'
            color='white'
            name='Todo'
          >
            <Button name=' Add ' color='#2197F3' />
            <Button
              type='search'
              name='What do you need to do today?'
              color='#A6A6A6'
            />
            <checkbox>check </checkbox>
          </Boxes>

          <Boxes
            width='270px'
            height='245px'
            margin='10px 20px 0px 80px'
            color='white'
            name='Schedules'
            digit='11 Dec 2021'
            type='Skype call with Alex'
          >
            <Button type='search' name='London UK' color='#A6A6A6' />
            <Button name='3: 45 AM' color='#2197F3' />
          </Boxes>
          <Boxes
            width='270px'
            height='245px'
            margin='10px 20px 0px 80px'
            color='#2196F3'
            name='Monthly'
            digit='$ 168.90'
            type='This Month'
          >
            <Button name='18%' color='#549FF4' />
          </Boxes>
        </Section>
      </div>
    );
  }
}

export default App;
