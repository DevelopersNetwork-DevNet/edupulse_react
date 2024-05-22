import React from "react";

const Resourses = () => {
  return (
    <div>
      {/* Recent Resources */}
      <div className="mt-5">
        <h1 className="text-black font-[500] text-[18px] mb-3">Recents</h1>
        <div className="border rounded-[15px] p-2 flex flex-col">
          <div className="flex justify-between">
            <div className="bg-[#054ACF] rounded-[15px] w-[35px] h-[35px] flex justify-center items-center">
              <svg
                width="15"
                height="19"
                viewBox="0 0 15 19"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M2.5 0.94519C1.12109 0.94519 0 1.95417 0 3.19519V16.6952C0 17.9362 1.12109 18.9452 2.5 18.9452H12.5C13.8789 18.9452 15 17.9362 15 16.6952V6.57019H10C9.30859 6.57019 8.75 6.06746 8.75 5.44519V0.94519H2.5ZM10 0.94519V5.44519H15L10 0.94519ZM4.375 9.94519H10.625C10.9688 9.94519 11.25 10.1983 11.25 10.5077C11.25 10.8171 10.9688 11.0702 10.625 11.0702H4.375C4.03125 11.0702 3.75 10.8171 3.75 10.5077C3.75 10.1983 4.03125 9.94519 4.375 9.94519ZM4.375 12.1952H10.625C10.9688 12.1952 11.25 12.4483 11.25 12.7577C11.25 13.0671 10.9688 13.3202 10.625 13.3202H4.375C4.03125 13.3202 3.75 13.0671 3.75 12.7577C3.75 12.4483 4.03125 12.1952 4.375 12.1952ZM4.375 14.4452H10.625C10.9688 14.4452 11.25 14.6983 11.25 15.0077C11.25 15.3171 10.9688 15.5702 10.625 15.5702H4.375C4.03125 15.5702 3.75 15.3171 3.75 15.0077C3.75 14.6983 4.03125 14.4452 4.375 14.4452Z"
                  fill="white"
                />
              </svg>
            </div>
            <span className="text-sm">9:32 AM</span>
          </div>
          <div>
            <p className="text-black text-[28px] mt-5">
              Note on CSC 321: Algorithm and Complexity.
            </p>
            <p className="text-black text-[14px] mt-5">63 pages</p>
            <p className="text-black text-[14px]">1hr 41mins read</p>
          </div>

          <div className="flex space-x-4 mt-5">
            <div className="flex space-x-1 items-center">
              <svg
                width="15"
                height="15"
                viewBox="0 0 28 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M13.9976 0C10.0701 0 6.92527 1.97143 4.63588 4.31786C2.36108 6.64286 0.839684 9.42857 0.120302 11.3411C-0.0401007 11.7643 -0.0401007 12.2357 0.120302 12.6589C0.839684 14.5714 2.36108 17.3571 4.63588 19.6821C6.92527 22.0286 10.0701 24 13.9976 24C17.925 24 21.0699 22.0286 23.3593 19.6821C25.6341 17.3518 27.1555 14.5714 27.8797 12.6589C28.0401 12.2357 28.0401 11.7643 27.8797 11.3411C27.1555 9.42857 25.6341 6.64286 23.3593 4.31786C21.0699 1.97143 17.925 0 13.9976 0ZM6.99818 12C6.99818 9.95404 7.73561 7.99189 9.04825 6.54518C10.3609 5.09847 12.1412 4.28571 13.9976 4.28571C15.8539 4.28571 17.6342 5.09847 18.9469 6.54518C20.2595 7.99189 20.997 9.95404 20.997 12C20.997 14.046 20.2595 16.0081 18.9469 17.4548C17.6342 18.9015 15.8539 19.7143 13.9976 19.7143C12.1412 19.7143 10.3609 18.9015 9.04825 17.4548C7.73561 16.0081 6.99818 14.046 6.99818 12ZM13.9976 8.57143C13.9976 10.4625 12.6026 12 10.8867 12C10.5416 12 10.2111 11.9357 9.90001 11.8232C9.63267 11.7268 9.32159 11.9089 9.33131 12.2196C9.34589 12.5893 9.3945 12.9589 9.48685 13.3286C10.1528 16.0714 12.7143 17.7 15.203 16.9661C17.6917 16.2321 19.1693 13.4089 18.5034 10.6661C17.9639 8.44286 16.18 6.94821 14.1969 6.85714C13.9149 6.84643 13.7497 7.18393 13.8372 7.48393C13.9392 7.82679 13.9976 8.19107 13.9976 8.57143Z"
                  fill="black"
                />
              </svg>
              <span className="text-sm">317</span>
            </div>
            <div className="flex space-x-1 items-center">
              <svg
                width="15"
                height="15"
                viewBox="0 0 29 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M12.5667 23.9475C13.1104 24.1545 13.6944 23.7241 13.6944 23.1029V2.53914C13.6944 2.31029 13.6139 2.08144 13.4427 1.93977C12.4559 1.08976 10.1903 0 7.25 0C4.70747 0 2.33108 0.72469 0.911285 1.31316C0.342361 1.55291 0 2.16317 0 2.82248V22.9994C0 23.6478 0.644444 24.1 1.21337 23.8984C2.79931 23.3263 5.31163 22.667 7.25 22.667C8.95677 22.667 11.2274 23.4298 12.5667 23.9475ZM16.4333 23.9475C17.7726 23.4298 20.0432 22.667 21.75 22.667C23.6884 22.667 26.2007 23.3263 27.7866 23.8984C28.3556 24.1055 29 23.6478 29 22.9994V2.82248C29 2.16317 28.6576 1.55291 28.0887 1.31861C26.6689 0.72469 24.2925 0 21.75 0C18.8097 0 16.5441 1.08976 15.5573 1.93977C15.3911 2.08144 15.3056 2.31029 15.3056 2.53914V23.1029C15.3056 23.7241 15.8946 24.1545 16.4333 23.9475Z"
                  fill="black"
                />
              </svg>
              <span>177</span>
            </div>
            <div className="flex space-x-1 items-center">
              <svg
                width="15"
                height="15"
                viewBox="0 0 28 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M2.60312 14.1555L12.4852 23.4025C12.8953 23.7862 13.4367 24 14 24C14.5633 24 15.1047 23.7862 15.5148 23.4025L25.3969 14.1555C27.0594 12.6043 28 10.4282 28 8.15344V7.83553C28 4.00407 25.2383 0.737191 21.4703 0.106837C18.9766 -0.309745 16.4391 0.506975 14.6562 2.29389L14 2.95165L13.3438 2.29389C11.5609 0.506975 9.02344 -0.309745 6.52969 0.106837C2.76172 0.737191 0 4.00407 0 7.83553V8.15344C0 10.4282 0.940625 12.6043 2.60312 14.1555Z"
                  fill="#FF8A00"
                />
              </svg>
              <span>136</span>
            </div>
            <div className="flex space-x-1 items-center">
              <svg
                width="15"
                height="15"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M3 0C1.34531 0 0 1.34537 0 3.00013V16.5007C0 18.1555 1.34531 19.5008 3 19.5008H7.5V23.251C7.5 23.537 7.65938 23.7948 7.9125 23.9213C8.16563 24.0479 8.47031 24.0198 8.7 23.851L14.4984 19.5008H21C22.6547 19.5008 24 18.1555 24 16.5007V3.00013C24 1.34537 22.6547 0 21 0H3Z"
                  fill="black"
                />
              </svg>
              <span>11</span>
            </div>
            <div className="flex space-x-1 items-center">
              <svg
                width="15"
                height="15"
                viewBox="0 0 20 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M0 2.25V22.8609C0 23.4891 0.567708 24 1.26562 24C1.52604 24 1.78125 23.9297 1.99479 23.7938L10 18.75L18.0052 23.7938C18.2188 23.9297 18.474 24 18.7344 24C19.4323 24 20 23.4891 20 22.8609V2.25C20 1.00781 18.8802 0 17.5 0H2.5C1.11979 0 0 1.00781 0 2.25Z"
                  fill="#FF8A00"
                />
              </svg>
              <span>39</span>
            </div>
          </div>
        </div>
      </div>

      {/* All Resources */}
      <div className="flex flex-col space-y-3 mt-10">
        <div className="flex justify-between">
          <p className="text-black font-[500] text-[18px]">All resources</p>
          <p className="flex space-x-1 items-center">
            <span>Sort</span>
            <svg
              width="17"
              height="14"
              viewBox="0 0 17 14"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M0.586067 0.715625C0.792317 0.278125 1.22982 0 1.71419 0H15.2142C15.6986 0 16.1361 0.278125 16.3423 0.715625C16.5486 1.15313 16.4861 1.66875 16.1798 2.04375L10.4642 9.02812V13C10.4642 13.3781 10.2517 13.725 9.91107 13.8938C9.57044 14.0625 9.16732 14.0281 8.86419 13.8L6.86419 12.3C6.61107 12.1125 6.46419 11.8156 6.46419 11.5V9.02812L0.745442 2.04063C0.442317 1.66875 0.376692 1.15 0.586067 0.715625Z"
                fill="black"
              />
            </svg>
          </p>
        </div>

        <div className="border rounded-[15px] p-2 flex flex-col">
          <div className="flex justify-between">
            <div className="bg-[#054ACF] rounded-[15px] w-[35px] h-[35px] flex justify-center items-center">
              <svg
                width="15"
                height="19"
                viewBox="0 0 15 19"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M2.5 0.94519C1.12109 0.94519 0 1.95417 0 3.19519V16.6952C0 17.9362 1.12109 18.9452 2.5 18.9452H12.5C13.8789 18.9452 15 17.9362 15 16.6952V6.57019H10C9.30859 6.57019 8.75 6.06746 8.75 5.44519V0.94519H2.5ZM10 0.94519V5.44519H15L10 0.94519ZM4.375 9.94519H10.625C10.9688 9.94519 11.25 10.1983 11.25 10.5077C11.25 10.8171 10.9688 11.0702 10.625 11.0702H4.375C4.03125 11.0702 3.75 10.8171 3.75 10.5077C3.75 10.1983 4.03125 9.94519 4.375 9.94519ZM4.375 12.1952H10.625C10.9688 12.1952 11.25 12.4483 11.25 12.7577C11.25 13.0671 10.9688 13.3202 10.625 13.3202H4.375C4.03125 13.3202 3.75 13.0671 3.75 12.7577C3.75 12.4483 4.03125 12.1952 4.375 12.1952ZM4.375 14.4452H10.625C10.9688 14.4452 11.25 14.6983 11.25 15.0077C11.25 15.3171 10.9688 15.5702 10.625 15.5702H4.375C4.03125 15.5702 3.75 15.3171 3.75 15.0077C3.75 14.6983 4.03125 14.4452 4.375 14.4452Z"
                  fill="white"
                />
              </svg>
            </div>
            <span className="text-sm">9:32 AM</span>
          </div>
          <div>
            <p className="text-black text-[28px] mt-5">
              Note on CSC 321: Algorithm and Complexity.
            </p>
            <p className="text-black text-[14px] mt-5">63 pages</p>
            <p className="text-black text-[14px]">1hr 41mins read</p>
          </div>

          <div className="flex space-x-4 mt-5">
            <div className="flex space-x-1 items-center">
              <svg
                width="15"
                height="15"
                viewBox="0 0 28 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M13.9976 0C10.0701 0 6.92527 1.97143 4.63588 4.31786C2.36108 6.64286 0.839684 9.42857 0.120302 11.3411C-0.0401007 11.7643 -0.0401007 12.2357 0.120302 12.6589C0.839684 14.5714 2.36108 17.3571 4.63588 19.6821C6.92527 22.0286 10.0701 24 13.9976 24C17.925 24 21.0699 22.0286 23.3593 19.6821C25.6341 17.3518 27.1555 14.5714 27.8797 12.6589C28.0401 12.2357 28.0401 11.7643 27.8797 11.3411C27.1555 9.42857 25.6341 6.64286 23.3593 4.31786C21.0699 1.97143 17.925 0 13.9976 0ZM6.99818 12C6.99818 9.95404 7.73561 7.99189 9.04825 6.54518C10.3609 5.09847 12.1412 4.28571 13.9976 4.28571C15.8539 4.28571 17.6342 5.09847 18.9469 6.54518C20.2595 7.99189 20.997 9.95404 20.997 12C20.997 14.046 20.2595 16.0081 18.9469 17.4548C17.6342 18.9015 15.8539 19.7143 13.9976 19.7143C12.1412 19.7143 10.3609 18.9015 9.04825 17.4548C7.73561 16.0081 6.99818 14.046 6.99818 12ZM13.9976 8.57143C13.9976 10.4625 12.6026 12 10.8867 12C10.5416 12 10.2111 11.9357 9.90001 11.8232C9.63267 11.7268 9.32159 11.9089 9.33131 12.2196C9.34589 12.5893 9.3945 12.9589 9.48685 13.3286C10.1528 16.0714 12.7143 17.7 15.203 16.9661C17.6917 16.2321 19.1693 13.4089 18.5034 10.6661C17.9639 8.44286 16.18 6.94821 14.1969 6.85714C13.9149 6.84643 13.7497 7.18393 13.8372 7.48393C13.9392 7.82679 13.9976 8.19107 13.9976 8.57143Z"
                  fill="black"
                />
              </svg>
              <span className="text-sm">317</span>
            </div>
            <div className="flex space-x-1 items-center">
              <svg
                width="15"
                height="15"
                viewBox="0 0 29 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M12.5667 23.9475C13.1104 24.1545 13.6944 23.7241 13.6944 23.1029V2.53914C13.6944 2.31029 13.6139 2.08144 13.4427 1.93977C12.4559 1.08976 10.1903 0 7.25 0C4.70747 0 2.33108 0.72469 0.911285 1.31316C0.342361 1.55291 0 2.16317 0 2.82248V22.9994C0 23.6478 0.644444 24.1 1.21337 23.8984C2.79931 23.3263 5.31163 22.667 7.25 22.667C8.95677 22.667 11.2274 23.4298 12.5667 23.9475ZM16.4333 23.9475C17.7726 23.4298 20.0432 22.667 21.75 22.667C23.6884 22.667 26.2007 23.3263 27.7866 23.8984C28.3556 24.1055 29 23.6478 29 22.9994V2.82248C29 2.16317 28.6576 1.55291 28.0887 1.31861C26.6689 0.72469 24.2925 0 21.75 0C18.8097 0 16.5441 1.08976 15.5573 1.93977C15.3911 2.08144 15.3056 2.31029 15.3056 2.53914V23.1029C15.3056 23.7241 15.8946 24.1545 16.4333 23.9475Z"
                  fill="black"
                />
              </svg>
              <span>177</span>
            </div>
            <div className="flex space-x-1 items-center">
              <svg
                width="15"
                height="15"
                viewBox="0 0 28 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M2.60312 14.1555L12.4852 23.4025C12.8953 23.7862 13.4367 24 14 24C14.5633 24 15.1047 23.7862 15.5148 23.4025L25.3969 14.1555C27.0594 12.6043 28 10.4282 28 8.15344V7.83553C28 4.00407 25.2383 0.737191 21.4703 0.106837C18.9766 -0.309745 16.4391 0.506975 14.6562 2.29389L14 2.95165L13.3438 2.29389C11.5609 0.506975 9.02344 -0.309745 6.52969 0.106837C2.76172 0.737191 0 4.00407 0 7.83553V8.15344C0 10.4282 0.940625 12.6043 2.60312 14.1555Z"
                  fill="#FF8A00"
                />
              </svg>
              <span>136</span>
            </div>
            <div className="flex space-x-1 items-center">
              <svg
                width="15"
                height="15"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M3 0C1.34531 0 0 1.34537 0 3.00013V16.5007C0 18.1555 1.34531 19.5008 3 19.5008H7.5V23.251C7.5 23.537 7.65938 23.7948 7.9125 23.9213C8.16563 24.0479 8.47031 24.0198 8.7 23.851L14.4984 19.5008H21C22.6547 19.5008 24 18.1555 24 16.5007V3.00013C24 1.34537 22.6547 0 21 0H3Z"
                  fill="black"
                />
              </svg>
              <span>11</span>
            </div>
            <div className="flex space-x-1 items-center">
              <svg
                width="15"
                height="15"
                viewBox="0 0 20 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M0 2.25V22.8609C0 23.4891 0.567708 24 1.26562 24C1.52604 24 1.78125 23.9297 1.99479 23.7938L10 18.75L18.0052 23.7938C18.2188 23.9297 18.474 24 18.7344 24C19.4323 24 20 23.4891 20 22.8609V2.25C20 1.00781 18.8802 0 17.5 0H2.5C1.11979 0 0 1.00781 0 2.25Z"
                  fill="#FF8A00"
                />
              </svg>
              <span>39</span>
            </div>
          </div>
        </div>

        <div className="border rounded-[15px] p-2 flex flex-col">
          <div className="flex justify-between">
            <div className="bg-[#FF8A00] rounded-[15px] w-[35px] h-[35px] flex justify-center items-center">
              <svg
                width="18"
                height="17"
                viewBox="0 0 18 17"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M9.22074 1.88631C5.63413 1.88631 2.67627 4.70591 2.24358 8.34938C2.56134 8.21443 2.90614 8.13631 3.27122 8.13631C4.16703 8.13631 4.89382 8.8998 4.89382 9.84085V14.3863C4.89382 15.3274 4.16703 16.0909 3.27122 16.0909C1.77708 16.0909 0.566895 14.8195 0.566895 13.2499V12.6818V10.9772V9.27267C0.566895 4.25137 4.44084 0.181763 9.22074 0.181763C14.0006 0.181763 17.8746 4.25137 17.8746 9.27267V10.9772V12.6818V13.2499C17.8746 14.8195 16.6644 16.0909 15.1703 16.0909C14.2745 16.0909 13.5477 15.3274 13.5477 14.3863V9.84085C13.5477 8.8998 14.2745 8.13631 15.1703 8.13631C15.5353 8.13631 15.8801 8.21088 16.1979 8.34938C15.7652 4.70591 12.8074 1.88631 9.22074 1.88631Z"
                  fill="#090909"
                />
              </svg>
            </div>
            <span className="text-sm">21st April</span>
          </div>
          <div>
            <p className="text-black text-[28px] mt-5">
              Audiobook on CSC 321: Algorithm and Complexity.
            </p>
            <p className="text-black text-[14px] mt-5">Duration: 2hr</p>
          </div>

          <div className="flex space-x-4 mt-5">
            <div className="flex space-x-1 items-center">
              <svg
                width="15"
                height="15"
                viewBox="0 0 28 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M13.9976 0C10.0701 0 6.92527 1.97143 4.63588 4.31786C2.36108 6.64286 0.839684 9.42857 0.120302 11.3411C-0.0401007 11.7643 -0.0401007 12.2357 0.120302 12.6589C0.839684 14.5714 2.36108 17.3571 4.63588 19.6821C6.92527 22.0286 10.0701 24 13.9976 24C17.925 24 21.0699 22.0286 23.3593 19.6821C25.6341 17.3518 27.1555 14.5714 27.8797 12.6589C28.0401 12.2357 28.0401 11.7643 27.8797 11.3411C27.1555 9.42857 25.6341 6.64286 23.3593 4.31786C21.0699 1.97143 17.925 0 13.9976 0ZM6.99818 12C6.99818 9.95404 7.73561 7.99189 9.04825 6.54518C10.3609 5.09847 12.1412 4.28571 13.9976 4.28571C15.8539 4.28571 17.6342 5.09847 18.9469 6.54518C20.2595 7.99189 20.997 9.95404 20.997 12C20.997 14.046 20.2595 16.0081 18.9469 17.4548C17.6342 18.9015 15.8539 19.7143 13.9976 19.7143C12.1412 19.7143 10.3609 18.9015 9.04825 17.4548C7.73561 16.0081 6.99818 14.046 6.99818 12ZM13.9976 8.57143C13.9976 10.4625 12.6026 12 10.8867 12C10.5416 12 10.2111 11.9357 9.90001 11.8232C9.63267 11.7268 9.32159 11.9089 9.33131 12.2196C9.34589 12.5893 9.3945 12.9589 9.48685 13.3286C10.1528 16.0714 12.7143 17.7 15.203 16.9661C17.6917 16.2321 19.1693 13.4089 18.5034 10.6661C17.9639 8.44286 16.18 6.94821 14.1969 6.85714C13.9149 6.84643 13.7497 7.18393 13.8372 7.48393C13.9392 7.82679 13.9976 8.19107 13.9976 8.57143Z"
                  fill="black"
                />
              </svg>
              <span className="text-sm">317</span>
            </div>
            <div className="flex space-x-1 items-center">
              <svg
                width="15"
                height="15"
                viewBox="0 0 26 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M13 2.57143C7.61211 2.57143 3.16875 6.825 2.51875 12.3214C2.99609 12.1179 3.51406 12 4.0625 12C5.4082 12 6.5 13.1518 6.5 14.5714V21.4286C6.5 22.8482 5.4082 24 4.0625 24C1.81797 24 0 22.0821 0 19.7143V18.8571V16.2857V13.7143C0 6.13929 5.81953 0 13 0C20.1805 0 26 6.13929 26 13.7143V16.2857V18.8571V19.7143C26 22.0821 24.182 24 21.9375 24C20.5918 24 19.5 22.8482 19.5 21.4286V14.5714C19.5 13.1518 20.5918 12 21.9375 12C22.4859 12 23.0039 12.1125 23.4812 12.3214C22.8312 6.825 18.3879 2.57143 13 2.57143Z"
                  fill="#090909"
                />
              </svg>

              <span>177</span>
            </div>
            <div className="flex space-x-1 items-center">
              <svg
                width="15"
                height="15"
                viewBox="0 0 28 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M2.60312 14.1555L12.4852 23.4025C12.8953 23.7862 13.4367 24 14 24C14.5633 24 15.1047 23.7862 15.5148 23.4025L25.3969 14.1555C27.0594 12.6043 28 10.4282 28 8.15344V7.83553C28 4.00407 25.2383 0.737191 21.4703 0.106837C18.9766 -0.309745 16.4391 0.506975 14.6562 2.29389L14 2.95165L13.3438 2.29389C11.5609 0.506975 9.02344 -0.309745 6.52969 0.106837C2.76172 0.737191 0 4.00407 0 7.83553V8.15344C0 10.4282 0.940625 12.6043 2.60312 14.1555Z"
                  fill="#FF8A00"
                />
              </svg>
              <span>136</span>
            </div>
            <div className="flex space-x-1 items-center">
              <svg
                width="15"
                height="15"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M3 0C1.34531 0 0 1.34537 0 3.00013V16.5007C0 18.1555 1.34531 19.5008 3 19.5008H7.5V23.251C7.5 23.537 7.65938 23.7948 7.9125 23.9213C8.16563 24.0479 8.47031 24.0198 8.7 23.851L14.4984 19.5008H21C22.6547 19.5008 24 18.1555 24 16.5007V3.00013C24 1.34537 22.6547 0 21 0H3Z"
                  fill="black"
                />
              </svg>
              <span>11</span>
            </div>
            <div className="flex space-x-1 items-center">
              <svg
                width="15"
                height="15"
                viewBox="0 0 20 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M0 2.25V22.8609C0 23.4891 0.567708 24 1.26562 24C1.52604 24 1.78125 23.9297 1.99479 23.7938L10 18.75L18.0052 23.7938C18.2188 23.9297 18.474 24 18.7344 24C19.4323 24 20 23.4891 20 22.8609V2.25C20 1.00781 18.8802 0 17.5 0H2.5C1.11979 0 0 1.00781 0 2.25Z"
                  fill="#FF8A00"
                />
              </svg>
              <span>39</span>
            </div>
          </div>
        </div>

        <div className="border rounded-[15px] p-2 flex flex-col">
          <div className="flex justify-between">
            <div className="bg-[#054ACF] rounded-[15px] w-[35px] h-[35px] flex justify-center items-center">
              <svg
                width="15"
                height="19"
                viewBox="0 0 15 19"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M2.5 0.94519C1.12109 0.94519 0 1.95417 0 3.19519V16.6952C0 17.9362 1.12109 18.9452 2.5 18.9452H12.5C13.8789 18.9452 15 17.9362 15 16.6952V6.57019H10C9.30859 6.57019 8.75 6.06746 8.75 5.44519V0.94519H2.5ZM10 0.94519V5.44519H15L10 0.94519ZM4.375 9.94519H10.625C10.9688 9.94519 11.25 10.1983 11.25 10.5077C11.25 10.8171 10.9688 11.0702 10.625 11.0702H4.375C4.03125 11.0702 3.75 10.8171 3.75 10.5077C3.75 10.1983 4.03125 9.94519 4.375 9.94519ZM4.375 12.1952H10.625C10.9688 12.1952 11.25 12.4483 11.25 12.7577C11.25 13.0671 10.9688 13.3202 10.625 13.3202H4.375C4.03125 13.3202 3.75 13.0671 3.75 12.7577C3.75 12.4483 4.03125 12.1952 4.375 12.1952ZM4.375 14.4452H10.625C10.9688 14.4452 11.25 14.6983 11.25 15.0077C11.25 15.3171 10.9688 15.5702 10.625 15.5702H4.375C4.03125 15.5702 3.75 15.3171 3.75 15.0077C3.75 14.6983 4.03125 14.4452 4.375 14.4452Z"
                  fill="white"
                />
              </svg>
            </div>
            <span className="text-sm">9:32 AM</span>
          </div>
          <div>
            <p className="text-black text-[28px] mt-5">
              Note on CSC 321: Algorithm and Complexity.
            </p>
            <p className="text-black text-[14px] mt-5">63 pages</p>
            <p className="text-black text-[14px]">1hr 41mins read</p>
          </div>

          <div className="flex space-x-4 mt-5">
            <div className="flex space-x-1 items-center">
              <svg
                width="15"
                height="15"
                viewBox="0 0 28 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M13.9976 0C10.0701 0 6.92527 1.97143 4.63588 4.31786C2.36108 6.64286 0.839684 9.42857 0.120302 11.3411C-0.0401007 11.7643 -0.0401007 12.2357 0.120302 12.6589C0.839684 14.5714 2.36108 17.3571 4.63588 19.6821C6.92527 22.0286 10.0701 24 13.9976 24C17.925 24 21.0699 22.0286 23.3593 19.6821C25.6341 17.3518 27.1555 14.5714 27.8797 12.6589C28.0401 12.2357 28.0401 11.7643 27.8797 11.3411C27.1555 9.42857 25.6341 6.64286 23.3593 4.31786C21.0699 1.97143 17.925 0 13.9976 0ZM6.99818 12C6.99818 9.95404 7.73561 7.99189 9.04825 6.54518C10.3609 5.09847 12.1412 4.28571 13.9976 4.28571C15.8539 4.28571 17.6342 5.09847 18.9469 6.54518C20.2595 7.99189 20.997 9.95404 20.997 12C20.997 14.046 20.2595 16.0081 18.9469 17.4548C17.6342 18.9015 15.8539 19.7143 13.9976 19.7143C12.1412 19.7143 10.3609 18.9015 9.04825 17.4548C7.73561 16.0081 6.99818 14.046 6.99818 12ZM13.9976 8.57143C13.9976 10.4625 12.6026 12 10.8867 12C10.5416 12 10.2111 11.9357 9.90001 11.8232C9.63267 11.7268 9.32159 11.9089 9.33131 12.2196C9.34589 12.5893 9.3945 12.9589 9.48685 13.3286C10.1528 16.0714 12.7143 17.7 15.203 16.9661C17.6917 16.2321 19.1693 13.4089 18.5034 10.6661C17.9639 8.44286 16.18 6.94821 14.1969 6.85714C13.9149 6.84643 13.7497 7.18393 13.8372 7.48393C13.9392 7.82679 13.9976 8.19107 13.9976 8.57143Z"
                  fill="black"
                />
              </svg>
              <span className="text-sm">317</span>
            </div>
            <div className="flex space-x-1 items-center">
              <svg
                width="15"
                height="15"
                viewBox="0 0 29 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M12.5667 23.9475C13.1104 24.1545 13.6944 23.7241 13.6944 23.1029V2.53914C13.6944 2.31029 13.6139 2.08144 13.4427 1.93977C12.4559 1.08976 10.1903 0 7.25 0C4.70747 0 2.33108 0.72469 0.911285 1.31316C0.342361 1.55291 0 2.16317 0 2.82248V22.9994C0 23.6478 0.644444 24.1 1.21337 23.8984C2.79931 23.3263 5.31163 22.667 7.25 22.667C8.95677 22.667 11.2274 23.4298 12.5667 23.9475ZM16.4333 23.9475C17.7726 23.4298 20.0432 22.667 21.75 22.667C23.6884 22.667 26.2007 23.3263 27.7866 23.8984C28.3556 24.1055 29 23.6478 29 22.9994V2.82248C29 2.16317 28.6576 1.55291 28.0887 1.31861C26.6689 0.72469 24.2925 0 21.75 0C18.8097 0 16.5441 1.08976 15.5573 1.93977C15.3911 2.08144 15.3056 2.31029 15.3056 2.53914V23.1029C15.3056 23.7241 15.8946 24.1545 16.4333 23.9475Z"
                  fill="black"
                />
              </svg>
              <span>177</span>
            </div>
            <div className="flex space-x-1 items-center">
              <svg
                width="15"
                height="15"
                viewBox="0 0 28 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M2.60312 14.1555L12.4852 23.4025C12.8953 23.7862 13.4367 24 14 24C14.5633 24 15.1047 23.7862 15.5148 23.4025L25.3969 14.1555C27.0594 12.6043 28 10.4282 28 8.15344V7.83553C28 4.00407 25.2383 0.737191 21.4703 0.106837C18.9766 -0.309745 16.4391 0.506975 14.6562 2.29389L14 2.95165L13.3438 2.29389C11.5609 0.506975 9.02344 -0.309745 6.52969 0.106837C2.76172 0.737191 0 4.00407 0 7.83553V8.15344C0 10.4282 0.940625 12.6043 2.60312 14.1555Z"
                  fill="#FF8A00"
                />
              </svg>
              <span>136</span>
            </div>
            <div className="flex space-x-1 items-center">
              <svg
                width="15"
                height="15"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M3 0C1.34531 0 0 1.34537 0 3.00013V16.5007C0 18.1555 1.34531 19.5008 3 19.5008H7.5V23.251C7.5 23.537 7.65938 23.7948 7.9125 23.9213C8.16563 24.0479 8.47031 24.0198 8.7 23.851L14.4984 19.5008H21C22.6547 19.5008 24 18.1555 24 16.5007V3.00013C24 1.34537 22.6547 0 21 0H3Z"
                  fill="black"
                />
              </svg>
              <span>11</span>
            </div>
            <div className="flex space-x-1 items-center">
              <svg
                width="15"
                height="15"
                viewBox="0 0 20 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M0 2.25V22.8609C0 23.4891 0.567708 24 1.26562 24C1.52604 24 1.78125 23.9297 1.99479 23.7938L10 18.75L18.0052 23.7938C18.2188 23.9297 18.474 24 18.7344 24C19.4323 24 20 23.4891 20 22.8609V2.25C20 1.00781 18.8802 0 17.5 0H2.5C1.11979 0 0 1.00781 0 2.25Z"
                  fill="#FF8A00"
                />
              </svg>
              <span>39</span>
            </div>
          </div>
        </div>

        <div className="border rounded-[15px] p-2 flex flex-col">
          <div className="flex justify-between">
            <div className="bg-[#054ACF] rounded-[15px] w-[35px] h-[35px] flex justify-center items-center">
              <svg
                width="15"
                height="19"
                viewBox="0 0 15 19"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M2.5 0.94519C1.12109 0.94519 0 1.95417 0 3.19519V16.6952C0 17.9362 1.12109 18.9452 2.5 18.9452H12.5C13.8789 18.9452 15 17.9362 15 16.6952V6.57019H10C9.30859 6.57019 8.75 6.06746 8.75 5.44519V0.94519H2.5ZM10 0.94519V5.44519H15L10 0.94519ZM4.375 9.94519H10.625C10.9688 9.94519 11.25 10.1983 11.25 10.5077C11.25 10.8171 10.9688 11.0702 10.625 11.0702H4.375C4.03125 11.0702 3.75 10.8171 3.75 10.5077C3.75 10.1983 4.03125 9.94519 4.375 9.94519ZM4.375 12.1952H10.625C10.9688 12.1952 11.25 12.4483 11.25 12.7577C11.25 13.0671 10.9688 13.3202 10.625 13.3202H4.375C4.03125 13.3202 3.75 13.0671 3.75 12.7577C3.75 12.4483 4.03125 12.1952 4.375 12.1952ZM4.375 14.4452H10.625C10.9688 14.4452 11.25 14.6983 11.25 15.0077C11.25 15.3171 10.9688 15.5702 10.625 15.5702H4.375C4.03125 15.5702 3.75 15.3171 3.75 15.0077C3.75 14.6983 4.03125 14.4452 4.375 14.4452Z"
                  fill="white"
                />
              </svg>
            </div>
            <span className="text-sm">9:32 AM</span>
          </div>
          <div>
            <p className="text-black text-[28px] mt-5">
              Note on CSC 321: Algorithm and Complexity.
            </p>
            <p className="text-black text-[14px] mt-5">63 pages</p>
            <p className="text-black text-[14px]">1hr 41mins read</p>
          </div>

          <div className="flex space-x-4 mt-5">
            <div className="flex space-x-1 items-center">
              <svg
                width="15"
                height="15"
                viewBox="0 0 28 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M13.9976 0C10.0701 0 6.92527 1.97143 4.63588 4.31786C2.36108 6.64286 0.839684 9.42857 0.120302 11.3411C-0.0401007 11.7643 -0.0401007 12.2357 0.120302 12.6589C0.839684 14.5714 2.36108 17.3571 4.63588 19.6821C6.92527 22.0286 10.0701 24 13.9976 24C17.925 24 21.0699 22.0286 23.3593 19.6821C25.6341 17.3518 27.1555 14.5714 27.8797 12.6589C28.0401 12.2357 28.0401 11.7643 27.8797 11.3411C27.1555 9.42857 25.6341 6.64286 23.3593 4.31786C21.0699 1.97143 17.925 0 13.9976 0ZM6.99818 12C6.99818 9.95404 7.73561 7.99189 9.04825 6.54518C10.3609 5.09847 12.1412 4.28571 13.9976 4.28571C15.8539 4.28571 17.6342 5.09847 18.9469 6.54518C20.2595 7.99189 20.997 9.95404 20.997 12C20.997 14.046 20.2595 16.0081 18.9469 17.4548C17.6342 18.9015 15.8539 19.7143 13.9976 19.7143C12.1412 19.7143 10.3609 18.9015 9.04825 17.4548C7.73561 16.0081 6.99818 14.046 6.99818 12ZM13.9976 8.57143C13.9976 10.4625 12.6026 12 10.8867 12C10.5416 12 10.2111 11.9357 9.90001 11.8232C9.63267 11.7268 9.32159 11.9089 9.33131 12.2196C9.34589 12.5893 9.3945 12.9589 9.48685 13.3286C10.1528 16.0714 12.7143 17.7 15.203 16.9661C17.6917 16.2321 19.1693 13.4089 18.5034 10.6661C17.9639 8.44286 16.18 6.94821 14.1969 6.85714C13.9149 6.84643 13.7497 7.18393 13.8372 7.48393C13.9392 7.82679 13.9976 8.19107 13.9976 8.57143Z"
                  fill="black"
                />
              </svg>
              <span className="text-sm">317</span>
            </div>
            <div className="flex space-x-1 items-center">
              <svg
                width="15"
                height="15"
                viewBox="0 0 29 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M12.5667 23.9475C13.1104 24.1545 13.6944 23.7241 13.6944 23.1029V2.53914C13.6944 2.31029 13.6139 2.08144 13.4427 1.93977C12.4559 1.08976 10.1903 0 7.25 0C4.70747 0 2.33108 0.72469 0.911285 1.31316C0.342361 1.55291 0 2.16317 0 2.82248V22.9994C0 23.6478 0.644444 24.1 1.21337 23.8984C2.79931 23.3263 5.31163 22.667 7.25 22.667C8.95677 22.667 11.2274 23.4298 12.5667 23.9475ZM16.4333 23.9475C17.7726 23.4298 20.0432 22.667 21.75 22.667C23.6884 22.667 26.2007 23.3263 27.7866 23.8984C28.3556 24.1055 29 23.6478 29 22.9994V2.82248C29 2.16317 28.6576 1.55291 28.0887 1.31861C26.6689 0.72469 24.2925 0 21.75 0C18.8097 0 16.5441 1.08976 15.5573 1.93977C15.3911 2.08144 15.3056 2.31029 15.3056 2.53914V23.1029C15.3056 23.7241 15.8946 24.1545 16.4333 23.9475Z"
                  fill="black"
                />
              </svg>
              <span>177</span>
            </div>
            <div className="flex space-x-1 items-center">
              <svg
                width="15"
                height="15"
                viewBox="0 0 28 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M2.60312 14.1555L12.4852 23.4025C12.8953 23.7862 13.4367 24 14 24C14.5633 24 15.1047 23.7862 15.5148 23.4025L25.3969 14.1555C27.0594 12.6043 28 10.4282 28 8.15344V7.83553C28 4.00407 25.2383 0.737191 21.4703 0.106837C18.9766 -0.309745 16.4391 0.506975 14.6562 2.29389L14 2.95165L13.3438 2.29389C11.5609 0.506975 9.02344 -0.309745 6.52969 0.106837C2.76172 0.737191 0 4.00407 0 7.83553V8.15344C0 10.4282 0.940625 12.6043 2.60312 14.1555Z"
                  fill="#FF8A00"
                />
              </svg>
              <span>136</span>
            </div>
            <div className="flex space-x-1 items-center">
              <svg
                width="15"
                height="15"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M3 0C1.34531 0 0 1.34537 0 3.00013V16.5007C0 18.1555 1.34531 19.5008 3 19.5008H7.5V23.251C7.5 23.537 7.65938 23.7948 7.9125 23.9213C8.16563 24.0479 8.47031 24.0198 8.7 23.851L14.4984 19.5008H21C22.6547 19.5008 24 18.1555 24 16.5007V3.00013C24 1.34537 22.6547 0 21 0H3Z"
                  fill="black"
                />
              </svg>
              <span>11</span>
            </div>
            <div className="flex space-x-1 items-center">
              <svg
                width="15"
                height="15"
                viewBox="0 0 20 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M0 2.25V22.8609C0 23.4891 0.567708 24 1.26562 24C1.52604 24 1.78125 23.9297 1.99479 23.7938L10 18.75L18.0052 23.7938C18.2188 23.9297 18.474 24 18.7344 24C19.4323 24 20 23.4891 20 22.8609V2.25C20 1.00781 18.8802 0 17.5 0H2.5C1.11979 0 0 1.00781 0 2.25Z"
                  fill="#FF8A00"
                />
              </svg>
              <span>39</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Resourses;
