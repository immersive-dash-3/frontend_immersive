import React, { useState } from "react";
import Sidebar from "../../../component/Sidebar";
import Navbar from "../../../component/Navbar";
import Input from "../../../component/Input";
import { CKEditor } from "@ckeditor/ckeditor5-react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
import Button from "../../../component/Button";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import Cookie from "js-cookie";

const index = () => {
  const [editorData, setEditorData] = useState<string>("");

  const navigate = useNavigate()

  // User Data
  const [firstName, setFirstName] = useState<string>('');
  const [lastName, setLastName] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [phoneNumber, setPhoneNumber] = useState<string>('');
  const [telegram, setTelegram] = useState<string>('');
  const [gender, setGender] = useState<string>('');
  const [educationType, setEducationType] = useState<string>('');
  const [emergencyName, setEmergencyName] = useState<string>('');
  const [emergencyStatus, setEmergencyStatus] = useState<string>('');
  const [emergencyPhone, setEmergencyPhone] = useState<string>('');
  const [major, setMajor] = useState<string>('');
  const [graduation, setGraduation] = useState<string>('');

  const token = Cookie.get('token')
  
  const addMentee = () => {
    axios.post('mentees', {
      first_name: firstName,
      last_name: lastName,
      email: email,
      phone: phoneNumber,
      current_address: editorData,
      telegram: telegram,
      gender: gender,
      education_type: educationType,
      major: major,
      graduate: graduation,
      emergency_name: emergencyName,
      emergency_phone: emergencyPhone,
      emergency_status: emergencyStatus,
      status: 0,
      class_id: 1
    }, {
      headers: {
        Authorization: `Bearer ${token}`
      }
    })
    .then((res) => {
      Swal.fire({
        icon: 'success',
        title: 'Success Add',
        text: `Success Add New Mentee`,
        confirmButtonText: 'OK',
      }).then((res) => {
        if(res.isConfirmed){
          navigate('/dashboard')
        }
      }).catch((err) => {
        console.log(err);
      })
    })
    .catch((err) => {
      console.log(err);
    })
  }  


  return (
    <section className="flex flex-row">
      <div className="w-20vw h-[100vh]">
        <Sidebar />
      </div>
      <div className="w-[100vw] lg:w-[78vw] lg:ml-[20vw] lg:px-10 lg:py-5">
        <Navbar title="Add New Mentee" />
        <div className="lg:mt-5 text-[1.5em] lg:pl-5 px-4 mt-24">Create New Mentee</div>
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
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
            placeholder="Last Name"
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
                value={'Laki-laki'}
                checked={gender === 'L'}
                onClick={(e) => setGender(e.target.value)}
              />
              <span className="text-[#2F2F2F]">Laki - laki</span>
              <input type="radio" className="mr-2 ml-5 text-[#2F2F2F]" value={'P'}
                checked={gender === 'Perempuan'}
                onClick={(e) => setGender(e.target.value)}/> <span className="text-[#2F2F2F]">Perempuan</span>
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
            value={emergencyPhone}
            onChange={(e) => setEmergencyPhone(e.target.value)}
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
                value={'Informatics'}
                checked={educationType === 'Informatics'}
                onChange={(e) => setEducationType(e.target.value)}
              />
              <span className="text-[#2F2F2F]">Informatics</span>
              <input type="radio" className="mr-2 ml-5" value={'Non-Informatics'}
                checked={educationType === 'Non-Informatics'}
                onChange={(e) => setEducationType(e.target.value)}/> <span className="text-[#2F2F2F]">Non-Informatics</span>
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
            value={graduation}
            onChange={(e) => setGraduation(e.target.value)}
            classes='after:content-["*"] after:text-red-500'
          />
        </div>
        <div className="lg:pl-5 px-4">
          <label htmlFor="" className="after:content-['*'] after:text-red-600 text-[#2F2F2F]">
            Address
          </label>
          <CKEditor
            editor={ClassicEditor}
            data={editorData}
            onChange={(event, editor) => {
              const data = editor.getData();
              setEditorData(data);
            }}
          />
        </div>
        <div className="ml-5 my-10">
        <Button label="Submit" classNames={'w-full'} onClick={() => addMentee()}/>
        </div>
      </div>
    </section>
  );
};

export default index;
