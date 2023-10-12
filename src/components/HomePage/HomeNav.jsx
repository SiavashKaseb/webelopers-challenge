import React from "react";
import { Link, NavLink } from "react-router-dom";
import { LogoImage } from "../config";

const HomeNav = ({ status, isAuth }) => {
  return (
    <div className="drawer z-50">
      <input id="my-drawer-3" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content flex flex-col">
        {/* Navbar */}
        <div
          className={`w-full navbar bg-black ${
            status ? "border-2 border-pinkColor " : ""
          }`}
        >
          <div className="flex-none lg:hidden">
            <label htmlFor="my-drawer-3" className="btn btn-square btn-ghost">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                className="inline-block w-6 h-6 stroke-current"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                ></path>
              </svg>
            </label>
          </div>
          <Link
            to={"/"}
            className=" px-2 mx-2 text-white hover:text-pinkColor transition-colors"
          >
            سوالیتو
          </Link>
          <div className="flex-none hidden lg:block">
            <ul className="menu menu-horizontal">
              <li className="hover:bg-none bg-none">
                <NavLink
                  className={({ isActive, isPending }) =>
                    isPending
                      ? "pending"
                      : isActive
                      ? "text-pinkColor border-y border-pinkColor"
                      : "hover:text-pinkColor"
                  }
                  to={"/questions"}
                >
                  سوالات
                </NavLink>
              </li>
              {isAuth ? (
                <li className="hover:bg-none bg-none">
                  <NavLink
                    className={({ isActive, isPending }) =>
                      isPending
                        ? "pending"
                        : isActive
                        ? "text-pinkColor border-y border-pinkColor"
                        : "hover:text-pinkColor"
                    }
                    to={"/accounts/dashboard"}
                  >
                    داشبورد
                  </NavLink>
                </li>
              ) : (
                <>
                  <li className="hover:bg-none bg-none">
                    <NavLink
                      className={({ isActive, isPending }) =>
                        isPending
                          ? "pending"
                          : isActive
                          ? "text-pinkColor border-y border-pinkColor"
                          : "hover:text-pinkColor"
                      }
                      to={"/signin"}
                    >
                      ورود
                    </NavLink>
                  </li>

                  <li className="hover:bg-none bg-none">
                    <NavLink
                      className={({ isActive, isPending }) =>
                        isPending
                          ? "pending"
                          : isActive
                          ? "text-pinkColor border-y border-pinkColor"
                          : "hover:text-pinkColor"
                      }
                      to={"/signup"}
                    >
                      ثبت نام
                    </NavLink>
                  </li>
                </>
              )}

              <li className="hover:bg-none bg-none">
                <NavLink
                  className={({ isActive, isPending }) =>
                    isPending
                      ? "pending"
                      : isActive
                      ? "text-pinkColor border-y border-pinkColor"
                      : "hover:text-pinkColor"
                  }
                  to={"/about-us"}
                >
                  درباره ما
                </NavLink>
              </li>
              <li className="hover:bg-none bg-none">
                <NavLink
                  className={({ isActive, isPending }) =>
                    isPending
                      ? "pending"
                      : isActive
                      ? "text-pinkColor border-y border-pinkColor"
                      : "hover:text-pinkColor"
                  }
                  to={"/contact-us"}
                >
                  تماس با ما
                </NavLink>
              </li>
              {isAuth ? (
                <li className="hover:bg-none bg-none">
                  <NavLink
                    className={({ isActive, isPending }) =>
                      isPending
                        ? "pending"
                        : isActive
                        ? "text-pinkColor border-y border-pinkColor"
                        : "hover:text-pinkColor"
                    }
                    to={"/"}
                  >
                    خروج
                  </NavLink>
                </li>
              ) : (
                ""
              )}
            </ul>
          </div>
          <Link to={"/"}>
            {" "}
            <img
              src={LogoImage}
              width={40}
              alt=""
              className="absolute left-5"
            />
          </Link>
        </div>
      </div>
      <div className="drawer-side">
        <label htmlFor="my-drawer-3" className="drawer-overlay"></label>
        <ul className="menu p-4 w-80 min-h-full bg-black border-2 border-pinkColor">
          <li className="hover:bg-none bg-none">
            <NavLink
              className={({ isActive, isPending }) =>
                isPending
                  ? "pending"
                  : isActive
                  ? "text-pinkColor border-y border-pinkColor"
                  : "hover:text-pinkColor"
              }
              to={"/"}
            >
              صفحه اصلی
            </NavLink>
            <NavLink
              className={({ isActive, isPending }) =>
                isPending
                  ? "pending"
                  : isActive
                  ? "text-pinkColor border-y border-pinkColor"
                  : "hover:text-pinkColor"
              }
              to={"/questions"}
            >
              سوالات
            </NavLink>
            {isAuth ? (
              <NavLink
                className={({ isActive, isPending }) =>
                  isPending
                    ? "pending"
                    : isActive
                    ? "text-pinkColor border-y border-pinkColor"
                    : "hover:text-pinkColor"
                }
                to={"/accounts/dashboard"}
              >
                داشبورد
              </NavLink>
            ) : (
              <>
                <NavLink
                  className={({ isActive, isPending }) =>
                    isPending
                      ? "pending"
                      : isActive
                      ? "text-pinkColor border-y border-pinkColor"
                      : "hover:text-pinkColor"
                  }
                  to={"/signin"}
                >
                  ورود
                </NavLink>
                <NavLink
                  className={({ isActive, isPending }) =>
                    isPending
                      ? "pending"
                      : isActive
                      ? "text-pinkColor border-y border-pinkColor"
                      : "hover:text-pinkColor"
                  }
                  to={"/signup"}
                >
                  ثبت نام
                </NavLink>
              </>
            )}
          </li>

          <li className="hover:bg-none bg-none">
            <NavLink
              className={({ isActive, isPending }) =>
                isPending
                  ? "pending"
                  : isActive
                  ? "text-pinkColor border-y border-pinkColor"
                  : "hover:text-pinkColor"
              }
              to={"/about-us"}
            >
              درباره ما
            </NavLink>
          </li>
          <li className="hover:bg-none bg-none text-center">
            <NavLink
              className={({ isActive, isPending }) =>
                isPending
                  ? "pending"
                  : isActive
                  ? "text-pinkColor border-y border-pinkColor"
                  : "hover:text-pinkColor text-center"
              }
              to={"/contact-us"}
            >
              تماس با ما
            </NavLink>
            {isAuth ? (
              <NavLink
                className={({ isActive, isPending }) =>
                  isPending
                    ? "pending"
                    : isActive
                    ? "text-pinkColor border-y border-pinkColor"
                    : "hover:text-pinkColor text-center"
                }
                to={"/"}
              >
                خروج
              </NavLink>
            ) : (
              ""
            )}
          </li>
        </ul>
      </div>
    </div>
  );
};

export default HomeNav;
