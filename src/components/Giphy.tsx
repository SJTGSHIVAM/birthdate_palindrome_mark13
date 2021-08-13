import axios from "axios";
import React, { useEffect, useState } from "react";
import wait from "../gif/wait.webp";

const Giphy = ({ searchTerm }: { searchTerm: string }) => {
  const [imgUrl, setImgUrl] = useState("");

  // this is random key on internet V6AU97qCSCYVmbIC5UDppEiVM1xnuO9E
  // this is officially pubic key   dc6zaTOxFJmzC
  //https://api.giphy.com/v1/gifs/translate?s=${searchTerm}&api_key=dc6zaTOxFJmzC&weirdness=1
  useEffect(() => {
    axios
      .get(
        `https://api.giphy.com/v1/gifs/translate?s=${searchTerm}&api_key=V6AU97qCSCYVmbIC5UDppEiVM1xnuO9E&weirdness=1`
      )
      .then((data) => {
        // console.log("t1");
        // console.log(JSON.stringify(data.data));
        setImgUrl(data.data.data.images.fixed_height.url);
        // console.log("t1.5");
        console.log(imgUrl);
        // console.log("t2");
      })
      .catch((_) => {
        // console.log(data);

        if (searchTerm == "wait") setImgUrl(String(wait));
        else setImgUrl(String(wait)); //Add another file and give its url here this same file is intentional right now
      });
  }, []);

  return (
    <div className="gif">
      <img src={imgUrl} key={imgUrl} />
    </div>
  );
};

export default Giphy;
