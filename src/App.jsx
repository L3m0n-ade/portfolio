
function App() {

  return (
    <>
      <div className="navbar">
        <h3>Portfolio</h3>
      </div>
      <div className='title'>
        <h2>Hi!</h2>
        <hr/>
        <div className="d-flex">
          <p style={{paddingRight:'3rem'}}>
            Hello! I'm Halima Suijkerbuijk, currently a 2nd year student at Fontys ICT. I have mostly worked with web development, and enjoy creating both back-end & front-end projects.
            <br/>
            Below are some projects from the past few semesters:
          </p>
          <div className="d-flex col" style={{alignItems:'end'}}>
            <a href="https://github.com/L3m0n-ade" className="d-flex a-center">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 30 30" width="30px" height="30px">
                <path d="M15,3C8.373,3,3,8.373,3,15c0,5.623,3.872,10.328,9.092,11.63C12.036,26.468,12,26.28,12,26.047v-2.051 c-0.487,0-1.303,0-1.508,0c-0.821,0-1.551-0.353-1.905-1.009c-0.393-0.729-0.461-1.844-1.435-2.526 c-0.289-0.227-0.069-0.486,0.264-0.451c0.615,0.174,1.125,0.596,1.605,1.222c0.478,0.627,0.703,0.769,1.596,0.769 c0.433,0,1.081-0.025,1.691-0.121c0.328-0.833,0.895-1.6,1.588-1.962c-3.996-0.411-5.903-2.399-5.903-5.098 c0-1.162,0.495-2.286,1.336-3.233C9.053,10.647,8.706,8.73,9.435,8c1.798,0,2.885,1.166,3.146,1.481C13.477,9.174,14.461,9,15.495,9 c1.036,0,2.024,0.174,2.922,0.483C18.675,9.17,19.763,8,21.565,8c0.732,0.731,0.381,2.656,0.102,3.594 c0.836,0.945,1.328,2.066,1.328,3.226c0,2.697-1.904,4.684-5.894,5.097C18.199,20.49,19,22.1,19,23.313v2.734 c0,0.104-0.023,0.179-0.035,0.268C23.641,24.676,27,20.236,27,15C27,8.373,21.627,3,15,3z" fill="var(--primary)"/>
              </svg>
              <span style={{paddingLeft:'.2rem'}}>GitHub</span>
            </a>
            <br/>
            <a href="https://www.linkedin.com/in/halima-suijkerbuijk-2b2b81354/" className="d-flex a-center">
              <svg xmlns="http://www.w3.org/2000/svg" height="1rem" viewBox="0 0 72 72" width="1rem" class="weava-extension-context" data-weava-installed="1">
                <g fill="none" fill-rule="evenodd">
                  <path d="M8,72 L64,72 C68.418278,72 72,68.418278 72,64 L72,8 C72,3.581722 68.418278,-8.11624501e-16 64,0 L8,0 C3.581722,8.11624501e-16 -5.41083001e-16,3.581722 0,8 L0,64 C5.41083001e-16,68.418278 3.581722,72 8,72 Z" fill="var(--primary)"/>
                  <path d="M62,62 L51.315625,62 L51.315625,43.8021149 C51.315625,38.8127542 49.4197917,36.0245323 45.4707031,36.0245323 C41.1746094,36.0245323 38.9300781,38.9261103 38.9300781,43.8021149 L38.9300781,62 L28.6333333,62 L28.6333333,27.3333333 L38.9300781,27.3333333 L38.9300781,32.0029283 C38.9300781,32.0029283 42.0260417,26.2742151 49.3825521,26.2742151 C56.7356771,26.2742151 62,30.7644705 62,40.051212 L62,62 Z M16.349349,22.7940133 C12.8420573,22.7940133 10,19.9296567 10,16.3970067 C10,12.8643566 12.8420573,10 16.349349,10 C19.8566406,10 22.6970052,12.8643566 22.6970052,16.3970067 C22.6970052,19.9296567 19.8566406,22.7940133 16.349349,22.7940133 Z M11.0325521,62 L21.769401,62 L21.769401,27.3333333 L11.0325521,27.3333333 L11.0325521,62 Z" fill="white"/>
                </g>
              </svg>
              <span style={{paddingLeft:'.5rem'}}>LinkedIn</span>
            </a>
            <br/>
            <a href="mailto:halima.sb24@gmail.com" className="d-flex a-center">
              <svg id="Layer_1" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 122.88 85.57" width='1rem' height='1rem'>
                <title>mail</title>
                <path d="M3.8,0,62.48,47.85,118.65,0ZM0,80.52,41.8,38.61,0,4.53v76ZM46.41,42.37,3.31,85.57h115.9L78,42.37,64.44,53.94h0a3,3,0,0,1-3.78.05L46.41,42.37Zm36.12-3.84,40.35,42.33V4.16L82.53,38.53Z" fill="var(--primary)"/>
              </svg>
              <span style={{paddingLeft:'.5rem'}}>E-mail</span>
            </a>
          </div>
        </div>
      </div>
      <div className="contents">
        <div className='card'>
          <p className='txt-sm'>Semester 3 | January 2025</p>
          <h4>Fins & Felines</h4>
          <p>A multiplayer fishing game, where users can compete with others to score the most points in 2 minutes.
          Users can choose from multiple avatars to play as, and view scores on the leaderboard.</p>
          <p className='txt-sm'>(Game only playable with keyboard)</p>
          <br/>
          <div className='card-links'>
            <a className='btn' href="https://finsnfelines.netlify.app/" target="_blank">Visit</a>
            <p className='txt-sm'>Source code:
              <a href="https://github.com/L3m0n-ade/S3-Individual-FE" target="_blank">Front-end</a>
              <a href="https://github.com/L3m0n-ade/S3-Individual-BE" target="_blank">Back-end</a>
            </p>
          </div>
        </div>
        <div className='card' style={{marginLeft:'auto'}}>
          <p className='txt-sm'>Semester 2 | June 2024</p>
          <h4>RecipEasy</h4>
          <p>A recipe-sharing web app, where users can write and discover recipes or articles, leave comments and follow other users.</p>
          <br/>
          <div className='card-links'>
            <a className='btn' href="https://i539303.luna.fhict.nl/" target="_blank">Visit</a>
            <a className='txt-sm' style={{color:'var(--primary)'}} href="https://github.com/L3m0n-ade/S2-Individual-Project" target="_blank">Source code</a>
          </div>
        </div>
        
        <br />
        <div className="d-flex a-center s-between">
          <h4>Contact</h4>
          <div>
            <a href="mailto:halima.sb24@gmail.com">halima.sb24@gmail.com</a>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
