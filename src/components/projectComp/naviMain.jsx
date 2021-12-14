// import React,{Component} from 'react';
import Link from './link';
// class Nav extends Component {
//     render() {
//         return (
//           <div
//             style={{ backgroundColor: 'navy', height: '70px', hover: 'true' }}
//           >
//             <Link name='Schedule' />
//             <Link name='New' />
//             <Link name='Report' />
//             <Link name='Score' />
//             {this.props.children}
//           </div>
//         );
//     }
// }
// export default Nav;

const Nav = (props) => {
  return (
    <div style={{ backgroundColor: props.color, height: '60px' }}>
      <Link name='Schedule' />
      <Link name='New' />
      <Link name='Reports' />
      <Link name='Score' />
    </div>
  );
}
export default Nav;