import { Component, memo } from "react";

export default class ErrorBoundary extends Component {
  state = {
    hasError: false,
  };

  static getDerivedStateFromError(err) {
    console.error(err);
    return {
      hasError: true,
    };
  }

  componentDidCatch(err, errInfo) {
    console.error(err);
    console.error(errInfo);
  }

  render() {
    if (this.state.hasError) {
      return <ErrorPage />;
    }
    return this.props.children;
  }
}

const ErrorPage = memo(() => {
  return (
    <div className="columns is-centered is-vcentered is-mobile mt-3">
      <div className="column is-full-mobile">
        <p className="content has-text-centered title is-1">
          Oops! Looks like it is something from our side!
        </p>
      </div>
    </div>
  );
});
