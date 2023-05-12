import React from "react";
import Image from "next/image";
import getData from "../utils";

const page = async () => {
  const url = "https://picsum.photos/v2/list?limit=100";
  const data = await getData(url);

  return (
    <>
      <div className="text-2xl text-center">Photo Library</div>
      <p className="m-4 fixed left-0 top-0 flex w-full justify-center border-b border-gray-300 bg-gradient-to-b from-zinc-200 pb-6 pt-8 backdrop-blur-2xl dark:border-neutral-800 dark:bg-zinc-800/30 dark:from-inherit lg:static lg:w-auto  lg:rounded-xl lg:border lg:bg-gray-200 lg:p-4 lg:dark:bg-zinc-800/30">
        Photos Count : 100
      </p>
      <div className="flex flex-wrap mt-4">
        {data.map((item: any) => (
          <Image
            src={item.download_url}
            alt="Vercel Logo"
            width={100}
            height={100}
            priority
            key={item.download_url}
          />
        ))}
      </div>
    </>
  );
};

export default page;
