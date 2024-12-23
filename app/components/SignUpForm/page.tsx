"use client";

const SignUpForm = () => {
  return (
    <div className="flex flex-col w-full md:w-[80vw] lg:2-[50vw] px-6 py-10 bg-[#95a9b6] bg-opacity-50 rounded-lg backdrop-blur-sm">
      <div className="text-gray-700">START FOR FREE</div>
      <div className="text-2xl font-bold my-4">Create new account</div>
      <form action="#" className="flex flex-col gap-2">
        <div className="flex flex-col gap-2 md:flex-row">
          <div className="flex gap-2 bg-sky-100 p-2 rounded-lg items-center grow">
            <div className="flex flex-col gap-2 grow">
              <label htmlFor="first_name">First Name</label>
              <input
                type="text"
                name="first_name"
                id="first_name"
                className="bg-transparent outline-none"
              />
            </div>
            <span>icon1</span>
          </div>
          <div className="flex gap-2 bg-sky-100 p-2 rounded-lg items-center grow">
            <div className="flex flex-col gap-2 grow">
              <label htmlFor="last_name">Last Name</label>
              <input
                type="text"
                name="last_name"
                id="last_name"
                className="bg-transparent outline-none"
              />
            </div>
            <span className="">icon2</span>
          </div>
        </div>

        <div className="flex gap-2 bg-sky-100 p-2 rounded-lg items-center">
          <div className="flex flex-col gap-2 grow">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              name="email"
              id="email"
              className="bg-transparent outline-none"
            />
          </div>
          <span className="">icon3</span>
        </div>

        <div className="flex gap-2 bg-sky-100 p-2 rounded-lg items-center">
          <div className="flex flex-col gap-2 grow">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              name="password"
              id="password"
              className="bg-transparent outline-none"
            />
          </div>
          <span className="">icon3</span>
        </div>

        <div className="text-gray-700">
          Already has an account? <b className="text-sky-900">Sign in</b>
        </div>

        <button className="bg-sky-700 p-2 rounded-3xl text-white">
          Sign up
        </button>
      </form>
    </div>
  );
};

export default SignUpForm;
