import { useCallback, useEffect, useState } from "react";
import Match from "../../assets/main/match.svg";
import MyListImg from "../../assets/main/myList.svg";
import Two from "../../assets/Info/Two.svg";
import Warning from "../../assets/Info/Warning.svg";
import PropTypes from "prop-types";
import { postUserData } from "../../api/festival";
import { useNavigate } from "react-router-dom";

const MyListInfo = ({ setChecked: setParentChecked, sex, phone }) => {
  const [checked, setChecked] = useState(false);
  const [myListLink, setMyListLink] = useState("");
  const [deposit, setDeposit] = useState(""); // Added to hold the depositor's name

  const navigate = useNavigate();

  const handleMoveMyList = () => {
    window.open("https://mylist.im/", "_blank");
  };

  // This function now checks both the link and depositor's name
  const updateCheckState = () => {
    const isUsernameValid = myListLink.length >= 2;
    const isNameEntered = deposit.trim() !== ""; // Ensure non-empty, non-blank name
    const isValid = isUsernameValid && isNameEntered;
    setChecked(isValid);
    setParentChecked(isValid);
  };

  const handleMyListLinkChange = (e) => {
    setMyListLink(e.target.value);
    updateCheckState();
  };

  const handleDepositChange = (e) => {
    setDeposit(e.target.value);
    updateCheckState();
  };

  useEffect(() => {
    setChecked(false);
    setParentChecked(false);
  }, []);

  const handleSubmit = async () => {
    if (checked) {
      const data = {
        sex,
        phone,
        name: deposit, // Assuming 'name' is intended to be the depositor's name
        link: myListLink,
      };
      await postUserData(data);
      navigate(`/result`);
    }
  };

  const emailInput = useCallback((inputElement) => {
    if (inputElement) {
      inputElement.focus();
    }
  }, []);

  return (
    <div className="flex flex-col w-full h-screen items-center justify-between text-[17px]">
      <header className="flex flex-col items-center mt-10">
        <img src={Match} className="w-[108px] h-[20px]" alt="match" />
        <img
          src={MyListImg}
          className="w-[122px] h-[37px] mt-5"
          alt="mylistImg"
        />
        <img src={Two} alt="img" className="w-[98px] h-[33px] mt-10" />

        <p className="mt-10 font-bold">본인의 MyList 유저네임을 입력해주세요</p>
      </header>
      <main>
        <div className="flex flex-col mx-10">
          <label htmlFor="mylist" className="mb-2 text-lg font-semibold">
            유저네임 입력
          </label>
          <input
            ref={emailInput}
            id="mylist"
            type="text"
            placeholder="ex) mylist_official"
            value={myListLink}
            onChange={handleMyListLinkChange}
            className="pl-2 w-[360px] h-[58px] mb-4 border-[2px] border-[#EDEDED] rounded-2xl"
          />
          <div className="flex flex-row items-center">
            <img src={Warning} alt="img" className="w-[13px] h-[13px] mr-1" />
            <p className="text-[#A5A5A5] text-[11px]">
              MyList 가입이 안되어있다면?
            </p>
          </div>
          <p className="text-[#A5A5A5] text-[11px]">
            My List에서 당신의 플레이리스트를 만들어보세요!
          </p>
          <div className="flex mt-10 items-center justify-center">
            <button
              onClick={handleMoveMyList}
              className="bg-black text-white rounded-3xl w-[226px] h-[47px] text-[16px] text-center"
            >
              My List 시작하기
            </button>
          </div>
          <div className="mt-10">
            <p className="font-semibold text-[17px] leading-5 mb-2">결제</p>
            <p className="font-bold text-[19px] leading-6 mb-2">
              신한 110-523-474827 (김동현)
            </p>
            <p className="font-normal text-[17px] leading-5">
              매칭 요금 : 500원
            </p>
            <p className="font-normal text-[17px] leading-5">
              *입금 후 입금자명을 기재해주세요.
            </p>
          </div>
          <div className="my-10 ">
            <label htmlFor="deposit" className="text-lg font-semibold">
              입금자명
            </label>
            <input
              id="deposit"
              type="text"
              placeholder="입금자명을 입력해주세요. ex) 김동현"
              value={deposit}
              onChange={handleDepositChange}
              className="pl-2 mt-2 w-[360px] h-[58px] border-[2px] border-[#EDEDED] rounded-2xl"
            />
          </div>
        </div>
      </main>

      <footer className="w-full">
        <button
          className={`w-full h-[70px]  font-bold text-lg ${
            checked
              ? "bg-black text-white cursor-pointer"
              : "bg-[#B6B6B6] text-white cursor-default"
          }`}
          disabled={!checked}
          onClick={handleSubmit}
        >
          계속하기
        </button>
      </footer>
    </div>
  );
};

MyListInfo.propTypes = {
  setChecked: PropTypes.func.isRequired,

  sex: PropTypes.string.isRequired,
  phone: PropTypes.string.isRequired,
  // name: PropTypes.string.isRequired,
};

export default MyListInfo;
