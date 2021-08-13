import { useState } from "react";
import Giphy from "../Giphy";
import PrivacyNotice from "../PrivacyNotice";
import "./BdayPal.css";
let ansDate = "xxx";
let timeoutResult: ReturnType<typeof setTimeout>;
const BdayPal = () => {
  const [bDate, setBDate] = useState<string>("");
  const [answerAvailible, setAnswerAvailible] = useState(false);
  const [isPalindrome, setIsPalindrome] = useState(false);
  const [valBDate, setValBDate] = useState(true);
  const [checkClicked, setCheckClicked] = useState(false);

  const invalidateNumber = (e: number): boolean => isNaN(e) || e < 1;
  const invalidateBDate = (e: string): boolean => isNaN(Date.parse(e));
  const checkPalindrome = (datestr: string) => {
    const mid = Math.floor(datestr.length / 2);
    for (let i = 0; i < mid; i++) {
      if (datestr[i] != datestr[datestr.length - 1 - i]) return false;
    }
    return true;
  };
  const checkPossibility = (
    year: string,
    month: string,
    day: string
  ): boolean => {
    let patYYYYMMDD = year + month + day;
    let patDDMMYYYY = day + month + year;
    let patMMDDYYYY = month + day + year;
    if (checkPalindrome(patYYYYMMDD)) {
      ansDate = patYYYYMMDD;
      return true;
    } else if (checkPalindrome(patDDMMYYYY)) {
      ansDate = patDDMMYYYY;
      return true;
    } else if (checkPalindrome(patMMDDYYYY)) {
      ansDate = patMMDDYYYY;
      return true;
    }

    return false;
  };

  const findNearestPalindrome = (bday: string) => {};

  const datePalindrome = (bday: string) => {
    const dateArr = bday.split("-");
    const year = dateArr[0];
    const month = dateArr[1];
    const day = dateArr[2];

    if (checkPossibility(year, month, day)) setIsPalindrome(true);
    else {
      setIsPalindrome(false);
      findNearestPalindrome(bday);
    }
    setAnswerAvailible(true);
  };

  const checkPal = () => {
    clearTimeout(timeoutResult);
    if (invalidateBDate(bDate)) {
      setValBDate(false);
      return;
    }
    if (!answerAvailible) {
      setCheckClicked(true);
      console.log(checkClicked, "-->", valBDate);
      timeoutResult = setTimeout(() => {
        datePalindrome(bDate);
      }, 8000);
    }
  };

  const onDateChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
    const bday = String(event.target.value);
    setCheckClicked(false);
    console.log(bday);
    if (invalidateBDate(bday)) {
      setValBDate(false);
      setBDate(bday);

      return;
    }
    setValBDate(true);
    setBDate(bday);
  };

  return (
    <>
      <PrivacyNotice />

      <div className="bcard">
        <header className="head">
          <h1>
            Enter your birthdate and we will tell you if your birthdate is a
            palindrome
          </h1>
        </header>
        <section className="instruction">
          This app checks your birthdate in 4 formats yyyy-mm-dd, dd-mm-yyyy,
          mm-dd-yy, m-dd-yyyy e.g. if your birthdate is 01 Aug 1995, then app
          will check for 19950801, 01081995, 080195, 1081995
        </section>
        <label>
          <section className="label">Enter your Birth Date</section>
          <input
            type="date"
            onFocus={() => {
              setValBDate(false);
              setAnswerAvailible(false);
              setCheckClicked(false);
            }}
            onBlur={onDateChange}
            onChange={onDateChange}
          />
        </label>

        {!valBDate && (
          <div>Make sure to fill a valid date and then click the button.</div>
        )}

        <button onClick={checkPal}>CHECK</button>

        {checkClicked &&
          (answerAvailible ? (
            !isPalindrome ? (
              <span>
                Okay! Your Birthday is not a Pallindrome.Nearest Palindrome is{" "}
                {ansDate} you missed it by {} days.
              </span>
            ) : (
              <span>Hurray! Your Birthdate({ansDate}) is a Pallindrome.</span>
            )
          ) : (
            <Giphy searchTerm={"wait"} key={"wait"} />
          ))}
      </div>
    </>
  );
};
export default BdayPal;
