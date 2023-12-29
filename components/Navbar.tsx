import Link from "next/link";
import { Icons } from "./Icons";
import MaxWidthWrapper from "./MaxWidthWrapper";
import NavItems from "./NavItems";
import { buttonVariants } from "./ui/button";
import Cart from "./Cart";

const Navbar = () => {
  const user = null;
  return (
    <div className="sticky top-0 bg-white z-50 inset-x-0 h-16">
      <header className="relative bg-white">
        <MaxWidthWrapper>
          <div className="border-b boder-gray-200">
            <div className="flex h-16 items-center">
              {/* TODO: Mobile nav */}
              <div className="ml-4 flex lg:ml-0">
                <Link href="/">
                  <Icons.logo className="h-10 w-10" />
                </Link>
              </div>
              <div className="hidden lg:block ml-8 z-50 lg:self-stretch">
                <NavItems />
              </div>
              <div className="ml-auto flex items-center">
                <div className="hidden lg:flex lg:flex-1 lg:items-center lg:justify-end lg:space-x-6">
                  {!user && (
                    <Link
                      href="/sign-in"
                      className={buttonVariants({ variant: "ghost" })}
                    >
                      Sign In
                    </Link>
                  )}
                  {!user && <span className="h-6 w-px bg-gray-200" />}
                  {user ? (
                    <p> </p>
                  ) : (
                    <Link
                      className={buttonVariants({ variant: "ghost" })}
                      href="/sign-up"
                    >
                      Sign Up
                    </Link>
                  )}
                  {user && <span className="h-6 w-px bg-gray-200" />}
                  {!user && (
                    <div className="flex lg:ml-6">
                      <span className="h-6 w-px bg-gray-200" />
                    </div>
                  )}
                  <div className="ml-4 flow-root lg:ml-6">
                    <Cart />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </MaxWidthWrapper>
      </header>
    </div>
  );
};

export default Navbar;
