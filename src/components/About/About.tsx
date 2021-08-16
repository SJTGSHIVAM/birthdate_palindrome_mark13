import "./About.css";
const About = () => {
  return (
    <div className="bcard">
      <header className="head">
        <h1>Is your Bday lucky?</h1>
      </header>
      <section className="about">
        <h1 id="description">Description</h1>
        <p>
          This is a web app that checks if your Birthdate is a Palindrome or
          not. Built with ReactJS.
        </p>
        <h1 id="live-link-">Live Link :</h1>
        <p>
          <a href="https://github.com/SJTGSHIVAM/birthdate_palindrome_mark13">
            https://github.com/SJTGSHIVAM/birthdate_palindrome_mark13
          </a>
        </p>
        <h1 id="salient-features-are-">Salient features are:</h1>
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
