import React, { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MessageSquare, X, Send, RefreshCw } from "lucide-react";
import CategoryButtons from "./CategoryButtons";
import QuestionList from "./QuestionList";
import ChatMessage from "./ChatMessage";
import TypingIndicator from "./TypingIndicator";
import chatbotData, { searchAnswers, getRandomSuggestions } from "../../data/chatbotData";

export default function Chatbot() {
  const [isOpen, setIsOpen] = useState(false);
  const [view, setView] = useState("categories"); // 'categories', 'questions', 'chat'
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [messages, setMessages] = useState([
    { role: "assistant", content: "Hi! I'm Sanjay's AI Portfolio Assistant. What would you like to know?" }
  ]);
  const [inputValue, setInputValue] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const [suggestions, setSuggestions] = useState([]);
  
  const messagesEndRef = useRef(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    if (view === "chat") {
      scrollToBottom();
    }
  }, [messages, isTyping, view, suggestions]);

  const handleCategorySelect = (categoryKey) => {
    setSelectedCategory(chatbotData[categoryKey]);
    setView("questions");
  };

  const handleReset = () => {
    setView("categories");
    setSelectedCategory(null);
    setMessages([
      { role: "assistant", content: "Hi! I'm Sanjay's AI Portfolio Assistant. What would you like to know?" }
    ]);
    setInputValue("");
    setSuggestions([]);
  };

  const handleQuestionSelect = async (questionText, predefinedAnswer = null) => {
    setView("chat");
    setSuggestions([]);
    
    // Add user message
    const newMessages = [...messages, { role: "user", content: questionText }];
    setMessages(newMessages);
    setIsTyping(true);

    // Simulate network delay for realistic "AI thinking" feel
    setTimeout(() => {
      const answer = predefinedAnswer || searchAnswers(questionText);
      setMessages([...newMessages, { role: "assistant", content: answer }]);
      setSuggestions(getRandomSuggestions(questionText, 3));
      setIsTyping(false);
    }, 800 + Math.random() * 500);
  };

  const handleManualSubmit = (e) => {
    e.preventDefault();
    if (!inputValue.trim()) return;
    const msg = inputValue;
    setInputValue("");
    handleQuestionSelect(msg);
  };

  return (
    <>
      {/* Floating Action Button */}
      <motion.button
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        onClick={() => setIsOpen(true)}
        className={`fixed bottom-6 right-6 p-4 rounded-full bg-[var(--violet)] text-white shadow-lg shadow-violet-500/20 z-[90] flex items-center justify-center transition-opacity ${isOpen ? 'opacity-0 pointer-events-none' : 'opacity-100'}`}
      >
        <MessageSquare size={24} />
      </motion.button>

      {/* Chatbot Window */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            transition={{ duration: 0.3 }}
            className="fixed bottom-6 right-6 w-full max-w-[380px] h-[600px] max-h-[80vh] bg-[var(--panel)] border border-[var(--border)] rounded-2xl shadow-2xl z-[100] flex flex-col overflow-hidden backdrop-blur-md"
          >
            {/* Header */}
            <div className="flex items-center justify-between p-4 border-b border-[var(--border)] bg-[var(--panel)]">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-full bg-[var(--violet)]/20 flex items-center justify-center text-lg">
                  🤖
                </div>
                <div>
                  <h3 className="font-bold text-[var(--text)] font-display text-sm leading-tight">Sanjay AI</h3>
                  <p className="text-xs text-[var(--text-dim)] flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse"></span>
                    Online
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <button 
                  onClick={handleReset}
                  title="Reset Chat"
                  className="text-[var(--text-dim)] hover:text-[var(--violet)] transition-colors p-1"
                >
                  <RefreshCw size={18} />
                </button>
                <button 
                  onClick={() => setIsOpen(false)}
                  title="Close"
                  className="text-[var(--text-dim)] hover:text-white transition-colors p-1"
                >
                  <X size={20} />
                </button>
              </div>
            </div>

            {/* Body */}
            <div className="flex-1 overflow-y-auto p-4 scrollbar-thin">
              {view === "categories" && (
                <>
                  <div className="mb-4">
                    <div className="inline-block bg-[var(--panel-2)] border border-[var(--border)] rounded-2xl rounded-tl-sm px-4 py-3 text-sm text-[var(--text)]">
                      Hi! I'm Sanjay's AI Portfolio Assistant. What would you like to know?
                    </div>
                  </div>
                  <CategoryButtons onSelectCategory={handleCategorySelect} />
                </>
              )}

              {view === "questions" && (
                <QuestionList 
                  category={selectedCategory} 
                  onSelectQuestion={(qText, ans) => handleQuestionSelect(qText, ans)} 
                  onBack={() => setView("categories")}
                />
              )}

              {view === "chat" && (
                <div className="flex flex-col">
                  {messages.map((msg, idx) => (
                    <ChatMessage key={idx} message={msg} />
                  ))}
                  {isTyping && <TypingIndicator />}
                  <div ref={messagesEndRef} />
                  
                  {!isTyping && suggestions.length > 0 && (
                    <motion.div 
                      initial={{ opacity: 0 }} 
                      animate={{ opacity: 1 }} 
                      className="mt-4"
                    >
                      <p className="text-xs text-[var(--text-dim)] mb-2 ml-2">You may also ask:</p>
                      <div className="flex flex-col gap-2">
                        {suggestions.map((s, i) => (
                          <button
                            key={i}
                            onClick={() => handleQuestionSelect(s)}
                            className="text-left text-xs p-2.5 rounded-lg bg-[var(--panel-2)] border border-[var(--border)] hover:border-[var(--violet)] text-[var(--text-dim)] hover:text-[var(--text)] transition-colors"
                          >
                            {s}
                          </button>
                        ))}
                      </div>
                    </motion.div>
                  )}
                </div>
              )}
            </div>

            {/* Footer Input */}
            <div className="p-3 border-t border-[var(--border)] bg-[var(--panel)]">
              <form onSubmit={handleManualSubmit} className="relative flex items-center">
                <input
                  type="text"
                  value={inputValue}
                  onChange={(e) => setInputValue(e.target.value)}
                  placeholder="Ask me anything about Sanjay..."
                  className="w-full bg-[var(--bg)] border border-[var(--border)] rounded-xl py-2.5 pl-4 pr-10 text-sm text-[var(--text)] focus:outline-none focus:border-[var(--violet)] transition-colors"
                />
                <button 
                  type="submit"
                  disabled={!inputValue.trim() || isTyping}
                  className="absolute right-2 p-1.5 text-[var(--violet)] disabled:opacity-50 hover:bg-[var(--violet)]/10 rounded-lg transition-colors"
                >
                  <Send size={16} />
                </button>
              </form>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
