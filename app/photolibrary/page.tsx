import React from "react";
import Image from "next/image";
import getData from "../utils";

const page = async () => {
  const url = "https://picsum.photos/v2/list?limit=100";
  const data = await getData(url);

  return (
    <>
      <div className="text-2xl text-center">Photo Library</div>
      <div className="flex flex-wrap mt-4">
        {data.map((item: any) => (
          <Image
            src={item.download_url}
            alt="Vercel Logo"
            width={100}
            height={100}
            priority
          />
        ))}
      </div>
    </>
  );
};

export default page;
