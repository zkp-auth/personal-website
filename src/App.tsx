import profilePicture from './assets/images/profile-nacir.jpg'


function App() {
  
  return (
    <main>
      <div className="card">
        <img className="avatar" src={profilePicture} alt="Nacir" />
        <div>
          <h3>Nacir Ibraimo</h3>
          <p>Fullstack Developer</p>
          <h4>
            <a href="https://github.com/zkp-auth" target="_blank" rel="noreferrer">
              @zkp-auth
            </a>
          </h4>
          <h4>France, FR</h4>
        </div>
      </div>
      <div className="projects">
        <div className="project" id="project-1">
          <h4>Project One</h4>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Repellendus
            nihil aut aliquam quidem officiis voluptatibus consequuntur
            exercitationem! Esse ut enim adipisci molestias, facilis quaerat
            tenetur ad aperiam deleniti ea ex.
          </p>
        </div>
      </div>

      
    </main>
  )
}

export default App
