import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import Cookie from "js-cookie";
import Swal from "sweetalert2";

import Tableclass from "../../../component/Tableclass";
import Sidebar from "../../../component/Sidebar";
import Navbar from "../../../component/Navbar";
import Inputsearch from "../../../component/Inputsearch";
import Button from "../../../component/Button";
import Modalclass from "../../../component/Modalclass";
import Modaleditclass from "../../../component/Modaleditclass";

const index = () => {
  const [data, setData] = useState<[] | any>();
  const [popup, setPopup] = useState<Boolean>(false);
  const [edit, setEdit] = useState<Boolean>(false);
  const [nextpage, setNextpage] = useState<Boolean>(true);
  const [page, setPage] = useState<number>(1);
  const [itempage, setItempage] = useState<number>(10);

  //Createclass
  const [kelas, setKelas] = useState<string>("");
  //Edit class
  const [getedit, setGetEdit] = useState<string>("");
  const [getName, setName] = useState<string>("");
  //search
  const [search, setSearch] = useState<any>();
  const [datasearch, setDataSearch] = useState<any>([]);

  const token = Cookie.get("token");

  const handleIncrement = () => {
    nextpage === true ? setPage(page + 1) : setPage(page);
    getclass();
  };

  const addNewClass = () => {
    setPopup(!popup);
  };

  const editClass = (id: string) => {
    axios
      .get(`https://belanjalagiyuk.shop/classes/${id}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((response) => {
        setName(response.data.data.name);
        setGetEdit(id);
        setEdit(!edit);
        getclass();
      })
      .catch((error) => {
        console.log(error);
      });
    setEdit(!edit);
  };
  // const getSearchClass = (name: string) => {
  //   axios
  //     .get(
  //       `https://belanjalagiyuk.shop/classes?page=${page}&itemsPerPage=${itempage}&searchNameClass=${name}`,
  //       {
  //         headers: {
  //           Authorization: `Bearer ${token}`,
  //         },
  //       }
  //     )
  //     .then((response) => {
  //       setDataSearch(response.data);
  //       getSearchClass(name);
  //     });
  // };

  const getclass = () => {
    axios
      .get(
        `https://belanjalagiyuk.shop/classes?page=${page}&itemsPerPage=${itempage}`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      )
      .then((response) => {
        setData(response.data.data);
        setNextpage(response.data.next);
        setDataSearch(response.data.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  const HandleSubmitClass = () => {
    axios
      .post(
        "https://belanjalagiyuk.shop/classes",
        {
          name: kelas,
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      )
      .then((response) => {
        Swal.fire({
          icon: "success",
          title: response.data.message,
          showConfirmButton: false,
        }).then((response) => {
          getclass();
          setPopup(!popup);
        });
      })
      .catch((error) => {
        console.log(error);
      });
  };
  const handleEditClass = () => {
    axios
      .put(
        `https://belanjalagiyuk.shop/classes/${getedit}`,
        {
          name: getName,
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      )
      .then((response) => {
        Swal.fire({
          icon: "success",
          title: response.data.message,
          showConfirmButton: true,
        }).then((response) => {
          getclass();
          setEdit(!edit);
        });
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const handleDeleteClass = (id: number) => {
    axios
      .delete(`https://belanjalagiyuk.shop/classes/${id}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((response) => {
        Swal.fire({
          icon: "success",
          title: response.data.message,
          text: "Deleted",
          showConfirmButton: true,
        }).then((response) => {
          getclass();
        });
      });
  };

  const handleDecrement = () => {
    nextpage === false ? setPage(page - 1) : setPage(page);
    getclass();
  };
  const getSearchClass = () => {
    const filterdata = data.filter(
      (item: any) =>
        item.name.toLowerCase().indexOf(search.toLowerCase()) !== -1
    );
    setDataSearch(filterdata);
  };

  useEffect(() => {
    getclass();
  }, []);

  return (
    <section className="flex flex-row">
      <div className="w-20vw h-[100vh]">
        <Sidebar />
      </div>
      <div className="w-[80vw] ml-[20vw] px-10 py-5">
        <Navbar title="Classlist" />
        <div className=" flex pl-[24vw]">
          <div>
            <Inputsearch
              value={search}
              onChange={(e: any) => setSearch(e.target.value)}
              onClick={() => getSearchClass()}
            />
          </div>
          <span>
            <Button label="Add New" onClick={() => addNewClass()} />
          </span>
        </div>
        <div className="overflow-x-auto shadow-md">
          <table className="table">
            <thead className="bg-search text-white">
              <tr>
                <th>No</th>
                <th>Classname</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {data &&
                data.map((item: any, index) => {
                  return (
                    <Tableclass
                      key={index}
                      index={index}
                      id={item.id}
                      nama={item.name}
                      onClick={() => editClass(item.id)}
                      onDelete={() => handleDeleteClass(item.id)}
                    />
                  );
                })}
            </tbody>
          </table>
        </div>
        <div className="flex gap-x-3 pl-[56vw]">
          <Button label="Previous" onClick={() => handleDecrement()} />
          <Button
            label="Next"
            classNames="w-24"
            onClick={() => handleIncrement()}
          />
        </div>
        <div>
          <Modalclass isOpen={popup} onClose={() => setPopup(false)}>
            <div className="w-[25vw] h-[80vh] flex flex-col">
              <div className="text-[24px] text-center font-semibold">
                Add New Class
              </div>

              <div className="flex flex-col mt-5">
                <label
                  htmlFor=""
                  className="after:content-['*'] after:text-red-600 text-left"
                >
                  Classname
                </label>
                <input
                  type="text"
                  value={kelas}
                  onChange={(e) => setKelas(e.target.value)}
                  placeholder="Classname"
                  className="input input-bordered w-50 h-18 max-w-xs focus:outline-none"
                />
              </div>
              {/* <div className="flex flex-col mt-5">
                <label
                  htmlFor=""
                  className="after:content-['*'] after:text-red-600 text-left"
                >
                  User
                </label>
                <input 
                type="text" 
                value={user}
                onChange={(e) => setUser(e.target.value)}
                placeholder="User" 
                className="input input-bordered w-50 h-18 max-w-xs focus:outline-none"/>
              </div> */}
              <div>
                <Button label="Save" onClick={() => HandleSubmitClass()} />
              </div>
            </div>
          </Modalclass>
        </div>
        <div>
          <Modaleditclass isOpen={edit} onClose={() => setEdit(false)}>
            <div className="w-[25vw] h-[80vh] flex flex-col">
              <div className="text-[24px] text-center font-semibold">
                Edit Class
              </div>

              <div className="flex flex-col mt-5">
                <label
                  htmlFor=""
                  className="after:content-['*'] after:text-red-600"
                >
                  Classname
                </label>
                <input
                  type="text"
                  value={getName}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Classname"
                  className="input input-bordered w-50 h-18 max-w-xs focus:outline-none"
                />
              </div>
              <div>
                <Button label="Save" onClick={() => handleEditClass()} />
              </div>
            </div>
          </Modaleditclass>
        </div>
      </div>
    </section>
  );
};

export default index;
