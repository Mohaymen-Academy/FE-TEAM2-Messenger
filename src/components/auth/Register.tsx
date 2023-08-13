import React from 'react'
import { TbCameraPlus } from 'react-icons/tb';
import ProfileImage from '../ui/ProfileImage';
import FloatingLabelInput from './input/FloatingLabelInput';
import { Button } from '../ui';
import { useNavigate } from 'react-router-dom';
import FileUploader from '../wrappers/FileUploader';

const Register = () => {
    const navigate = useNavigate();
  return (
    <div className="dark w-full h-full gap-4 flex flex-col items-center bg-primary p-8 rounded-2xl">
      <FileUploader accept='image/*'>

      <ProfileImage width={150} />
      </FileUploader>

      <div>
        <FloatingLabelInput borderWidth={30} label="نام" />
        <FloatingLabelInput borderWidth={80} label="نام خانوادگی" />
        </div>
        <Button
          onClick={() => {
            navigate("/chat");
          }}
          className="!bg-slate-800 hover:!bg-slate-900 !text-white w-full"
        >
          ثبت نام
        </Button>
    </div>
  );
}

export default Register