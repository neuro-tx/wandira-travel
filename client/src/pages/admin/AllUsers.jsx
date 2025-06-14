import { useEffect, useState } from 'react'
import Button from '../../components/Button'
import Header from '../../components/Header'
import useAxios from '../../utils/useAxios'
import Spinear from '../../components/loaders/Spinear'
import { USERS_API } from '../../apis/api'
import { cn } from '../../utils/util'
import { Trash2, Plus } from 'lucide-react';
import Popup from '../../components/Popup'
import Loader from '../../components/loaders/Loader'
import ConfirmBox from '../../components/ConfirmBox'

const AllUsers = () => {
  const addUser = () => { }
  const axiosInstance = useAxios();
  const [isLoading, setIsLoading] = useState(false);
  const [errorMess, setErrorMess] = useState("")
  const [users, setUsers] = useState([]);
  const [state, setstate] = useState({})
  const [delLoading, setDelLoading] = useState(false);
  const [popupMess, setPopupMess] = useState(false);

  const fetchUsers = async () => {
    setIsLoading(true);
    try {
      const response = await axiosInstance.get(USERS_API);
      setUsers(response.data.data);
    } catch (error) {
      setErrorMess(error.message);
      setUsers([]);
    } finally {
      setIsLoading(false)
    }
  };

  const delUser = async (id) => {
    setDelLoading(true);
    setPopupMess(false)
    try {
      const response = await axiosInstance.delete(`${USERS_API}/${id}`);
      setstate({ code: response.data.stateCode, message: response.data.message })
      setUsers((prevUsers) => prevUsers.filter((user) => user._id !== id))
    } catch (error) {
      setstate({ message: error.message });
    } finally {
      setDelLoading(false)
      setPopupMess(true)
    }
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  useEffect(() => {
    const timer = setTimeout(() => {
      setPopupMess(false)
    }, 1500);

    return () => { clearTimeout(timer) }
  }, [state])

  const tableHead = ["User", "Email", "Role", "Bookings", "Trips", "Joined At", "Operations"]

  if (isLoading) {
    return (
      <div className="h-dvh w-full">
        <div className="absolute-center">
          <Spinear />
        </div>
      </div>
    )
  }

  return (
    <div className='relative min-h-dvh'>
      {delLoading && (
        <Loader
          text={"Deleting"}
        />
      )}
      {popupMess && (
        <Popup
          code={state.code}
          message={state.message}
        />
      )}
      <div className="flex-between w-full flex-col sm:flex-row px-5">
        <Header
          title={`users managment`}
          description={"you have all access on users ,manage ,add ,delete ,sort ,filter etc..."}
        />
        <Button
          title="add new user"
          classContainer="bg-primary-200 rounded-md text-white flex-center gap-1.5 hover:bg-primary-400 whitespace-nowrap justify-center"
          leftIcon={<Plus size={19} />}
          topClass={"sm:w-fit shadow-100 rounded-lg"}
          func={addUser}
        />
      </div>

      {errorMess && (
        <div className="w-full h-full overflow-hidden">
          <div className="absolute-center">
            <p className="text-red-200 font-bold text-xl font-recursive">
              {errorMess}
            </p>
          </div>
        </div>
      )}

      {users && (
        <div className="mt-5 px-5 w-full">
          <div className="w-full bg-white p-3 rounded-lg shadow-100 overflow-x-auto">
            <table className='w-full table-auto border-separate border-spacing-y-1.5'>
              <thead className='bg-dark-100 text-white'>
                <tr className='text-white'>
                  {tableHead.map((items, idx) => (
                    <th
                      key={idx}
                      className="px-3 py-2.5 font-semibold font-karla text-left first:rounded-l-md last:rounded-r-md"
                      scope='row'
                    >
                      {items}
                    </th>
                  ))}
                </tr>
              </thead>

              <tbody>
                {users.map((user) => (
                  <tr
                    key={user._id}
                    className="duration-2 hover:bg-ligh-50 w-full font-karla text-sm md:text-base text-gray-600"
                  >
                    <td className='py-1 px-3 rounded-l-lg'>
                      <div className="flex-center gap-1.5">
                        <img
                          src={user.image || "/assets/images/dummy.jpg"}
                          alt={user.name}
                          className='size-8 rounded-full object-cover hidden md:inline'
                          loading="lazy"
                        />
                        <span className="capitalize font-semibold">
                          {user.name}
                        </span>
                      </div>
                    </td>
                    <td className="py-1 px-3">
                      {user.email}
                    </td>
                    <td className='py-1 px-3'>
                      <span className={cn("py-1 px-3 w-fit rounded-full text-white", user.role === "admin" ? "bg-green-500" : "bg-pink-500")}>
                        {user.role}
                      </span>
                    </td>
                    <td className="py-1 px-3">
                      <span className={cn("py-1 px-3 text-white  rounded-full", user.booking.length <= 5 ? "bg-rose-500" : "bg-primary-100")}>
                        {user.booking.length}
                      </span>
                    </td>
                    <td className="py-1 px-3">
                      <span className={cn("py-1 px-3 text-white  rounded-full", user.trips.length <= 5 ? "bg-rose-500" : "bg-primary-100")}>
                        {user.trips.length}
                      </span>
                    </td>
                    <td className="py-1 px-3 text-sm font-semibold whitespace-nowrap">
                      {new Date(user.createdAt).toLocaleDateString("en-US", {
                        year: "numeric",
                        month: "long",
                        day: "numeric",
                      })}
                    </td>
                    <td className="py-1 px-3 rounded-r-lg text-center">
                      <button
                        className='p-1 rounded-full border border-red-300 text-red-500 cursor-pointer duration-2 hover:bg-red-500 hover:text-white'
                        onClick={() => delUser(user._id)}
                      >
                        <Trash2 size={18} />
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}
    </div>
  )
}

export default AllUsers