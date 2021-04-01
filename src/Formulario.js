import React from 'react';
//import ReactDOM from 'react-dom';
import styled from 'styled-components';

const Container = styled.div`
  align-items: center;
  display: flex;
  height: 100vh;
  justify-content: center;
  width: 100%;
  flex-direction: column;
`;

const Sub = styled.div`
  align-items: center;
  display: flex;
  justify-content: center;
  width: 100%;
  flex-direction: column;
  padding: 15px;
`;

const Textarea = styled.label`
  display: flex;
  justify-content: center;
  flex-direction: column;
`;

const Area = styled.textarea`
  resize: none; 
  border-radius: 5px;
  border: 1px solid #888;
`;

const Boton = styled.button`
  color: #fff;
  background: #1faaae;
  padding: 5px 19px;
  border: 1px;
  border-radius: 5px;
`;

class Formulario extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      mensaje: '',
      date: ''
    }
  }
  
  handleChange = (e) => {
    const { mensaje, value } = e.target
    this.setState({ [mensaje]: value })
  }
  
  handleSubmit = (e) => {
    e.preventDefault()
    const values = JSON.stringify(this.state)
    alert(values)
  }
  
  render () {
    const { mensaje, date } = this.state
    
    return (
      <Container>
         <h1>Time Capsules</h1>
         <form onSubmit={this.handleSubmit}>
          <Sub>
			 <input type="date" date="{{date}}" timezone="[[timezone]]"></input>
          </Sub>

          <Sub>
            <Textarea>
            Comments:
              	<Area maxLength="300" rows="6" cols="60" value={this.state.value} onChange={this.handleChange} />        
            </Textarea>
          </Sub>
          
          <Sub>
             <Boton type="submit">Send</Boton>
          </Sub>
        </form>
      </Container>
    )
  }
}

export default Formulario;
