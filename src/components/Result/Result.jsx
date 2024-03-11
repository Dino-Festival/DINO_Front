import Match from "../../assets/main/match.svg";
import MyListImg from "../../assets/main/myList.svg";

const Result = () => {
  return (
    <main className="flex flex-col w-full h-full items-center justify-center gap-y-8 text-[20px] leading-5 font-semibold">
      <div>
        <img src={Match} alt="match" />
        <img src={MyListImg} alt="mylistImg" />
      </div>
      <div className="text-center leading-6">
        <p>신청이 완료되었습니다.</p>
        <p>0월 0일에</p>
        <p>매칭 결과를 보내드릴 예정입니다.</p>
        <p>감사합니다.</p>
      </div>
    </main>
  );
};

export default Result;
