import { useState } from "react";

export default function Signin() {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <div className="h-screen w-screen flex bg-[#030b18]">
      <div className= "h-4/5 w-full max-w-100 m-auto flex flex-col justify-around">
        <div className="font-display text-4xl md:text-5xl lg:text-6xl font-semibold text-white  leading-tight mx-auto">
          SIGN IN
        </div>
        <input
          className="h-12 border border-accent"
          required
          type="email"
          placeholder="exemple@mail.co"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          className="h-12 border border-accent"
          required
          type="password"
          placeholder="password"
          maxLength={20}
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>
    </div>
  );
}
