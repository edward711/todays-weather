function Header({text}) {
  return (
    <header className="p-5">
      <div className="font-semibold text-lg">
        {text}
      </div>
    </header>
  );
}

export default Header;