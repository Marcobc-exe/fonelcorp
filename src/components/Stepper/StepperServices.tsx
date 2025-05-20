import "./stepperServices.css";
import { Box } from "@mui/material";
import { StepperTopBar } from "./components/StepperTopBar/StepperTopBar";
import { useEffect, useRef, useState, type FC } from "react";
import { steps } from "../../const/const";
import { AllStepsCompleted } from "./components/AllStepsCompleted/AllStepsCompleted";
import { BottomSteperBar } from "./components/StepperBottomBar/StepperBottomBar";
import { useForm, type SubmitHandler } from "react-hook-form";
import { CurrentForm } from "./components/Forms/CurrentForm";
import type { InputsFormServices, ServiceCard } from "../../types/service";

type Props = {
  serviceSelected: ServiceCard | null;
  handleHideForm: () => void;
};

export const StepperServices: FC<Props> = ({ serviceSelected, handleHideForm }) => {
  const formRef = useRef<HTMLFormElement>(null);
  const { control, handleSubmit, reset } = useForm<InputsFormServices>({
    defaultValues: {
      owner: {
        name: "",
        email: "",
        phone: "",
      },
      vehichle: {
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
  console.log(completed)
  const totalSteps = () => steps.length;

  // ? return {number} amount of steps completed
  const completedSteps = () => Object.keys(completed).length;

  // ? return {boolean} if all steps are completed
  const allStepsCompleted = () => completedSteps() === totalSteps();
  const isLastStep = () => activeStep === totalSteps() - 1;
  const firstStepCompleted = () => steps.findIndex((_, i) => !(i in completed));

  const handleReset = () => {
    setActiveStep(0);
    setCompleted({});
    reset();
  };

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

  const handleComplete = () => {
    setCompleted({
      ...completed,
      [activeStep]: true,
    });
    handleNext();
  };

  const onSubmit: SubmitHandler<InputsFormServices> = (data: InputsFormServices) => {
    console.log('finish!?')
    console.log(formRef.current)
    console.log(data)
    handleComplete();
  }

  const handleOnSubmit = () => {
    handleSubmit(onSubmit)();
  }

  useEffect(() => {
    if (formRef.current){
      formRef.current.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  }, [activeStep]);

  return (
    <Box className={"container-services-stepper"}>
      <StepperTopBar
        completed={completed}
        activeStep={activeStep}
        handleHideForm={handleHideForm}
      />
      <>
        {allStepsCompleted() ? (
          <AllStepsCompleted handleReset={handleReset} />
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
              name={["owner", "vehichle", "appointment"]}
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
            />
          </Box>
        )}
      </>
    </Box>
  );
};
