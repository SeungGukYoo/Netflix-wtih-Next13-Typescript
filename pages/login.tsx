import Head from "next/head";
import Image from "next/image";
import { useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";

interface Inputs {
  email: string;
  password: string;
}
function Login() {
  const [login, setLogin] = useState(false);
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<Inputs>();

  const loginHandler: SubmitHandler<Inputs> = ({ email, password }) => {
    if (login) {
      console.log(email, password);
    } else {
      console.log(email, password);
    }
  };

  return (
    <div className="relative flex h-screen w-screen flex-col bg-black md:items-center md:justify-center md:bg-transparent">
      <Head>
        <title>Netflix Member</title>
        <link rel="shortcut icon" href="favicon.ico" type="image/x-icon" />
      </Head>
      <Image
        src="https://rb.gy/p2hphi"
        fill
        sizes="(max-width: 768px) 100vw,
              (max-width: 1200px) 50vw,
              33vw"
        priority={true}
        alt="login background image"
        className="-z-10 opacity-60 hidden object-cover sm:inline "
      />
      <img
        src="https://rb.gy/ulxxee"
        alt="logo"
        width={150}
        height={150}
        className="absolute left-4 top-4 cursor-pointer object-contain md:left-10 md:top-6"
      />
      <form
        onSubmit={handleSubmit(loginHandler)}
        className="relative mt-24 space-y-8 rounded bg-black/70 py-10 px-6 md:mt-0 md:max-w-md md:px-14"
      >
        <h1 className="text-4xl font-semibold ">Sign In</h1>
        <div className="space-y-4">
          <input
            type="email"
            placeholder="email"
            className="input"
            {...register("email", { required: true })}
          />
          {errors.email && <span>아이디를 다시 한번 확인해주세요.</span>}
          <input
            type="password"
            placeholder="password"
            className="input"
            {...register("password", { required: true })}
          />
          {errors.password && <span>비밀번호를 다시 한번 확인해주세요.</span>}
        </div>
        <button
          onClick={() => setLogin(true)}
          className="w-full rounded bg-[#e40914] py-3 font-semibold"
        >
          Sign In
        </button>
        <div className="text-[gray]">
          New to Netflix
          <button
            onClick={() => setLogin(false)}
            className="text-[white] ml-4 hover:underline"
          >
            Sing up Now
          </button>
        </div>
      </form>
    </div>
  );
}

export default Login;
