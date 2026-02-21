import { Component, type ErrorInfo, type ReactNode } from 'react';

interface Props {
    children?: ReactNode;
    fallback?: ReactNode;
}

interface State {
    hasError: boolean;
    error?: Error;
}

export default class ErrorBoundary extends Component<Props, State> {
    public state: State = {
        hasError: false
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
                <div
                    role="alert"
                    aria-live="assertive"
                    style={{ padding: '2rem', textAlign: 'center', color: '#ef4444' }}
                >
                    <h2>Something went wrong loading this section.</h2>
                    <p>Please try refreshing the page.</p>
                </div>
            );
        }

        return this.props.children;
    }
}
