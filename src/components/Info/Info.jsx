import { useEffect, useRef, useState } from "react";
import Match from "../../assets/main/match.svg";
import MyListImg from "../../assets/main/myList.svg";
import One from "../../assets/Info/One.svg";
import MyListInfo from "./MylistInfo";
import { toast } from "react-toastify";

const Info = () => {
  const [checked, setChecked] = useState(false);
  const [num, setNum] = useState(localStorage.getItem("phone") || "");
  const [gender, setGender] = useState(localStorage.getItem("gender") || "");
  const phoneRef = useRef();

  const [page, setPage] = useState(localStorage.getItem("page") || "info");

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

    setNum(result);
  };

  useEffect(() => {
    const isPhoneComplete = num.length === 13; // 번호가 완전히 입력되었는지 확인
    const startsWith010 = num.startsWith("010-"); // 번호가 010으로 시작하는지 확인

    if (isPhoneComplete && !startsWith010) {
      toast.error("핸드폰 번호는 010으로 시작해야 합니다.");
    }

    const isGenderValid = gender !== "";
    if (gender.length > 0 && !isGenderValid) {
      toast.error("성별을 선택해주세요.");
    }

    setChecked(isPhoneComplete && startsWith010 && isGenderValid);
  }, [num, gender]);

  const handleImageClick = (targetPage) => {
    setPage(targetPage);
  };

  useEffect(() => {
    // 페이지, 성별, 번호 상태를 로컬 스토리지에 저장
    localStorage.setItem("page", page);
    localStorage.setItem("gender", gender);
    localStorage.setItem("phone", num);

    // 나머지 useEffect 로직은 동일하게 유지
  }, [page, gender, num]);

  return page === "info" ? (
    <div className="flex flex-col w-full h-screen items-center justify-between text-[17px] sm:text-[15px] md:text-[16px] lg:text-[17px] xl:text-[18px] scrollbar-hide overflow-y-auto">
      <header className="flex flex-col items-center my-10">
        <img src={Match} className="w-[108px] h-[20px]" alt="match" />
        <img
          src={MyListImg}
          className="w-[122px] h-[37px] mt-5"
          alt="mylistImg"
        />
        <img
          onClick={() => handleImageClick("myListInfo")}
          src={One}
          alt="one"
          className="w-[98px] h-[33px] mt-10"
        />
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
                    checked={gender === "male"}
                  />
                  <span>남성</span>
                </label>
                <label className="flex items-center space-x-2">
                  <input
                    type="radio"
                    name="gender"
                    value="female"
                    onChange={(e) => setGender(e.target.value)}
                    checked={gender === "female"}
                  />
                  <span>여성</span>
                </label>
              </div>
            </fieldset>
          </div>
          <div className="mb-12">
            <label htmlFor="phoneNumber" className="mb-6 text-lg font-semibold">
              핸드폰 번호
            </label>
            <input
              id="phoneNumber"
              type="tel"
              placeholder="- 없이 입력해주세요. ex) 01012345678"
              value={num}
              ref={phoneRef}
              onChange={handlePhone}
              className="pl-2 mt-2 w-full h-[58px] border-[2px] border-[#EDEDED] rounded-2xl"
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
      sex={gender}
      phone={num}
      setPage={setPage}
    />
  );
};

export default Info;
