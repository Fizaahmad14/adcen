import HomePage from "./home/page";
import Loading from "./loading";

export const metadata = {
  title: "Adcen - Login",
  description: "Discover thousands of Bachelor's Degrees worldwide!",
};

export default function Home() {
  return (
    <>
      <HomePage />
      {/* <Loading /> */}
      {/* <SignupPage /> */}
    </>
  );
}
