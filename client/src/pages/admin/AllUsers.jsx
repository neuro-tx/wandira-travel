import React from 'react'
import Button from '../../components/Button'
import { Plus } from 'lucide-react'
import Header from '../../components/Header'

const AllUsers = () => {
  const addUser = () => {}
  return (
    <div>
      <div className="flex-between w-full flex-col sm:flex-row">
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
    </div>
  )
}

export default AllUsers