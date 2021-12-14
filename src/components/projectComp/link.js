const Link = (props) => (
  // <a
  //   href='#'
  //       style={{ color: '#fff', textDecoration: 'none', padding:'20px' }}

  // >
  //       {props.schedule}
  //       {props.new}
  //       {props.reports}
  //       {props.score}
  // </a>

  
    <a
      href='#'
      style={{ color: 'white', textDecoration: 'none', padding: '40px',margin:'15px' }}
    >
      {props.name}
    </a>
  
);
export default Link;
