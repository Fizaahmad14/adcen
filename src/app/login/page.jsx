import Image from "next/image";
import Form from "./components/Form";

export default function Login() {
  return (
    <div className="bg-gradient-to-br from-green-300/50 via-gray-200 to-green-300/50 w-full">
      <div className="container mx-auto grid h-screen  grid-cols-1   md:grid-cols-2">
        <div className="hidden items-center justify-center md:order-1 md:flex">
          <div className="flex h-full w-full flex-col items-center justify-center">
            <div className=" flex items-center justify-center">
              <Image
                src="/images/login/login1.svg"
                alt="login"
                width={450}
                height={425}
              />
            </div>
          </div>
        </div>
        <div className="grid  h-full sm:px-10 md:px-0 lg:px-20 place-items-center ">
          <Form />
        </div>
      </div>
    </div>
  );
}
