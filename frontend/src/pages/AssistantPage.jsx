import { useState } from "react";

import { sendMessage } from "../services/assistantService";

import MessageList from "../components/assistant/MessageList";
import TypingIndicator from "../components/assistant/TypingIndicator";

const AssistantPage = () => {

    const [messages, setMessages] = useState([]);

    const [input, setInput] = useState("");

    const [loading, setLoading] = useState(false);

    const handleSend = async () => {

        if (!input.trim()) return;

        const userMessage = {
            sender: "user",
            message: input,
        };

        setMessages((prev) => [...prev, userMessage]);

        const prompt = input;

        setInput("");

        setLoading(true);

        try {

            const response = await sendMessage(prompt);

            const aiMessage = {
                sender: "assistant",
                message: response.data.reply,
            };

            setMessages((prev) => [...prev, aiMessage]);

        } catch (error) {

            console.error(error);

            setMessages((prev) => [
                ...prev,
                {
                    sender: "assistant",
                    message: "Something went wrong.",
                },
            ]);

        } finally {

            setLoading(false);

        }

    };

    return (

        <div className="max-w-6xl mx-auto py-10 h-screen flex flex-col">

            <h1 className="text-4xl font-bold text-white mb-6">
                AI Career Assistant
            </h1>

            <div className="flex-1 overflow-y-auto bg-slate-900 rounded-xl p-6">

                <MessageList messages={messages} />

                {loading && <TypingIndicator />}

            </div>

            <div className="mt-5 flex gap-4">

                <textarea
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    placeholder="Ask anything..."
                    rows={3}
                    className="flex-1 bg-slate-800 text-white rounded-xl p-4 resize-none"
                />

                <button
                    onClick={handleSend}
                    disabled={loading}
                    className="bg-indigo-600 hover:bg-indigo-700 px-8 rounded-xl"
                >
                    Send
                </button>

            </div>

        </div>

    );

};

export default AssistantPage;