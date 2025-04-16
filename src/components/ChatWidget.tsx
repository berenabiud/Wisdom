// import React, { useState } from 'react';
// import { MessageCircle, X, Send } from 'lucide-react';

// export function ChatWidget() {
//   const [isOpen, setIsOpen] = useState(false);
//   const [messages, setMessages] = useState<Array<{ text: string; isUser: boolean }>>([]);
//   const [input, setInput] = useState('');

//   const sendMessage = (e: React.FormEvent) => {
//     e.preventDefault();
//     if (!input.trim()) return;

//     setMessages([...messages, { text: input, isUser: true }]);
//     setInput('');

//     // Simulate response (replace with actual chat implementation)
//     setTimeout(() => {
//       setMessages(prev => [...prev, {
//         text: "Thank you for your message. Our team will respond shortly.",
//         isUser: false
//       }]);
//     }, 1000);
//   };

//   return (
//     <div className="fixed bottom-4 right-4 z-50">
//       {!isOpen ? (
//         <button
//           onClick={() => setIsOpen(true)}
//           className="bg-blue-600 text-white rounded-full p-4 shadow-lg hover:bg-blue-700"
//         >
//           <MessageCircle className="h-6 w-6" />
//         </button>
//       ) : (
//         <div className="bg-white rounded-lg shadow-xl w-80">
//           <div className="p-4 bg-blue-600 text-white rounded-t-lg flex justify-between items-center">
//             <h3 className="font-medium">Chat with us</h3>
//             <button
//               onClick={() => setIsOpen(false)}
//               className="text-white hover:text-gray-200"
//             >
//               <X className="h-5 w-5" />
//             </button>
//           </div>

//           <div className="h-96 p-4 overflow-y-auto">
//             {messages.map((message, index) => (
//               <div
//                 key={index}
//                 className={`mb-4 ${
//                   message.isUser ? 'text-right' : 'text-left'
//                 }`}
//               >
//                 <div
//                   className={`inline-block p-3 rounded-lg ${
//                     message.isUser
//                       ? 'bg-blue-600 text-white'
//                       : 'bg-gray-100 text-gray-800'
//                   }`}
//                 >
//                   {message.text}
//                 </div>
//               </div>
//             ))}
//           </div>

//           <form onSubmit={sendMessage} className="p-4 border-t">
//             <div className="flex space-x-2">
//               <input
//                 type="text"
//                 value={input}
//                 onChange={(e) => setInput(e.target.value)}
//                 placeholder="Type your message..."
//                 className="flex-1 rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
//               />
//               <button
//                 type="submit"
//                 className="bg-blue-600 text-white rounded-md px-4 py-2 hover:bg-blue-700"
//               >
//                 <Send className="h-5 w-5" />
//               </button>
//             </div>
//           </form>
//         </div>
//       )}
//     </div>
//   );
// }


// import React, { useState } from 'react';
// import { MessageCircle, X, Send, Bot } from 'lucide-react';
// import { motion, AnimatePresence } from 'framer-motion';

// export function ChatWidget() {
//   const [isOpen, setIsOpen] = useState(false);
//   const [messages, setMessages] = useState<Array<{ content: React.ReactNode; isUser: boolean }>>([]);
//   const [input, setInput] = useState('');
//   const [isTyping, setIsTyping] = useState(false);

//   const sendMessage = (e: React.FormEvent) => {
//     e.preventDefault();
//     if (!input.trim()) return;

//     // Add user message
//     setMessages(prev => [...prev, { content: input, isUser: true }]);
    
//     // Generate WhatsApp URL
//     const whatsappNumber = '254728732301'; // Replace with your WhatsApp business number in international format
//     const encodedMessage = encodeURIComponent(input);
//     const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodedMessage}`;

//     // Simulate bot response with WhatsApp link
//     setIsTyping(true);
//     setTimeout(() => {
//       setMessages(prev => [...prev, {
//         content: (
//           <span>
//             Thank you for your message. Please continue the conversation on{' '}
//             <a
//               href={whatsappUrl}
//               target="_blank"
//               rel="noopener noreferrer"
//               className="text-[#1EB053] underline hover:text-[#169544]"
//             >
//               WhatsApp
//             </a>
//             .
//           </span>
//         ),
//         isUser: false
//       }]);
//       setIsTyping(false);
//     }, 1500);

//     setInput('');
//   };

//   return (
//     <div className="fixed bottom-6 right-6 z-50">
//       <AnimatePresence>
//         {!isOpen ? (
//           <motion.button
//             initial={{ scale: 0 }}
//             animate={{ scale: 1 }}
//             exit={{ scale: 0 }}
//             onClick={() => setIsOpen(true)}
//             className="bg-[#1EB053] text-white rounded-full p-4 shadow-lg hover:bg-[#169544] transition-all"
//           >
//             <MessageCircle className="h-6 w-6" />
//           </motion.button>
//         ) : (
//           <motion.div
//             initial={{ opacity: 0, y: 20 }}
//             animate={{ opacity: 1, y: 0 }}
//             exit={{ opacity: 0, y: 20 }}
//             className="bg-white rounded-2xl shadow-xl w-96 overflow-hidden"
//           >
//             <div className="p-4 bg-[#1EB053] text-white flex justify-between items-center">
//               <div className="flex items-center gap-2">
//                 <Bot className="h-5 w-5" />
//                 <h3 className="font-semibold">Dental Care Support</h3>
//               </div>
//               <button
//                 onClick={() => setIsOpen(false)}
//                 className="hover:text-[#F9D77E] transition-colors"
//               >
//                 <X className="h-5 w-5" />
//               </button>
//             </div>

//             <div className="h-96 p-4 bg-[#F9D77E]/10 overflow-y-auto">
//               <div className="space-y-4">
//                 {messages.map((message, index) => (
//                   <motion.div
//                     key={index}
//                     initial={{ opacity: 0, y: 10 }}
//                     animate={{ opacity: 1, y: 0 }}
//                     className={`flex ${message.isUser ? 'justify-end' : 'justify-start'}`}
//                   >
//                     <div
//                       className={`max-w-[80%] p-3 rounded-2xl ${
//                         message.isUser
//                           ? 'bg-[#1EB053] text-white'
//                           : 'bg-white text-gray-800 shadow-md'
//                       }`}
//                     >
//                       {message.content}
//                     </div>
//                   </motion.div>
//                 ))}
                
//                 {isTyping && (
//                   <div className="flex items-center gap-2 text-gray-500">
//                     <div className="flex space-x-1">
//                       <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"></div>
//                       <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce delay-100"></div>
//                       <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce delay-200"></div>
//                     </div>
//                     <span className="text-sm">Typing...</span>
//                   </div>
//                 )}
//               </div>
//             </div>

//             <form onSubmit={sendMessage} className="p-4 border-t">
//               <div className="flex gap-2">
//                 <input
//                   type="text"
//                   value={input}
//                   onChange={(e) => setInput(e.target.value)}
//                   placeholder="Type your message..."
//                   className="flex-1 rounded-xl border border-[#F9D77E] focus:border-[#1EB053] focus:ring-2 focus:ring-[#1EB053]/20 px-4 py-2"
//                 />
//                 <motion.button
//                   type="submit"
//                   whileHover={{ scale: 1.05 }}
//                   whileTap={{ scale: 0.95 }}
//                   className="bg-[#1EB053] text-white rounded-xl p-2 hover:bg-[#169544] transition-colors"
//                   disabled={!input.trim()}
//                 >
//                   <Send className="h-5 w-5" />
//                 </motion.button>
//               </div>
//             </form>
//           </motion.div>
//         )}
//       </AnimatePresence>
//     </div>
//   );
// }


import React, { useState, FormEvent } from 'react';
import { MessageCircle, X, Send, Bot } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

// Define a type for our message objects
type Message = {
  content: React.ReactNode;
  isUser: boolean;
};

// Chat header component
const ChatHeader: React.FC<{ onClose: () => void }> = ({ onClose }) => (
  <div className="p-4 bg-[#1EB053] text-white flex justify-between items-center">
    <div className="flex items-center gap-2">
      <Bot className="h-5 w-5" />
      <h3 className="font-semibold">Dental Care Support</h3>
    </div>
    <button
      onClick={onClose}
      aria-label="Close chat"
      className="hover:text-[#F9D77E] transition-colors"
    >
      <X className="h-5 w-5" />
    </button>
  </div>
);

// Chat messages component with accessibility enhancements
const ChatMessages: React.FC<{ messages: Message[]; isTyping: boolean }> = ({
  messages,
  isTyping,
}) => (
  <div className="h-96 p-4 bg-[#F9D77E]/10 overflow-y-auto" aria-live="polite">
    <div className="space-y-4">
      {messages.map((message, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          className={`flex ${message.isUser ? 'justify-end' : 'justify-start'}`}
        >
          <div
            className={`max-w-[80%] p-3 rounded-2xl ${
              message.isUser
                ? 'bg-[#1EB053] text-white'
                : 'bg-white text-gray-800 shadow-md'
            }`}
          >
            {message.content}
          </div>
        </motion.div>
      ))}
      {isTyping && (
        <div className="flex items-center gap-2 text-gray-500">
          <div className="flex space-x-1">
            <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"></div>
            <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce delay-100"></div>
            <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce delay-200"></div>
          </div>
          <span className="text-sm">Typing...</span>
        </div>
      )}
    </div>
  </div>
);

// Chat input component for sending messages
const ChatInput: React.FC<{
  input: string;
  onChange: (value: string) => void;
  onSend: (e: FormEvent) => void;
}> = ({ input, onChange, onSend }) => (
  <form onSubmit={onSend} className="p-4 border-t">
    <div className="flex gap-2">
      <input
        type="text"
        value={input}
        onChange={(e) => onChange(e.target.value)}
        placeholder="Type your message..."
        aria-label="Type your message"
        className="flex-1 rounded-xl border border-[#F9D77E] focus:border-[#1EB053] focus:ring-2 focus:ring-[#1EB053]/20 px-4 py-2"
      />
      <motion.button
        type="submit"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className="bg-[#1EB053] text-white rounded-xl p-2 hover:bg-[#169544] transition-colors"
        disabled={!input.trim()}
        aria-label="Send message"
      >
        <Send className="h-5 w-5" />
      </motion.button>
    </div>
  </form>
);

// Function to generate a response based on the user input
const generateBotResponse = (input: string): React.ReactNode => {
  const lowerInput = input.toLowerCase();
  if (lowerInput.includes('appointment')) {
    return 'Would you like to schedule an appointment? Please provide your preferred date and time.';
  } else if (lowerInput.includes('pricing')) {
    return 'Our pricing varies based on the service. Could you please specify the service you are interested in?';
  } else if (lowerInput.includes('emergency')) {
    return 'If this is a dental emergency, please call our emergency line immediately.';
  } else {
    // Default response: Forward to WhatsApp for further conversation.
    const whatsappNumber = '254728732301'; // Replace with your WhatsApp business number
    const encodedMessage = encodeURIComponent(input);
    const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodedMessage}`;
    return (
      <span>
        Thank you for your message. Please continue the conversation on{' '}
        <a
          href={whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="text-[#1EB053] underline hover:text-[#169544]"
        >
          WhatsApp
        </a>
        .
      </span>
    );
  }
};

// Main ChatWidget component
export function ChatWidget() {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState<string>('');
  const [isTyping, setIsTyping] = useState<boolean>(false);

  const handleSendMessage = (e: FormEvent) => {
    e.preventDefault();
    if (!input.trim()) return;

    // Add the user's message to state
    const userMessage: Message = { content: input, isUser: true };
    setMessages((prev) => [...prev, userMessage]);

    // Simulate a typing delay for a more natural experience
    setIsTyping(true);
    setTimeout(() => {
      const botReply = generateBotResponse(input);
      const botMessage: Message = { content: botReply, isUser: false };
      setMessages((prev) => [...prev, botMessage]);
      setIsTyping(false);
    }, 1500);

    // Clear the input field after sending the message
    setInput('');
  };

  return (
    <div className="fixed bottom-6 right-6 z-50">
      <AnimatePresence>
        {!isOpen ? (
          <motion.button
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            exit={{ scale: 0 }}
            onClick={() => setIsOpen(true)}
            aria-label="Open chat"
            className="bg-[#1EB053] text-white rounded-full p-4 shadow-lg hover:bg-[#169544] transition-all"
          >
            <MessageCircle className="h-6 w-6" />
          </motion.button>
        ) : (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            className="bg-white rounded-2xl shadow-xl w-96 overflow-hidden"
          >
            <ChatHeader onClose={() => setIsOpen(false)} />
            <ChatMessages messages={messages} isTyping={isTyping} />
            <ChatInput input={input} onChange={setInput} onSend={handleSendMessage} />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
