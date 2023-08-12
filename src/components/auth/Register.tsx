import React from 'react'
import { TbCameraPlus } from 'react-icons/tb';
import ProfileImage from '../ui/ProfileImage';
import FloatingLabelInput from './input/FloatingLabelInput';
import { Button } from '../ui';
import { useNavigate } from 'react-router-dom';

const Register = () => {
    const navigate = useNavigate();
  return (
    <div className="dark w-full gap-4 flex flex-col bg-primary p-8 rounded-2xl">
     
        <ProfileImage width={200} />
      

      <FloatingLabelInput borderWidth={25} label="نام" />
      <FloatingLabelInput borderWidth={73} label="نام خانوادگی" />
      <Button
        onClick={() => {
          navigate("/chat");
        }}
        className="!bg-slate-800 hover:!bg-slate-900 !text-white"
      >
        ثبت نام
      </Button>
    </div>
  );
}

export default Register