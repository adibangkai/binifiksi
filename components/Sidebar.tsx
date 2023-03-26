export default function Sidebar() {
  return (
    <div className="bg-sky-800 w-3/12 text-white">
      <div className="my-4 mx-auto w-full grid justify-center relative">
        <div className="flex relative">
          <img
            src="https://gaminguardian.com/wp-content/uploads/2022/11/Bocchi-the-rock.png"
            alt="BINI FIKSINYA UCHAN"
            className="object-cover w-[200px] h-[200px] rounded-full"
          />
          <div className="w-6 h-6 rounded-full bg-emerald-400 top-8 absolute right-2 z-40"></div>
        </div>

        <div className="text-3xl font-extralight text-center">
          Bocchi Ruslan
        </div>
        <div className="text-sm font-extralight text-center">status 🎃</div>
      </div>
      <ul className=" absolute bottom-10 px-4">
        <li>Api Key</li>
        <li>Setting</li>
      </ul>
    </div>
  );
}
