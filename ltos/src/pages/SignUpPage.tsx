import { useState } from "react";
import UserInput from "../component/UserInput";
import Button from "../component/Button";

function SignUpPage() {
  const [id, setId] = useState("");
  const [password, setPassword] = useState("");
  const [checkPassword, setCheckPassword] = useState("");
  const [email, setEmail] = useState("");

  return (
    <div className="w-full flex justify-center">
      <div className="w-sm h-screen border flex flex-col py-[5rem] items-center">
        <h1 className="text-2xl font-bold mb-5">회원가입</h1>
        <form action="post" className="mt-5 flex flex-col items-center gap-5">
          <div className="flex items-center border-2 border-c5-gray rounded-md w-[284px] h-[48px] text-sm text-gray-600 font-bold pr-2">
            <UserInput
              type="text"
              placeholder="아이디 입력"
              value={id}
              onChange={(e) => setId(e.target.value)}
              className="h-full w-4/5 pl-4"
              required
            ></UserInput>
            <Button
              label="중복 확인"
              className="px-1 text-xs w-[62px] h-[26px] text-center bg-[#548AF7] text-white rounded-sm font-bold cursor-pointer"
              type="button"
            ></Button>
          </div>
          <UserInput
            type="password"
            placeholder="비밀번호 입력"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="pl-4 flex items-center border-2 border-c5-gray rounded-md w-[284px] h-[48px] text-sm text-gray-600 font-bold pr-2"
            required
          ></UserInput>
          <UserInput
            type="password"
            placeholder="비밀번호 재입력"
            value={checkPassword}
            onChange={(e) => setCheckPassword(e.target.value)}
            className="pl-4 flex items-center border-2 border-c5-gray rounded-md w-[284px] h-[48px] text-sm text-gray-600 font-bold pr-2"
            required
          ></UserInput>
          <div className="flex items-center w-[284px] h-[48px] text-sm text-gray-600 font-bold">
            <UserInput
              type="text"
              placeholder="이메일 주소"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="mr-1 h-full w-3/5 pl-4 border-2 border-c5-gray rounded-md"
              required
            ></UserInput>
            <p className="text-[#7D7D7D]">@</p>
            <select
              className="ml-2 h-full w-4/5 pl-4 border-2 border-c5-gray rounded-md text-[#7D7D7D]"
              required
            >
              <option value="" defaultChecked>
                선택해주세요
              </option>
              <option value="naver">naver.com</option>
              <option value="google">google.com</option>
              <option value="nate">nate.com</option>
              <option value="daum">daum.net</option>
            </select>
          </div>
          <Button
            label="가입하기"
            className="mt-5 w-[284px] h-[48px] text-center bg-[#548AF7] text-white rounded-md text-md font-bold cursor-pointer"
          ></Button>
        </form>
      </div>
    </div>
  );
}

export default SignUpPage;
