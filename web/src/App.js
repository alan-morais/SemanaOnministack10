<<<<<<< HEAD
import React, { useEffect, useState } from 'react';

import './global.css';
import './App.css';
import './Sidebar.css';
import './Main.css';

function App() {
  const [latitue, setLatitue] = useState('');
  const [longitude, setLongitude] = useState('');
  const [github_username, setGithub_username] = useState('');
  const [techs, setTechs] = useState('');

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(
      (position) => {
        const { latitude, longitude } = position.coords;
        setLatitue(latitude);
        setLongitude(longitude);
      },

      (err) => {
        console.log(err);
      },
      {
        timeout: 30000,
      }
    )
  }, []);

  async function handleAddDev(e) {
    e.preventDefalt();
const response = await api.post('/devs', {
  github_username,
  techs,
  latitude,
  longitude,
})

setGithub_username('');
setTechs('');

=======
import React from 'react';
import './global.css';
import './App.css';
import './Sidebar.css';
import './Main.css'

function App() {
>>>>>>> 38c7f7501080e9402474416344f7b09036607277
  return (
    <div id="app">
      <aside>
        <strong>Cadrastrar</strong>
        <form>
<<<<<<< HEAD
          <div className="input-block">
            <label htmlFor="github_username">Usuário do Github</label>
            <input name="github_username" id="github_username" required
              value={github_username}
              onChange={e => setGithub_username(e.target.value)} />
          </div>

          <div className="input-block">
            <label htmlFor="techs">Tecnologias</label>
            <input name="techs" id="techs" required value={techs}
              onChange={e => setTechs(e.target.value)} />
          </div>

          <div className="input-group">
            <div className="input-block">
              <label htmlFor="latitude">latitude</label>
              <input type="number" name="latitude" id="latitude" required value={latitue}
                onChange={e => setLatitue(e.target.value)} />
            </div>

            <div className="input-block">
              <label htmlFor="longitude">longitude</label>
              <input type="number" name="longitude" id="longitude" required value={longitude}
                onChange={e => setLongitude(e.target.value)} />
=======
          <div class="input-block">
            <label htmlFor="github_username">Usuário do Github</label>
            <input name="github_username" id="github_username" required />
          </div>

          <div class="input-block">
            <label htmlFor="techs">Tecnologias</label>
            <input name="techs" id="techs" required />
          </div>

          <div className="input-group">
            <div class="input-block">
              <label htmlFor="latitude">latitude</label>
              <input name="latitude" id="latitude" required />
            </div>

            <div class="input-block">
              <label htmlFor="longitude">longitude</label>
              <input name="longitude" id="longitude" required />
>>>>>>> 38c7f7501080e9402474416344f7b09036607277
            </div>
          </div>
          <button type="submit">Salvar</button>
        </form>
      </aside>

      <main>
        <ul>
          <li className="dev-item">
            <header>
              <img src="https://avatars2.githubusercontent.com/u/27930049?s=460&v=4" alt="Alan França" />
              <div className="user-info">
                <strong>Alan França</strong>
                <span>HTML, CSS, Javascript, Python</span>
              </div>
            </header>
            <p>Cientista da Computação e sempre estudando</p>
            <a href="https://github.com/alan-morais">Acessar perfil no Github</a>
          </li>

          <li className="dev-item">
            <header>
              <img src="https://avatars2.githubusercontent.com/u/27930049?s=460&v=4" alt="Alan França" />
              <div className="user-info">
                <strong>Alan França</strong>
                <span>HTML, CSS, Javascript, Python</span>
              </div>
            </header>
            <p>Cientista da Computação e sempre estudando</p>
            <a href="https://github.com/alan-morais">Acessar perfil no Github</a>
          </li>

          <li className="dev-item">
            <header>
              <img src="https://avatars2.githubusercontent.com/u/27930049?s=460&v=4" alt="Alan França" />
              <div className="user-info">
                <strong>Alan França</strong>
                <span>HTML, CSS, Javascript, Python</span>
              </div>
            </header>
            <p>Cientista da Computação e sempre estudando</p>
            <a href="https://github.com/alan-morais">Acessar perfil no Github</a>
          </li>

          <li className="dev-item">
            <header>
              <img src="https://avatars2.githubusercontent.com/u/27930049?s=460&v=4" alt="Alan França" />
              <div className="user-info">
                <strong>Alan França</strong>
                <span>HTML, CSS, Javascript, Python</span>
              </div>
            </header>
            <p>Cientista da Computação e sempre estudando</p>
            <a href="https://github.com/alan-morais">Acessar perfil no Github</a>
          </li>
        </ul>
      </main>

    </div>
  );
}
<<<<<<< HEAD
}

export default App;

//parei em 1:25
=======

export default App;
>>>>>>> 38c7f7501080e9402474416344f7b09036607277
