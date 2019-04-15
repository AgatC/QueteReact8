import React, { Component } from 'react';

class Form extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: '',
      globalTitle: '',
    }

    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }
  componentDidMount() {
    this.setState({
      globalTitle: this.state.title,
    })
  }

  componentDidUpdate(prevProps, prevState) {
    console.log('Titre changé', this.state, prevState)
  }

  onChange(e) {
    this.setState({
      title: e.target.value,
    });
  }
  onSubmit(e) {
    e.preventDefault()
    this.setState({
      globalTitle: `Titre de la page : ${this.state.title}`,
    })
    console.log('Formulaire rendu')
  }


  render() {
    return (
      <div className="FormMovie">
        <h1>{this.state.globalTitle}</h1>

        <form onSubmit={this.onSubmit}>
          <fieldset>
            <legend>Nom de mon formulaire</legend>
            <div className="form-data">
              <label htmlFor="textarea"></label>
              <input
                type="text"
                id="text"
                name="text"
                onChange={this.onChange}
                value={this.state.title}
                required
              />
            </div>
            <hr />
            <div className="form-data">
              <input type="submit" value="Submit" />
            </div>
          </fieldset>
        </form>
      </div>
    );
  }
}


export default Form;