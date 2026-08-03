import React, { useEffect, useRef, useState } from "react";
import axios from "axios";
import socket from "../../socket";
const Supportchat = () => {
  const ROOT_URL = import.meta.env.VITE_LOCALHOST_URL;

  const userId = sessionStorage.getItem("userid");

  const [conversationId, setConversationId] = useState("");

  const [messages, setMessages] = useState([]);

  const [message, setMessage] = useState("");

  const [loading, setLoading] = useState(true);

  const messagesEndRef = useRef(null);
  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({
      behavior: "smooth",
    });
  };
 useEffect(() => {
  if (userId) {
    // console.log("Joining socket room with userId:", userId); // Debugging line
    console.log(socket);
    socket.emit("join", userId);
  }
}, [userId]);
  const startConversation = async () => {
    try {
      const res = await axios.post(`${ROOT_URL}/api/chat/start`, {
        studentId: userId,
      });

      setConversationId(res.data.conversation._id);
    } catch (error) {
      console.log(error);
    }
  };
  const getMessages = async (id) => {
    try {
      const res = await axios.get(`${ROOT_URL}/api/chat/messages/${id}`);
        console.log("Messages fetched:", res.data.data); // Debugging line
      setMessages(res.data.data);

      setLoading(false);
    } catch (error) {
      console.log(error);

      setLoading(false);
    }
  };
  const markSeen = async (id) => {
  try {
    await axios.put(
      `${ROOT_URL}/api/chat/seen/${id}`,
      {
        senderType: "student",
      }
    );
  } catch (error) {
    console.log(error);
  }
};
  useEffect(() => {
    startConversation();
  }, []);
  useEffect(() => {
    if (conversationId) {
        console.log("Conversation ID:", conversationId); // Debugging line
      getMessages(conversationId);
        markSeen(conversationId);
    }
  }, [conversationId]);
  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  useEffect(() => {
  const handleNewMessage = (newMessage) => {
    if (String(newMessage.conversationId) === String(conversationId)) {
      setMessages((prev) => [...prev, newMessage]);
    }
  };

  socket.on("newMessage", handleNewMessage);

  return () => {
    socket.off("newMessage", handleNewMessage);
  };
}, [conversationId]);
  const handleSend = async () => {
    if (!message.trim()) return;
    try {
      const res = await axios.post(`${ROOT_URL}/api/chat/send`, {
        conversationId,
        senderId: userId,
        senderType: "student",
        message,
      });
    setMessage("");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="container py-4">
      <div
        className="card shadow"
        style={{
          maxWidth: "700px",
          margin: "auto",
        }}
      >
        <div className="card-header bg-primary text-white">
          <h5 className="mb-0">Support Chat</h5>
        </div>

        <div
          className="card-body"
          style={{
            height: "500px",
            overflowY: "auto",
            background: "#f8f9fa",
          }}
        >
        {!loading && messages.length===0 && (

<div className="text-center mt-5 text-muted">

Start a conversation with Support 👋

</div>

)}
          {loading ? (
            <div className="text-center mt-5">Loading...</div>
          ) : (
            messages.map((msg) => (
              <div
                key={msg._id}
                className={`d-flex mb-3 ${
                  msg.senderType === "student"
                    ? "justify-content-end"
                    : "justify-content-start"
                }`}
              >
                <div style={{ maxWidth: "75%" }}>
                <div
          className={`small mb-1 fw-semibold ${
            msg.senderType === "student"
              ? "text-end text-primary"
              : "text-start text-success"
          }`}
        >
          {msg.senderType === "student"
            ? "You"
            : "Admin"}
        </div>
                  <div
                    className={`p-3 rounded ${
                      msg.senderType === "student"
                        ? "bg-primary text-white"
                        : "bg-white border"
                    }`}
                  >
                    {msg.message}
                  </div>

                  <small className="text-muted">
                    {new Date(msg.createdAt).toLocaleString()}
                  </small>
                </div>
              </div>
            ))
          )}
           <div ref={messagesEndRef}></div>
        </div>
       

        <div className="card-footer">
          <div className="input-group">
            <input
              type="text"
              className="form-control"
              placeholder="Type your message..."
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              onKeyDown={(e) => {
                if (e.key === "Enter") {
                  handleSend();
                }
              }}
            />

            <button className="btn btn-primary" onClick={handleSend}>
              Send
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Supportchat;
