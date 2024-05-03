import Image from "next/image";
import { FaCircleUp } from "react-icons/fa6";

export const Moreinfo = () => {
  return (
    <section className="more-info-section  mx-10 min-h-screen w-screen">
      <div className="more-info ">
        <h1 className="text-center text-8xl font-bold text-gray-300 opacity-20">
          How Ava.ai Can Help
        </h1>
        <div className="more-info-des mt-40 flex flex-col items-center gap-10 lg:flex-row lg:justify-between">
          <div className="more-info-msg w-2/3">
            <p className="mb-2">Conversation & Emotional Support</p>
            <hr className="h-5 w-5/6" />
            <h1 className="mt-6 text-8xl font-bold">
              Talk to Ava about anything on your mind.
            </h1>
          </div>
          <div className="card mt-8  w-1/3">
            <div className="w-96 rotate-12 rounded-xl  bg-white/[0.10] p-5">
              <div className="chat-1 mb-4 flex flex-row gap-4">
                <Image
                  width={32}
                  height={32}
                  src="/user1.png"
                  alt=""
                  className="mt-2 h-9 w-9 rounded-full"
                />
                <p className="message-1">
                  Remember, it&apos;s okay to ask for help if you need it. Would
                  you like me to find some resources for managing stress or
                  improving sleep?
                </p>
              </div>{" "}
              <div className="chat-1 flex flex-row gap-4">
                <Image
                  width={32}
                  height={32}
                  src="/user2.jpg"
                  alt=""
                  className="mt-2 h-9 w-9 rounded-full"
                />
                <p className="message-1 w-44">
                  Actually, getting some good sleep tips would be great.{" "}
                </p>
              </div>
              <div className="mt-5 flex items-center justify-between rounded-full border border-white p-2 pl-5 ">
                you got this right?
                <FaCircleUp className="h-7 w-7" />{" "}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
