import { useState } from "react";

import { BsInfoCircleFill, BsInfoCircle } from "react-icons/bs";
const PrivacyNotice = () => {
  const [privacyNoticeVisible, setPrivacyNoticeVisible] = useState(false);

  return (
    <span className="smallcard">
      {privacyNoticeVisible ? (
        <BsInfoCircleFill
          onClick={() => {
            setPrivacyNoticeVisible(false);
          }}
        />
      ) : (
        <>
          <span>
            <BsInfoCircle />
          </span>
          <span>Privacy Notice! We are not storing your data.</span>
          <span
            className="crossbox"
            onClick={() => {
              setPrivacyNoticeVisible(true);
            }}
          >
            {" "}
            X{" "}
          </span>
        </>
      )}
    </span>
  );
};
export default PrivacyNotice;
