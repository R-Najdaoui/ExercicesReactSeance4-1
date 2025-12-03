import React from "react";

class Element extends React.Component {
  render() {
    return <li style={{ color: this.props.color }}>{this.props.elem}</li>;
  }
}

class ListeElements extends React.Component {
  render() {
    return (
      <ul>
        {this.props.elems.map((e, i) => (
          <Element key={i} elem={e} color="purple" />
        ))}
      </ul>
    );
  }
}

const Exercice6 = () => {
  return <ListeElements elems={["E1", "E2", "E3", "E4", "E5"]} />;
};

export default Exercice6;
