import Button from "@/components/Button";

function Home() {
  return (
    <main className="min-h-[541px] bg-red-100">
      <div className="flex justify-center p-10">
        <form
          action="" 
          method="post"
          className="myForm bg-gray-900 text-white p-3 rounded-lg flex flex-col items-center justify-center w-96 gap-5"
        >

          <h1 className="text-red-500 font-semibold text-3xl pt-7 pb-3">Login</h1>

          <label className="relative">

            <input 
              type="text"
              className="h-10 w-60 px-5 bg-gray-900 border-2 rounded-lg border-white border-opacity-50 outline-none focus:border-red-500 focus:text-white transition-all duration-200"
              name="username" 
              required
            />

            <span className="input-text text-white text-opacity-80 absolute left-0 top-2 px-5 pointer-events-none transition-all duration-200">
              Username
            </span>

          </label>

          <label className="relative">

            <input 
              type="password"
              className="h-10 w-60 px-5 bg-gray-900 border-2 rounded-lg border-white border-opacity-50 outline-none focus:border-red-500 focus:text-white transition-all duration-200"
              name="password" 
              required
            />

            <span className="input-text text-white text-opacity-80 absolute left-0 top-2 px-5 pointer-events-none transition-all duration-200">
              Password
            </span>

          </label>

          <Button 
            bgColor="red-500"
            color="white"
            fontSize="md"
            text="Login"
            borderRadius="lg"
          />

        </form>

      </div>
    </main>
  )
}

export default Home;
