import MaxWidthWrapper from "./MaxWidthWrapper";

const Navbar = () => {
  return <div className="sticky top-0 bg-white z-50 inset-x-0 h-16">
    <header className="relative bg-white">
      <MaxWidthWrapper >
        <div className="border-b boder-gray-200">
          <div className="flex h-16 items-center">
            {/* TODO: Mobile nav */}
          </div>
        </div>
      </MaxWidthWrapper>
    </header>
  </div>;
};

export default Navbar;
