import React, { useState, useRef, useEffect } from 'react';
import { Send, Bot, User, X } from 'lucide-react';
import './ChatBot.css';

const ChatBot = () => {
  const [messages, setMessages] = useState([
    {
      id: 1,
      text: "Hello! I'm your friendly chat bot. How can I help you today?",
      sender: 'bot',
      timestamp: new Date(),
    }
  ]);
  const [inputMessage, setInputMessage] = useState('');
  const [isOpen, setIsOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  // Keep your existing fallback responses as a backup
  const getFallbackResponse = (userMessage) => {
    const lowerMessage = userMessage.toLowerCase();
    
    if (lowerMessage.includes('hello') || lowerMessage.includes('hi')) {
      return "Hello there! Welcome to our platform. How can I assist you today?";
    } else if (lowerMessage.includes('help')) {
      return "I can help you navigate the app! You can explore Workers, Companies, Search features, or contact support.";
    } else if (lowerMessage.includes('worker') || lowerMessage.includes('employees')) {
      return "The Workers section shows all employees in the system. You can view their details, roles, and contact information.";
    } else if (lowerMessage.includes('compan') || lowerMessage.includes('business')) {
      return "The Companies section displays all registered companies. You can see company details and their associated workers.";
    } else if (lowerMessage.includes('search')) {
      return "Use the Search page to find specific workers, companies, or information across the platform.";
    } else if (lowerMessage.includes('contact')) {
      return "The Contact page provides ways to get in touch with our support team or send us feedback.";
    } else if (lowerMessage.includes('thanks') || lowerMessage.includes('thank you')) {
      return "You're welcome! Is there anything else I can help with?";
    } else if (lowerMessage.includes('bye') || lowerMessage.includes('goodbye')) {
      return "Goodbye! Feel free to chat again if you need anything!";
    } else {
      const responses = [
        "I'm here to help! What would you like to know about our app?",
        "That's interesting! How can I assist you with our platform?",
        "I see. Would you like help with Workers, Companies, Search, or Contact sections?",
        "Thanks for sharing! I'm here to help you navigate this application."
      ];
      return responses[Math.floor(Math.random() * responses.length)];
    }
  };

  const getBotResponse = async (userMessage) => {
    try {
      // Check if API key exists
      const apiKey = import.meta.env.VITE_OPENAI_API_KEY;
      if (!apiKey) {
        throw new Error('API key not found');
      }

      const response = await fetch('https://api.openai.com/v1/chat/completions', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${apiKey}`
        },
        body: JSON.stringify({
          model: "gpt-3.5-turbo",
          messages: [
            {
              role: "system",
              content: "You are a helpful assistant for a business application that manages workers and companies. Keep responses concise and helpful (under 100 words). Be friendly and professional."
            },
            {
              role: "user",
              content: userMessage
            }
          ],
          max_tokens: 150,
          temperature: 0.7
        })
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.error?.message || 'API request failed');
      }

      const data = await response.json();
      return data.choices[0].message.content;
      
    } catch (error) {
      console.error('Error calling AI API:', error);
      // Fallback to local responses if API fails
      return getFallbackResponse(userMessage);
    }
  };

  const handleSendMessage = async (e) => {
    e.preventDefault();
    
    if (!inputMessage.trim() || isLoading) return;

    // Add user message
    const userMessage = {
      id: Date.now(),
      text: inputMessage,
      sender: 'user',
      timestamp: new Date(),
    };

    setMessages(prev => [...prev, userMessage]);
    setInputMessage('');
    setIsLoading(true);

    // Add typing indicator
    const typingMessage = {
      id: Date.now() + 0.5,
      text: "...",
      sender: 'bot',
      timestamp: new Date(),
      isTyping: true
    };
    setMessages(prev => [...prev, typingMessage]);

    try {
      const botResponseText = await getBotResponse(inputMessage);
      
      // Remove typing indicator and add actual response
      setMessages(prev => {
        const filtered = prev.filter(msg => !msg.isTyping);
        const botResponse = {
          id: Date.now() + 1,
          text: botResponseText,
          sender: 'bot',
          timestamp: new Date(),
        };
        return [...filtered, botResponse];
      });
    } catch (error) {
      // Remove typing indicator and show error
      setMessages(prev => {
        const filtered = prev.filter(msg => !msg.isTyping);
        const errorResponse = {
          id: Date.now() + 1,
          text: "Sorry, I'm having trouble connecting right now. Please try again later.",
          sender: 'bot',
          timestamp: new Date(),
        };
        return [...filtered, errorResponse];
      });
    } finally {
      setIsLoading(false);
    }
  };

  const toggleChat = () => {
    setIsOpen(!isOpen);
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      handleSendMessage(e);
    }
  };

  return (
    <div className="chatbot-container">
      {/* Chat Button */}
      {!isOpen && (
        <button className="chatbot-toggle-btn" onClick={toggleChat}>
          <Bot size={24} />
        </button>
      )}

      {/* Chat Window */}
      {isOpen && (
        <div className="chatbot-window">
          {/* Header */}
          <div className="chatbot-header">
            <div className="chatbot-title">
              <Bot size={20} />
              <span>App Assistant</span>
            </div>
            <button className="close-btn" onClick={toggleChat}>
              <X size={18} />
            </button>
          </div>

          {/* Messages */}
          <div className="chatbot-messages">
            {messages.map((message) => (
              <div
                key={message.id}
                className={`message ${message.sender === 'user' ? 'user-message' : 'bot-message'} ${message.isTyping ? 'typing-indicator' : ''}`}
              >
                <div className="message-avatar">
                  {message.sender === 'user' ? <User size={16} /> : <Bot size={16} />}
                </div>
                <div className="message-content">
                  <div className="message-text">
                    {message.isTyping ? (
                      <div className="typing-dots">
                        <span></span>
                        <span></span>
                        <span></span>
                      </div>
                    ) : (
                      message.text
                    )}
                  </div>
                  {!message.isTyping && (
                    <div className="message-time">
                      {message.timestamp.toLocaleTimeString([], { 
                        hour: '2-digit', 
                        minute: '2-digit' 
                      })}
                    </div>
                  )}
                </div>
              </div>
            ))}
            <div ref={messagesEndRef} />
          </div>

          {/* Input */}
          <form className="chatbot-input-form" onSubmit={handleSendMessage}>
            <input
              type="text"
              value={inputMessage}
              onChange={(e) => setInputMessage(e.target.value)}
              onKeyPress={handleKeyPress}
              placeholder="Type your message..."
              className="chatbot-input"
              disabled={isLoading}
            />
            <button 
              type="submit" 
              className="send-btn" 
              disabled={!inputMessage.trim() || isLoading}
            >
              <Send size={18} />
            </button>
          </form>
        </div>
      )}
    </div>
  );
};

export default ChatBot;