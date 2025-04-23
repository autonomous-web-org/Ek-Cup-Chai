import { useEffect, useRef, useState } from "react";
import QRCodeStyling from "qr-code-styling";
// import { PiArrowCircleLeftThin, PiArrowCircleRightThin } from "react-icons/pi";

import { useModalStore } from "../stores/useModalStore";

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
    "Tuzya shabdanmule chai la pan swad yeta ☕"
];


const qrCode = new QRCodeStyling({
    width: 300,
    height: 300,
    // image: "https://upload.wikimedia.org/wikipedia/commons/5/51/Facebook_f_logo_%282019%29.svg",
    dotsOptions: {
        color: "#7d583f",
        type: "dots"
    },
    backgroundOptions: {
        color: "#fff9ea"
    },
    imageOptions: {
        crossOrigin: "anonymous",
        margin: 0
    },
    cornersSquareOptions: {
        type: "dot"
    },
    data: "https://google.com/"
});

const presetAmount = [6, 18, 30];

const QRCustomize = () => {
    const [upiId, setUpiId] = useState("");
    const [note, setNote] = useState("");
    const [amount, setAmount] = useState(0);

    const qrCodeRef = useRef<any>(null);

    const modal = useModalStore();

    useEffect(() => {
        qrCode.append(qrCodeRef.current);
    }, [modal.isOpen]);

    useEffect(() => {
        if (upiId.length < 3 || upiId.length > 90) return () => { };
        qrCode.update({
            data: `upi://pay?pa=${upiId}&am=${amount}&cu=INR&tn=${note}`
            // &pn=ekcupchai
        });
    }, [upiId, amount, note]);

    if (!modal.isOpen) return null;

    return (
        <div className="qr-modal grid place-items-center w-full h-full bg-secondary/60 backdrop-blur-xl z-50" onClick={() => { modal.close()}}>
        <div className="min-w-[300px] min-h-[600px] w-1/3 h-auto bg-accent-light p-3 rounded-xl
        flex flex-col gap-6 items-center text-xl text-primary " onClick={(event) => {event.stopPropagation();}}>
            <div className="flex items-center gap-6">
                {/* <PiArrowCircleLeftThin className="text-6xl cursor-pointer" /> */}
                <section className="w-full h-full grid place-items-center" ref={qrCodeRef}>
                </section>
                {/* <PiArrowCircleRightThin className="text-6xl cursor-pointer" /> */}
            </div>
            <label className="w-full rounded-xl shadow">
                {/* <span className="text-primary opacity-0">UPI ID</span> */}
                <input type="text" placeholder="UPI ID here" onChange={(e) => { setUpiId(e.currentTarget.value) }}
                    className="resize-none rounded-md p-2 px-3 w-full outline-none placeholder:!text-primary" />
            </label>
            <div className="w-full space-y-1 rounded-xl shadow">
                <section className="px-3 flex gap-3 items-center w-full rounded-md">
                    <span>₹</span>
                    <input type="number" placeholder="Amount" min={1} value={amount ?? 0} onChange={(e) => { setAmount(parseInt(e.currentTarget.value)) }}
                        className="resize-none rounded-md p-2 w-full  outline-none " />
                </section>
                <section className="flex gap-2 text-center">
                    {
                        presetAmount.map(z =>
                            <button key={z} onClick={() => { setAmount(z) }} className="p-2 w-full rounded-md !bg-accent
                            hover:!bg-accent-light transition">
                                ₹{z}
                            </button>
                        )
                    }
                </section>
            </div>
            <textarea placeholder={desiPlaceholders[Math.floor(Math.random() * desiPlaceholders.length)]}
                onChange={(e) => { setNote(e.currentTarget.value) }}
                className="resize-none border-2 !border-transparent rounded-xl shadow p-2 px-3 w-full
                    placeholder:!text-primary min-h-[150px] outline-none ">
            </textarea>
            <button disabled className="disabled:opacity-50 disabled:cursor-not-allowed
                hidden md:initial p-3 !bg-primary rounded-md w-full">
                Preview
            </button>
        </div>
        </div>
    );
};

export default QRCustomize;
