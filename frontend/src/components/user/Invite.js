// import Header from "./Header";
import { InputAdornment } from "@mui/material";
import OutlinedInput from "@mui/material/OutlinedInput";
import SearchIcon from "@mui/icons-material/Search";
import HeadsetMicIcon from "@mui/icons-material/HeadsetMic";
import VideocamIcon from "@mui/icons-material/Videocam";
import SendIcon from "@mui/icons-material/Send";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import BookmarkBorderIcon from "@mui/icons-material/BookmarkBorder";
import InfoIcon from "@mui/icons-material/Info";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import { Divider } from "@mui/material";
import * as React from "react";
import Button from "@mui/material/Button";
import { styled } from "@mui/material/styles";
import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import DialogContent from "@mui/material/DialogContent";
import DialogActions from "@mui/material/DialogActions";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";
import Typography from "@mui/material/Typography";
import BasicTimePicker from "../userlayouts/TimePicker";
import profile from "../../assets/img/Avatar.jpg";

const BootstrapDialog = styled(Dialog)(({ theme }) => ({
  "& .MuiDialogContent-root": {
    padding: theme.spacing(2),
  },
  "& .MuiDialogActions-root": {
    padding: theme.spacing(1),
  },
}));

const Invite = () => {
  const lists = [
    {
      id: 1,
      image:
        "https://media.istockphoto.com/id/1386479313/photo/happy-millennial-afro-american-business-woman-posing-isolated-on-white.webp?b=1&s=170667a&w=0&k=20&c=ahypUC_KTc95VOsBkzLFZiCQ0VJwewfrSV43BOrLETM=",
      name: "John issac",
      role: "Software Devops Engineer",
      time_starts: "9pm",
      time_ends: "11pm",
      audio_fee: "Rs:1/min",
      video_fee: "Rs:1/min",
    },
    {
      id: 2,
      image: "Avatar",
      name: "john issac",
      role: "Software Devops Engineer",
      time_starts: "9pm",
      time_ends: "11pm",
      audio_fee: "Rs:1/min",
      video_fee: "Rs:1/min",
    },
    {
      id: 3,
      image: "Avatar",
      name: "john issac",
      role: "Software Devops Engineer",
      time_starts: "9pm",
      time_ends: "11pm",
      audio_fee: "Rs:1/min",
      video_fee: "Rs:1/min",
    },
    {
      id: 4,
      image: "Avatar",
      name: "john issac",
      role: "Software Devops Engineer",
      time_starts: "9pm",
      time_ends: "11pm",
      audio_fee: "Rs:1/min",
      video_fee: "Rs:1/min",
    },
  ];

  const [profileOpen, setProfileOpen] = React.useState(false);

  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };
  return (
    <div className="font-poppins">
      <div className="grid grid-cols-[1fr_5fr]">
        <div className="m-5">
          <div className="flex gap-44 items-baseline">
            <h1 className="font-bold items-center text-[20px]">Filters</h1>
            <button
              type="button"
              class="bg-black text-white hover:text-white border border-black-700 hover:bg-gray-600 focus:ring-2 focus:ring-black-300 focus:outline-none font-medium text-sm px-5 py-2.5 text-center mr-2 mb-2 rounded-full"
            >
              Apply
            </button>
          </div>
          <div className="shadow shadow-[#0094FF] w-full rounded mt-5">
            <h1 className="font-bold items-center text-[15px] p-2">
              Experience
            </h1>
            <label className="flex items-center pl-2">
              <input
                className="checkbox checkbox-sm shrink-0 rounded-sm focus:ring:0 accent-indigo-500 to-blue-500"
                type="checkbox"
                class="checkbox"
              />
              <span class="select-none text-sm ml-2">0yrs-1yrs</span>
            </label>
            <label className="flex items-center pl-2">
              <input
                className="checkbox checkbox-sm shrink-0 rounded-sm focus:ring:0 accent-indigo-500 to-blue-500"
                type="checkbox"
                class="checkbox"
              />
              <span class="select-none text-sm ml-2 ">2yrs-4yrs</span>
            </label>
            <label className="flex items-center pl-2">
              <input
                className="checkbox checkbox-sm shrink-0 rounded-sm focus:ring:0 accent-indigo-500 to-blue-500"
                type="checkbox"
                class="checkbox"
              />
              <span class="select-none text-sm ml-2">4yrs-6yrs</span>
            </label>
            <label className="flex items-center pl-2">
              <input
                className="checkbox checkbox-sm shrink-0 rounded-sm focus:ring:0 accent-indigo-500 to-blue-500"
                type="checkbox"
                class="checkbox"
              />
              <span class="select-none text-sm ml-2">7yrs-8yrs</span>
            </label>
            <label className="flex items-center pl-2 pb-2">
              <input
                className="checkbox checkbox-sm shrink-0 rounded-sm focus:ring:0 accent-indigo-500 to-blue-500"
                type="checkbox"
                class="checkbox"
              />
              <span class="select-none text-sm ml-2 ">&gt;10yrs</span>
            </label>
          </div>
          <div className="shadow shadow-[#0094FF] w-full rounded mt-5">
            <h1 className="font-bold items-center text-[15px] p-2">Timing</h1>
            <label className="flex items-center pl-2">
              <input
                className="checkbox checkbox-sm shrink-0 rounded-sm focus:ring:0 accent-indigo-500 to-blue-500"
                type="checkbox"
                class="checkbox"
              />
              <span class="select-none text-sm ml-2">AM</span>
            </label>
            <label className="flex items-center pl-2 pb-2">
              <input
                className="checkbox checkbox-sm shrink-0 rounded-sm focus:ring:0 accent-indigo-500 to-blue-500"
                type="checkbox"
                class="checkbox"
              />
              <span class="select-none text-sm ml-2">PM</span>
            </label>
          </div>
          <div className="shadow shadow-[#0094FF] w-full rounded mt-5">
            <h1 className="font-bold items-center text-[15px] p-2">Budget</h1>
            <label className="flex items-center pl-2">
              <input
                className="checkbox checkbox-sm shrink-0 rounded-sm focus:ring:0 accent-indigo-500 to-blue-500"
                type="checkbox"
                class="checkbox"
              />
              <span class="select-none text-sm ml-2">Under &#8377;100</span>
            </label>
            <label className="flex items-center pl-2">
              <input
                className="checkbox checkbox-sm shrink-0 rounded-sm focus:ring:0 accent-indigo-500 to-blue-500"
                type="checkbox"
                class="checkbox"
              />
              <span class="select-none text-sm ml-2">
                &#8377;100-&#8377;300
              </span>
            </label>
            <label className="flex items-center pl-2">
              <input
                className="checkbox checkbox-sm shrink-0 rounded-sm focus:ring:0 accent-indigo-500 to-blue-500"
                type="checkbox"
                class="checkbox"
              />
              <span class="select-none text-sm ml-2">
                &#8377;300-&#8377;600
              </span>
            </label>
            <label className="flex items-center pl-2">
              <input
                className="checkbox checkbox-sm shrink-0 rounded-sm focus:ring:0 accent-indigo-500 to-blue-500"
                type="checkbox"
                class="checkbox"
              />
              <span class="select-none text-sm ml-2">
                &#8377;600-&#8377;900
              </span>
            </label>
            <label className="flex items-center pl-2 pb-2">
              <input
                className="checkbox checkbox-sm shrink-0 rounded-sm focus:ring:0 accent-indigo-500 to-blue-500"
                type="checkbox"
                class="checkbox"
              />
              <span class="select-none text-sm ml-2">Above &#8377;1000</span>
            </label>
          </div>
          <div className="shadow shadow-[#0094FF] w-full rounded mt-5">
            <h1 className="font-bold items-center text-[15px] p-2">Tag</h1>
            <label className="flex items-center pl-2">
              <input
                className="checkbox checkbox-sm shrink-0 rounded-sm focus:ring:0 accent-indigo-500 to-blue-500"
                type="checkbox"
                class="checkbox"
              />
              <span class="select-none text-sm ml-2">Warrior</span>
            </label>
            <label className="flex items-center pl-2">
              <input
                className="checkbox checkbox-sm shrink-0 rounded-sm focus:ring:0 accent-indigo-500 to-blue-500"
                type="checkbox"
                class="checkbox"
              />
              <span class="select-none text-sm ml-2">Leader</span>
            </label>
            <label className="flex items-center pl-2 pb-2">
              <input
                className="checkbox checkbox-sm shrink-0 rounded-sm focus:ring:0 accent-indigo-500 to-blue-500"
                type="checkbox"
                class="checkbox"
              />
              <span class="select-none text-sm ml-2">Mentor</span>
            </label>
          </div>
        </div>

        <div className="m-5 border rounded-3xl">
          <div className="p-6 grid grid-cols-2">
            <h2 className="flex justify-start font-bold text-[25px]">
              <span className="text-[#0094FE] ">Magic</span>Search
            </h2>
            <OutlinedInput
              sx={{ width: "100%", borderRadius: "10em", height: "75%" }}
              id="outlined-adornment-search"
              endAdornment={
                <InputAdornment position="end">
                  <SearchIcon />
                </InputAdornment>
              }
              placeholder="Search"
              aria-describedby="outlined-search-helper-text"
              inputProps={{
                "aria-label": "search",
              }}
            />
          </div>

          {lists.map((list) => (
            <div className="flex justify-between border rounded-xl shadow-md m-10 px-5">
              {/* profile + name+ role begins */}
              <div className="flex items-center">
                <img
                  alt="img"
                  src={list.image}
                  className=" m-2 h-[100px] w-[100px] rounded-full object-cover"
                />
                <div className="flex flex-col justify-center">
                  <h1
                    onClick={() => setProfileOpen(true)}
                    className="font-bold text-[22px] cursor-pointer"
                  >
                    {list.name}
                  </h1>
                  <p>{list.role}</p>
                </div>
              </div>
              {/* profile + name+ role ends */}
              {/* timing and fee starts */}
              <div className="flex flex-col justify-evenly items-center p-5">
                <h2 className="text-[18px] font-semibold ">
                  Available: <span>{list.time_starts}</span>-
                  <span>{list.time_ends}</span>
                </h2>
                {/* call type begins */}
                <div className="grid grid-cols-2 m-2">
                  <div className="flex flex-col  items-center p-2">
                    <HeadsetMicIcon />
                    <p>{list.audio_fee}</p>
                  </div>
                  <div className="flex flex-col items-center p-2">
                    <VideocamIcon />
                    <p>{list.video_fee}</p>
                  </div>
                </div>
                {/* call type ends */}
              </div>
              {/* timing and fee ends */}
              {/* invite begins */}
              <div className="flex flex-col justify-evenly items-center ">
                <button
                  onClick={handleClickOpen}
                  className="flex border rounded-3xl  text-white p-2 px-3  bg-[#0094FE] items-center"
                >
                  <p className="px-3">Invite</p>
                  <SendIcon sx={{ fontSize: 20 }} />
                </button>
                <BootstrapDialog
                  onClose={handleClose}
                  aria-labelledby="customized-dialog-title"
                  open={open}
                >
                  <DialogTitle sx={{ m: 0, p: 2 }} id="customized-dialog-title">
                    <h1 className="font-bold"> My Details</h1>
                  </DialogTitle>
                  <IconButton
                    aria-label="close"
                    onClick={handleClose}
                    sx={{
                      position: "absolute",
                      right: 8,
                      top: 8,
                      color: (theme) => theme.palette.grey[500],
                    }}
                  >
                    <CloseIcon />
                  </IconButton>
                  <DialogContent c dividers>
                    <div className="flex items-center">
                      <div>
                        <div className="flex justify-start pt-2 ">
                          <h1 className="font-bold text-[20px]">Username:</h1>
                          <h2 className="text-[20px] px-2"> Mano Sundar</h2>
                        </div>
                        <div className="flex justify-start pt-2">
                          <h1 className="font-bold text-[20px]">Email:</h1>
                          <h2 className="text-[20px] px-2">
                            {" "}
                            manosundarmanivel@gmail.com
                          </h2>
                        </div>
                        <div className="justify-start pt-2 items-center">
                          {/* <h1 className="font-bold text-[20px]">
                          Time <span className="text-red-500">*</span>
                        </h1> */}
                          <div className="flex">
                            <div>
                              <h1 className="font-bold text-[20px]">From:</h1>
                              <BasicTimePicker />
                            </div>
                            <div className="px-2">
                              <h1 className="font-bold text-[20px]">To:</h1>
                              <BasicTimePicker />
                            </div>
                          </div>
                        </div>
                      </div>
                      <img
                        alt="img"
                        src={list.image}
                        className=" m-2 h-[120px] w-[120px] rounded-full object-cover"
                      />
                    </div>
                    <div className="justify-start pt-2 items-center">
                      <h1 className="font-bold text-[20px]">
                        Mode <span className="text-red-500">*</span>
                      </h1>
                      <div className="flex justify-start mt-3">
                        <div className=" flex rounded-full border p-2 mx-3">
                          <h1 className="px-2">Video</h1>

                          <VideocamIcon />
                        </div>
                        <div className="flex rounded-full border p-2 ">
                          <h1 className="px-2">Audio</h1>
                          <HeadsetMicIcon />
                        </div>
                      </div>
                    </div>
                  </DialogContent>
                  <DialogTitle sx={{ m: 0, p: 2 }} id="customized-dialog-title">
                    <h1 className="font-bold"> Request About</h1>
                  </DialogTitle>
                  <DialogContent>
                    <div className="justify-start pt-2 items-center">
                      <h1 className="font-bold text-[20px]">
                        Service Name <span className="text-red-500">*</span>
                      </h1>
                      <input
                        placeholder="Ex: Carrier Guidance"
                        type="text"
                        className=" mt-2 px-2 border rounded h-14"
                      />
                    </div>

                    <div className="mt-3 ">
                      <textarea
                        placeholder="Write Your Question Here"
                        className="border h-20 w-full p-2"
                      />
                    </div>
                  </DialogContent>
                  <DialogActions>
                    <button
                      onClick={handleClose}
                      className="font-medium 
                      px-4 py-2 border-2 border-black rounded-md"
                    >
                      Cancel
                    </button>
                    <button
                      onClick={handleClose}
                      className="font- bg-black text-white px-4 py-2 rounded-md"
                    >
                      Confirm
                    </button>
                  </DialogActions>
                </BootstrapDialog>
                {/* <div>
                  <FavoriteBorderIcon />
                  <BookmarkBorderIcon />
                  <InfoIcon />
                </div> */}
              </div>
              {/* invite ends */}
            </div>
          ))}
          {profileOpen ? (
            <div
              className="fixed top-0 left-0 right-0 bottom-0 w-full h-screen flex items-center justify-center bg-black "
              // onClick={() => setProfileOpen(false)}
            >
              <div className="text- p-10 relative rounded-md bg-mylight sm:w-8/12 md:w-5/12">
                <div className="  absolute right-5 ">
                  <button
                    onClick={() => setProfileOpen(false)}
                    className="bg-black text-white px-3 py-1 rounded-md"
                  >
                    Close
                  </button>
                </div>
                <div className="flex items-center justify-center">
                  <img className="w-[100px]" src={profile} alt="profileImg" />
                </div>
                <div className=" text-center items-center justify-center">
                  <p className="text-[18px] py-1 font-semibold">Syed Irsath</p>
                  <p className="text-[14px] py-1">Backend Developer</p>
                  <p className="text-[14px] py-1 te">Warrior</p>
                  <p className="text-[14px] py-1">
                    I AM DOWN, BUT I NOT LET YOU DOWN
                  </p>
                </div>
                <div>
                  <p className="text-[16px] font-semibold">Bio</p>
                  <p className="text-[14px]">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                    euismod, urna id aliquet ultrices, justo nisl tincidunt
                    nunc, ac lacinia nunc nisl nec nunc.
                  </p>
                </div>
                <div className="my-2">
                  <p className="text-[16px] font-semibold">
                    Skills and years of experience
                  </p>

                  <div className="text-[14px] grid grid-cols-2 mt-1">
                    <p> AutoCAD 2011 - 2Yrs</p>
                    <p>Fusion 360 -4Yrs</p>
                    <p>CRED 7.1 -3Yrs</p>
                    <p> SolidWorks 2018 - 3Yrs</p>
                    <p> Selenium and Java - 1Yrs</p>
                  </div>
                </div>
                <div className="my-2">
                  <p className="text-[16px] font-semibold">Preceding</p>

                  <p className="text-[14px]">Kongu Engineering college</p>
                </div>
                <div className="my-2">
                  <p className="text-[16px] font-semibold">Existing</p>

                  <p className="text-[14px]">Google, California</p>
                </div>
              </div>
            </div>
          ) : null}
        </div>
      </div>
    </div>
  );
};
export default Invite;
