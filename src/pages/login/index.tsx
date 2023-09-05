import React, { useState } from "react";
import Input from "../../component/Input";
import Button from "../../component/Button";

const index = () => {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  return (
    <div className="flex w-[100vw] h-[100vh] bg-gradient-to-t from-[#f4772446] from-0% via-transparent to-transparent">
      <div className="flex flex-1 flex-col justify-center items-center ml-32">
        <img src="../../../public/logo.png" alt="" className="w-40" />
        <div className="w-full px-24">
        <Input
          label="Email"
          name="email"
          type="email"
          placeholder="Masukkan Email Anda"
          value={email}
          icon={<i className="fa-solid fa-envelope text-border-color"></i>}
          onChange={(e) => setEmail(e.target.value)}
        />
        <Input
          label="Password"
          name="password"
          type="password"
          placeholder="Masukkan Password Anda"
          icon={<i className="fa-solid fa-key text-border-color"></i>}
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <div className="flex flex-row mb-3 w-full  text-[14px]">
          <input
            type="checkbox"
            className="mr-2 bg-blue-700 border-solid border-2 border-primary-color focus:bg-red-600"
          />
          Remember Me ?
        </div>
        <Button label="Sign In" onClick classNames={"w-full"} />
        </div>
        <div className="mt-2 text-[12px]">
          @ Copyright 2023 Alterra Corporation
        </div>
      </div>
      <div className="flex flex-1 flex-col justify-center items-center mr-32">
        <h1 className="text-[#4B4B4B] font-[800] mb-10 font-Lilita-One">
          Learn Now
          <div className="text-[#F47624]">
            Pay Later <span className="text-[#4B4B4B]">!</span>
          </div>
        </h1>
        <div>
          <img
            src="../../../public/login_pic.png"
            alt=""
            className="w-[35vw] h-auto"
          />
        </div>
      </div>
    </div>
  );
};

export default index;
