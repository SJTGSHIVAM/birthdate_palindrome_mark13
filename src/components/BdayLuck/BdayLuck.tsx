import { useState } from "react";
import Giphy from "../Giphy";
import PrivacyNotice from "../PrivacyNotice";
import "./BdayLuck.css";
const BdayLuck = () => {
  const [luckyNumber, setLuckyNumber] = useState<number>(NaN);
  const [bDate, setBDate] = useState<string>("");
  const [isLucky, setIsLucky] = useState(true);
  const [valLuckyNumber, setValLuckyNumber] = useState(true);
  const [valBDate, setValBDate] = useState(true);
  const [answerAvailible, setAnswerAvailible] = useState(false);

  const invalidateNumber = (e: number): boolean => isNaN(e) || e < 1;
  const invalidateBDate = (e: string): boolean => isNaN(Date.parse(e));

  const luckLogic = (bday: string) => {
    const bdayLen = bday.length;
    let sum = 0;
    for (let i = 0; i < bdayLen; i++)
      if (!isNaN(parseInt(bday[i]))) sum = sum + parseInt(bday[i]);
    return sum % luckyNumber === 0;
  };

  const checkLuck = () => {
    if (invalidateNumber(luckyNumber) && invalidateBDate(bDate)) {
      setValBDate(false);
      setValLuckyNumber(false);
      return;
    }
    if (invalidateBDate(bDate)) {
      setValBDate(false);
      return;
    }
    if (invalidateNumber(luckyNumber)) {
      setValLuckyNumber(false);
      return;
    }
    setIsLucky(luckLogic(bDate));
    setAnswerAvailible(true);
    // console.log(luckLogic(bDate));
    // console.log(luckyNumber);
    // console.log(valBDate);
  };

  const onDateChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
    const bday = String(event.target.value);
    console.log(bday);
    if (invalidateBDate(bday)) {
      setValBDate(false);
      setBDate(bday);

      return;
    }
    setValBDate(true);
    setBDate(bday);
  };

  const onLuckyNumberChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ): void => {
    const luckyNum = parseFloat(event.target.value);
    setAnswerAvailible(false);
    if (invalidateNumber(luckyNum)) {
      setValLuckyNumber(false);
      setLuckyNumber(luckyNum);

      return;
    }
    setValLuckyNumber(true);
    setLuckyNumber(luckyNum);
  };
  return (
    <>
      <PrivacyNotice />

      <div className="bcard">
        <header className="head">Input Bday</header>
        <section className="instruction">Enter your birth date</section>
        <label>
          <section className="label"> Birth Date</section>
          <input
            type="date"
            onFocus={() => {
              setAnswerAvailible(false);
            }}
            onBlur={onDateChange}
          />
        </label>

        {!valBDate && (
          <div>Make sure to fill a valid date and then click the button.</div>
        )}
        <label>
          <section className="label"> Lucky Number:</section>
          <input
            type="number"
            value={luckyNumber}
            onChange={onLuckyNumberChange}
          />
        </label>
        {!valLuckyNumber && (
          <div>Please enter a positive Number greater than one</div>
        )}
        <button onClick={checkLuck}>CHECK</button>
        {answerAvailible &&
          (!isLucky ? (
            <section>
              <span>
                Hard luck! Your Birthday is not forming a lucky number.
              </span>
              <Giphy searchTerm={"sad"} key={"sad"} />
            </section>
          ) : (
            <section>
              <span>Hurray! Your Birthday is forming a lucky number.</span>
              <Giphy searchTerm={"happy"} key={"happy"} />
            </section>
          ))}
      </div>
    </>
  );
};
export default BdayLuck;
