import React, { FC, useState } from "react";
import Sidebar from "../../../component/Sidebar";
import Navbar from "../../../component/Navbar";
import Button from "../../../component/Button";
import MenteeLog from "../../../component/MenteeLog";
import ModalMenteeLog from "../../../component/ModalMenteeLog";
import Input from "../../../component/Input";
import { CKEditor } from "@ckeditor/ckeditor5-react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";

const index = () => {
  const [popup, setPopup] = useState<boolean>(false);
  const [editorData, setEditorData] = useState<string>("");

  const addNewMentee = () => {
    setPopup(!popup);
  };
  
  return (
    <section className="flex flex-row">
      <div className="w-20vw h-[100vh]">
        <Sidebar />
      </div>
      <div className="w-[78vw] ml-[20vw] px-10 py-5">
        <Navbar title="Mentee Log" />
        <div className="flex flex-row justify-between  mt-10 pl-5">
          <div>
            <div className="text-[2em]">Denson Patibang</div>
            <div className="font-thin tracking-wide">
              Frontend Enginering Batch 15
            </div>
          </div>
          <div className="mr-40 font-thin tracking-wider">
            <div>Email : denson753@gmail.com</div>
            <div>Telegram : @densonpatibang</div>
            <div>Phone Number : 089652030647</div>
          </div>
        </div>
        <div className="flex flex-col w-full text-end">
          <Button
            label="Add New Log"
            onClick={() => addNewMentee()}
            classNames={"px-10"}
          />
        </div>
        <div className="grid grid-cols-2 gap-10 mt-8 pl-5">
          <MenteeLog
            id={1}
            status={"Change Status : Unit 2"}
            log={
              "Kerja keras Anda tercermin dalam kemajuan yang telah Anda buat. Terus tingkatkan pemahaman Anda tentang topik-topik ini."
            }
            date={"Aug 9, 2023"}
          />
        </div>
        <div>
          <ModalMenteeLog isOpen={popup} onClose={() => setPopup(false)}>
            <div className="w-[25vw] h-[80vh] flex flex-col">
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
                  <option value="active">Active</option>
                  <option value="active">Non Active</option>
                  <option value="active">Active</option>
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
          </ModalMenteeLog>
        </div>
      </div>
    </section>
  );
};

export default index;
