import { memo } from "react";

const Header = memo(function Header({ title }) {
  return (
    <>
      <h1>{title}</h1>
    </>
  );
});
export default Header;
