import { Link } from "react-router";

import ChaiCup from "/public/chai.png";

const Home = () => {
    return (
        <>
            {/* hero/landing seciton */}
            <div className="w-full grid place-items-center content-center h-screen">
                <Link to={"/get-started"} className="w-1/3">
                    <img src={ChaiCup} alt="ek cup chai" />
                </Link>
                <p className="text-3xl text-accent">Let's talk, sip, and grow together over a warm cup of tea.</p>
            </div>

            {/* how it works */}
            <div className="w-full h-screen flex items-center justify-evenly"
            >
                <section className="flex flex-col gap-9">
                    <h2 className="text-6xl text-primary">How it works ?</h2>
                    <ol className="text-3xl list-none text-accent space-y-3">
                        <li>
                            ~ Navigate to
                            <Link to={"/get-started"} className="ml-1 underline underline-offset-2">
                                Get Started
                            </Link>
                        </li>
                        <li>~ Provide your UPI details</li>
                        <li>~ Select an amount and design</li>
                        <li>~ Lastly, Click on "Generate"</li>
                    </ol>
                </section>
                <Link to={"/get-started"} className="w-1/3 row-start-1 row-end-3 col-start-2">
                    <img src={ChaiCup} alt="ek cup chai" />
                </Link>
            </div>

            {/* FAQs */}
            <div className="w-full h-screen flex items-center justify-evenly"
            >
                <Link to={"/get-started"} className="w-1/3 row-start-1 row-end-3 col-start-2">
                    <img src={ChaiCup} alt="ek cup chai" />
                </Link>
                <section className="flex flex-col gap-12">
                    <h2 className="text-6xl text-primary">Having Doubts ?</h2>
                    <ol className="text-3xl list-none text-accent space-y-6">
                        <li className="flex flex-col">
                            <span>Is my personal data being shared?</span>
                            <span className="opacity-50">no.</span>
                        </li>
                        <li className="flex flex-col">
                            <span>How long will this QR work?</span>
                            <span className="opacity-50">As long as you need it.</span>
                        </li>
                        <li className="flex flex-col">
                            <span>Can someone hack my bank with this?</span>
                            <span className="opacity-50">no.</span>
                        </li>
                    </ol>
                </section>
                
            </div>
        </>
    );
};

export default Home;
