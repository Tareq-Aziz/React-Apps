const Boxes = (props) => {
  
  return (
    <div
      style={{
        width: props.width,
        height: props.height,
        float: 'left',
        backgroundColor: props.color,
        margin: props.margin,
      }}
    >
      <div
        style={{
          textAlign: 'center',
          fontFamily: 'Arial',
          fontSize: '18px',
          fontWeight: 'bold',
          marginTop: '25px',
        }}
      >
        {props.name}
        {props.img}
      </div>
      <div
        style={{
          textAlign: 'center',
          fontSize: '25px',
          fontWeight: 'none',
          fontFamily: 'Arial',
          marginTop: '12px',
        }}
      >
        {props.pic}
        {props.digit}{' '}
      </div>
      <div style={{ textAlign: 'center', marginTop: '18px', color: '#4F4F4F' }}>
        {props.type}
      </div>
      {props.children}
    </div>
  );
};
export default Boxes;
