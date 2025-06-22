import { useRef, useState } from "react";
import Button from "../component/Button";

function MainPage() {
  const [active, setActive] = useState<"내 강의" | "강의 추가">("강의 추가");
  const [fileInfo, setFileInfo] = useState<{
    name: string;
    size: number;
  } | null>(null);

  //useRef로 버튼과 인풋 창 연결해주기
  const inputRef = useRef<HTMLInputElement | null>(null);

  //버튼에 onClick 효과 적용
  const handleFileClick = () => {
    //옵셔널 체이닝을 통해 null일 때 에러 방지
    inputRef.current?.click();
  };

  return (
    <div className="w-full flex justify-center">
      <div className="w-sm h-screen border flex flex-col py-[2rem] px-[42px]">
        <div className="flex gap-5">
          <div className="flex flex-col gap-2">
            <Button
              onClick={() => setActive("내 강의")}
              className="mt-5 w-[109px] h-[37px] text-center border-2 text-[#548AF7] rounded-3xl text-md font-bold cursor-pointer"
              label="내 강의"
            ></Button>
            {active === "내 강의" && (
              <div className="ml-1 w-[99px] h-[4px] bg-[#548AF7] rounded-2xl"></div>
            )}
          </div>
          <div className="flex flex-col gap-2">
            <Button
              onClick={() => setActive("강의 추가")}
              className="mt-5 w-[109px] h-[37px] text-center bg-[#548AF7] text-white rounded-3xl text-md font-bold cursor-pointer"
              label="강의 추가"
            ></Button>
            {active === "강의 추가" && (
              <div className="ml-1 w-[99px] h-[4px] bg-[#548AF7] rounded-2xl"></div>
            )}
          </div>
        </div>
        <div className="mt-10">
          <svg
            width="48"
            height="48"
            viewBox="0 0 48 48"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M24 32V20M24 20L18 24M24 20L30 24M6 12V33.6C6 35.8402 6 36.9595 6.43597 37.8152C6.81947 38.5678 7.43095 39.181 8.18359 39.5645C9.0384 40 10.158 40 12.3938 40H35.6062C37.842 40 38.96 40 39.8148 39.5645C40.5674 39.181 41.181 38.5682 41.5645 37.8156C42.0004 36.9599 42.0004 35.8398 42.0004 33.5996L42.0004 18.3996C42.0004 16.1593 42.0004 15.0392 41.5645 14.1836C41.181 13.4309 40.5678 12.8195 39.8152 12.436C38.9595 12 37.8402 12 35.6 12H24M6 12H24M6 12C6 9.79086 7.79086 8 10 8H17.349C18.3274 8 18.8177 8 19.2781 8.11052C19.6862 8.20851 20.0757 8.37053 20.4336 8.58984C20.8371 8.83713 21.1836 9.18363 21.875 9.875L24 12"
              stroke="#548AF7"
              stroke-width="3"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
          <h1 className="font-bold">파일 업로드</h1>
        </div>
        <p className="mt-2 text-[#ABABAB] font-bold">: 파일을 추가하십시오</p>
        <form action="post" className="mt-8">
          <div className="w-[292px] h-[217px] border-2 border-dashed border-[#ABABAB] rounded-xl p-[2rem] flex flex-col items-center">
            <svg
              width="63"
              height="63"
              viewBox="0 0 63 63"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M31.5 47.25V31.5M31.5 31.5L23.625 36.75M31.5 31.5L39.375 36.75M34.125 7.87728C33.8743 7.875 33.5929 7.875 33.2711 7.875H21.5255C18.5852 7.875 17.114 7.875 15.991 8.44722C15.0031 8.95055 14.2006 9.75312 13.6972 10.741C13.125 11.864 13.125 13.3352 13.125 16.2755V46.7255C13.125 49.6658 13.125 51.1352 13.6972 52.2582C14.2006 53.2461 15.0031 54.05 15.991 54.5533C17.1129 55.125 18.5824 55.125 21.517 55.125L41.4831 55.125C44.4176 55.125 45.885 55.125 47.0069 54.5533C47.9948 54.05 48.8 53.246 49.3033 52.2582C49.875 51.1363 49.875 49.6689 49.875 46.7344V24.4799C49.875 24.1578 49.8749 23.876 49.8725 23.625M34.125 7.87728C34.8748 7.88411 35.3491 7.91135 35.802 8.02006C36.3377 8.14867 36.8494 8.36132 37.3191 8.64917C37.8487 8.97374 38.3035 9.42852 39.2109 10.3359L47.4153 18.5403C48.3233 19.4483 48.7748 19.9011 49.0995 20.4309C49.3873 20.9006 49.6003 21.4128 49.7289 21.9485C49.8376 22.4011 49.8654 22.8756 49.8725 23.625M34.125 7.87728V15.225C34.125 18.1653 34.125 19.6344 34.6972 20.7574C35.2006 21.7453 36.0031 22.55 36.991 23.0533C38.1129 23.625 39.5824 23.625 42.5169 23.625H49.8725M49.8725 23.625H49.8755"
                stroke="#548AF7"
                stroke-width="4"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
            <div className="flex gap-2 mt-7">
              <Button
                label="파일 선택"
                type="button"
                onClick={handleFileClick}
                className="px-1 text-xs w-[4rem] h-[26px] text-center bg-[#548AF7] text-white rounded-sm font-bold cursor-pointer"
              ></Button>
              {/* 파일을 선택하면 파일 이름으로 바뀌게 처리 */}
              <p className="font-bold text-sm">
                {fileInfo ? fileInfo.name : ": 파일을 추가하십시오"}
              </p>
            </div>
            <div className="w-full flex justify-end">
              <p className="text-sm text-[#ABABAB] font-bold ">
                {fileInfo
                  ? `용량(${(fileInfo.size / 1024).toFixed(0)} KB)`
                  : "용량( )"}
              </p>
            </div>
            <input
              type="file"
              ref={inputRef}
              onChange={(e) => {
                //선택한 파일
                const file = e.target.files?.[0];
                //파일이 선택되었다면 상태값 변경
                if (file) {
                  setFileInfo({ name: file.name, size: file.size });
                }
              }}
              className="hidden"
            />
          </div>
          <div className="w-[292px] flex gap-3 justify-end">
            <Button
              label="취소"
              type="button"
              className="mt-4 w-[5rem] h-[2rem] text-center border-2 border-[#C2C2C2] text-black rounded-xl text-sm font-bold cursor-pointer"
            ></Button>
            <Button
              label="업로드"
              type="submit"
              className="mt-4 w-[5rem] h-[2rem] text-center border-2 bg-[#548AF7] text-white rounded-xl text-sm font-bold cursor-pointer"
            ></Button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default MainPage;
