import { useEffect, useRef, useState } from "react";
import Match from "../../assets/main/match.svg";
import MyListImg from "../../assets/main/myList.svg";
import One from "../../assets/Info/One.svg";
import MyListInfo from "./MylistInfo";

const Info = () => {
  const [checked, setChecked] = useState(false);
  const [num, setNum] = useState("");
  const [age, setAge] = useState("");
  const [gender, setGender] = useState("");
  const [deposit, setDeposit] = useState("");
  const phoneRef = useRef();

  // 휴대폰 번호 입력 함수
  const handlePhone = (e) => {
    const value = phoneRef.current.value.replace(/\D+/g, "");
    const numberLength = 11;

    let result;
    result = "";

    for (let i = 0; i < value.length && i < numberLength; i++) {
      switch (i) {
        case 3:
          result += "-";
          break;
        case 7:
          result += "-";
          break;

        default:
          break;
      }

      result += value[i];
    }

    phoneRef.current.value = result;

    setNum(e.target.value);
  };

  const [page, setPage] = useState("info");
  // const [page, setPage] = useState("myListInfo");

  useEffect(() => {
    const isPhoneValid = num.length === 13 && num.startsWith("010-");
    const isAgeValid = age !== "";
    const isGenderValid = gender !== "";
    const isDepositValid = deposit !== "";

    setChecked(isPhoneValid && isAgeValid && isGenderValid && isDepositValid);
  });

  return page === "info" ? (
    <div className="flex flex-col w-full h-screen items-center justify-between text-[17px] scrollbar-hide overflow-y-auto">
      <header className="flex flex-col items-center mt-10">
        <img src={Match} className="w-[108px] h-[20px]" alt="match" />
        <img
          src={MyListImg}
          className="w-[122px] h-[37px] mt-5"
          alt="mylistImg"
        />
        <img src={One} alt="one" className="w-[98px] h-[33px] mt-10" />
        <p className="mt-10 font-bold ">정보를 입력해주세요.</p>
      </header>
      <main>
        <div className="flex flex-col mx-10">
          <label htmlFor="age" className="mb-2 text-lg font-semibold">
            나이
          </label>
          <input
            id="age"
            type="number"
            value={age}
            onChange={(e) => setAge(e.target.value)}
            className="pl-2 w-[360px] h-[58px] mb-4 border-[2px] border-[#EDEDED] rounded-2xl"
          />

          <fieldset className="mb-4">
            <legend className="mb-2 text-lg font-semibold">성별</legend>
            <div className="flex flex-col">
              <label className="flex items-center space-x-2">
                <input
                  type="radio"
                  name="gender"
                  value="male"
                  onChange={(e) => setGender(e.target.value)}
                />
                <span>남성</span>
              </label>
              <label className="flex items-center space-x-2">
                <input
                  type="radio"
                  name="gender"
                  value="female"
                  onChange={(e) => setGender(e.target.value)}
                />
                <span>여성</span>
              </label>
            </div>
          </fieldset>

          <label htmlFor="phoneNumber" className="mb-2 text-lg font-semibold">
            핸드폰 번호
          </label>
          <input
            id="phoneNumber"
            type="tel"
            placeholder="- 없이 입력해주세요. ex) 01012345678"
            value={num}
            ref={phoneRef}
            onChange={handlePhone}
            className="pl-2 w-[360px] h-[58px] border-[2px] border-[#EDEDED] rounded-2xl"
          />
          <div className="mt-10">
            <p className="font-semibold text-[17px] leading-5 mb-2">결제</p>
            <p className="font-bold text-[19px] leading-6 mb-2">
              신한 110-523-474827 (김동현)
            </p>
            <p className="font-normal text-[17px] leading-5">
              매칭 요금 : 990원
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
              onChange={(e) => setDeposit(e.target.value)}
              className="pl-2  mt-2 w-[360px] h-[58px] border-[2px] border-[#EDEDED] rounded-2xl"
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
          onClick={() => setPage("myListInfo")}
        >
          계속하기
        </button>
      </footer>
    </div>
  ) : (
    <MyListInfo
      setChecked={setChecked}
      age={age}
      sex={gender}
      phone={num}
      name={deposit}
    />
  );
};

export default Info;
