import React, { useEffect, useState } from 'react';
import Header from '../../components/Header';
import Button from '../../components/Button';
import { Map, Telescope } from 'lucide-react';
import ComboBoxField from '../../components/ComboBoxField';
import {
  travelStyles,
  interests,
  groupTypes,
  countries,
  tripDurations
} from '../../constants/trip';
import { TRIP_API } from '../../apis/api';
import useAxios from '../../utils/useAxios';
import Popup from '../../components/Popup';
import { useNavigate } from "react-router"

const CreatTrip = () => {
  const [country, setCountry] = useState("");
  const [groupType, setGroupType] = useState("")
  const [interest, setInterest] = useState("")
  const [duration, setDuration] = useState("")
  const [style, setStyle] = useState("");
  const [genrating, setGenrating] = useState(false);
  const axiosInstance = useAxios();
  const [status, setStatus] = useState({});
  const [popupMess, setPopupMess] = useState(false);
  const navgiate = useNavigate();

  const genrateTrip = async () => {
    setGenrating(true);
    setPopupMess(false);
    try {
      const response = await axiosInstance.post(TRIP_API,
        JSON.stringify({
          country,
          groupType,
          interest,
          duration,
          style,
        })
      );
      setStatus({
        message: response.data.message,
        code: response.data.stateCode,
      })
    } catch (error) {
      console.log(error)
      setStatus({
        message: error.message,
      })
    } finally {
      setGenrating(false);
      setPopupMess(true);
    }
  }

  useEffect(() => {
    const timer = setTimeout(() => {
      setPopupMess(false);
      status.code === 201 ? navgiate("/admin/trips") : ""
    }, 2000);

    return () => clearTimeout(timer);
  }, [status])

  return (
    <div className='relative'>
      {genrating && (
        <Loader />
      )}
      {popupMess && (
        <Popup
          code={status.code}
          message={status.message}
        />
      )}
      <div className="flex-between w-full flex-col sm:flex-row">
        <Header
          title={`add new trip`}
          description={"View and generate AI travel plans"}
        />
        <Button
          title="create a trip"
          classContainer="bg-primary-200 rounded-md text-white flex-center gap-1.5 hover:bg-primary-400 whitespace-nowrap justify-center cursor-not-allowed"
          leftIcon={<Map size={19} />}
          topClass={"sm:w-fit shadow-100 rounded-lg selected-none opacity-40 pointer-events-none"}
        />
      </div>

      <div className="mt-5 max-w-4xl mx-auto p-5 rounded-lg shadow-100 bg-white">
        <form
          className='space-y-1.5'
          onSubmit={genrateTrip}
        >
          <ComboBoxField
            label="country"
            placeholder="select a country..."
            options={countries}
            onchange={(val) => setCountry(val)}
          />
          <ComboBoxField
            label="travel style"
            placeholder="Select your travel style"
            options={travelStyles}
            onchange={(val) => setStyle(val)}
          />
          <ComboBoxField
            label="duration"
            placeholder="select a duration time..."
            options={tripDurations}
            onchange={(val) => setDuration(val)}
          />
          <ComboBoxField
            label="interests"
            placeholder="Select your travel style"
            options={interests}
            onchange={(val) => setInterest(val)}
          />
          <ComboBoxField
            label="group types"
            placeholder="Select a group type"
            options={groupTypes}
            onchange={(val) => setGroupType(val)}
          />
        </form>

        <div className="mt-5 mx-7">
          <Button
            title="Genrate trip"
            classContainer="bg-primary-100 text-white rounded-lg flex-center justify-center gap-2 py-4 hover:bg-primary-400"
            leftIcon={<Telescope size={19} />}
            func={genrateTrip}
            type='submit'
          />
        </div>
      </div>
    </div>

  )
}

const Loader = () => {
  return (
    <div className="absolute h-screen w-full z-[999]">
      <div className="w-xs sm:w-sm h-40 bg-white absolute-center z-30 rounded-lg shadow-100">
        <div className="size-full flex-center justify-center gap-3 flex-col">
          <svg aria-hidden="true" class="w-8 h-8 text-ligh-50 animate-spin fill-primary-100" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor" /><path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentFill" /></svg>

          <p className="text-primary-300 special main-gradient select-none text-xl mt-2">Genrating...</p>
        </div>
      </div>
    </div>
  )
}

export default CreatTrip