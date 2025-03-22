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


import React, { useState } from 'react';
import { MessageCircle, X, Send, Bot } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export function ChatWidget() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Array<{ text: string; isUser: boolean }>>([]);
  const [input, setInput] = useState('');
  const [isTyping, setIsTyping] = useState(false);

  const sendMessage = (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim()) return;

    setMessages([...messages, { text: input, isUser: true }]);
    setInput('');
    
    // Simulate bot response
    setIsTyping(true);
    setTimeout(() => {
      setMessages(prev => [...prev, {
        text: "Thank you for your message. Our dental team will respond shortly.",
        isUser: false
      }]);
      setIsTyping(false);
    }, 1500);
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
            <div className="p-4 bg-[#1EB053] text-white flex justify-between items-center">
              <div className="flex items-center gap-2">
                <Bot className="h-5 w-5" />
                <h3 className="font-semibold">Dental Care Support</h3>
              </div>
              <button
                onClick={() => setIsOpen(false)}
                className="hover:text-[#F9D77E] transition-colors"
              >
                <X className="h-5 w-5" />
              </button>
            </div>

            <div className="h-96 p-4 bg-[#F9D77E]/10 overflow-y-auto">
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
                      {message.text}
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

            <form onSubmit={sendMessage} className="p-4 border-t">
              <div className="flex gap-2">
                <input
                  type="text"
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  placeholder="Type your message..."
                  className="flex-1 rounded-xl border border-[#F9D77E] focus:border-[#1EB053] focus:ring-2 focus:ring-[#1EB053]/20 px-4 py-2"
                />
                <motion.button
                  type="submit"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-[#1EB053] text-white rounded-xl p-2 hover:bg-[#169544] transition-colors"
                  disabled={!input.trim()}
                >
                  <Send className="h-5 w-5" />
                </motion.button>
              </div>
            </form>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}