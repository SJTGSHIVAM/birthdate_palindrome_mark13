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
  const [dayDiff, setDayDiff] = useState("");

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
    return [
      String(d.getFullYear()),
      String(d.getMonth() + 1),
      String(d.getDate()),
    ];
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
    let monthNo0 = month;
    let dayNo0 = day;
    let patYYYYMD = year + month + day;
    let patDMYYYY = day + month + year;

    if (parseInt(month, 10) < 10) month = "0" + month;

    let patYYYYMMD = year + month + day;
    let patDMMYYYY = day + month + year;
    let patMMDYYYY = month + day + year;

    if (parseInt(day, 10) < 10) day = "0" + day;
    let patYYYYMDD = year + monthNo0 + day;
    let patDDMYYYY = day + monthNo0 + year;
    let patMDYYYY = monthNo0 + day + year;

    if (parseInt(year, 10) < 10) year = "0" + year;
    let patYYYYMMDD = year + month + day;
    let patDDMMYYYY = day + month + year;
    let patMMDDYYYY = month + day + year;

    if (checkPalindrome(patYYYYMMD)) {
      setAnsDtae(year + "-" + month + "-" + dayNo0 + " Pattern(YYYY-MM-D)");
      return true;
    } else if (checkPalindrome(patMMDYYYY)) {
      setAnsDtae(month + "-" + dayNo0 + "-" + year + " Pattern(MM-D-YYYY)");
      return true;
    } else if (checkPalindrome(patDMMYYYY)) {
      setAnsDtae(dayNo0 + "-" + month + "-" + year + " Pattern(DD-MM-YYYY)");
      return true;
    } else if (checkPalindrome(patYYYYMDD)) {
      setAnsDtae(year + "-" + monthNo0 + "-" + day + " Pattern(YYYY-M-DD)");
      return true;
    } else if (checkPalindrome(patDDMYYYY)) {
      setAnsDtae(day + "-" + monthNo0 + "-" + year + " Pattern(DD-M-YYYY)");
      return true;
    } else if (checkPalindrome(patMDYYYY)) {
      setAnsDtae(monthNo0 + "-" + day + "-" + year + " Pattern(M-DD-YYYY)");
      return true;
    } else if (checkPalindrome(patDMYYYY)) {
      setAnsDtae(dayNo0 + "-" + monthNo0 + "-" + year + " Pattern(D-M-YYYY)");
      return true;
    } else if (checkPalindrome(patYYYYMD)) {
      setAnsDtae(year + "-" + monthNo0 + "-" + dayNo0 + " Pattern(YYYY-M-D)");
      return true;
    } else if (checkPalindrome(patDDMMYYYY)) {
      setAnsDtae(day + "-" + month + "-" + year + " Pattern(DD-MM-YYYY)");
      return true;
    } else if (checkPalindrome(patMMDDYYYY)) {
      setAnsDtae(month + "-" + day + "-" + year + " Pattern(MM-DD-YYYY)");
      console.log(month + "-" + day + "-" + year + " Pattern(MM-DD-YYYY)");
      return true;
    } else if (checkPalindrome(patYYYYMMDD)) {
      setAnsDtae(year + "-" + month + "-" + day + " Pattern(YYYY-MM-DD)");
      console.log(year + "-" + month + "-" + day + " Pattern(YYYY-MM-DD)");
      return true;
    }

    return false;
  };

  const findNearestPalindrome = (bday: string) => {
    let i = 1;
    for (; i < 3000; i = i + 1) {
      let [yearf, monthf, dayf] = dateCounter(bday, i);
      let [yearb, monthb, dayb] = dateCounter(bday, -1 * i);

      // console.log(yearb + "-" + monthb + "-" + dayb);

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
    setDayDiff(String(i));
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
    console.log(answerAvailible, checkClicked);
    if (invalidateBDate(bDate)) {
      setValBDate(false);
      return;
    }
    // console.log(answerAvailible, checkClicked);
    if (!answerAvailible && !checkClicked) {
      setCheckClicked(true);
      // console.log(checkClicked, "-->", valBDate);
      timeoutResult = setTimeout(() => {
        datePalindrome(bDate);
      }, 6300);
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
          <h2>
            Enter your birthdate and we will tell you if your birthdate is a
            palindrome
          </h2>
        </header>
        <section className="instruction">
          This app checks your birthdate in 11 formats which are:
        </section>
        <label>
          <section className="label">Enter your Birth Date</section>
          <input
            type="date"
            onFocus={() => {
              setValBDate(false);
              console.log("1");
              setAnswerAvailible(false);
              setCheckClicked(false);
            }}
            onClick={() => {
              setValBDate(false);
              console.log("1");
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

        <button className="checkBtn" onClick={checkPal}>
          CHECK
        </button>

        {checkClicked &&
          (answerAvailible ? (
            !isPalindrome ? (
              <span>
                Okay! Your Birthdate is not a Pallindrome.Nearest Palindrome is{" "}
                {ansDate} you missed it by{" "}
                {parseInt(dayDiff, 10) > 1
                  ? dayDiff + " days"
                  : dayDiff + " day"}
                .
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
