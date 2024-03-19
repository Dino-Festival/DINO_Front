import { useNavigate } from "react-router-dom";
import Match from "../../assets/main/match.svg";
import MyListImg from "../../assets/main/myList.svg";
import Fire from "../../assets/privacy/fire.svg";
import { useState } from "react";
import PrivacyModal from "./PrivacyModal";

const Privacy = () => {
  const navigate = useNavigate();

  const [checked, setChecked] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleModalOpen = () => {
    setIsModalOpen(true);
  };

  const handleModalClose = () => {
    setIsModalOpen(false);
  };

  const handleNavigate = () => {
    navigate(`/info`);
  };
  return (
    <>
      <div className="flex flex-col w-full h-screen items-center justify-between">
        <header className="mt-10">
          <img src={Match} className="w-[108px] h-[20px]" alt="match" />
          <img
            src={MyListImg}
            className="w-[122px] h-[37px] mt-5"
            alt="mylistImg"
          />
        </header>

        <main>
          <div className="flex items-center flex-col">
            <img src={Fire} alt="fire" />
            <div className="flex flex-col text-center font-semibold">
              <p>환영합니다!</p>
              <p className="mt-4">지금부터 My List 매칭을 시작합니다.</p>
            </div>
          </div>

          <div className="flex flex-col mt-20 mx-5">
            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <input
                  type="checkbox"
                  className="h-4 w-4 justify-center items-center flex rounded-sm mr-1 align-middle cursor-pointer"
                  id="agree"
                  name="agree"
                  checked={checked}
                  onChange={() => setChecked(!checked)}
                />
                <label
                  htmlFor="agree"
                  className="text-[13px] align-middle font-semibold"
                >
                  개인정보 수집/이용에 동의합니다.
                </label>
              </div>
              <button
                onClick={handleModalOpen}
                className="text-[11px] text-[#CECECE]"
              >
                자세히 보기
              </button>
            </div>
            <div>
              <p className="text-[#EA4335] text-[10px] font-semibold">
                매칭 서비스를 위해 수집한 개인정보(나이, 번호)등은 서비스가
                종료되는 즉시 파됩니다.(2024년 3월 28일)
              </p>
            </div>
          </div>
        </main>

        <footer className="w-full">
          <button
            onClick={handleNavigate}
            className={`w-full h-[70px]  font-bold text-lg ${
              checked
                ? "bg-black text-white cursor-pointer"
                : "bg-[#B6B6B6] text-white cursor-default"
            }`}
            disabled={!checked}
          >
            계속하기
          </button>
        </footer>
      </div>
      {isModalOpen && <PrivacyModal onClose={handleModalClose} />}{" "}
    </>
  );
};

export default Privacy;
