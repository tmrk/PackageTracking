const Header = () => {

  return (
    <header>
      <h1>Package Tracking</h1>
    </header>
  );

}

const Footer = () => {

  return (
    <footer>
      <p className='date'>May 2022</p>
      <p>This is a demo React app that was <br/>created for a course exercise.</p>
      <p className='githublink'>
        See the code at: <br/>
        <a href='https://github.com/tmrk/PackageTracking'>github.com/tmrk/PackageTracking</a>
      </p>
    </footer>
  );

}

export { Header, Footer };
