import React from "react";

function footer() {
  return (
    <div className=" pb-10 text-[20px] text-gray-400">
      <div className="   underline">
        <div className="mb-10">Questions? Contact us.</div>
        <div className="flex justify-between">
          <div className="w-[200px] list-none">
            <li>FAQ</li>
            <li>Account</li>
            <li>Help Center</li>
            <li>Media Center</li>
          </div>

          <div className="w-[200px] list-none">
            <li>Invester Relations</li>
            <li>Jobs</li>
            <li>Ways to Watch</li>
            <li>Terms of Use</li>
          </div>

          <div className="w-[200px] list-none">
            <li>Privacy</li>
            <li>Cookie Preferences</li>
            <li>Corporate Information</li>
            <li>Contact Us</li>
          </div>

          <div className="w-[200px] list-none">
            <li>Speed Test</li>
            <li>Legal Notices</li>
            <li>Only on Netflix</li>
            <li>Media Center</li>
          </div>
        </div>

        <div>
          <select
            className="text-white border border-gray-500 py-1  px-2 pr-20 my-5 rounded"
            name=""
            id=""
          >
            <option className="text-black" value="English">
              English
            </option>
            <option className="text-black" value="Hindi">
              Hindi
            </option>
          </select>
        </div>
      </div>
      <div>
        <div className="mt-10">Netflix India</div>
        <div className="text-[18px]">
          This page is protected by Google reCAPTCHA to ensure you're not a bot.
          <span className="text-blue-600 underline ">Learn more</span>
        </div>
      </div>
    </div>
  );
}

export default footer;
