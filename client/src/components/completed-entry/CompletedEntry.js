import React, { Component } from "react";
// import { Button, Col, Row, Container } from "reactstrap";

class CompletedEntry extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { entryData, removeEntry } = this.props;
    console.log("entryData: ", entryData);
    return (
      <div>
        <h1>{entryData.title}</h1>
        <p>{entryData.body}</p>
      </div>
    );
  }

  //   EntryHeader = () => {
  //     return <h2></h2>;
  //   };

  // EntryBody = (props) => {
  //   console.log("props: ", props);
  //   const data = props.entryData || [];
  //   const lines = data.map((line, index) => {
  //     return (
  //       <Container key={index} className="shadow p-3 mb-5 bg-white rounded">
  //         <Row>
  //           <Col>
  //             <h2>{line.title}</h2>
  //             <small>{Date()}</small>
  //             <p>{line.body}</p>
  //             <Button onClick={() => props.removeEntry(index)} color="primary">
  //               Delete
  //             </Button>
  //           </Col>
  //         </Row>
  //       </Container>
  //     );
  //   });

  //   return <div>{lines}</div>;
  // };
}

export default CompletedEntry;
