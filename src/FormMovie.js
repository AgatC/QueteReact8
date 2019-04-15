import React, { Component } from 'react';

class FormMovie extends Component {
  constructor(props) {
    super(props);
    this.state = {
      nameMovie: '',
      url: '',
      textarea: '',
    }
    this.onChange = this.onChange.bind(this);
    this.submitForm = this.submitForm.bind(this);
  }

  onChange(e) {
    this.setState({
      [e.target.name]: e.target.value,
    });
  }

  submitForm(e) {
    e.preventDefault();
    const url = "http://campus-bordeaux.ovh:3001/api/quests/movies/";
    const config = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(this.state),
    };

    fetch(url, config)
      .then(res => res.json())
      .then(res => {
        if (res.error) {
          alert(res.error);
        } else {
          alert(`Film ajouté avec l'ID ${res}!`);
        }
      }).catch(e => {
        console.error(e);
        alert('Erreur lors de l\'ajout de votre film.');
      });
  }

  render() {
    return (
      <div className="FormMovie">
        <h1>Mon film préféré</h1>

        <form onSubmit={this.submitForm}>
          <fieldset>
            <legend>Informations</legend>
            <div className="form-data">
              <label htmlFor="nameMovie">Nom du film</label>
              <input
                type="text"
                id="nameMovie"
                name="nameMovie"
                onChange={this.onChange}
                value={this.state.nameMovie}
                required
              />
            </div>

            <div className="form-data">
              <label htmlFor="url">Url</label>
              <input
                type="url"
                id="url"
                name="url"
                onChange={this.onChange}
                value={this.state.url}
                required
              />
            </div>

            <div className="form-data">
              <label htmlFor="textarea">Votre commentaire</label>
              <input
                type="textarea"
                id="textarea"
                name="textarea"
                onChange={this.onChange}
                value={this.state.textarea}
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

export default FormMovie;
