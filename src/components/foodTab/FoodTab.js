import React from 'react';
import { Link } from 'react-router-dom';
import { BsHandbag } from 'react-icons/bs';
import { IoIosBeer } from 'react-icons/io';
import {GiMorgueFeet } from 'react-icons/gi';
// import { useParams } from 'react-router-dom';

 
const MobileTab = () => {

    // const { type } = useParams();

    // const [allTypes, setAllTypes] = useState([

      const allTypes = [
      {
        id: 'delivery',
        icon: <BsHandbag />,
        name: 'Delivery',
        isActive: 'false'
      },
      {
        id: 'night',
        icon: <IoIosBeer />,
        name: 'Night Life',
        isActive: 'false'
      },
      {
        id: 'dining',
        icon: <GiMorgueFeet />,
        name: 'Dining Out',
        isActive: 'false'
      }
    ]

    

    // useEffect(() => {
      // if (type) {
        // const updateTypes = MapTab()

      //   // setAllTypes(updateTypes);
      // }
    // }, [type])

    return (
        <>
        <div className='lg:hidden bg-white text-gray-500 p-3 border fixed bottom-0 z-10 w-full flex justify-between'>
                {
                  allTypes.map(item => (
                    <Link to={`/${item.id}`} key={item.id}>
                      <div  className={item.isActive ? 'flex flex-col items-center text-xl text-zomato-400 border-t-2 border-zomato-400' : 'flex flex-col items-center text-xl'}>
                      {item.icon}
                      <h5>{item.name}</h5>
                      </div>
                    </Link>
                  ))
                }
        </div>
        </>
    )
}

const FoodTab = () => {
  return (
    <>
      <div>
        <MobileTab />
      </div>
    </>
  )
}

export default FoodTab
