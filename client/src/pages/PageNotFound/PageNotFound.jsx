import { memo } from "react";
import { Link } from "react-router-dom";
import { FaArrowLeft } from "react-icons/fa";
import Head from "../../components/Head/Head";

const PageNotFound = () => {
  return (
    <>
      <Head title="PageNotFound" />
      <div className="columns is-centered is-vcentered is-mobile mt-3">
        <div className="column is-full-mobile has-text-centered">
          <p className="content title is-1">Lost in space!?</p>
          <Link to="/" className="button is-medium is-link is-light">
            <span className="icon-text is-align-items-center">
              <span className="icon">
                <FaArrowLeft />
              </span>
              <span>Go to Home</span>
            </span>
          </Link>
        </div>
      </div>
    </>
  );
};

export default memo(PageNotFound);
