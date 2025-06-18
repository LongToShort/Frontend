import { useState } from "react";
import UserInput from "../component/UserInput";
import Button from "../component/Button";

function SignUpPage() {
  const [id, setId] = useState("");

  return (
    <div className="w-full flex justify-center">
      <div className="w-sm h-screen border flex flex-col py-[5rem] items-center">
        <h1 className="text-2xl font-bold mb-1">회원가입</h1>
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
              className="text-xs w-[62px] h-[26px] text-center bg-[#548AF7] text-white rounded-sm font-bold cursor-pointer"
              type="button"
            ></Button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default SignUpPage;
