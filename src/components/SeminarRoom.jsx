"use client"
import React, { useState } from 'react';

export default function SeminarRoom({ chapter, theme = "blue" }) {
  const [readerName, setReaderName] = useState('');
  const [showSeminar, setShowSeminar] = useState(false);
  const [currentStep, setCurrentStep] = useState(0);
  const [showCallOnMe, setShowCallOnMe] = useState(false);
  const [userInput, setUserInput] = useState('');
  const [showResponse, setShowResponse] = useState(false);

  const handleNameSubmit = () => {
    if (readerName.trim()) {
      setShowSeminar(true);
    }
  };

  const handleCallOnMe = () => {
    setShowCallOnMe(true);
  };

  const handleSubmitResponse = () => {
    setShowResponse(true);
    setShowCallOnMe(false);
    setUserInput('');
  };

  const nextStep = () => {
    if (currentStep < chapter.conversation.length - 1) {
      setCurrentStep(currentStep + 1);
      setShowResponse(false);
      setShowCallOnMe(false);
    }
  };

  const prevStep = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1);
      setShowResponse(false);
      setShowCallOnMe(false);
    }
  };

  // Theme configuration
  const themes = {
    blue: {
      gradient: "from-blue-50 to-indigo-100",
      primary: "blue-600",
      primaryHover: "blue-700",
      input: "blue-500",
      accent: "blue-50",
      accentBorder: "blue-400"
    },
    green: {
      gradient: "from-green-50 to-blue-100", 
      primary: "green-600",
      primaryHover: "green-700",
      input: "green-500",
      accent: "green-50",
      accentBorder: "green-400"
    },
    orange: {
      gradient: "from-orange-50 to-red-100",
      primary: "orange-600", 
      primaryHover: "orange-700",
      input: "orange-500",
      accent: "orange-50",
      accentBorder: "orange-400"
    },
    purple: {
      gradient: "from-purple-50 to-indigo-100",
      primary: "purple-600",
      primaryHover: "purple-700", 
      input: "purple-500",
      accent: "purple-50",
      accentBorder: "purple-400"
    }
  };

  const currentTheme = themes[theme] || themes.blue;

  if (!showSeminar) {
    return (
      <div className={`min-h-screen bg-gradient-to-br ${currentTheme.gradient} flex items-center justify-center p-4`}>
        <div className="bg-white rounded-lg shadow-xl p-8 max-w-md w-full">
          <h1 className="text-3xl font-bold text-gray-800 mb-6 text-center">
            The Social Code
          </h1>
          <p className="text-gray-600 mb-6 text-center">
            {chapter.title}
          </p>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              What's your name?
            </label>
            <input
              type="text"
              value={readerName}
              onChange={(e) => setReaderName(e.target.value)}
              className={`w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-${currentTheme.input}`}
              placeholder="Enter your name"
              onKeyPress={(e) => e.key === 'Enter' && handleNameSubmit()}
            />
            <button
              onClick={handleNameSubmit}
              className={`w-full mt-4 bg-${currentTheme.primary} text-white py-2 px-4 rounded-md hover:bg-${currentTheme.primaryHover} transition-colors`}
            >
              Join the Seminar
            </button>
          </div>
        </div>
      </div>
    );
  }

  const currentMessage = chapter.conversation[currentStep];

  return (
    <div className={`min-h-screen bg-gradient-to-br ${currentTheme.gradient} p-4`}>
      <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-xl overflow-hidden">
        <div className={`bg-${currentTheme.primary} text-white p-6`}>
          <h1 className="text-2xl font-bold">The Social Code - {chapter.title}</h1>
          <p className={`text-${currentTheme.primary}-100`}>Professor Hartwell's Seminar • Welcome, {readerName}!</p>
        </div>
        
        <div className="p-6">
          <div className="bg-gray-50 rounded-lg p-4 mb-6 min-h-[400px]">
            <div className="mb-4">
              <span className={`font-semibold ${
                currentMessage.speaker === 'Professor Hartwell' ? `text-${currentTheme.primary}` :
                currentMessage.speaker === 'Multiple' ? 'text-blue-600' : `text-${currentTheme.primary}`
              }`}>
                {currentMessage.speaker === 'Multiple' ? 'Class Discussion:' : `${currentMessage.speaker}:`}
              </span>
            </div>
            <div className="text-gray-800 leading-relaxed mb-4 whitespace-pre-line">
              {currentMessage.text}
            </div>

            {showResponse && (
              <div className="mt-4 space-y-3">
                <div className={`p-3 bg-${currentTheme.accent} border-l-4 border-${currentTheme.accentBorder} rounded`}>
                  <p className={`text-${currentTheme.primary}-800 text-sm italic`}>{currentMessage.cannedResponse}</p>
                </div>
                <div className="p-3 bg-gray-100 rounded">
                  <span className={`font-semibold text-${currentTheme.primary}`}>Professor Hartwell:</span>
                  <p className="text-gray-800 mt-1">{currentMessage.professorReply}</p>
                </div>
              </div>
            )}

            {showCallOnMe && (
              <div className="mt-4 space-y-3">
                <textarea
                  value={userInput}
                  onChange={(e) => setUserInput(e.target.value)}
                  className={`w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-${currentTheme.input}`}
                  rows="3"
                  placeholder="Type your comment or question here. Note that the demo will not use what you type."
                />
                <div className="flex gap-3">
                  <button
                    onClick={() => setShowCallOnMe(false)}
                    className="px-4 py-2 bg-gray-300 text-gray-700 rounded-md hover:bg-gray-400 transition-colors"
                  >
                    Cancel
                  </button>
                  <button
                    onClick={handleSubmitResponse}
                    className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 transition-colors"
                  >
                    Submit
                  </button>
                </div>
              </div>
            )}
          </div>
          
          <div className="flex justify-between items-center">
            <button
              onClick={prevStep}
              disabled={currentStep === 0}
              className="px-4 py-2 bg-gray-300 text-gray-700 rounded-md hover:bg-gray-400 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
            >
              Previous
            </button>
            
            <span className="text-sm text-gray-500">
              {currentStep + 1} of {chapter.conversation.length}
            </span>
            
            <div className="flex gap-3">
              {currentMessage.hasCallOnMe && !showResponse && !showCallOnMe && (
                <button
                  onClick={handleCallOnMe}
                  className="bg-green-500 text-white px-4 py-2 rounded-md hover:bg-green-600 transition-colors"
                >
                  Call on me!
                </button>
              )}
              <button
                onClick={nextStep}
                disabled={currentStep >= chapter.conversation.length - 1}
                className={`px-4 py-2 bg-${currentTheme.primary} text-white rounded-md hover:bg-${currentTheme.primaryHover} disabled:opacity-50 disabled:cursor-not-allowed transition-colors`}
              >
                {currentStep >= chapter.conversation.length - 1 ? 'Chapter Complete' : 'Continue'}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}