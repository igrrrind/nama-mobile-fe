'use client';

import { Component, ErrorInfo, ReactNode } from 'react';
import { Button } from '@/components/ui/button';

interface Props {
  children: ReactNode;
  fallback?: ReactNode;
}

interface State {
  hasError: boolean;
  error: Error | null;
}

export class ErrorBoundary extends Component<Props, State> {
  public state: State = {
    hasError: false,
    error: null,
  };

  public static getDerivedStateFromError(error: Error): State {
    return { hasError: true, error };
  }

  public componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.error('Uncaught error:', error, errorInfo);
  }

  public render() {
    if (this.state.hasError) {
      if (this.props.fallback) {
        return this.props.fallback;
      }

      return (
        <div className="p-4">
          <div className="text-center">
            <h2 className="text-xl font-bold mb-2">Đã xảy ra lỗi</h2>
            <p className="text-gray-600 mb-4">
              {this.state.error?.message || 'Đã xảy ra lỗi không xác định'}
            </p>
            <Button
              onClick={() => this.setState({ hasError: false, error: null })}
              className="bg-primary text-white px-4 py-2 rounded hover:bg-primary/90"
            >
              Thử lại
            </Button>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
} 