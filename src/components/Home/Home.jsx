import Match from "../../assets/main/match.svg";
import MyListImg from "../../assets/main/myList.svg";

const Home = () => {
  return (
    <main className="flex flex-col w-full h-full items-center justify-center gap-y-8">
      <div>
        <img src={Match} alt="match" />
      </div>
      <div className="mt-10">
        <img src={MyListImg} alt="mylistImg" />
      </div>
      <p className="text-[14px] font-semibold leading-3 text-center">
        플레이리스트로 만나는 나의 음악 메이트
      </p>
      <div className="flex flex-col font-bold text-3xl space-y-2 items-center justify-center">
        <p>마감되었습니다.</p>
        <p>성원에 감사드립니다!</p>
      </div>
      <div className="text-[14px] font-semibold mb-2 text-center">
        <p>문의</p>
        <p>(tel) 010-5459-7501</p>
        <p>
          (instagram){" "}
          <a href="https://www.instagram.com/mylist.official/">
            @mylist.official
          </a>
        </p>
      </div>
    </main>
  );
};

export default Home;
