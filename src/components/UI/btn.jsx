/** @format */

function Button(props) {
  return (
    <div className="px-0">
      <button
        type="button"
        class="py-3 px-4  w-full   gap-x-2 text-base font-bold rounded-lg border border-transparent bg-blue-700 text-white hover:bg-blue-500 disabled:opacity-50 disabled:pointer-events-none"
      >
        {props.children}
      </button>
    </div>
  );
}

export default Button;
