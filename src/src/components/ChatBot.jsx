import React, { useState, useRef, useEffect } from 'react';
import { Send, Bot, User, X } from 'lucide-react';
import './ChatBot.css';

const ChatBot = () => {
  const [messages, setMessages] = useState([
    {
      id: 1,
      text: "Hej! Jag är din hjälpsamma chatbot. Hur kan jag hjälpa dig idag?",
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

  // Svenska fallback-svar
  const getFallbackResponse = (userMessage) => {
    const lowerMessage = userMessage.toLowerCase();
    
    if (lowerMessage.includes('hej') || lowerMessage.includes('hallå') || lowerMessage.includes('tjena')) {
      return "Hej där! Välkommen till vår plattform. Hur kan jag hjälpa dig idag?";
    } else if (lowerMessage.includes('hjälp')) {
      return "Jag kan hjälpa dig att navigera i appen! Du kan utforska Arbetare, Företag, Sök-funktioner eller kontakta support.";
    } else if (lowerMessage.includes('arbetar') || lowerMessage.includes('anställd')) {
      return "Avdelningen Arbetare visar alla anställda i systemet. Du kan se deras detaljer, roller och kontaktinformation.";
    } else if (lowerMessage.includes('företag') || lowerMessage.includes('företag')) {
      return "Avdelningen Företag visar alla registrerade företag. Du kan se företagsdetaljer och deras associerade arbetare.";
    } else if (lowerMessage.includes('sök')) {
      return "Använd Sök-sidan för att hitta specifika arbetare, företag eller information på plattformen.";
    } else if (lowerMessage.includes('kontakt')) {
      return "Kontakt-sidan ger dig möjlighet att komma i kontakt med vårt supportteam eller skicka feedback.";
    } else if (lowerMessage.includes('tjänst') || lowerMessage.includes('service')) {
      return "Vi erbjuder tjänster inom rekrytering, bemanning och HR-konsultation. Kolla gärna vår Tjänster-sida!";
    } else if (lowerMessage.includes('grekland') || lowerMessage.includes('spanien')) {
      return "Vi har många jobbmöjligheter i Grekland, Spanien, Italien och Portugal med boende och flyg inkluderat!";
    } else if (lowerMessage.includes('jobb') || lowerMessage.includes('anställning')) {
      return "Vi rekryterar svenska arbetare till jobb i varma länder. Kolla våra tjänster för att se aktuella jobbmöjligheter!";
    } else if (lowerMessage.includes('tack') || lowerMessage.includes('tackar')) {
      return "Varsågod! Är det något annat jag kan hjälpa dig med?";
    } else if (lowerMessage.includes('hejdå') || lowerMessage.includes('adjö')) {
      return "Hejdå! Kom gärna tillbaka om du behöver hjälp med något!";
    } else {
      const responses = [
        "Jag är här för att hjälpa! Vad vill du veta om vår applikation?",
        "Intressant! Hur kan jag hjälpa dig med vår plattform?",
        "Jag förstår. Vill du ha hjälp med Arbetare, Företag, Sök eller Kontakt-avdelningarna?",
        "Tack för att du delar med dig! Jag är här för att hjälpa dig navigera i denna applikation."
      ];
      return responses[Math.floor(Math.random() * responses.length)];
    }
  };

  const getBotResponse = async (userMessage) => {
    try {
      // Kolla om API-nyckel finns
      const apiKey = import.meta.env.VITE_OPENAI_API_KEY;
      if (!apiKey) {
        throw new Error('API-nyckel hittades inte');
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
              content: "Du är en hjälpsam assistent för Global Worker Grekland, en applikation som rekryterar svenska arbetare till jobb i varma länder som Grekland, Spanien, Italien och Portugal. Håll svaren koncisa och hjälpsamma (under 100 ord). Var vänlig och professionell. Tala alltid på svenska. Fokusera på att hjälpa med jobbmöjligheter, tjänster, rekrytering och bemanning."
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
        throw new Error(errorData.error?.message || 'API-förfrågan misslyckades');
      }

      const data = await response.json();
      return data.choices[0].message.content;
      
    } catch (error) {
      console.error('Fel vid anrop till AI API:', error);
      // Fallback till lokala svar om API misslyckas
      return getFallbackResponse(userMessage);
    }
  };

  const handleSendMessage = async (e) => {
    e.preventDefault();
    
    if (!inputMessage.trim() || isLoading) return;

    // Lägg till användarens meddelande
    const userMessage = {
      id: Date.now(),
      text: inputMessage,
      sender: 'user',
      timestamp: new Date(),
    };

    setMessages(prev => [...prev, userMessage]);
    setInputMessage('');
    setIsLoading(true);

    // Lägg till skriv-indikator
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
      
      // Ta bort skriv-indikator och lägg till faktiskt svar
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
      // Ta bort skriv-indikator och visa felmeddelande
      setMessages(prev => {
        const filtered = prev.filter(msg => !msg.isTyping);
        const errorResponse = {
          id: Date.now() + 1,
          text: "Ursäkta, jag har problem med anslutningen just nu. Var god försök igen senare.",
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
      {/* Chat-knapp */}
      {!isOpen && (
        <button className="chatbot-toggle-btn" onClick={toggleChat}>
          <Bot size={24} />
        </button>
      )}

      {/* Chat-fönster */}
      {isOpen && (
        <div className="chatbot-window">
          {/* Header */}
          <div className="chatbot-header">
            <div className="chatbot-title">
              <Bot size={20} />
              <span>Global Worker Assistans</span>
            </div>
            <button className="close-btn" onClick={toggleChat}>
              <X size={18} />
            </button>
          </div>

          {/* Meddelanden */}
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
                      {message.timestamp.toLocaleTimeString('sv-SE', { 
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

          {/* Inmatning */}
          <form className="chatbot-input-form" onSubmit={handleSendMessage}>
            <input
              type="text"
              value={inputMessage}
              onChange={(e) => setInputMessage(e.target.value)}
              onKeyPress={handleKeyPress}
              placeholder="Skriv ditt meddelande..."
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