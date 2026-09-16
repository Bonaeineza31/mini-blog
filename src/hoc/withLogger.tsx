import React, { useEffect, type ComponentType } from 'react';

// Higher-Order Component that logs when a component mounts and unmounts
export function withLogger<P extends object>(
  WrappedComponent: ComponentType<P>
): React.FC<P> {
  const componentName =
    WrappedComponent.displayName || WrappedComponent.name || 'Component';

  const WithLogger: React.FC<P> = (props) => {
    useEffect(() => {
      console.log(`[withLogger] ${componentName} component mounted`);

      return () => {
        console.log(`[withLogger] ${componentName} component unmounted`);
      };
    }, []);

    return <WrappedComponent {...props} />;
  };

  WithLogger.displayName = `WithLogger(${componentName})`;
  return WithLogger;
}
