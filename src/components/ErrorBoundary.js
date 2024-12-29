// ErrorBoundary.js
import React, { Component } from 'react';
import { useRouteError } from 'react-router';
class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false, error: null };
  }

  static getDerivedStateFromError(error) {
    // Update state to trigger a re-render with fallback UI
    return { hasError: true, error };
  }

  componentDidCatch(error, info) {
    // Log error details for debugging
    console.error('ErrorBoundary caught an error:', error, info);
    err = useRouteError();
console.log(err);
  }

  render() {
    if (this.state.hasError) {
      // Fallback UI if an error is caught
      return <h1>Something went wrong. Please try again later.</h1>;
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
