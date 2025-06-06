"use client"
import React, { useState } from 'react';

export default function CorrelationSeminar() {
  const [readerName, setReaderName] = useState('');
  const [showSeminar, setShowSeminar] = useState(false);
  const [currentSection, setCurrentSection] = useState('A');
  const [showCallOnMe, setShowCallOnMe] = useState(false);
  const [userInput, setUserInput] = useState('');
  const [showResponse, setShowResponse] = useState(false);

  const sections = {
    A: {
      title: "What is Correlation?",
      dialogue: `Professor Hartwell: Blake, you mentioned last week that you keep hearing "correlation doesn't prove causation" but wondered why correlation matters at all if it's not causation. Want to start us off?

Blake: Right. I mean, if correlation doesn't prove anything, why do people get so excited about finding correlations? It seems like a waste of time.

Professor Hartwell: That's a fair question. Correlation matters because our task is to try to predict, explain, and change the phenomena we encounter. Correlation means that two phenomena tend to go together. That can help with prediction, but it won't help us explain or change things unless we're correct about causation.

Let's take smoking and lung cancer. People who smoke have higher rates of lung cancer, and people who smoke more have even higher rates. That's correlation. And in this case, we're pretty confident it's also causation.

Blake: But not everyone who smokes gets lung cancer, right?

Professor Hartwell: Exactly. And not everyone with lung cancer was a smoker. I used to call this the First Iron Law of Social Science: "Sometimes it's this way and sometimes it's that way." Correlation means tendency, not certainty.`,
      hasCallOnMe: true,
      cannedResponse: "Professor, can you explain correlation coefficients?",
      professorReply: "Good question! We measure correlation strength with correlation coefficients that range from -1 to +1. The closer to those extremes, the stronger the relationship. A correlation of +0.8 means the variables tend to move together strongly, while -0.8 means they move in opposite directions strongly. Zero means no relationship. But you also need the relationship to matter - a tiny correlation between unimportant variables isn't much of an accomplishment.",
      characters: ['Blake', 'Professor Hartwell'],
      tension: 'low',
      learningObjective: 'Understanding what correlation means and why it matters for prediction'
    },
    B: {
      title: "When Correlation Misleads",
      dialogue: `Professor Hartwell: Now Blake, here's where your skepticism becomes really valuable. How do we know when correlation is NOT causation?

Blake: Good question. I assume there are ways correlations can fool us?

Professor Hartwell: Three main ways. First, pure coincidence in small samples. Ever hear of the Super Bowl indicator?

Blake: No, what's that?

Professor Hartwell: In the 1970s and early 80s, investors noticed that when the Super Bowl winner came from the National Football Conference, the stock market went up that year. When the winner came from the American Football Conference, it went down.

Blake: *laughing* That's ridiculous.

Drew: *interrupting* But people actually used that to make investment decisions? That's exactly the kind of thing that hurts real families when their retirement accounts tank.

Professor Hartwell: Indeed, Drew. Pure chance that eventually stopped working. But smoking and lung cancer wasn't just luck - large samples, persistent relationship.

Casey: This reminds me of what Francis Bacon wrote about false patterns. Humans are naturally inclined to see order even in random events.

Blake: *rolling eyes* Casey, we're talking about statistics, not 17th-century philosophy.

Avery: Actually, Blake's missing the connection here. Casey's right - this is a systematic cognitive bias. Our pattern-recognition systems evolved to err on the side of seeing patterns even when they're not there, because missing a real pattern could be fatal.

Blake: Fine, whatever. What's the second way correlations fool us?`,
      hasCallOnMe: true,
      cannedResponse: "What about reverse causation - can you give us an example?",
      professorReply: "Perfect question! Reverse causation is when we think A causes B, but really B causes A. You might observe that people who drink fine wine tend to be wealthy. But drinking fine wine doesn't make you rich - being rich allows you to afford fine wine. The causation runs backward from what you might first assume.",
      characters: ['Blake', 'Professor Hartwell', 'Drew', 'Casey', 'Avery'],
      tension: 'medium',
      learningObjective: 'Identifying three ways correlation can mislead: coincidence, reverse causation, and third factors'
    },
    C: {
      title: "The Challenge of Third Factors",
      dialogue: `Professor Hartwell: The third possibility: some other factor causes both. Auto insurance companies found that drivers with good credit ratings have fewer accidents. It's not that good driving creates good credit, or good credit creates good driving.

Avery: *jumping in excitedly* Oh, I see the system here! The same personality traits - conscientiousness, attention to detail, following through on commitments - those traits cause both good driving AND good credit. It's like both outcomes emerge from the same underlying behavioral patterns.

Blake: *interrupting dismissively* That personality psychology stuff I think is baloney.

Drew: *sarcastically* Well, that says something about YOUR personality.

Casey: *trying to mediate* Perhaps we should focus on the methodological point here. Professor Hartwell, how do researchers actually rule out these third factors?

Professor Hartwell: *chuckling at the exchange* Good question, Casey. Ideally you'd do a controlled experiment - randomly assign people to smoke or not smoke for decades and see what happens.

Blake: Obviously a terrible idea.

Drew: Right, because we're talking about real people's lives, not just abstract variables.

Professor Hartwell: Exactly. So we have to be creative about gathering evidence and modest about our conclusions. We evaluate findings in context with other studies, logic, and intuition. Without controlled experiments, it's often difficult to rule out third factors completely.

Avery: But this connects to something bigger, doesn't it? All our social institutions - markets, governments, families - they're basically systems for processing correlational information and making collective decisions about what's probably causal.

Blake: *sighing* There goes Avery turning everything into a systems analysis again.`,
      hasCallOnMe: true,
      cannedResponse: "So most of the time we can't really know if correlation means causation?",
      professorReply: "In social science, without controlled experiments, you're right that it's often difficult to be completely certain. That's what makes studying human behavior both challenging and fascinating. 'Correlation is not causation' is often a valid criticism. But we don't give up - we just need to be more careful and creative. We look for natural experiments, compare across different contexts, and build evidence gradually.",
      characters: ['Professor Hartwell', 'Avery', 'Blake', 'Drew', 'Casey'],
      tension: 'high',
      learningObjective: 'Understanding how third factors complicate causal inference and why controlled experiments are often impossible in social science'
    }
  };

  const handleNameSubmit = () => {
    if (readerName.trim()) {
      setShowSeminar(true);
    }
  };

  const handleCallOnMe = async () => {
    setShowCallOnMe(true);
  };

  const handleSubmitResponse = async () => {
    // For now, just show the canned response
    setShowResponse(true);
    setShowCallOnMe(false);
    setUserInput('');
  };

  const navigateToSection = (sectionKey) => {
    setCurrentSection(sectionKey);
    setShowResponse(false);
    setShowCallOnMe(false);
  };

  if (!showSeminar) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 flex items-center justify-center p-4">
        <div className="bg-white rounded-lg shadow-xl p-8 max-w-md w-full">
          <h1 className="text-3xl font-bold text-gray-800 mb-6 text-center">
            The Social Code
          </h1>
          <p className="text-gray-600 mb-6 text-center">
            Chapter: Understanding Correlation
          </p>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              What's your name?
            </label>
            <input
              type="text"
              value={readerName}
              onChange={(e) => setReaderName(e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter your name"
              onKeyPress={(e) => e.key === 'Enter' && handleNameSubmit()}
            />
            <button
              onClick={handleNameSubmit}
              className="w-full mt-4 bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition-colors"
            >
              Join the Seminar
            </button>
          </div>
        </div>
      </div>
    );
  }

  const currentSectionData = sections[currentSection];
  const sectionKeys = Object.keys(sections);
  const currentIndex = sectionKeys.indexOf(currentSection);

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 p-4">
      <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-xl overflow-hidden">
        <div className="bg-blue-600 text-white p-6">
          <h1 className="text-2xl font-bold">The Social Code - Understanding Correlation</h1>
          <p className="text-blue-100">Professor Hartwell's Seminar • Welcome, {readerName}!</p>
        </div>
        
        <div className="p-6">
          {/* Section Navigation */}
          <div className="mb-6">
            <div className="flex space-x-2 mb-4">
              {sectionKeys.map((key) => (
                <button
                  key={key}
                  onClick={() => navigateToSection(key)}
                  className={`px-3 py-1 rounded text-sm font-medium transition-colors ${
                    currentSection === key
                      ? 'bg-blue-600 text-white'
                      : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                  }`}
                >
                  Section {key}
                </button>
              ))}
            </div>
            <h2 className="text-xl font-semibold text-gray-800 mb-2">
              Section {currentSection}: {currentSectionData.title}
            </h2>
          </div>

          {/* Dialogue Content */}
          <div className="bg-gray-50 rounded-lg p-4 mb-6 min-h-[400px]">
            <div className="text-gray-800 leading-relaxed mb-4 whitespace-pre-line">
              {currentSectionData.dialogue}
            </div>

            {showResponse && (
              <div className="mt-4 space-y-3">
                <div className="p-3 bg-blue-50 border-l-4 border-blue-400 rounded">
                  <p className="text-blue-800 text-sm italic">{currentSectionData.cannedResponse}</p>
                </div>
                <div className="p-3 bg-gray-100 rounded">
                  <span className="font-semibold text-blue-600">Professor Hartwell:</span>
                  <p className="text-gray-800 mt-1">{currentSectionData.professorReply}</p>
                </div>
              </div>
            )}

            {showCallOnMe && (
              <div className="mt-4 space-y-3">
                <textarea
                  value={userInput}
                  onChange={(e) => setUserInput(e.target.value)}
                  className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  rows="3"
                  placeholder="Type your comment or question here..."
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
                    className="bg-green-500 text-white px-4 py-2 rounded-md hover:bg-green-600 transition-colors"
                  >
                    Submit
                  </button>
                </div>
              </div>
            )}
          </div>
          
          {/* Controls */}
          <div className="flex justify-between items-center">
            <button
              onClick={() => navigateToSection(sectionKeys[currentIndex - 1])}
              disabled={currentIndex === 0}
              className="px-4 py-2 bg-gray-300 text-gray-700 rounded-md hover:bg-gray-400 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
            >
              Previous Section
            </button>
            
            <div className="flex items-center space-x-4">
              <span className="text-sm text-gray-500">
                Section {currentSection} of {sectionKeys.length}
              </span>
              
              {/* Learning Objective */}
              <div className="text-xs text-gray-400 max-w-xs text-center">
                {currentSectionData.learningObjective}
              </div>
              
              {/* Tension Level Indicator */}
              <div className="flex items-center space-x-1">
                <span className="text-xs text-gray-500">Tension:</span>
                <div className={`w-2 h-2 rounded-full ${
                  currentSectionData.tension === 'low' ? 'bg-green-400' :
                  currentSectionData.tension === 'medium' ? 'bg-yellow-400' : 'bg-red-400'
                }`}></div>
              </div>
            </div>
            
            <div className="flex gap-3">
              {currentSectionData.hasCallOnMe && !showResponse && !showCallOnMe && (
                <button
                  onClick={handleCallOnMe}
                  className="bg-green-500 text-white px-4 py-2 rounded-md hover:bg-green-600 transition-colors"
                >
                  Call on me!
                </button>
              )}
              <button
                onClick={() => navigateToSection(sectionKeys[currentIndex + 1])}
                disabled={currentIndex >= sectionKeys.length - 1}
                className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
              >
                {currentIndex >= sectionKeys.length - 1 ? 'Chapter Complete' : 'Next Section'}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}