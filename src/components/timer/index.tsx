import useCountdown from '@/hook/useCountdown';

interface CountdownTimerProps {
  durationInMinutes: number;
  onComplete?: () => void;
}

const CountdownTimer = ({
  durationInMinutes,
  onComplete,
}: CountdownTimerProps) => {
  const timeString = useCountdown(durationInMinutes, onComplete);

  return <span>{timeString}</span>;
};

export default CountdownTimer;
