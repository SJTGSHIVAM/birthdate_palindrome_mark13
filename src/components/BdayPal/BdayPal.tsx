import { useState } from "react";
import Giphy from "../Giphy";
import PrivacyNotice from "../PrivacyNotice";
import "./BdayPal.css";

let timeoutResult: ReturnType<typeof setTimeout>;
const BdayPal = () => {
  const [bDate, setBDate] = useState<string>("");
  const [answerAvailible, setAnswerAvailible] = useState(false);
  const [isPalindrome, setIsPalindrome] = useState(false);
  const [valBDate, setValBDate] = useState(true);
  const [checkClicked, setCheckClicked] = useState(false);
  const [ansDate, setAnsDtae] = useState("");

  const invalidateNumber = (e: number): boolean => isNaN(e) || e < 1;
  const invalidateBDate = (e: string): boolean => isNaN(Date.parse(e));
  const dateBreak = (date: string): string[] => {
    const dateArr = date.split("-");
    return [dateArr[0], dateArr[1], dateArr[2]];
  };
  const dateCounter = (date: string, i: number): string[] => {
    let d = new Date(date);
    d.setDate(d.getDate() + i);
    // console.log(String(d));
    return [String(d.getFullYear()), String(d.getMonth()), String(d.getDate())];
  };
  const checkPalindrome = (datestr: string) => {
    // console.log(datestr);

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
      setAnsDtae(year + "-" + month + "-" + day);
      return true;
    } else if (checkPalindrome(patDDMMYYYY)) {
      setAnsDtae(day + "-" + month + "-" + year);

      return true;
    } else if (checkPalindrome(patMMDDYYYY)) {
      setAnsDtae(month + "-" + day + "-" + year);
      return true;
    }

    return false;
  };

  const findNearestPalindrome = (bday: string) => {
    for (let i = 1; i < 3000; i = i + 1) {
      let [yearf, monthf, dayf] = dateCounter(bday, i);
      let [yearb, monthb, dayb] = dateCounter(bday, -1 * i);
      if (Number(monthf) > 10) monthf = "0" + monthf;
      if (Number(monthb) > 10) monthb = "0" + monthb;
      if (Number(dayf) > 10) dayf = "0" + dayf;
      if (Number(dayb) > 10) dayb = "0" + dayb;
      // console.log(dateCounter(bday, -1 * i));
      if (checkPossibility(yearf, monthf, dayf)) {
        break;
      } else if (checkPossibility(yearb, monthb, dayb)) {
        break;
      }
      // console.log(
      //   i,
      //   checkPossibility(yearf, monthf, dayf),
      //   checkPossibility(yearb, monthb, dayb)
      // );
    }
  };

  const datePalindrome = (bday: string) => {
    let [year, month, day] = dateBreak(bday);
    if (checkPossibility(year, month, day)) {
      setIsPalindrome(true);
      setAnswerAvailible(true);
      return true;
    } else {
      setIsPalindrome(false);
      findNearestPalindrome(bday);
      setAnswerAvailible(true);
      return false;
    }
  };

  const checkPal = () => {
    if (invalidateBDate(bDate)) {
      setValBDate(false);
      return;
    }
    if (!answerAvailible && !checkClicked) {
      setCheckClicked(true);
      // console.log(checkClicked, "-->", valBDate);
      timeoutResult = setTimeout(() => {
        datePalindrome(bDate);
      }, 10);
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
                Okay! Your Birthdate is not a Pallindrome.Nearest Palindrome is{" "}
                {ansDate}
                {ansDate} you missed it by{" "}
                {new Date(bDate).getDate() - new Date(ansDate).getDate()} days.
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
