import "./stepperServices.css";
import { Box } from "@mui/material";
import { StepperTopBar } from "./components/StepperTopBar/StepperTopBar";
import { useEffect, useRef, useState, type FC } from "react";
import { steps } from "../../const/const";
import { AllStepsCompleted } from "./components/AllStepsCompleted/AllStepsCompleted";
import { BottomSteperBar } from "./components/StepperBottomBar/StepperBottomBar";
import { useForm, type SubmitHandler } from "react-hook-form";
import { CurrentForm } from "./components/Forms/CurrentForm";
import type { FormDataMap, HandleInputsForm, InputsFormServices, ServiceCard } from "../../types/service";
// import emailjs from "@emailjs/browser";
// import { getEnvVariable } from "../../helper/helpers";
import { MotionBox } from "../MotionComponents/MuiMotion";

type Props = {
  serviceSelected: ServiceCard | null;
  handleModal: (value: boolean) => void;
  handleHideForm: () => void;
};

export const StepperServices: FC<Props> = ({ serviceSelected, handleModal, handleHideForm }) => {
  const formRef = useRef<HTMLFormElement>(null);
  const { 
    control, 
    handleSubmit, 
    getValues, 
    setError, 
    formState: { 
      errors,
    }, 
    clearErrors, 
  } = useForm<InputsFormServices>({
    defaultValues: {
      owner: {
        name: "",
        email: "",
        phone: "",
      },
      vehicle: {
        make: "",
        model: "",
        color: "",
        year: "",
        licensePlate: "",
      },
      appointment: {
        date: "",
        time: "",
        address: "",
      },
    },
  });
  const [activeStep, setActiveStep] = useState(0);
  const [completed, setCompleted] = useState<{
    [k: number]: boolean;
  }>({});

  const currentForm = ['owner', 'vehicle', 'appointment'][activeStep] as keyof FormDataMap;
  const totalSteps = () => steps.length;

  // ? return {number} amount of steps completed
  const completedSteps = () => Object.keys(completed).length;

  // ? return {boolean} if all steps are completed
  const allStepsCompleted = () => completedSteps() === totalSteps();
  const isLastStep = () => activeStep === totalSteps() - 1;
  const firstStepCompleted = () => steps.findIndex((_, i) => !(i in completed));

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleNext = () => {
    const newActiveStep =
      isLastStep() && !allStepsCompleted()
        ? // It's the last step, but not all steps have been completed,
          // find the first step that has been completed
          firstStepCompleted()
        : activeStep + 1;
    setActiveStep(newActiveStep);
  };

  const handleInputsDone = (form: HandleInputsForm) => Object.values(form).some(input => input.length > 0);

  const handleMessageError = () => {
    const isFormDone = handleInputsDone(getValues(currentForm));
  
    if (!isFormDone) {
      setError(currentForm, { message: "Please, complete the form before continue!" })
      return true
    }

    clearErrors(currentForm);
    return false
  }

  const handleComplete = () => {
    if (handleMessageError()) return;

    setCompleted({
      ...completed,
      [activeStep]: true,
    });
    handleNext();
  };

  const onSubmit: SubmitHandler<InputsFormServices> = async () => {
    if (!formRef.current) return;
    console.log(formRef.current)
    handleComplete();

    // try {
    //   const response = await emailjs.sendForm(
    //     getEnvVariable("EMAIL_SERVICE_ID"),
    //     getEnvVariable("EMAIL_TEMPLATE_ID"),
    //     formRef.current,
    //     getEnvVariable("EMAIL_PUBLIC_KEY")
    //   );

    //   console.log(response);
    //   // setSent(true);
    // } catch (error) {
    //   console.log(error);
    //   // setSent(false);
    // }
    /* 
      owner.name
      owner.email
      owner.phone
      vehicle.make
      vehicle.model
      vehicle.color
      vehicle.year
      vehicle.licensePlate
      appointment.date
      appointment.time
      appointment.address
    */
  }

  const handleOnSubmit = () => {
    if (handleMessageError()) return;
    handleSubmit(onSubmit)();
  }

  // auto-scroll
  useEffect(() => {
    if (formRef.current){
      formRef.current.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  }, [activeStep]);

  return (
    <MotionBox 
      className={"container-services-stepper"}
      initial={{ opacity: 0, x: 100 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: .8 }}
    >
      <StepperTopBar
        completed={completed}
        activeStep={activeStep}
      />
      <>
        {allStepsCompleted() ? (
          <AllStepsCompleted handleHideForm={handleHideForm} />
        ) : (
          <Box
            ref={formRef}
            component={'form'}
            onSubmit={handleSubmit(onSubmit)}
            sx={{ scrollMarginTop: "160px" }}
          >
            <CurrentForm
              control={control}
              activeStep={activeStep}
              serviceSelected={serviceSelected}
              name={["owner", "vehicle", "appointment"]}
              errors={errors}
            />
            <BottomSteperBar
              completed={completed}
              activeStep={activeStep}
              totalSteps={totalSteps}
              handleBack={handleBack}
              handleNext={handleNext}
              completedSteps={completedSteps}
              handleComplete={handleComplete}
              handleOnSubmit={handleOnSubmit}
              handleModal={handleModal}
            />
          </Box>
        )}
      </>
    </MotionBox>
  );
};
