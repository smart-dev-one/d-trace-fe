import { useState, useEffect } from 'react';

// Função que formata o tempo
function formatTime(seconds: number): string {
  const minutes = Math.floor(seconds / 60);
  const remainingSeconds = seconds % 60;
  return `${minutes} minuto${minutes !== 1 ? 's' : ''} e ${remainingSeconds} segundo${remainingSeconds !== 1 ? 's' : ''}`;
}

// Hook para contagem regressiva
function useCountdown(durationInMinutes: number, onComplete?: () => void): string {
  const [timeLeft, setTimeLeft] = useState<number>(durationInMinutes * 60);

  useEffect(() => {
    if (timeLeft <= 0) {
      if (onComplete) {
        onComplete();  // Chama a função quando o tempo atinge zero
      }
      return;
    }

    const intervalId = setInterval(() => {
      setTimeLeft((prevTime) => prevTime - 1);
    }, 1000);

    return () => clearInterval(intervalId);
  }, [timeLeft, onComplete]);

  return formatTime(timeLeft);
}

export default useCountdown;
