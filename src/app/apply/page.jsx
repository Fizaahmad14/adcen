import Form from "./components/Form";
import Universities from "./components/Universities";

export default function addAddmission() {
  return (
    <div className="pt-28 container  mx-auto px-5 ">
      <h2 className="text-3xl text-center leading-tight font-poppins underline underline-offset-4 decoration-green-500">
        Apply
      </h2>
      <div className="gap-4 py-10 grid md:grid-cols-3   ">
        <div className="md:col-span-2 ">
          <Form />
        </div>
        <div className="md:col-span-1">
          <Universities />
        </div>
      </div>
    </div>
  );
}
