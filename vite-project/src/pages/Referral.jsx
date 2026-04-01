import { useState } from "react";

const Referral = () => {
  const userId = 123; // later from backend
  const referralLink = `https://zameense.com/signup?ref=${userId}`;

  const [copied, setCopied] = useState(false);

  // COPY FUNCTION
  const handleCopy = () => {
    navigator.clipboard.writeText(referralLink);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="bg-gray-50 min-h-screen p-6">

      <div className="max-w-4xl mx-auto bg-white rounded-xl shadow p-6">

        <h2 className="text-2xl font-bold mb-6 text-center">
          Referral Program 🎉
        </h2>

        {/* REFERRAL LINK */}
        <div className="mb-6">
          <p className="text-gray-600 mb-2">
            Share your referral link:
          </p>

          <div className="flex gap-2">
            <input
              value={referralLink}
              readOnly
              className="w-full border px-4 py-2 rounded-lg"
            />

            <button
              onClick={handleCopy}
              className="bg-[#FF9933] text-white px-4 rounded-lg"
            >
              {copied ? "Copied!" : "Copy"}
            </button>
          </div>
        </div>

        {/* WHATSAPP SHARE */}
        <a
          href={`https://wa.me/?text=Join Zameense using my link ${referralLink}`}
          target="_blank"
          rel="noopener noreferrer"
          className="block text-center bg-green-600 text-white py-3 rounded-lg mb-6"
        >
          Share on WhatsApp
        </a>

        {/* STATS */}
        <div className="grid md:grid-cols-3 gap-4 text-center">

          <div className="bg-gray-100 p-4 rounded-lg">
            <h3 className="text-xl font-bold">12</h3>
            <p className="text-gray-500">Referrals</p>
          </div>

          <div className="bg-gray-100 p-4 rounded-lg">
            <h3 className="text-xl font-bold">₹1,200</h3>
            <p className="text-gray-500">Earnings</p>
          </div>

          <div className="bg-gray-100 p-4 rounded-lg">
            <h3 className="text-xl font-bold">3</h3>
            <p className="text-gray-500">Successful Listings</p>
          </div>

        </div>
        

        {/* REWARD INFO */}
        <div className="mt-6 bg-orange-50 p-4 rounded-lg">
          <h3 className="font-semibold mb-2">How it works?</h3>
          <ul className="text-gray-600 text-sm space-y-1">
            <li>• Share your referral link</li>
            <li>• User signs up using your link</li>
            <li>• When they list land → you earn reward 🎉</li>
          </ul>
        </div>

      </div>

    </div>
  );
};

export default Referral;