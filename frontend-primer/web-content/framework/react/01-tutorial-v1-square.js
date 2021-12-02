/* //version 1;
class Square extends React.Component {
  render() {
    return <button className="square">{this.props.value}</button>;
  }
}
*/

/* version 2
class Square extends React.Component {
  render() {
    return (
      <button className="square" onClick={function() { console.log('click'); }}>
        {this.props.value}
      </button>
    );
  }
}
*/

/*
class Square extends React.Component {
  render() {
    return (
      <button className="square" onClick={() => console.log('click')}>
        {this.props.value}
      </button>
    );
  }
 }
 */

 /*
 class Square extends React.Component {
  render() {
    return (
      <button className="square" onClick={() => this.click()}>
        {this.props.value}
      </button>
    );
  }

  click(){
    console.log('click');
  }
 }
*/

 class Square extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: props.value,
    };
  }

  render() {
    return (
      /*onClick={() => console.log('click')}>*/
      <button className="square" 
        onClick={() => this.setState({value: 'X'})}>
        {this.state.value}
      </button>
    );
  }
}