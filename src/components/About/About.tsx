import "./About.css";
const About = () => {
  return (
    <div className="bcard">
      <header className="head">
        <h1>About</h1>
      </header>
      <section className="about">
        <h2 id="description">Description</h2>
        <p>
          This is a web app that checks if your Birthdate is a Palindrome or
          not. Built with ReactJS.
        </p>
        <h2 id="live-link-">Github Link :</h2>
        <p>
          <a href="https://github.com/SJTGSHIVAM/birthdate_palindrome_mark13">
            https://github.com/SJTGSHIVAM/birthdate_palindrome_mark13
          </a>
        </p>
        <h2 id="salient-features-are-">Salient features are:</h2>
        <ul>
          <li>Built with ReactJS</li>
          <li>An input field to take user birth date</li>
          <li>
            Checks palindrome on these formats:
            <ul>
              <li>YYYY-MM-D</li>
              <li>MM-D-YYYY</li>
              <li>DD-MM-YYYY</li>
              <li>YYYY-M-DD</li>
              <li>DD-M-YYYY</li>
              <li>M-DD-YYYY</li>
              <li>D-M-YYYY</li>
              <li>YYYY-M-D</li>
              <li>DD-MM-YYYY</li>
              <li>MM-DD-YYYY</li>
              <li>YYYY-MM-DD</li>
            </ul>
          </li>
          <li>
            Shows the output whether the user was born on a palindrome date or
            not
          </li>
        </ul>
      </section>
    </div>
  );
};
export default About;
