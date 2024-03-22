"use client";
import { useState } from "react";
import {
  Input,
  RadioGroup,
  Radio,
  Select,
  SelectItem,
} from "@nextui-org/react";
import { MailIcon } from "@/app/components/login/MailIcon";
import {
  FaEye,
  FaPhone,
  FaEyeSlash,
  FaYandexInternational,
} from "react-icons/fa";
import { FaIdCard, FaUser } from "react-icons/fa6";
import { cities } from "./cities";

export default function Form() {
  console.log(cities);
  const [isVisible, setIsVisible] = useState(false);

  const toggleVisibility = () => setIsVisible(!isVisible);

  const [firstName, setfirstName] = useState("");
  const [lastName, setlastName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [cnic, setCnic] = useState("");
  const [gender, setgender] = useState("");
  const [international, setinternational] = useState("");
  const [campus, setcampus] = useState("");
  const [city, setcity] = useState("");
  const [password, setPassword] = useState("");
  const [repass, setRepass] = useState("");

  let admissions = [];

  const addAdmission = (
    firstName,
    lastName,
    phone,
    cnic,
    email,
    password,
    repass
  ) => {
    const newAdmission = {
      firstName: firstName,
      lastName: lastName,
      phone: phone,
      cnic: cnic,
      email: email,
      password: password,
      repass: repass,
    };
    admissions.push(newAdmission);
  };

  const submit = (event) => {
    event.preventDefault();
    addAdmission(firstName, lastName, phone, cnic, email, password);
    setName("");
    setPhone("");
    setCnic("");
    setEmail("");
    setRepass("");
    setPassword("");
  };
  return (
    <>
      <form
        onSubmit={submit}
        className=" bg-white rounded p-6 shadow-md "
      >
        {/* <!-- Fields Container --> */}
        <div className="flex flex-col gap-6">
          {/* <!-- Name --> */}
          <div className="flex gap-2 items-center">
            <Input
              isRequired
              labelPlacement="outside"
              placeholder="Enter your First name"
              variant="bordered"
              type="name"
              label="First Name"
              value={firstName}
              onChange={(e) => {
                setfirstName(e.target.value);
              }}
              endContent={<FaUser className=" text-green-500" />}
            />
            <Input
              isRequired
              labelPlacement="outside"
              placeholder="Enter your Last name"
              variant="bordered"
              // classNames={{
              //   inputWrapper: ["data-[hover=true]:border-green-500 "],
              // }}
              type="name"
              label="Last Name"
              value={lastName}
              onChange={(e) => {
                setlastName(e.target.value);
              }}
              endContent={<FaUser className=" text-green-500" />}
            />
          </div>

          {/* <!-- Email --> */}
          <div>
            <Input
              isRequired
              labelPlacement="outside"
              placeholder="Enter your Email"
              variant="bordered"
              type="email"
              label="Email"
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);
              }}
              endContent={<MailIcon className=" text-green-500" />}
            />
          </div>

          {/* Phone & CNIc */}
          <div className="flex gap-2 items-center">
            <Input
              isRequired
              labelPlacement="outside"
              placeholder="Enter your phone no."
              variant="bordered"
              type="tel"
              label="Phone"
              value={phone}
              onChange={(e) => {
                setPhone(e.target.value);
              }}
              endContent={<FaPhone className=" text-green-500" />}
            />
            <Input
              isRequired
              labelPlacement="outside"
              placeholder="Enter your CNIC / Passport/ B-Form"
              variant="bordered"
              classNames={{
                inputWrapper: ["data-[hover=true]:border-green-500 "],
              }}
              type="tel"
              label="CNIC / Passport / B-Form"
              value={cnic}
              onChange={(e) => {
                setCnic(e.target.value);
              }}
              endContent={<FaIdCard className=" text-green-500" />}
            />
          </div>

          {/* Gender */}
          <RadioGroup
            isRequired
            size="sm"
            classNames={{
              label: ["text-gray-900 text-sm"],
            }}
            color="success"
            orientation="horizontal"
            label="Select your Gender "
            value={gender}
            onChange={(e) => {
              setgender(e.target.value);
            }}
          >
            <div className="space-x-6">
              <Radio value="male">Male</Radio>
              <Radio value="female">Female</Radio>
              <Radio value="other">Other</Radio>
            </div>
          </RadioGroup>

          {/* International & UOL & city */}
          <div className="flex gap-2 items-center">
            <Select
              isRequired
              variant="bordered"
              labelPlacement="outside"
              label="Internatoinal Student"
              placeholder="Are you an international student?"
              selectedKeys={international}
              onSelectionChange={setinternational}
            >
              <SelectItem>Yes</SelectItem>
              <SelectItem>No</SelectItem>
            </Select>

            {/* UOL */}
            <Select
              isRequired
              variant="bordered"
              placeholder="Select UOL Campus"
              labelPlacement="outside"
              label="UOL Campus"
              selectedKeys={campus}
              onSelectionChange={setcampus}
            >
              <SelectItem value={"lahore"}>Lahore</SelectItem>
              <SelectItem value={"sarghoda"}>Sargodha</SelectItem>
            </Select>

            {/* city */}
            <Select
              isRequired
              variant="bordered"
              labelPlacement="outside"
              label="City"
              placeholder="Select City"
              selectedKeys={city}
              onSelectionChange={setcity}
            >
              {cities.map((city, index) => {
                return (
                  <SelectItem key={index} value={city}>
                    {city}
                  </SelectItem>
                );
              })}
            </Select>
          </div>

          {/* <!-- Password --> */}
          <div>
            <Input
              isRequired
              labelPlacement="outside"
              placeholder="Enter Password"
              variant="bordered"
              label="Password"
              value={password}
              onChange={(e) => {
                setPassword(e.target.value);
              }}
              // endContent={<FaEye className=" text-green-500" />}
              endContent={
                <button
                  className="focus:outline-none"
                  type="button"
                  onClick={toggleVisibility}
                >
                  {isVisible ? (
                    <FaEye className=" text-green-500" />
                  ) : (
                    <FaEyeSlash className=" text-green-500" />
                  )}
                </button>
              }
              type={isVisible ? "text" : "password"}
            />
          </div>

          {/* <!-- retypePass --> */}
          <div>
            <Input
              isRequired
              labelPlacement="outside"
              placeholder="Re-type Password"
              variant="bordered"
              label="Password"
              value={repass}
              onChange={(e) => {
                setRepass(e.target.value);
              }}
              type={isVisible ? "text" : "password"}
            />
          </div>

          {/* <!-- Submit Button   --> */}
          <button
            type="submit"
            className="rounded-md font-bold bg-green-500 px-4 w-full py-2 text-sm text-white hover:bg-green-600"
          >
            Apply
          </button>
        </div>
      </form>
    </>
  );
}
