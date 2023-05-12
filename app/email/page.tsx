"use client";
import React, { useState } from "react";

const Email = () => {
  const data = [
    { id: 1, name: "admin", mail: "admin@gmail.com" },
    { id: 2, name: "hotstar", mail: "hotstar@gmail.com" },
    { id: 3, name: "zomato", mail: "zomato@xyz.com" },
    { id: 4, name: "google", mail: "google@gmail.com" },
    { id: 5, name: "cardekho", mail: "cardekho@outlook.com" },
    { id: 6, name: "nobroker", mail: "nobroker@gmail.com" },
  ];
  const [maillist, setMailList] = useState(data);
  const handleDelete = (id: any) => {
    const updatedList = maillist.filter(item => item.id !== id)
    setMailList([...updatedList])
  };

  return (
    <>
      <div className="text-2xl text-center">Email</div>
      <p className="m-4 fixed left-0 top-0 flex w-full justify-center border-b border-gray-300 bg-gradient-to-b from-zinc-200 pb-6 pt-8 backdrop-blur-2xl dark:border-neutral-800 dark:bg-zinc-800/30 dark:from-inherit lg:static lg:w-auto  lg:rounded-xl lg:border lg:bg-gray-200 lg:p-4 lg:dark:bg-zinc-800/30">
        Unread : {maillist?.length}
      </p>
      <div className="p-4 border border-gray-300 rounded-md shadow-md">
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-lg font-medium">From</h3>
          <img
            src={"https://picsum.photos/id/237/200/300"}
            className="w-10 h-10 rounded-full"
          />
        </div>
        <ul>
          {maillist.map((item) => (
            <li
              key={item.id}
              className="flex items-center justify-between py-2"
            >
              <span className="mr-2">{item.name}</span>
              <span className="mr-2">{item.mail}</span>
              <button
                className="px-2 py-1 text-sm font-medium text-red-500 bg-transparent border border-red-500 rounded-md hover:bg-red-500 hover:text-white"
                onClick={() => handleDelete(item.id)}
              >
                Delete
              </button>
            </li>
          ))}
        </ul>
        {!maillist?.length && 'No new mails.'}
      </div>
    </>
  );
};

export default Email;
