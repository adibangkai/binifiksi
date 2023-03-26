export default function Chatbox() {
  return (
    <div className="grid gap-3 overflow-auto max-h-screen">
      <div className="justify-self-start">
        <div className="in w-fit max-w-lg text-justify bg-slate-400 text-white p-4 rounded-xl rounded-tl-none">
          hello im bocchi ur fav wifu, Lorem, ipsum dolor sit amet consectetur
          adipisicing elit. In quod excepturi eveniet. Maxime magnam sunt alias
          saepe provident consequatur, in totam fuga soluta laudantium fugiat
          autem reiciendis quos nihil repudiandae!
        </div>
        <div className="time ml-2 text-slate-400 font-extralight text-sm">
          4.21 AM
        </div>
      </div>
      <div className="justify-self-end">
        <div className="out w-fit max-w-lg text-justify bg-sky-900 text-white p-4 rounded-xl rounded-tr-none ">
          hello im bocchi ur fav wifu
        </div>
        <div className="time mr-2 text-slate-400 font-extralight text-sm text-right">
          4.21 AM
        </div>
      </div>
    </div>
  );
}
