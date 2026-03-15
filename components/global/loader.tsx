import { IconFidgetSpinnerFilled } from '@tabler/icons-react'

const Loader = () => {
  return (
     <div className="w-screen h-screen flex items-center flex-col justify-center">
            <IconFidgetSpinnerFilled className=" animate-spin size-7"/>
        </div>
  )
}

export default Loader
