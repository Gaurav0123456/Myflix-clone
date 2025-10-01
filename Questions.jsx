import { useState } from "react";


function Questions() {
  const [activeIndex, setActiveIndex] = useState(null)
  const handleTogle = (index) => {
    setActiveIndex((prevIndex) => (prevIndex=== index?null:index))
  }
  const questionAns =[
    {
      question: "What is Netflix?",
      answer: "Netflix is a streaming service that offers a wide variety of award-winning TV shows, movies, anime, documentaries and more – on thousands of internet-connected devices."
    },

     {
      question: "How much does Netflix cost?",
      answer: "Watch Netflix on your smartphone, tablet, Smart TV, laptop, or streaming device, all for one fixed monthly fee. Plans range from ₹149 to ₹649 a month. No extra costs, no contracts."
    },

     {
      question: "Where can I watch?",
      answer: "Watch anywhere, anytime. Sign in with your Netflix account to watch instantly on the web at netflix.com from your personal computer or on any internet-connected device that offers the Netflix app, including smart TVs, smartphones, tablets, streaming media players and game consoles."
    },

     {
      question: "How do I cancel?",
      answer: "Netflix is flexible. There are no annoying contracts and no commitments. You can easily cancel your account online in two clicks. There are no cancellation fees – start or stop your account anytime."
    },

     {
      question: "Is Netflix is good for Kids?",
      answer: "The Netflix Kids experience is included in your membership to give parents control while kids enjoy family-friendly TV shows and films in their own space."
    },
  ]
  return (
    <div className="py-10 ">
      <div className="text-2xl font-bold">Frequently Asked Questions</div>
     {questionAns.map((item, index)=>{
      return(
         <div>
       <div onClick={()=>handleTogle(index)} className="cursor-pointer text-2xl bg-gray-800 p-5 flex items-center justify-between px-10 mt-5">
         <div className=""> {item.question}</div>
         <div className="text-3xl font-bold">
          {activeIndex === index ? "x" : "+"}
         </div>
       </div>
        <div className={`text-xl bg-gray-800   overflow-hidden ${activeIndex === index? "max-h-[500px]" : "max-h-0"} duration-500 px-5 mt-1`}>
          {item.answer}
        </div>
      </div>
      )
     })}
    </div>
  );
}

export default Questions;
