import React from 'react';
import { createFilm } from '../api/films';
import { useNavigate } from 'react-router-dom';

function CreateNewFilm() {
  const navigate = useNavigate();

  const [newFilm, setNewFilm] = React.useState({
    title: '',
    country: '',
    continent: '',
    language: '',
    runTime: Number,
    director: '',
    releaseYear: Number,
    description: '',
    img: '',
  });

  function handleChange(event) {
    setNewFilm({ ...newFilm, [event.target.name]: event.target.value });
  }
  function handleSubmit(event) {
    event.preventDefault();

    const getData = async () => {
      try {
        await createFilm(newFilm);
        navigate('/FilmIndex');
      } catch (err) {
        console.error(err);
      }
    };
    getData();
  }

  return (
    <section className="section">
      <div className="container">
        <div className="columns">
          <form
            className="column is-half is-offset-one-quarter box"
            onSubmit={handleSubmit}
          >
            <div className="field">
              <label className="label">Film Title</label>
              <div className="control">
                <input
                  className="input"
                  placeholder="Title"
                  name="title"
                  onChange={handleChange}
                  value={newFilm.title}
                />
              </div>
            </div>
            <div className="field">
              <label className="label">Country of Origin...</label>
              <div className="control">
                <input
                  className="input"
                  placeholder="i.e. Germany, Brazil, Portugal, Egypt, Japan, etc."
                  name="country"
                  onChange={handleChange}
                  value={newFilm.country}
                />
              </div>
            </div>
            <div className="field">
              <label className="label">Continent of Origin...</label>
              <div className="control">
                <input
                  className="input"
                  placeholder="Europe, Asia, Africa, Oceania, North America, South America or Antarctica"
                  name="continent"
                  onChange={handleChange}
                  value={newFilm.continent}
                />
              </div>
            </div>
            <div className="field">
              <label className="label">Language(s)</label>
              <div className="control">
                <input
                  className="input"
                  placeholder="Language(s)"
                  name="language"
                  onChange={handleChange}
                  value={newFilm.language}
                />
              </div>
            </div>
            <div className="field">
              <label className="label">Film Runtime</label>
              <div className="control">
                <input
                  className="input"
                  placeholder="i.e. 93, 104, etc. (total min)"
                  name="runTime"
                  onChange={handleChange}
                  value={newFilm.runTime}
                />
              </div>
            </div>
            <div className="field">
              <label className="label">Director</label>
              <div className="control">
                <input
                  className="input"
                  placeholder="i.e. Andrei Tarkovsky"
                  name="director"
                  onChange={handleChange}
                  value={newFilm.director}
                />
              </div>
            </div>
            <div className="field">
              <label className="label">Release Year</label>
              <div className="control">
                <input
                  className="input"
                  placeholder="1999, 2005, etc"
                  name="releaseYear"
                  onChange={handleChange}
                  value={newFilm.releaseYear}
                />
              </div>
            </div>
            <div className="field">
              <label className="label">Description</label>
              <div className="control">
                <textarea
                  className="textarea"
                  placeholder=""
                  name="description"
                  onChange={handleChange}
                  value={newFilm.description}
                />
              </div>
            </div>
            <div className="field">
              <label className="label">Image</label>
              <div className="control">
                <input
                  className="input"
                  placeholder="https://......."
                  name="img"
                  onChange={handleChange}
                  value={newFilm.img}
                />
              </div>
            </div>
            <div className="field">
              <button type="submit" className="button is-dark is-fullwidth">
                Add New Film to the Collection!
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}

export default CreateNewFilm;
