import PropTypes from "prop-types";

const Layout = ({ children }) => {
  return (
    <div className="bg-white">
      <div className="h-full w-full max-h-full flex justify-center">
        <main className="max-w-[430px] smartPhone:max-w-[431px] w-full min-h-screen overflow-y-auto overflow-x-hidden relative font-PretendardRegular">
          {children}
        </main>
      </div>
    </div>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
