import { useState } from "react";
import UserInput from "../component/UserInput";
import Button from "../component/Button";
import "../index.css";
import { useNavigate } from "react-router-dom";

function LoginPage() {
  const [id, setId] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  function handleClick() {
    navigate("/signup");
  }

  return (
    <div className="w-full flex justify-center">
      <div className="w-sm h-screen border flex flex-col py-[5rem] items-center">
        <h1 className="text-2xl font-bold mb-1">로그인</h1>
        <form action="post" className="mt-5 flex flex-col items-center gap-5">
          <UserInput
            type="text"
            placeholder="아이디를 입력해 주세요"
            value={id}
            onChange={(e) => setId(e.target.value)}
            className="border-2 border-c5-gray rounded-md w-[284px] h-[48px] text-sm pl-4 text-gray-600 font-bold"
            required
          ></UserInput>
          <UserInput
            type="password"
            placeholder="비밀번호를 입력해 주세요"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="border-2 border-c5-gray rounded-md w-[284px] h-[48px] text-sm pl-4 text-gray-600 font-bold"
            required
          ></UserInput>
          <Button
            label="로그인"
            className="mt-5 w-[284px] h-[48px] text-center bg-[#548AF7] text-white rounded-md text-md font-bold cursor-pointer"
          ></Button>
        </form>
        <Button
          onClick={handleClick}
          label="회원가입"
          className="mt-4 w-[284px] h-[48px] text-center border-2 border-[#548AF7] text-[#548AF7] rounded-md text-md font-bold cursor-pointer"
        ></Button>
      </div>
    </div>
  );
}

export default LoginPage;
