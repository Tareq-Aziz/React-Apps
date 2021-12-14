
const Section = (props) => {
    return (
      <section
        style={{
          margin: '10px',
          height: '270px',
          width: '100%',
          backgroundColor: '#dddd',
        }}
      >
            {props.children}
      </section>
    );
}
export default Section;