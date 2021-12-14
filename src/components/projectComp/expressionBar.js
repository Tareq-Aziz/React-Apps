import Button from "./button";
const Expression = () => {
    return (
      <div
        style={{
          height: '35px',
          width: '1200px',
          margin: '8px 15px 5px',
          backgroundColor: '#fff',
        }}
      >
        <span style={{ color: '#9e9e9e', paddingLeft: '80px' }}>
          Like what you see? Check out our premium version.
        </span>
        <span style={{ float: 'right', padding: '8px' }}>X </span>
        <Button name='Download Free Version' color='#9e9e9e' />
        <Button name='Upgrade To Pro' color='#8862E2' />
      </div>
    );
}
export default Expression;