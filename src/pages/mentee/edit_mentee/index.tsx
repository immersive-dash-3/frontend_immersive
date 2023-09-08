import React, { useState, useEffect } from "react";
import Sidebar from "../../../component/Sidebar";
import Navbar from "../../../component/Navbar";
import Input from "../../../component/Input";
import { CKEditor } from "@ckeditor/ckeditor5-react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
import Button from "../../../component/Button";
import axios from "axios";
import { useLocation, useNavigate } from "react-router-dom";
import Cookie from "js-cookie";
import Swal from "sweetalert2";

const index = () => {
  const location = useLocation();

  const id = location?.state?.id;
  const token = Cookie.get("token");
  const navigate = useNavigate();

  const getData = () => {
    axios
      .get(`mentees/1`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((res) => {
        setFirstName(res?.data?.data?.first_name);
        setLastName(res?.data?.data?.last_name);
        setEmail(res?.data?.data?.email);
        setPhoneNumber(res?.data?.data?.phone_number);
        setAddress(res?.data?.data?.current_address);
        setTelegram(res?.data?.data?.telegram);
        setGender(res?.data?.data?.gender);
        setEmergencyName(res?.data?.data?.emergency_name);
        setEmergencyPhoneNumber(res?.data?.data?.emergency_phone);
        setEmergencyStatus(res?.data?.data?.emergency_status);
        setEducationType(res?.data?.data?.education_type);
        setMajor(res?.data?.data?.major);
        setGraduate(res?.data?.data?.graduate);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    getData();
  }, [id, token]);

  // Edit data
  const [firstName, setFirstName] = useState<string>("");
  const [lastName, setLastName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [phoneNumber, setPhoneNumber] = useState<string>("");
  const [address, setAddress] = useState<string>("");
  const [telegram, setTelegram] = useState<string>("");
  const [gender, setGender] = useState<string>("");
  const [emergencyName, setEmergencyName] = useState<string>("");
  const [emergencyPhoneNumber, setEmergencyPhoneNumber] = useState<string>("");
  const [emergencyStatus, setEmergencyStatus] = useState<string>("");
  const [educationType, setEducationType] = useState<string>("");
  const [major, setMajor] = useState<string>("");
  const [graduate, setGraduate] = useState<string>("");

  const updateMentee = () => {
    axios
      .put(
        `mentees/1`,
        {
          first_name: firstName,
          last_name: lastName,
          email: email,
          phone_number: phoneNumber,
          current_address: address,
          telegram: telegram,
          gender: gender,
          emergency_name: emergencyName,
          emergency_phone: emergencyPhoneNumber,
          emergency_status: emergencyStatus,
          education_type: educationType,
          major: major,
          graduate: graduate,
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      )
      .then((res) => {
        Swal.fire({
          icon: "success",
          title: "Berhasil",
          text: "Data berhasil diubah",
        }).then(() => navigate("/dashboard"));
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <section className="flex flex-row">
      <div className="w-20vw h-[100vh]">
        <Sidebar />
      </div>
      <div className="w-[100vw] lg:w-[78vw] lg:ml-[20vw] lg:px-10 lg:py-5">
        <Navbar title="Add New Mentee" />
        <div className="lg:mt-5 text-[1.5em] lg:pl-5 px-4 mt-24">
          Update Mentee - {firstName} {lastName}
        </div>
        <div className="grid lg:grid-cols-2 grid-cols-1 lg:mt-2 gap-x-5 gap-y-2 lg:pl-5 px-4">
          <Input
            label="First Name"
            name="first_name"
            type="text"
            placeholder="First Name"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
            classes='after:content-["*"] after:text-red-500'
          />
          <Input
            label="Last Name"
            name="last_name"
            type="text"
            placeholder="Last Name"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
            classes='after:content-["*"] after:text-red-500'
          />
          <Input
            label="Email"
            name="email"
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            classes='after:content-["*"] after:text-red-500'
          />
          <Input
            label="Phone Number"
            name="phone_number"
            type="number"
            placeholder="Phone Number"
            value={phoneNumber}
            onChange={(e) => setPhoneNumber(e.target.value)}
            classes='after:content-["*"] after:text-red-500'
          />
        </div>
        <div className="w-full lg:pl-5 px-4 mt-2">
          <Input
            label="Telegram"
            name="telegram"
            type="text"
            placeholder="Telegram"
            value={telegram}
            onChange={(e) => setTelegram(e.target.value)}
            classes='after:content-["*"] after:text-red-500'
          />
          <div className="flex flex-col">
            <label
              htmlFor=""
              className="after:content-['*'] after:text-red-500 text-[#2F2F2F]"
            >
              Gender
            </label>
            <div className="flex flex-row mt-2">
              <input
                type="radio"
                className="bg-transparent outline-lime-400 mr-2 "
                value={"Laki-laki"}
                checked={gender === "Laki-laki" || gender === "L"}
                onChange={(e) => setGender(e.target.value)}
              />
              <span className="text-[#2F2F2F]">Laki - laki</span>
              <input
                type="radio"
                className="mr-2 ml-5 text-[#2F2F2F]"
                value={"Perempuan"}
                checked={gender === "Perempuan" || gender === "P"}
                onChange={(e) => setGender(e.target.value)}
              />
              <span className="text-[#2F2F2F]">Perempuan</span>
            </div>
          </div>
        </div>

        <div className="mt-10 text-[1.1em] lg:pl-5 px-4">Emergency Data</div>
        <div className="grid lg:grid-cols-2 grid-cols-1 mt-5 gap-x-5 gap-y-2 lg:pl-5 px-4">
          <Input
            label="Name"
            name="emergency_name"
            type="text"
            placeholder="Name"
            value={emergencyName}
            onChange={(e) => setEmergencyName(e.target.value)}
            classes='after:content-["*"] after:text-red-500'
          />
          <Input
            label="Phone Number"
            name="emergency_phone"
            type="number"
            placeholder="Phone Number"
            value={emergencyPhoneNumber}
            onChange={(e) => setEmergencyPhoneNumber(e.target.value)}
            classes='after:content-["*"] after:text-red-500'
          />
        </div>
        <div className="w-full lg:pl-5 px-4 mt-2">
          <Input
            label="Status"
            name="emergency_status"
            type="string"
            placeholder="Status"
            value={emergencyStatus}
            onChange={(e) => setEmergencyStatus(e.target.value)}
            classes='after:content-["*"] after:text-red-500'
          />
        </div>

        <div className="mt-10 text-[1.1em] lg:pl-5 px-4">Emergency Data</div>
        <div className="grid lg:grid-cols-2 grid-cols-1 mt-5 gap-x-5 gap-y-2 lg:pl-5 px-4">
          <div className="flex flex-col">
            <label
              htmlFor=""
              className="after:content-['*'] after:text-red-500 text-[#2F2F2F]"
            >
              Type
            </label>
            <div className="flex flex-row mt-2">
              <input
                type="radio"
                className="bg-transparent outline-lime-400 mr-2"
                value={"Informatics"}
                checked={educationType === "Informatics"}
                onChange={(e) => setEducationType(e.target.value)}
              />
              <span className="text-[#2F2F2F]">Informatics</span>
              <input
                type="radio"
                className="mr-2 ml-5"
                value={"Non-Informatics"}
                checked={educationType === "Non-Informatics"}
                onChange={(e) => setEducationType(e.target.value)}
              />
              <span className="text-[#2F2F2F]">Non-Informatics</span>
            </div>
          </div>
        </div>
        <div className="grid lg:grid-cols-2 grid-cols-1 mt-5 gap-x-5 gap-y-2 lg:pl-5 px-4">
          <Input
            label="Major"
            name="major"
            type="text"
            placeholder="Major"
            value={major}
            onChange={(e) => setMajor(e.target.value)}
            classes='after:content-["*"] after:text-red-500'
          />
          <Input
            label="Graduation"
            name="graduation"
            type="text"
            placeholder="Graduation"
            value={graduate}
            onChange={(e) => setGraduate(e.target.value)}
            classes='after:content-["*"] after:text-red-500'
          />
        </div>
        <div className="lg:pl-5 px-4">
          <label
            htmlFor=""
            className="after:content-['*'] after:text-red-600 text-[#2F2F2F]"
          >
            Address
          </label>
          <CKEditor
            editor={ClassicEditor}
            data={address}
            onChange={(event, editor) => {
              const data = editor.getData();
              setAddress(data);
            }}
          />
        </div>
        <div className="ml-5 my-10">
          <Button
            label="Submit"
            classNames={"w-full"}
            onClick={() => updateMentee()}
          />
        </div>
      </div>
    </section>
  );
};

export default index;
