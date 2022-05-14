function TodayWeatherDetailItem({ children }) {
  return (
    <div className="flex justify-between align-center px-5 border-t border-secondary/25 py-2 first:pt-2">
      {children}
    </div>
  );
}

export default TodayWeatherDetailItem;
