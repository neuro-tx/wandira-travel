import React, { useEffect, useState, useCallback } from 'react';
import Header from '../../components/Header';
import { useAuth } from '../../contexts/shared/Auth';
import { Plus, User, Map, BookCheck } from "lucide-react"
import Button from '../../components/Button'
import { useNavigate } from 'react-router';
import { staticItem } from '../../constants/dashboard';
import StaticBox from '../../components/StaticBox';
import { DASHBOARD_API } from "../../apis/api";
import useAxios from '../../utils/useAxios';
import Loader from "../../components/loaders/Loader"
import BarChart from '../../components/BarChart';

const Dashboard = () => {
  const { user } = useAuth();
  const navigate = useNavigate();
  const handleBtnClick = () => {
    navigate("/admin/create-trip")
  }
  const axiosInstance = useAxios();
  const [totalNums, setTotalNums] = useState({});
  const [bookingSummary, setBookingSummary] = useState({})
  const [tripsSummary, setTripsSummary] = useState({})
  const [usersSummary, setUsersSummary] = useState({})
  const [isLoading, setIsLoading] = useState(true);
  const [usersChart, setUsersChart] = useState([]);

  const fetchData = useCallback(async () => {
    try {
      setIsLoading(true);
      const response = await axiosInstance.get(DASHBOARD_API);
      console.log(response);
      setTotalNums(response.data.total);
      setUsersSummary(response.data.data.users);
      setTripsSummary(response.data.data.trips);
      setBookingSummary(response.data.data.booking);
    } catch (error) {
      console.log(error.message);
    } finally {
      setIsLoading(false);
    }
  }, []);

  useEffect(() => {
    fetchData();
  }, []);

  console.log(usersSummary.usersWeekSummary);


  if (isLoading) {
    return (
      <div className="min-h-screen w-full relative">
        <Loader
          text={"Loading"}
        />
      </div>
    )
  }

  return (
    <div className='relative px-5'>
      <div className="flex-between w-full flex-col sm:flex-row">
        <Header
          title={`welcom ${user?.name.split(" ")[0]} 👋`}
          description={"Track activity, trends, and popular destinations in real time"}
        />
        <Button
          title="Create a trip"
          classContainer="bg-primary-200 rounded-md text-white flex-center gap-1.5 hover:bg-primary-400 whitespace-nowrap justify-center"
          leftIcon={<Plus size={19} />}
          topClass={"sm:w-fit"}
          func={handleBtnClick}
        />
      </div>

      <div className="mt-3">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3">
          <StaticBox
            title="Total Users"
            count={totalNums.users}
            icon={<User size={18} />}
            currentMonth={usersSummary.usersMonthSummary.currentMonth}
            lastMonth={usersSummary.usersMonthSummary.lastMonth}
            iconStyle="bg-green-50 text-green-500"
          />

          <StaticBox
            title="Total Trips"
            count={totalNums.trips}
            icon={<Map size={18} />}
            currentMonth={tripsSummary.tripsMonthSummary.currentMonth}
            lastMonth={tripsSummary.tripsMonthSummary.lastMonth}
            iconStyle="bg-red-50 text-red-100"
          />

          <StaticBox
            title="Total Trips"
            count={totalNums.trips}
            icon={<BookCheck size={18} />}
            currentMonth={bookingSummary.bookingMonthSummary.currentMonth}
            lastMonth={bookingSummary.bookingMonthSummary.lastMonth}
            iconStyle="bg-blue-100 text-blue-700"
          />
        </div>
      </div>

      <div className="mt-6">
        <div className="mb-2 ml-2">
          <h2 className="font-recursive font-bold text-lg text-dark-400">Week Activities</h2>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 w-full gap-4">
          <div className="w-full rounded-lg shadow-100 border-ligh-50 border">
            <div className="p-2">
              <h3 className="font-bold text-base text-dark-200 ml-2 capitalize">
                Visual representation of user states
              </h3>
            </div>
            <BarChart
              dataPoints={usersSummary.usersWeekSummary}
            />
          </div>
          <div className="w-full rounded-lg shadow-100 border-ligh-50 border">
            <div className="p-2">
              <h3 className="font-bold text-base text-dark-200 ml-2 capitalize">
                Visual representation of trips states
              </h3>
            </div>
            <BarChart
              dataPoints={tripsSummary.tripsWeekSummary}
              color='#ff543d'
            />
          </div>
          <div className="w-full col-span-2 md:col-span-1 rounded-lg shadow-100 border-ligh-50 border">
            <div className="p-2">
              <h3 className="font-bold text-base text-dark-200 ml-2 capitalize">
                Visual representation of bookings states
              </h3>
            </div>
            <BarChart
              dataPoints={bookingSummary.bookinWeekSummary}
              color='#027a48'
            />
          </div>
        </div>
      </div>

    </div>
  )
}

export default Dashboard
