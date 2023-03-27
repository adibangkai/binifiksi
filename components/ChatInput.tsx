import { Send } from "react-feather";
export default function ChatInput() {
  return (
    <div className="bottom-0 absolute w-9/12 flex gap-2 bg-slate-200 p-2 items-center">
      <input
        type="text"
        placeholder="Type Here.."
        className="w-full rounded-sm p-2 bg-slate-100 border-2 border-zinc-300"
      />
      <Send
        size={30}
        className="text-slate-600 hover:text-zinc-400 cursor-pointer"
      />
    </div>
  );
}
