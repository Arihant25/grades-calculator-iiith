'use client';
import React, { useState, useEffect } from 'react';
import NavBar from '../../../components/Navbar';

interface FormData {
  quiz1: string;
  midSem: string;
  quiz2: string;
  tutorialQuiz: string;
  endSem: string;
  assignment1: string;
  assignment2: string;
  assignment3: string;
  assignment4: string;
  assignment5: string;
  assignment6: string;
  assignment7: string;
  assignment8: string;
  assignment9: string;
}

const LAPage = () => {
  const [formData, setFormData] = useState<FormData>({
    quiz1: '',
    midSem: '',
    quiz2: '',
    tutorialQuiz: '',
    endSem: '',
    assignment1: '',
    assignment2: '',
    assignment3: '',
    assignment4: '',
    assignment5: '',
    assignment6: '',
    assignment7: '',
    assignment8: '',
    assignment9: '',
  });

  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
      const scrollTop = window.scrollY || document.documentElement.scrollTop;
      const scrollProgress = (scrollTop / scrollHeight) * 100;
      setProgress(scrollProgress);
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const calculateMarks = () => {
    // Set the default value of each to 0
    for (let key in formData) {
      formData[key as keyof FormData] = formData[key as keyof FormData] === '' ? 0 : formData[key as keyof FormData];
    }
    // Calculate the total marks
    let firstHalfAssignments = ((parseInt(formData.assignment1) / 10) + (parseInt(formData.assignment2) / 20) + (parseInt(formData.assignment3) / 20)) * (20 / 7);
    let secondHalfAssignments = ((parseInt(formData.assignment4) / 15) + (parseInt(formData.assignment5) / 15) + (parseInt(formData.assignment6) / 15) + (parseInt(formData.assignment7) / 15)) * (20 / 7);
    let lastHalfAssignments = ((parseInt(formData.assignment8) / 25) + (parseInt(formData.assignment9) / 100)) * (5 / 2);
    let mid = (parseInt(formData.midSem) / 15) * 20;
    let end = (parseInt(formData.endSem) / 100) * 30;
    let tutQuiz = (parseInt(formData.tutorialQuiz) / 15) * 5;
    let quiz = ((parseInt(formData.quiz1) / 15) + (parseInt(formData.quiz2) / 15)) * 10;
    let final = firstHalfAssignments + secondHalfAssignments + lastHalfAssignments + tutQuiz + mid + end + quiz;
    console.log(firstHalfAssignments, secondHalfAssignments, lastHalfAssignments, tutQuiz, mid, end, quiz, final);
    alert(`Total marks: ` + parseFloat(`${final}`).toFixed(2));
  };

  const handleWheel = (e: React.WheelEvent<HTMLInputElement>) => {
    (e.target as HTMLInputElement).blur();
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-100 to-gray-200 text-black">
      <div className="fixed top-0 left-0 w-full h-2 bg-gray-300 shadow-inner">
        <div className="h-full bg-gradient-to-r from-indigo-500 to-indigo-600 transition-all duration-500 shadow-lg" style={{ width: `${progress}%` }}></div>
      </div>
      <NavBar />
      <div className="container mx-auto px-4 py-8">
        <div className="bg-white p-6 sm:p-10 rounded-lg shadow-xl border-2 border-gray-300">
          <div className="mb-10">
            <h2 className="text-3xl sm:text-5xl font-bold text-center text-gray-800 shadow-text">Linear Algebra</h2>
          </div>
          <div className="mb-8 animate-fade-in">
            <h3 className="text-lg sm:text-xl font-semibold mb-2 text-gray-700">Quiz 1 (out of 15)</h3>
            <input
              type="number"
              name="quiz1"
              value={formData.quiz1}
              onChange={handleInputChange}
              onWheel={handleWheel}
              className="border-2 border-gray-400 rounded-md p-3 w-full font-mono text-lg shadow-inner focus:outline-none focus:border-indigo-600 transition-colors duration-300"
            />
          </div>
          <div className="mb-8 animate-fade-in animate-delay-100">
            <h3 className="text-lg sm:text-xl font-semibold mb-2 text-gray-700">MidSem (out of 15)</h3>
            <input
              type="number"
              name="midSem"
              value={formData.midSem}
              onChange={handleInputChange}
              onWheel={handleWheel}
              className="border-2 border-gray-400 rounded-md p-3 w-full font-mono text-lg shadow-inner focus:outline-none focus:border-indigo-600 transition-colors duration-300"
            />
          </div>
          <div className="mb-8 animate-fade-in animate-delay-200">
            <h3 className="text-lg sm:text-xl font-semibold mb-2 text-gray-700">Quiz 2 (out of 15)</h3>
            <input
              type="number"
              name="quiz2"
              value={formData.quiz2}
              onChange={handleInputChange}
              onWheel={handleWheel}
              className="border-2 border-gray-400 rounded-md p-3 w-full font-mono text-lg shadow-inner focus:outline-none focus:border-indigo-600 transition-colors duration-300"
            />
          </div>
          <div className="mb-8 animate-fade-in animate-delay-300">
            <h3 className="text-lg sm:text-xl font-semibold mb-2 text-gray-700">Tutorial Quiz (out of 15)</h3>
            <input
              type="number"
              name="tutorialQuiz"
              value={formData.tutorialQuiz}
              onChange={handleInputChange}
              onWheel={handleWheel}
              className="border-2 border-gray-400 rounded-md p-3 w-full font-mono text-lg shadow-inner focus:outline-none focus:border-indigo-600 transition-colors duration-300"
            />
          </div>
          <div className="mb-8 animate-fade-in animate-delay-400">
            <h3 className="text-lg sm:text-xl font-semibold mb-2 text-gray-700">End Sem (out of 100)</h3>
            <input
              type="number"
              name="endSem"
              value={formData.endSem}
              onChange={handleInputChange}
              onWheel={handleWheel}
              className="border-2 border-gray-400 rounded-md p-3 w-full font-mono text-lg shadow-inner focus:outline-none focus:border-indigo-600 transition-colors duration-300"
            />
          </div>
          <div className="mb-8 animate-fade-in animate-delay-500">
            <h3 className="text-lg sm:text-xl font-semibold mb-2 text-gray-700">Assignments</h3>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
              <div>
                <input
                  type="number"
                  name="assignment1"
                  value={formData.assignment1}
                  onChange={handleInputChange}
                  onWheel={handleWheel}
                  placeholder='Assignment 1'
                  className="border-2 border-gray-400 rounded-md p-3 w-full font-mono text-lg shadow-inner focus:outline-none focus:border-indigo-600 transition-colors duration-300"
                />
              </div>
              <div>
                <input
                  type="number"
                  name="assignment2"
                  value={formData.assignment2}
                  onChange={handleInputChange}
                  onWheel={handleWheel}
                  placeholder='Assignment 2'
                  className="border-2 border-gray-400 rounded-md p-3 w-full font-mono text-lg shadow-inner focus:outline-none focus:border-indigo-600 transition-colors duration-300"
                />
              </div>
              <div>
                <input
                  type="number"
                  name="assignment3"
                  value={formData.assignment3}
                  onChange={handleInputChange}
                  onWheel={handleWheel}
                  placeholder='Assignment 3'
                  className="border-2 border-gray-400 rounded-md p-3 w-full font-mono text-lg shadow-inner focus:outline-none focus:border-indigo-600 transition-colors duration-300"
                />
              </div>
              <div>
                <input
                  type="number"
                  name="assignment4"
                  value={formData.assignment4}
                  onChange={handleInputChange}
                  onWheel={handleWheel}
                  placeholder='Assignment 4'
                  className="border-2 border-gray-400 rounded-md p-3 w-full font-mono text-lg shadow-inner focus:outline-none focus:border-indigo-600 transition-colors duration-300"
                />
              </div>
              <div>
                <input
                  type="number"
                  name="assignment5"
                  value={formData.assignment5}
                  onChange={handleInputChange}
                  onWheel={handleWheel}
                  placeholder='Assignment 5'
                  className="border-2 border-gray-400 rounded-md p-3 w-full font-mono text-lg shadow-inner focus:outline-none focus:border-indigo-600 transition-colors duration-300"
                />
              </div>
              <div>
                <input
                  type="number"
                  name="assignment6"
                  value={formData.assignment6}
                  onChange={handleInputChange}
                  onWheel={handleWheel}
                  placeholder='Assignment 6'
                  className="border-2 border-gray-400 rounded-md p-3 w-full font-mono text-lg shadow-inner focus:outline-none focus:border-indigo-600 transition-colors duration-300"
                />
              </div>
              <div>
                <input
                  type="number"
                  name="assignment7"
                  value={formData.assignment7}
                  onChange={handleInputChange}
                  onWheel={handleWheel}
                  placeholder='Assignment 7'
                  className="border-2 border-gray-400 rounded-md p-3 w-full font-mono text-lg shadow-inner focus:outline-none focus:border-indigo-600 transition-colors duration-300"
                />
              </div>
              <div>
                <input
                  type="number"
                  name="assignment8"
                  value={formData.assignment8}
                  onChange={handleInputChange}
                  onWheel={handleWheel}
                  placeholder='Assignment 8'
                  className="border-2 border-gray-400 rounded-md p-3 w-full font-mono text-lg shadow-inner focus:outline-none focus:border-indigo-600 transition-colors duration-300"
                />
              </div>
              <div>
                <input
                  type="number"
                  name="assignment9"
                  value={formData.assignment9}
                  onChange={handleInputChange}
                  onWheel={handleWheel}
                  placeholder='Assignment 9'
                  className="border-2 border-gray-400 rounded-md p-3 w-full font-mono text-lg shadow-inner focus:outline-none focus:border-indigo-600 transition-colors duration-300"
                />
              </div>
            </div>
          </div>
          <button
            onClick={calculateMarks}
            className="bg-gradient-to-r from-indigo-500 to-indigo-600 text-white font-semibold text-lg py-3 px-6 rounded-lg shadow-lg hover:from-indigo-600 hover:to-indigo-700 transition-all mt-6"
          >
            Submit
          </button>
        </div>
      </div>
    </div>
  );
};

export default LAPage;