import { useNavigate } from "react-router-dom";
import Match from "../../assets/main/match.svg";
import MyListImg from "../../assets/main/myList.svg";

const Home = () => {
  const navigate = useNavigate();
  // const handleStart = () => {
  //   navigate("/privacy");
  // };
  return (
    <main className="flex flex-col w-full h-full items-center justify-center gap-y-8">
      <div>
        <img src={Match} alt="match" />
      </div>
      <div className="mt-10">
        <img src={MyListImg} alt="mylistImg" />
      </div>
      <p className="mt-20 text-[14px] font-semibold leading-3 text-center">
        플레이리스트로 만나는 나의 음악 메이트
      </p>
      <div className="flex items-center justify-center">
        <button
          onClick={handleStart}
          className="bg-black text-white rounded-3xl w-[360px] h-[58px] text-[20px] text-center"
        >
          Start!
        </button>
      </div>
    </main>
  );
};

export default Home;
