"use client"
import React, { useState } from 'react';

export default function CulturalLearningSeminar() {
  const [readerName, setReaderName] = useState('');
  const [showSeminar, setShowSeminar] = useState(false);
  const [currentStep, setCurrentStep] = useState(0);
  const [showCallOnMe, setShowCallOnMe] = useState(false);
  const [userInput, setUserInput] = useState('');
  const [showResponse, setShowResponse] = useState(false);

  const conversation = [
    {
      speaker: "Multiple",
      text: `Professor Hartwell: "We've been discussing evolutionary psychology and its limitations. I mentioned that cultural evolution is enormously important in humans and makes our evolution quite different from other animals. This brings us to one of the most fundamental questions: What exactly makes humans so successful as a species?"

Blake: "I guess our big brains make us smarter than other animals?"

Professor Hartwell: "That's the intuitive answer, but anthropologist Joseph Henrich argues something quite different. He writes that 'The secret of our species' success resides not in the power of our individual minds, but in the collective brains of our communities.'"

Casey: "That reminds me of the old saying that 'none of us is as smart as all of us.' But what does Henrich mean by 'collective brains' exactly?"`,
      hasCallOnMe: true,
      cannedResponse: "Suppose you asked how this differs from other animals that also live in groups?",
      professorReply: "Excellent question. Many animals live in groups, but humans are unique in our ability to accumulate knowledge across generations. When a clever chimpanzee figures out how to use a stick to get termites, that knowledge might get passed to a few others, but it doesn't improve over time. Humans, by contrast, take existing knowledge and build on it, creating what Henrich calls 'cumulative culture' - each generation standing on the shoulders of the previous one."
    },
    {
      speaker: "Multiple",
      text: `Professor Hartwell: "Henrich points out that our striking technologies, from the kayaks used by hunter-gatherers to modern antibiotics and airplanes, emerge not from singular geniuses but from the flow and recombination of ideas among interconnected minds across generations. Innovation depends more on our sociality than on our intellect."

Avery: "So it's like a distributed computing system, where the network effect is more powerful than any individual processor?"

Professor Hartwell: "Beautiful analogy, Avery. And here's what's remarkable - evolutionary neuroscientist Kevin Laland ran experiments that show why social learning is so powerful. His team created what they called a 'social learning strategies tournament' - imagine facing a slot machine with 100 different arms, each with different payoffs that change over time."

Drew: "How does this connect to real-world learning? We're getting pretty abstract."

Professor Hartwell: "Great point, Drew. Think of a manufacturing worker in Ohio in 1999. You can stick with your current industry and location - that's playing it safe with what you know. You can observe what people with similar skills are doing in other industries - that's social learning. Or you can try to start your own business or learn a completely new trade - that's individual innovation."`,
      hasCallOnMe: false
    },
    {
      speaker: "Multiple",
      text: `Blake: "I assume individual innovation would be more effective - you're not just copying other people."

Professor Hartwell: "That's what most people assume, Blake, but Laland's tournament showed the opposite. Social learning - observing and copying others - proved much more effective than individual innovation. As Laland puts it, 'copying pays because other individuals filter behavior, making adaptive information available to copy.'"

Casey: "This connects to what Francis Bacon wrote about 'standing on the shoulders of giants' - the idea that knowledge builds cumulatively."

Professor Hartwell: "Exactly, Casey. An animal doesn't need to be smart to benefit from copying, because the smart decision-making has already been done by the copied individuals. But here's the crucial insight - this only works if copying is accurate enough."

Avery: "You mean there's a threshold effect? If copying is too sloppy, knowledge gets lost?"

Professor Hartwell: "Precisely, Avery. Laland found that 'a small increase in the fidelity of social learning will transform cultural habits from being short lived to virtually immortal.' Mathematical models suggest that cultural accumulation depends crucially on minimizing the loss of traits through high-fidelity copying."`,
      hasCallOnMe: true,
      cannedResponse: "Suppose you asked what makes humans so much better at copying than other animals?",
      professorReply: "Humans evolved specific capabilities that make us incredibly good at high-fidelity copying. Visual acuity helps us see exactly what others are doing. But even more important is what psychologists call 'theory of mind' - our ability to understand what others are thinking and intending. This allows us to comprehend not just what someone is doing, but why they're doing it and what they're trying to achieve. We're not just copying actions; we're copying intentions and strategies."
    },
    {
      speaker: "Multiple", 
      text: `Drew: "This is fascinating, but how does this actually help people in the real world? What are the practical implications?"

Professor Hartwell: "Crucial question, Drew. This research suggests that much of what we call 'individual intelligence' is actually cultural intelligence - knowledge we've downloaded from our cultural 'cloud' of family, teachers, books, and institutions. Henrich argues that as isolated individuals, humans aren't particularly intelligent compared to chimpanzees."

Blake: "Wait, that seems hard to believe. Humans aren't smarter than chimps?"

Professor Hartwell: "Henrich's point is that our advantage isn't the hardware of our brains, but the cultural software loaded into them. We're the only species that evolved brains specifically designed to run cultural learning programs."

Casey: "This reminds me of debates in intellectual history about whether great discoveries come from individual genius or from the accumulation of prior knowledge."

Avery: "And it connects back to our discussion of institutions, doesn't it? The quality of cultural transmission depends on having systems that preserve and improve knowledge over time."`,
      hasCallOnMe: false
    },
    {
      speaker: "Multiple",
      text: `Professor Hartwell: "Excellent connection, Avery. This is where the research gets really interesting for modern society. Henrich emphasizes that cultural learning itself follows an evolutionary process - 'cultural evolution is often much smarter than we are.' Operating over generations, this process generates what he calls 'cultural adaptations.'"

Drew: "Can you give us an example of what that means in practice?"

Professor Hartwell: "Consider traditional practices that people follow without fully understanding why they work. Henrich writes that these complex repertoires often appear well designed to meet local challenges, but they're not primarily products of individuals applying rational thinking. Most people skilled in deploying such practices don't understand how or why they work."

Blake: "That sounds almost mystical. How can something work without anyone understanding it?"

Professor Hartwell: "Think about language, Blake. You use grammar rules effectively - you say 'a big red car' instead of 'a red big car' - but could you explain why? Or consider your smartphone - you use it effectively without understanding how the circuits work."

Casey: "This echoes what Friedrich Hayek wrote about spontaneous order - how complex systems can emerge without central planning."`,
      hasCallOnMe: true,
      cannedResponse: "Suppose you said 'But doesn't this mean we should never question traditional practices?'",
      professorReply: "That's the crucial tension, and exactly why understanding cultural evolution is so important. On one hand, traditional practices often contain wisdom we don't fully grasp, so discarding them carelessly can be costly. On the other hand, environments change, and practices that worked in one context might become harmful in another. The key is distinguishing between cultural practices that are still adaptive and those that are outdated - which requires careful analysis rather than blind acceptance or rejection."
    },
    {
      speaker: "Multiple",
      text: `Drew: "So how do we make that distinction? How do we know which traditional practices to keep and which to change?"

Professor Hartwell: "That's one of the great challenges of our time, Drew. Henrich suggests we need to understand how cultural evolution actually works. Natural selection has favored individuals who often place their faith in cultural inheritance over their own personal experiences - but only when that cultural inheritance is actually adaptive."

Avery: "This creates a feedback loop, doesn't it? The institutions that preserve and transmit culture shape what gets learned, which shapes how those institutions evolve."

Professor Hartwell: "Beautifully put, Avery. And this brings us to a crucial insight about prestige-based learning. Henrich argues that we've evolved to learn preferentially from prestigious individuals - people who demonstrate success, skill, or knowledge in locally valued domains."

Blake: "But who decides what domains are valued? That seems like it could go wrong pretty easily."

Professor Hartwell: "Sharp observation, Blake. As Henrich puts it, 'the differential success of societies and institutions will hinge, in part, on what domains are valued.' If we give prestige to the wrong people or activities, our cultural learning system can lead us astray."

Casey: "This connects to long-standing questions in political philosophy about who should have authority and influence in society."`,
      hasCallOnMe: false
    },
    {
      speaker: "Multiple",
      text: `Professor Hartwell: "Exactly, Casey. And this is where cultural learning research becomes crucial for understanding modern institutions. The challenge has always been, as Henrich puts it, 'how to prevent communities from fragmenting and social networks from dissolving' while maintaining the cultural transmission that makes us successful."

Drew: "Are you saying our current institutions might be failing at cultural transmission?"

Professor Hartwell: "That's a key question we'll explore further, Drew. If our educational institutions, media, and other prestige-granting systems are rewarding the wrong behaviors or transmitting the wrong knowledge, it could undermine the cultural learning that has made human societies successful."

Avery: "And this connects forward to our discussions about cooperation and institutional design - understanding how cultural learning works is essential for building systems that actually function well."

Blake: "I'm still skeptical about how much we can really know about what practices are 'adaptive' versus just traditional."

Professor Hartwell: "Your skepticism is warranted, Blake. These are complex questions without easy answers. But understanding cultural learning gives us better tools for thinking about social change - when to preserve existing practices and when innovation is necessary. The key insight is that human success comes not from individual brilliance, but from our unique ability to learn from each other and build knowledge across generations."`,
      hasCallOnMe: false
    }
  ];

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
    if (currentStep < conversation.length - 1) {
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

  if (!showSeminar) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-orange-50 to-red-100 flex items-center justify-center p-4">
        <div className="bg-white rounded-lg shadow-xl p-8 max-w-md w-full">
          <h1 className="text-3xl font-bold text-gray-800 mb-6 text-center">
            The Social Code
          </h1>
          <p className="text-gray-600 mb-6 text-center">
            Cultural Learning: The Secret of Human Success
          </p>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              What's your name?
            </label>
            <input
              type="text"
              value={readerName}
              onChange={(e) => setReaderName(e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
              placeholder="Enter your name"
              onKeyPress={(e) => e.key === 'Enter' && handleNameSubmit()}
            />
            <button
              onClick={handleNameSubmit}
              className="w-full mt-4 bg-orange-600 text-white py-2 px-4 rounded-md hover:bg-orange-700 transition-colors"
            >
              Join the Seminar
            </button>
          </div>
        </div>
      </div>
    );
  }

  const currentMessage = conversation[currentStep];

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 to-red-100 p-4">
      <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-xl overflow-hidden">
        <div className="bg-orange-600 text-white p-6">
          <h1 className="text-2xl font-bold">The Social Code - Cultural Learning</h1>
          <p className="text-orange-100">Professor Hartwell's Seminar • Welcome, {readerName}!</p>
        </div>
        
        <div className="p-6">
          <div className="bg-gray-50 rounded-lg p-4 mb-6 min-h-[400px]">
            <div className="mb-4">
              <span className={`font-semibold ${
                currentMessage.speaker === 'Professor Hartwell' ? 'text-orange-600' :
                currentMessage.speaker === 'Multiple' ? 'text-blue-600' : 'text-orange-600'
              }`}>
                {currentMessage.speaker === 'Multiple' ? 'Class Discussion:' : `${currentMessage.speaker}:`}
              </span>
            </div>
            <div className="text-gray-800 leading-relaxed mb-4 whitespace-pre-line">
              {currentMessage.text}
            </div>

            {showResponse && (
              <div className="mt-4 space-y-3">
                <div className="p-3 bg-orange-50 border-l-4 border-orange-400 rounded">
                  <p className="text-orange-800 text-sm italic">{currentMessage.cannedResponse}</p>
                </div>
                <div className="p-3 bg-gray-100 rounded">
                  <span className="font-semibold text-orange-600">Professor Hartwell:</span>
                  <p className="text-gray-800 mt-1">{currentMessage.professorReply}</p>
                </div>
              </div>
            )}

            {showCallOnMe && (
              <div className="mt-4 space-y-3">
                <textarea
                  value={userInput}
                  onChange={(e) => setUserInput(e.target.value)}
                  className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
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
              {currentStep + 1} of {conversation.length}
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
                disabled={currentStep >= conversation.length - 1}
                className="px-4 py-2 bg-orange-600 text-white rounded-md hover:bg-orange-700 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
              >
                {currentStep >= conversation.length - 1 ? 'Chapter Complete' : 'Continue'}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}