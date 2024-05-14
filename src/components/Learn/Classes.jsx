import React from "react";

const Classes = () => {
  return (
    <div>
      {/* Ongoing Classes */}
      <div className="mt-5">
        <p className="font-[500] text-[18px] text-black">Ongoing Classes</p>
        <div className="border rounded-[15px] p-2 flex space-x-4">
          <div className="w-full h-[296px] bg-[#2F2E2E] rounded-[15px]">
            <img
              src="https://s3-alpha-sig.figma.com/img/9f2a/7a70/74287c730a74f94f4222a6130f0bc284?Expires=1716768000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=ocBe7UeTr-s7QDHZRFqIsPYwFxNmDMKyuIMlykq1JHoNE-zMrcSuINpNagT6t2gT1GIrP4WXYiMZ8sdXEDMd5GcIxef18a1cZeXRDgNfoamURzKorTsXQOW86dziuMFSmI42sX5lUh4vm5YZSqIewd~G4rWUTUszfAo87PurZ5GoD-oMs6yMSyvgWBxu5esfFaPl3vpLDOymoF9zsEcxCI-hIWB3Dd9bBd2dVYYF58M08HetCDpSxpXHYYKrfar82tZiFkv1NHN4qt9oABW3N-xwUr3u33FUqBy4QOliV5HNbyIV8c851CofW6etBgKXktjPjfsoc83JLTl8NtCOYg__"
              alt="learning_pic"
              className="w-[300px] h-[296px] rounded-[15px]"
            />
          </div>

          <div className="w-full flex flex-col">
            <div>
              <p className="text-right text-[14px] text-black">8:47 AM</p>
              <p className="text-black text-[28px]">CSC 323</p>
              <p className="text-black text-[18px]">Compiler Construction II</p>
              <p className="text-black text-[16px]">Dr. John Doe</p>
              <p className="text-black text-[14px] mt-5">Start time: 9:00 AM</p>
              <p className="text-black text-[14px]">
                Expected duration: 2 hours
              </p>
            </div>

            <div className="flex-1 flex items-end">
              <button className="bg-[#054ACF] text-center text-white text-[14px] w-[200px] h-[35px] rounded-[15px]">
                Mark Attendence
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Recent Classes */}
      <div className="mt-5">
        <p className="font-[500] text-[18px] text-black">Recent Classes</p>
        <div className="border rounded-[15px] p-2 flex space-x-4">
          <div className="w-full h-[296px] bg-[#2F2E2E] rounded-[15px]">
            <img
              src="https://s3-alpha-sig.figma.com/img/9e31/21f4/4c1caccdb2f89dd793d5d87218ccabd4?Expires=1716768000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=Raai513mCS0pBY-xmjAH5ZfgidwgqfsotkgU7l3Kwl26cjgXZcrVlapTMyOoGO9Ky~bxWEhVC3rwL5KxCsBRAGZbkxul52qcEcgrAETZ7BT3wLKZMpT~3IiFmYEarEQ5OqukhtJo5oEEp7z~XEywN5niNbE~P7g1A1zq8XNZX~cRFQfQdqBqrJQvQgdgxczilQWAqESQgG~ZRGa63kIjW5bbBJFJmkpPd8M6nrNsoDfpdV75wbLce47X436v9mSreyJ9~J6tAN9xuwOp7wOWQt-jUjmS7nxTc4AIzUVxmpdOrNgWzzEhu2~cd2t74M8l8ZasfNj9GDOHr5CjxglRAA__"
              alt="learning_pic"
              className="w-[300px] h-[296px] rounded-[15px]"
            />
          </div>

          <div className="w-full flex flex-col">
            <div>
              <p className="text-right text-[14px] text-black">18th April</p>
              <p className="text-black text-[28px]">CSC 321</p>
              <p className="text-black text-[18px]">
                Algorithms and Complexity
              </p>
              <p className="text-black text-[16px]">Dr. John Doe</p>
              <p className="text-black text-[14px] mt-5">Start time: 9:00 AM</p>
              <p className="text-black text-[14px]">Duration: 2 hr 12mins</p>
            </div>

            <div className="flex-1 flex items-end">
              <button className="bg-[#054ACF] text-center text-white text-[14px] w-[200px] h-[35px] rounded-[15px]">
                Mark Attendence
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Classes;
