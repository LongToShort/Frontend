import { useState } from "react";
import UserInput from "../component/UserInput";
import Button from "../component/Button";
import "../index.css";

function LoginPage() {
  const [id, setId] = useState("");
  const [password, setPassword] = useState("");

  return (
    <div className="w-sm flex justify-center">
      <h1 className="text-pink">로그인</h1>
      <UserInput
        type="text"
        placeholder="아이디를 입력해 주세요"
        value={id}
        onChange={(e) => setId(e.target.value)}
      ></UserInput>
      <br />
      <UserInput
        type="password"
        placeholder="비밀번호를 입력해 주세요"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      ></UserInput>
      <br />
      <Button label="로그인"></Button>
      <br />
      <Button label="회원가입"></Button>
    </div>
  );
}

export default LoginPage;
