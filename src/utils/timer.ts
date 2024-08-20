export function createCountdownTimer(durationInMinutes: number) {
  let durationInSeconds = durationInMinutes * 60; // Converte a duração em minutos para segundos

  function formatTime(seconds: number) {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;
    return `${minutes} minuto${minutes !== 1 ? 's' : ''} e ${remainingSeconds} segundo${remainingSeconds !== 1 ? 's' : ''}`;
  }

  return new Promise(resolve => {
    const intervalId = setInterval(() => {
      if (durationInSeconds <= 0) {
        clearInterval(intervalId);
        resolve('0 minutos e 0 segundos');
      } else {
        console.log(formatTime(durationInSeconds)); // Exibe a contagem regressiva no console
        durationInSeconds -= 1;
      }
    }, 1000);
  });
}
