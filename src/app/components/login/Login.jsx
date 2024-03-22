"use client";
import React from "react";
import { useState } from "react";
import { FaGoogle } from "react-icons/fa";
import {
  useDisclosure,
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  Button,
  Checkbox,
  Input,
  Link,
} from "@nextui-org/react";
import { MailIcon } from "./MailIcon.jsx";
import { LockIcon } from "./LockIcon.jsx";
import { FaRegUser } from "react-icons/fa";
import { signOut, signIn, useSession } from "next-auth/react";
import { useRouter } from "next/navigation";

export default function Login() {
  const { isOpen, onOpen, onOpenChange } = useDisclosure("");

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  let logins = [];

  const addLogin = (email, password) => {
    const newLogin = {
      email: email,
      password: password,
    };
    logins.push(newLogin);
  };

  const submit = (a) => {
    a.preventDefault();
    addLogin(email, password);
    setEmail("");
    setPassword("");
  };
  const [showSignOut, setShowSignOut] = useState(false);
  const handleLogout = async () => {
    await signOut(); // Call the signOut function to log the user out
    router.push("/"); // Redirect to the home page or any other page after logout
  };

  const { data: session } = useSession();
  const router = useRouter();

  if (session) {
    router.replace("/");
    return (
      <div>
        {session && (
          <span
            className="cursor-pointer"
            onClick={() => setShowSignOut(!showSignOut)}
          >
            Welcome, {session.user.name}
            {showSignOut && (
              <button
                onClick={handleLogout}
                style={{ marginLeft: "8px" }}
              >
                Sign Out
              </button>
            )}
          </span>
        )}
      </div>
    );
  }

  return (
    <>
      <Button
        size="sm"
        isIconOnly
        className="bg-green-500 text-white"
        onPress={onOpen}
      >
        <FaRegUser className="text-md" />
      </Button>
      <Modal
        isOpen={isOpen}
        onOpenChange={onOpenChange}
        placement="center"
        backdrop="opaque"
      >
        <ModalContent>
          {(onClose) => (
            <>
              <form onSubmit={submit}>
                <ModalHeader className="flex flex-col gap-1">
                  <p className="leading-tight font-poppins underline underline-offset-4 decoration-green-500">
                    Login
                  </p>
                </ModalHeader>
                <ModalBody>
                  <Input
                    required
                    autoFocus
                    endContent={
                      <MailIcon className="text-2xl text-default-400 pointer-events-none flex-shrink-0" />
                    }
                    value={email}
                    onChange={(e) => {
                      setEmail(e.target.value);
                    }}
                    label="Email"
                    placeholder="Enter your email"
                    variant="bordered"
                  />
                  <Input
                    endContent={
                      <LockIcon className="text-2xl text-default-400 pointer-events-none flex-shrink-0" />
                    }
                    label="Password"
                    required
                    value={password}
                    onChange={(e) => {
                      setPassword(e.target.value);
                    }}
                    placeholder="Enter your password"
                    type="password"
                    variant="bordered"
                  />
                  <div className="flex py-2 px-1 justify-between">
                    <Checkbox
                      defaultSelected
                      color="success"
                      classNames={{
                        label: "text-small",
                      }}
                    >
                      Remember me
                    </Checkbox>
                    <Link
                      className="text-green-500"
                      href="#"
                      size="sm"
                    >
                      Forgot password?
                    </Link>
                  </div>
                  <Button
                    color="primary"
                    className="w-full bg-green-500"
                    type="submit"
                  >
                    Sign in
                  </Button>
                </ModalBody>
                {/* <p className="text-sm pt-2 text-center text-gray-400">
                  OR
                </p> */}
                <hr className="mt-2" />
                <div className="flex px-6 py-4 ">
                  <Button
                    className="w-full"
                    color="success"
                    variant="flat"
                    endContent={<FaGoogle />}
                    onClick={() => {
                      signIn("google");
                    }}
                  >
                    Continue with Google
                  </Button>
                </div>
              </form>
            </>
          )}
        </ModalContent>
      </Modal>
    </>
  );
}
