import { useEffect, useRef, useState } from "react";
import Match from "../../assets/main/match.svg";
import MyListImg from "../../assets/main/myList.svg";
import One from "../../assets/Info/One.svg";
import MyListInfo from "./MylistInfo";

const Info = () => {
  const [checked, setChecked] = useState(false);
  const [num, setNum] = useState("");

  const [gender, setGender] = useState("");
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

  useEffect(() => {
    const isPhoneValid = num.length === 13 && num.startsWith("010-");

    const isGenderValid = gender !== "";

    setChecked(isPhoneValid && isGenderValid);
  }, [num, gender]);

  return page === "info" ? (
    <div className="flex flex-col w-full h-screen items-center justify-between text-[17px] sm:text-[15px] md:text-[16px] lg:text-[17px] xl:text-[18px] scrollbar-hide overflow-y-auto">
      <header className="flex flex-col items-center my-10">
        <img src={Match} className="w-[108px] h-[20px]" alt="match" />
        <img
          src={MyListImg}
          className="w-[122px] h-[37px] mt-5"
          alt="mylistImg"
        />
        <img src={One} alt="one" className="w-[98px] h-[33px] mt-10" />
      </header>

      <main>
        <div className="flex flex-col mx-4 ">
          <div className="text-[20px] font-bold leading-6 text-center mb-16">
            <p className="mb-10">정보를 입력해주세요</p>
            <p className="mb-6">수집한 개인정보는</p>
            <p className="mb-6 ">28일 축제가 끝나면 바로 폐기됩니다!</p>
          </div>
          <div className="mb-12">
            <fieldset className="mb-8">
              <legend className="mb-4 text-lg font-semibold">
                성별(본인의 성별)
              </legend>
              <div className="flex flex-col mb-6">
                <label className="flex items-center space-x-2 mb-4">
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
          </div>
          <div className="mb-12">
            <label htmlFor="phoneNumber" className="mb-4 text-lg font-semibold">
              핸드폰 번호
            </label>
            <input
              id="phoneNumber"
              type="tel"
              placeholder="- 없이 입력해주세요. ex) 01012345678"
              value={num}
              ref={phoneRef}
              onChange={handlePhone}
              className="pl-2 w-full h-[58px] border-[2px] border-[#EDEDED] rounded-2xl"
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
    <MyListInfo setChecked={setChecked} sex={gender} phone={num} />
  );
};

export default Info;
