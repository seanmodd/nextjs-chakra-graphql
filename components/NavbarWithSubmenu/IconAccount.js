import { useColorMode, useColorModeValue as mode } from '@chakra-ui/react';

import React from 'react';

function IconAccount() {
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <>
      {colorMode === 'dark' ? (
        <svg xmlns="http://www.w3.org/2000/svg" width="211.65" height="211.66">
          <g fill="#8344ff">
            <path d="M107.305.01a105.968 105.968 0 00-107.3 107.3c.794 57.077 47.268 103.551 104.345 104.345a105.932 105.932 0 00107.29-107.291C210.856 47.278 164.382.803 107.305.01zm64.314 166.488a2.035 2.035 0 01-3.124-.163 63.223 63.223 0 00-16.458-15.054c-12.953-8.313-29.365-12.892-46.21-12.892s-33.257 4.579-46.21 12.892a63.208 63.208 0 00-16.458 15.049 2.035 2.035 0 01-3.124.163 89.2 89.2 0 01-23.749-59.137c-.829-49.507 39.794-90.944 89.321-91.066a89.492 89.492 0 0166.012 150.208z" />
            <path d="M105.829 48.85A34.609 34.609 0 0080.28 59.442c-6.446 6.833-9.666 16.28-8.939 26.419 1.475 19.969 16.947 36.249 34.488 36.249s32.982-16.28 34.488-36.243a34.176 34.176 0 00-8.995-26.364 34.547 34.547 0 00-25.493-10.653z" />
          </g>
        </svg>
      ) : (
        <svg xmlns="http://www.w3.org/2000/svg" width="211.65" height="211.66">
          <g fill="#8344ff">
            <path d="M107.305.01a105.968 105.968 0 00-107.3 107.3c.794 57.077 47.268 103.551 104.345 104.345a105.932 105.932 0 00107.29-107.291C210.856 47.278 164.382.803 107.305.01zm64.314 166.488a2.035 2.035 0 01-3.124-.163 63.223 63.223 0 00-16.458-15.054c-12.953-8.313-29.365-12.892-46.21-12.892s-33.257 4.579-46.21 12.892a63.208 63.208 0 00-16.458 15.049 2.035 2.035 0 01-3.124.163 89.2 89.2 0 01-23.749-59.137c-.829-49.507 39.794-90.944 89.321-91.066a89.492 89.492 0 0166.012 150.208z" />
            <path d="M105.829 48.85A34.609 34.609 0 0080.28 59.442c-6.446 6.833-9.666 16.28-8.939 26.419 1.475 19.969 16.947 36.249 34.488 36.249s32.982-16.28 34.488-36.243a34.176 34.176 0 00-8.995-26.364 34.547 34.547 0 00-25.493-10.653z" />
          </g>
        </svg>
      )}
    </>
  );
}

export default IconAccount;