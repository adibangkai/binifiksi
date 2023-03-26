import Chatbox from "@/components/Chatbox";
import ChatInput from "@/components/ChatInput";

export default async function HomePage() {
  return (
    <div className="p-5 static">
      <Chatbox />
      <ChatInput />
    </div>
  );
}
