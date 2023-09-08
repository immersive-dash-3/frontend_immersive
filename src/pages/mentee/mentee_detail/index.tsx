import React, { FC, useEffect, useState } from "react";
import Sidebar from "../../../component/Sidebar";
import Navbar from "../../../component/Navbar";
import Button from "../../../component/Button";
import MenteeLog from "../../../component/MenteeLog";
import ModalMenteeLog from "../../../component/ModalMenteeLog";
import Input from "../../../component/Input";
import { CKEditor } from "@ckeditor/ckeditor5-react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
import axios from "axios";
import { useLocation } from "react-router-dom";
import Cookie from "js-cookie";
import Swal from "sweetalert2";


const index = () => {
  const [popup, setPopup] = useState<boolean>(false);
  const [editorData, setEditorData] = useState<string>("");
  const [data, setData] = useState<any>();
  
  const token = Cookie.get('token')

  const location = useLocation();
  const id = location?.state?.id;

  const [status, setStatus] = useState<string>('');

  const addNewMentee = () => {
    setPopup(!popup);
  };

  const getMentee = (id: string) => {
    axios
      .get(`mentees/1/logs`,{
        headers: {
          Authorization: `Bearer ${token}`
        }
      })
      .then((res) => {
        setData(res.data.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const addMentee = () => {
    axios.post('mentees/1/logs', {
      status: status,
      log: editorData
    }, {
      headers: {
        Authorization: `Bearer ${token}`
      }
    })
    .then((res) => {
      Swal.fire({
        icon:'success',
        title: res.data.message,
        showConfirmButton: false,
        timer: 1000
      })
      .then((res) => {
        getMentee(id);
        setPopup(!popup);   
      })
    })
    .catch((err) => {
      console.log(err);
    });
  }

  useEffect(() => {
    getMentee(id);
  }, []);

  return (
    <section className="flex flex-row">
      <div className="w-20vw h-[100vh]">
        <Sidebar />
      </div>
      <div className="lg:w-[78vw] lg:ml-[20vw] lg:px-10 lg:py-5  lg:mt-0 mt-24 px-2 ">
        <Navbar title="Mentee Log" />
        <div className="flex lg:flex-row flex-col justify-between lg:mt-10 lg:pl-5">
          <div>
            <div className="text-[2em]">
              {data?.first_name} {data?.last_name}
            </div>
            <div className="font-thin tracking-wide">{data?.class?.name}</div>
          </div>
          <div className="mt-5 lg:mt-0 lg:mr-40 font-thin tracking-wider">
            <div>Email : {data?.email}</div>
            <div>Telegram : {data?.telegram}</div>
            <div>Phone Number : {data?.phone_number}</div>
          </div>
        </div>
        <div className="flex flex-col w-full text-end">
          <Button
            label="Add New Log"
            onClick={() => addNewMentee()}
            classNames={"px-10"}
          />
        </div>
        <div className="grid lg:py-5 lg:grid-cols-2 grid-cols-1 lg:gap-10 mt-8 lg:pl-5">
          {data?.logs &&
            data?.logs.map((item: any, index) => {
              return (
                <MenteeLog
                id={item?.id}
                status={`Status : ${item?.status}`}
                log={item?.log}
                date={item?.created_at}
                />
              )
            })}
        </div>
        <div>
          <ModalMenteeLog isOpen={popup} onClose={() => setPopup(false)}>
            <div className="w-[80vw] lg:w-[25vw] lg:max-h-[80vh] flex flex-col justify-between">
              <div>
                <div className="text-[24px] text-center font-semibold">
                  Add New Log
                </div>
                <div className="flex flex-col">
                  <label
                    htmlFor=""
                    className="after:content-['*'] after:text-red-600"
                  >
                    Status
                  </label>
                  <select
                    name="status"
                    className="mt-2 border-solid border-2 border-border-color rounded-lg focus:outline-none w-full py-3 px-2 bg-transparent"
                  >
                    <option value="Active" onChange={(e) => setStatus(e.target.value)}>Active</option>
                    <option value="Unit 1" onChange={(e) => setStatus(e.target.value)}>Unit 1</option>
                    <option value="Unit 2" onChange={(e) => setStatus(e.target.value)}>Unit 2</option>
                    <option value="Placement" onChange={(e) => setStatus(e.target.value)}>Placement</option>
                  </select>
                </div>
                <div className="flex flex-col mt-5">
                  <label
                    htmlFor=""
                    className="after:content-['*'] after:text-red-600"
                  >
                    Feedback
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
              </div>
              <div className="w-full ">
                <Button label="Add New Log" onClick={() => addMentee()} classNames={"w-full"} />
              </div>
            </div>
          </ModalMenteeLog>
        </div>
      </div>
    </section>
  );
};

export default index;
