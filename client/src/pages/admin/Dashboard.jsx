import React, { useEffect, useState, useCallback } from 'react';
import Header from '../../components/Header';
import { useAuth } from '../../contexts/shared/Auth';
import { Plus, User, Map, BookCheck } from "lucide-react"
import Button from '../../components/Button'
import { useNavigate } from 'react-router';
import { staticItem } from '../../constants/dashboard';
import StaticBox from '../../components/StaticBox';
import { DASHBOARD_API, BOOKING_API } from "../../apis/api";
import useAxios from '../../utils/useAxios';
import Loader from "../../components/loaders/Loader"
import BarChart from '../../components/BarChart';
import { cn } from '../../utils/util';

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
  const [bookings, setBookings] = useState([]);

  const fetchData = useCallback(async () => {
    try {
      setIsLoading(true);
      // const response = await axiosInstance.get(DASHBOARD_API);
      const response = await Promise.all([
        axiosInstance.get(DASHBOARD_API),
        axiosInstance.get(BOOKING_API),
      ])
      console.log(response);
      setBookings(response[1].data.data)
      setTotalNums(response[0].data.total);
      setUsersSummary(response[0].data.data.users);
      setTripsSummary(response[0].data.data.trips);
      setBookingSummary(response[0].data.data.booking);
    } catch (error) {
      console.log(error.message);
    } finally {
      setIsLoading(false);
    }
  }, []);

  useEffect(() => {
    fetchData();
  }, []);

  const bookingTable = ["ID", "User Id", "Trip Id", "Destination", "Status", "Booking Date", "Last Update"]


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
    <div className='relative px-5 pr-7'>
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
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 w-full gap-4">
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
          <div className="w-full sm:col-span-2 md:col-span-1 rounded-lg shadow-100 border-ligh-50 border">
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

      <div className="my-7">
        <div className="ml-2">
          <h2 className="font-recursive font-bold text-lg text-dark-400">Users Bookings</h2>
        </div>
        <div className="w-full overflow-auto">
          <table className='w-full table-auto border-separate border-spacing-y-1.5 overflow-auto'>
            <thead>
              <tr className='bg-dark-400 text-white'>
                {bookingTable.map((field, i) => (
                  <th
                    key={i}
                    className="py-1.5 px-3 first:rounded-l-lg last:rounded-r-lg font-semibold font-recursive text-sm md:text-base whitespace-nowrap text-start"
                  >
                    {field}
                  </th>
                ))}
              </tr>
            </thead>

            <tbody>
              {bookings.map((book) => (
                <tr
                  key={book._id}
                  className="odd:bg-slate-200 cursor-pointer duration-2 hover:bg-ligh-50"
                >
                  <td className="px-3 py-1 text-sm md:text-base font-karla text-start rounded-l-lg">
                    {(book._id).slice(0, 7)}
                  </td>
                  <td className="px-3 py-1 text-sm md:text-base font-karla text-start">
                    {(book.user_id._id).slice(0, 7)}
                  </td>
                  <td className="px-3 py-1 text-sm md:text-base font-karla text-start">
                    {(book.trip_id._id).slice(0, 7)}
                  </td>
                  <td className="px-3 py-1 text-sm md:text-base font-karla text-start">
                    {book.trip_id.country}
                  </td>
                  <td className="px-3 py-1 text-sm md:text-base font-karla text-start">
                    <div className={cn(
                      "px-3 text-white py-1 rounded-full w-fit",
                      book.status === "confirmed"
                        ? "bg-green-500"
                        : book.status === "pending"
                          ? "bg-yellow-500"
                          : "bg-red-500"
                    )}>
                      {book.status}
                    </div>
                  </td>
                  <td className="px-3 py-1 text-sm md:text-base font-karla text-start">
                    {new Date(book.booked_at).toLocaleDateString("en-GB", {
                      day: "numeric",
                      month: "long",
                      year: "numeric",
                    })}
                  </td>
                  <td className="px-3 py-1 text-sm md:text-base font-karla text-start rounded-r-lg">
                    {new Date(book.updatedAt).toLocaleDateString("en-GB", {
                      day: "numeric",
                      month: "long",
                      year: "numeric",
                    })}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

    </div>
  )
}

export default Dashboard
