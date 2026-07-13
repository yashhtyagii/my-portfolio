import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MessageSquare, X, Send, Bot, User } from 'lucide-react';

type Message = {
  id: string;
  sender: 'bot' | 'user';
  text: string;
};

export default function Chatbot() {
  const [isOpen, setIsOpen] = useState(false);
  const [input, setInput] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      id: '1',
      sender: 'bot',
      text: "Hi there! I'm Yash's assistant. Ask me anything about his skills, education, or how to contact him!"
    }
  ]);
  
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, isTyping, isOpen]);

  const getBotResponse = (query: string): string => {
    const q = query.toLowerCase();
    
    if (q.includes('who is') || q.includes('about')) {
      return "Yash Tyagi is a passionate B.Tech CSE (AI & ML) student at PIET Panipat. He loves Python, AI, and solving real-world problems through technology.";
    }
    if (q.includes('study') || q.includes('education') || q.includes('college')) {
      return "Yash is pursuing B.Tech in Computer Science & Engineering with specialization in AI & ML at Panipat Institute of Engineering & Technology (PIET), Panipat. He's currently in his second year.";
    }
    if (q.includes('skill') || q.includes('know')) {
      return "Yash knows Python, C, HTML, CSS, Git, GitHub, NumPy, and is learning Pandas and Data Visualization. He also explores AI-assisted web development.";
    }
    if (q.includes('contact') || q.includes('email') || q.includes('reach')) {
      return "You can reach Yash at yashtyagi38963@gmail.com, on GitHub at github.com/yashhtyagii, or on LinkedIn at linkedin.com/in/yash-tyagi-375a7033b";
    }
    if (q.includes('project') || q.includes('work')) {
      return "Yash is currently building his first projects! They'll be showcased here soon. Every project will be a milestone in his journey.";
    }
    if (q.includes('goal') || q.includes('career') || q.includes('future')) {
      return "Yash's goal is to become a highly skilled AI Engineer, master Machine Learning and Deep Learning, contribute to open source, and build impactful software.";
    }
    if (q.includes('learn') || q.includes('technologies')) {
      return "Currently learning Python, Git, NumPy, Pandas, Data Visualization, and AI-assisted development. Next up: Machine Learning and Deep Learning.";
    }
    
    return "I'm a simple assistant for Yash's portfolio. Try asking: Who is Yash? What are his skills? How can I contact him?";
  };

  const handleSend = (e?: React.FormEvent) => {
    if (e) e.preventDefault();
    if (!input.trim()) return;

    const userMsg: Message = { id: Date.now().toString(), sender: 'user', text: input };
    setMessages(prev => [...prev, userMsg]);
    setInput('');
    setIsTyping(true);

    setTimeout(() => {
      const response = getBotResponse(userMsg.text);
      const botMsg: Message = { id: (Date.now() + 1).toString(), sender: 'bot', text: response };
      setMessages(prev => [...prev, botMsg]);
      setIsTyping(false);
    }, 1000 + Math.random() * 1000); // 1-2s delay for realism
  };

  return (
    <>
      <AnimatePresence>
        {!isOpen && (
          <motion.button
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0, opacity: 0 }}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={() => setIsOpen(true)}
            className="fixed bottom-6 right-6 w-14 h-14 bg-gradient-to-tr from-primary to-secondary rounded-full text-white shadow-lg shadow-primary/30 flex items-center justify-center z-50 overflow-hidden group"
          >
            <div className="absolute inset-0 bg-white/20 opacity-0 group-hover:opacity-100 transition-opacity" />
            <MessageSquare size={24} />
          </motion.button>
        )}
      </AnimatePresence>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            transition={{ duration: 0.2 }}
            className="fixed bottom-6 right-6 w-[90vw] max-w-[350px] h-[500px] max-h-[80vh] glass-card rounded-2xl shadow-2xl z-50 flex flex-col overflow-hidden border border-primary/20"
          >
            {/* Header */}
            <div className="bg-gradient-to-r from-primary/80 to-secondary/80 backdrop-blur-md p-4 flex items-center justify-between text-white">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center">
                  <Bot size={18} />
                </div>
                <div>
                  <h3 className="font-semibold text-sm">Yash's Assistant</h3>
                  <div className="flex items-center gap-1.5 text-xs text-white/80">
                    <span className="w-1.5 h-1.5 bg-green-400 rounded-full animate-pulse" /> Online
                  </div>
                </div>
              </div>
              <button 
                onClick={() => setIsOpen(false)}
                className="p-1.5 hover:bg-white/20 rounded-full transition-colors"
              >
                <X size={18} />
              </button>
            </div>

            {/* Chat Area */}
            <div className="flex-1 overflow-y-auto p-4 flex flex-col gap-4 bg-background/50">
              {messages.map((msg) => (
                <motion.div 
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  key={msg.id} 
                  className={`flex gap-2 max-w-[85%] ${msg.sender === 'user' ? 'ml-auto flex-row-reverse' : ''}`}
                >
                  <div className={`w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0 mt-1 ${msg.sender === 'bot' ? 'bg-primary/20 text-primary' : 'bg-secondary/20 text-secondary'}`}>
                    {msg.sender === 'bot' ? <Bot size={12} /> : <User size={12} />}
                  </div>
                  <div className={`p-3 rounded-2xl text-sm ${
                    msg.sender === 'user' 
                      ? 'bg-primary text-primary-foreground rounded-tr-sm' 
                      : 'bg-card border border-border rounded-tl-sm'
                  }`}>
                    {msg.text}
                  </div>
                </motion.div>
              ))}
              
              {isTyping && (
                <div className="flex gap-2 max-w-[85%]">
                  <div className="w-6 h-6 rounded-full bg-primary/20 text-primary flex items-center justify-center flex-shrink-0 mt-1">
                    <Bot size={12} />
                  </div>
                  <div className="p-4 rounded-2xl rounded-tl-sm bg-card border border-border flex gap-1 items-center">
                    <motion.div animate={{ y: [0, -5, 0] }} transition={{ repeat: Infinity, duration: 0.6, delay: 0 }} className="w-1.5 h-1.5 bg-muted-foreground rounded-full" />
                    <motion.div animate={{ y: [0, -5, 0] }} transition={{ repeat: Infinity, duration: 0.6, delay: 0.2 }} className="w-1.5 h-1.5 bg-muted-foreground rounded-full" />
                    <motion.div animate={{ y: [0, -5, 0] }} transition={{ repeat: Infinity, duration: 0.6, delay: 0.4 }} className="w-1.5 h-1.5 bg-muted-foreground rounded-full" />
                  </div>
                </div>
              )}
              <div ref={messagesEndRef} />
            </div>

            {/* Input Area */}
            <form onSubmit={handleSend} className="p-3 border-t border-border bg-card">
              <div className="relative flex items-center">
                <input
                  type="text"
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  placeholder="Ask me anything..."
                  className="w-full bg-background border border-border rounded-full py-2.5 pl-4 pr-12 text-sm focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all"
                />
                <button 
                  type="submit"
                  disabled={!input.trim() || isTyping}
                  className="absolute right-1.5 p-1.5 bg-primary text-primary-foreground rounded-full disabled:opacity-50 disabled:bg-muted disabled:text-muted-foreground transition-all hover:scale-105 active:scale-95"
                >
                  <Send size={16} />
                </button>
              </div>
            </form>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
