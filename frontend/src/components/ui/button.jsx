import { AbsoluteCenter, Button as ChakraButton, Span } from "@chakra-ui/react";
import { forwardRef } from "react";

export const Button = forwardRef(function Button(props, ref) {
  const { loading, disabled, loadingText, children, ...rest } = props;
  return (
    <ChakraButton disabled={loading || disabled} ref={ref} {...rest}>
      {loading && !loadingText ? (
        <>
          <Span opacity={0}>{children}</Span>
        </>
      ) : loading && loadingText ? (
        <>{loadingText}</>
      ) : (
        children
      )}
    </ChakraButton>
  );
});
