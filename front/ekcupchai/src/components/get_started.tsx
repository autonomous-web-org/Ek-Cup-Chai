import React, { useState } from "react";

const desiPlaceholders = [
  "Yeh chai kis liye hai? Thoda bata do ☺️",
  "Kuch meetha bol do, jaise garam chai ke saath biscuit!",
  "Chai ke saath ek do line ho jaaye?",
  "Dil se likho, chai se jodo!",
  "Kya yaad dilaa diya… kuch likhna chaahoge?",
  "Bas ek pyaari si baat likh do ☕❤️",
  "Tere jaise supporter mil jaaye… toh life set hai 😌",
  "Tumhara pyaar chai ki har chuski mein mehsoos hota hai!",
  "Ek garam chai ki pyali ho… aur ek pyara sa message ✨",
  "Oye hoye! Thoda dil da haal vi likh jaa yaar 💖",
  "Zara sa likh ke jaa, dil garden garden ho jaaye 🌸",
  "Ek comment daal de, varna 'kitne supporter the' poochhna padega 😜",
  "Tuzya shabdanmule chai la pan swad yeta ☕",
  "Likha na kuch, toh kya likha? 😏"
];


const GetStarted = () => {


  return (
    <div className="w-full h-screen grid grid-cols-2 items-center justify-items-center">
      <div className="flex flex-col gap-6 items-start w-1/2 text-xl text-secondary">
        <picture></picture>
        <label className="w-full">
          <span className="text-accent opacity-0">UPI ID</span>
          <input type="text" placeholder="UPI ID here"
          className="resize-none rounded-md p-2 px-3 w-full outline-none
          bg-accent placeholder:!text-secondary" />
        </label>
        <div className="w-full space-y-2">
          <section className="px-3 flex gap-3 items-center w-full bg-accent rounded-md">
            <span>₹</span>
            <input type="number" placeholder="Amount" min={1}
              className="resize-none rounded-md p-2 w-full placeholder:!text-secondary
            bg-accent outline-none " />
          </section>
          <section className="flex gap-2 text-center">
            <button className="!bg-accent p-2 w-full rounded-md
               hover:!bg-accent-light hover:!text-accent transition">
              ₹6
            </button>
            <button className="!bg-accent p-2 w-full rounded-md
               hover:!bg-accent-light hover:!text-accent transition">
              ₹18
            </button>
            <button className="!bg-accent p-2 w-full rounded-md
               hover:!bg-accent-light hover:!text-accent transition">
              ₹30
            </button>
          </section>
        </div>
        <textarea placeholder={desiPlaceholders[Math.floor(Math.random() * desiPlaceholders.length)]}
          className="resize-none border-2 !border-secondary rounded-md p-2 px-3 w-full
          min-h-[150px] bg-accent placeholder:!text-secondary outline-none">
        </textarea>
        <button disabled className="disabled:opacity-50 disabled:cursor-not-allowed
         hidden md:initial p-3 !bg-primary text-white rounded-md w-full">
          Preview
        </button>
      </div>
      <div className="bg-accent w-full h-full">
        asf
      </div>
    </div>
  );
};

export default GetStarted;
