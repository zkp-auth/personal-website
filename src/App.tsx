import profilePicture from './assets/images/profile-nacir.jpg'


function App() {
  
  return (
    <main>
      <div className="card">
        <img src={profilePicture} alt="Nacir" />
        <div>
          <h3>Nacir Ibraimo</h3>
          <p>Fullstack Developer</p>
        </div>
        
      </div>
      
    </main>
  )
}

export default App
