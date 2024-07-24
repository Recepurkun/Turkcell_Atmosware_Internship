const ErrorDisplay = ({ error }) => {
  if (!error) return null; //hata yoksa hiç bir şey gösterme

  return <p>Error: {error}</p>; //hata varsa mesajı göster
};

export default ErrorDisplay;
