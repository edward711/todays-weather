function TodayWeatherDetailItem({ children }) {
  return (
    <div className="flex justify-between align-center px-5 border-t border-secondary py-2 first:pt-2">
      {children}
    </div>
  );
}

export default TodayWeatherDetailItem;
