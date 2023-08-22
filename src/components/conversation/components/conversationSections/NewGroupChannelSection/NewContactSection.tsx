import FloatingLabelInput from "@/components/auth/input/FloatingLabelInput";
import SectionContainer from "@/components/profile/components/SectionContainer";
import SectionHeader from "@/components/profile/components/SectionHeader";
import { Button } from "@/components/ui";
import FadeMotionWrapper from "@/components/wrappers/FadeMotionWrapper";
import useToastify from "@/hooks/useTostify";
import { queryClient } from "@/providers/queryClientProvider";
import { setSection } from "@/redux/Slices/conversationSlice";
import { createContact } from "@/services/api/contact";
import { getUserByPhone } from "@/services/api/user";
import { convertNumberToEN } from "@/utils/convertNumberToEN";
import { FieldValues, SubmitHandler, useForm, Controller } from "react-hook-form";
import { useMutation } from "react-query";
import { useDispatch } from "react-redux";

interface newContactSectionProps {}

const NewContactSection: React.FC<newContactSectionProps> = ({}) => {
  const dispatch = useDispatch();
  const toastify = useToastify();
  const { mutate: addContactMutation } = useMutation(createContact);

  const { register, handleSubmit, setValue, control} = useForm<FieldValues>({
    
    defaultValues: {
      phoneNumber: "",
      firstName: "",
      lastName: "",
    },
  });

  const handleKeyDown = (e, field) => {
    if (
      !(
        (e.key >= "0" && e.key <= "9") ||
        e.key === "Backspace" ||
        e.key === "Delete" ||
        e.key === "ArrowLeft" ||
        e.key === "ArrowRight"
      )
    ) {
      e.preventDefault();
      return;
    }
  };
  
  

  
  

  const onSubmit: SubmitHandler<FieldValues> = async (data) => {
    getUserByPhone(convertNumberToEN(data.phoneNumber))
      .then((res) => {
        addContactMutation(
          {
            contactId: res.data,
            firstName: data.firstName,
            lastName: data.lastName,
          },
          {
            onSuccess: () => {
              queryClient.invalidateQueries({
                queryKey: ["user", "current", "contacts"],
              });
              toastify.success("مخاطب جدید اضافه شد.");
              dispatch(setSection({ selectedState: "conversations" }));
              console.log(
                {
                  contactId: res.data,
                  firstName: data.firstName,
                  lastName: data.lastName,
                },
                "successided"
              );
            },
            onError: () => {
              toastify.error("مخاطب در لیست موجود است");
            },
          }
        );
      })
      .catch(() => {
        toastify.error("شماره وارد شده معتبر نمی باشد.");
        setValue("phoneNumber", "");
      });
  };

  return (
    <FadeMotionWrapper show={true}>
      <SectionContainer className="flex flex-col gap-10">
        <SectionHeader title="مخاطب جدید" />
        <div className="px-8 flex flex-col gap-4">
          <Controller
            name="phoneNumber"
            control={control}
            rules={{
              required: true,
              pattern: /^\d+$/,
            }}
            render={({ field }) => (
              <FloatingLabelInput
                type="tel"
                label="تلفن همراه"
                required
                register={register}
                formId="phoneNumber"
                onKeyDown={(e) => handleKeyDown(e, field)}
                
              />
            )}
          />

          <FloatingLabelInput
            type="text"
            label="نام"
            required
            register={register}
            formId="firstName"
          />

          <FloatingLabelInput
            type="text"
            label="نام خانوادگی (اختیاری)"
            register={register}
            formId="lastName"
          />

          <div className="flex gap-2">
            <Button
              onClick={handleSubmit(onSubmit)}
              className="w-full font-bold text-xl"
            >
              ایجاد مخاطب
            </Button>
            <Button
              onClick={() =>
                dispatch(setSection({ selectedState: "conversations" }))
              }
              className="!bg-btn-danger !text-white hover:!bg-btn-danger-hover w-full font-bold text-xl"
            >
              انصراف
            </Button>
          </div>
        </div>
      </SectionContainer>
    </FadeMotionWrapper>
  );
};

export default NewContactSection;
