import { useState, useEffect } from "react";
import Sidebar from "../../component/Sidebar";
import Navbar from "../../component/Navbar";
import DashboardCard from "../../component/DashboardCard";
import datas from "../../data/data";
import DashboardChart from "../../component/DashboardChart";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import faker from "faker";
import Cookie from "js-cookie";
import axios from "axios";

const index = () => {
  const [count, setCount] = useState<any>([]);
  const token = Cookie.get("token");

  ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend
  );

  const [data, setData] = useState({
    labels: datas.map((item: any) => item.year),
    datasets: [
      {
        label: "Users Gained",
        data: datas.map((item: any) => item.useGain),
        borderColor: "rgb(255, 99, 132)",
        backgroundColor: "rgba(255, 99, 132, 0.5)",
        borderWidth: 1,
      },
      {
        label: "Users Gained 2",
        data: datas.map((item: any) => item.useGain),
        borderColor: "rgb(53, 162, 235)",
        backgroundColor: "rgba(53, 162, 235, 0.5)",
        borderWidth: 1,
      },
    ],
  });

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: "bottom" as const,
      },
      title: {
        text: "Data Perbandingan Mentee",
      },
    },
  };

  const getCount = () => {
    axios
      .get("https://belanjalagiyuk.shop/dashboard", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((res) => {
        setCount(res?.data?.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    getCount();
  }, []);

  return (
    <section className="flex flex-row">
      <div className="w-20vw h-[100vh]">
        <Sidebar />
      </div>
      <div className="lg:w-[78vw] lg:ml-[20vw] lg:px-10 lg:py-5 p-2">
        <div className="hidden lg:flex">
          <Navbar title="Dashboard" />
        </div>
        <div className="grid grid-cols-3 lg:mt-5 lg:gap-16 gap-3 lg:pl-5 mt-24">
          <DashboardCard label="Active" count={count?.count_active} />
          <DashboardCard label="Placement" count={count?.count_placement} />
          <DashboardCard label="Feedback" count={count?.count_log} />
        </div>
        <div className="lg:pl-5">
          <DashboardChart chartOption={options} chartData={data} />
        </div>
      </div>
    </section>
  );
};

export default index;
