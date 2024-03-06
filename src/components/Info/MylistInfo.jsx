import { useEffect, useState } from "react";
import Match from "../../assets/main/match.svg";
import MyListImg from "../../assets/main/myList.svg";
import Two from "../../assets/Info/Two.svg";
import Warning from "../../assets/Info/Warning.svg";
import PropTypes from "prop-types";
import { postUserData } from "../../api/festival";

const MyListInfo = ({
  setChecked: setParentChecked,
  age,
  sex,
  phone,
  name,
}) => {
  const [checked, setChecked] = useState(false);
  const [myListLink, setMyListLink] = useState("");

  const handleMoveMyList = () => {
    window.open("https://mylist.im/", "_blank");
  };

  const handleMyListLinkChange = (e) => {
    const link = e.target.value;
    setMyListLink(link);
    // 링크가 "https://mylist.im/"으로 시작하고 장르가 선택되었다면 체크 상태를 변경합니다.
    setChecked(link.startsWith("https://mylist.im/user") && selected !== null);
    setParentChecked(
      link.startsWith("https://mylist.im/user") && selected !== null
    );
  };

  const handleGenreSelect = (genre) => {
    setSelected(genre);
    setChecked(
      myListLink.startsWith("https://mylist.im/user") && genre !== null
    );
    setParentChecked(
      myListLink.startsWith("https://mylist.im/user") && genre !== null
    );
  };

  const [selected, setSelected] = useState(null);

  const genres = [
    ["장르무관", "힙합", "POP", "인디"],
    ["클래식", "재즈", "뮤지컬", "CCM"],
    ["K-POP", "트로트", "J-POP", "발라드"],
    ["락", "edm", "댄스", "R&B"],
  ];

  useEffect(() => {
    setChecked(false);
    setParentChecked(false); // 부모 컴포넌트의 setChecked 함수를 호출하여 상태를 변경합니다.
  }, []);

  const handleSubmission = async () => {
    if (checked) {
      const data = {
        age,
        sex,
        phone,
        name,
        link: myListLink,
        genre: selected,
      };
      await postUserData(data);
    }
  };
  // console.log(myListLink);
  // console.log(selected);
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

        <p className="mt-10 font-bold">본인의 MyList 주소와</p>
        <p className="font-bold">좋아하는 장르를 입력해주세요</p>
      </header>
      <main>
        <div className="flex flex-col mx-10">
          <label htmlFor="mylist" className="mb-2 text-lg font-semibold">
            My List 링크 첨부
          </label>
          <input
            id="mylist"
            type="text"
            placeholder="https://mylist.im/를 포함해주세요"
            value={myListLink}
            onChange={handleMyListLinkChange}
            className="pl-2 w-[360px] h-[58px] mb-4 border-[2px] border-[#EDEDED] rounded-2xl"
          />
          <div className="flex flex-row items-center">
            <img src={Warning} alt="img" className="w-[13px] h-[13px] mr-1" />
            <p className="text-[#A5A5A5] text-[11px]">MyList 주소가 없다면?</p>
          </div>
          <p className="text-[#A5A5A5] text-[11px]">
            My List에서 당신의 플레이리스트를 만들어보세요!
          </p>
          <div className="flex mt-10 items-center justify-center">
            <button
              onClick={handleMoveMyList}
              className="bg-black text-white rounded-3xl w-[226px] h-[47px] text-[16px] text-center"
            >
              My List로 이동하기
            </button>
          </div>
          <div className="mt-10">
            <p className="font-bold text-[18px]">선호 장르 (택 1)</p>
            <div className="grid grid-cols-4 gap-4 mt-1 ">
              {genres.map((row, i) =>
                row.map((genre, j) => (
                  <button
                    key={`${i}-${j}`}
                    className={`w-[80px] h-[30px] text-[12px] font-bold border-2 rounded-xl ${
                      selected === genre
                        ? "bg-black text-white"
                        : "border-gray-300"
                    }`}
                    onClick={() => handleGenreSelect(genre)}
                  >
                    #{genre}
                  </button>
                ))
              )}
            </div>
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
          onClick={handleSubmission}
        >
          계속하기
        </button>
      </footer>
    </div>
  );
};

MyListInfo.propTypes = {
  setChecked: PropTypes.func.isRequired,
  age: PropTypes.string.isRequired,
  sex: PropTypes.string.isRequired,
  phone: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
};

export default MyListInfo;
