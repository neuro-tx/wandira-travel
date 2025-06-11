import React from 'react';
import Header from '../../components/Header';
import { useAuth } from '../../contexts/shared/Auth';
import { Plus } from "lucide-react"
import Button from '../../components/Button'
import { useNavigate } from 'react-router';
import { staticItem } from '../../constants/dashboard';
import StaticBox from '../../components/StaticBox';

const Dashboard = () => {
  const { user } = useAuth();
  const navigate = useNavigate();
  const handleBtnClick = () => {
    navigate("/admin/create-trip")
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
          {staticItem.map((item, idx) => (
            <StaticBox
              key={idx}
              title={item.title}
              count={item.number}
              percent={item.percent}
              state={item.state}
              icon={item.icon}
            />
          ))}
        </div>
      </div>

    </div>
  )
}

export default Dashboard
