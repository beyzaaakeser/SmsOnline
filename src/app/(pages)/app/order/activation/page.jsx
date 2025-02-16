'use client';
import Title from '@/app/components/SectionsTitle';
import { useAppContext } from '@/app/redux/AppProvider';
import ProgressBar from '../../components/ProgressBar';

export default function ActivationPage() {
  const { state } = useAppContext();
  console.log(state);

  return (
    <div>
      <Title
        title={'All set'}
        info={'Activate your number now'}
        titleDesign={'lg:text-3xl'}
      />

      <ProgressBar title={'Steps 3/3'} designs={'w-3/3'} />
      <h1>Selected Country: {state.country?.title}</h1>
      <h1>Selected Service: {state.service?.title}</h1>
    </div>
  );
}
