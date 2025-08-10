'use client';

import React, { useEffect, useRef } from 'react';

// Icon Components for the four-column section
const BestInClassIcon = () => (
  <svg viewBox="0 0 24 24" className="w-full h-full fill-current stroke-current text-blue-500">
    <path stroke="none" d="M19.86 9.68c0.44-0.31 0.9-0.63 0.9-1.12c0-0.49-0.46-0.81-0.9-1.12c-0.23-0.16-0.57-0.4-0.6-0.54 c-0.03-0.15 0.17-0.51 0.31-0.77c0.26-0.47 0.53-0.95 0.32-1.37c-0.21-0.43-0.76-0.52-1.29-0.61c-0.29-0.05-0.69-0.11-0.79-0.23 C17.73 3.8 17.75 3.4 17.77 3.1c0.03-0.54 0.07-1.09-0.31-1.39c-0.37-0.3-0.9-0.14-1.42 0.01c-0.29 0.08-0.68 0.2-0.82 0.13 c-0.13-0.06-0.28-0.44-0.39-0.71c-0.2-0.5-0.42-1.02-0.89-1.13c-0.46-0.1-0.86 0.26-1.26 0.62c-0.23 0.2-0.53 0.48-0.69 0.48 c-0.16 0-0.47-0.28-0.69-0.48c-0.39-0.35-0.8-0.72-1.26-0.62C9.58 0.12 9.37 0.64 9.16 1.14C9.05 1.42 8.9 1.79 8.77 1.85 C8.63 1.92 8.24 1.8 7.95 1.72C7.44 1.57 6.91 1.42 6.54 1.71C6.16 2.01 6.2 2.56 6.23 3.1C6.25 3.4 6.27 3.8 6.18 3.92 C6.09 4.04 5.69 4.1 5.39 4.15C4.86 4.24 4.31 4.33 4.11 4.76C3.9 5.18 4.17 5.66 4.43 6.13C4.58 6.39 4.78 6.75 4.74 6.9 c-0.03 0.14-0.37 0.38-0.6 0.54c-0.44 0.31-0.9 0.63-0.9 1.12c0 0.49 0.46 0.81 0.9 1.12c0.23 0.16 0.57 0.4 0.6 0.54 c0.03 0.15-0.17 0.51-0.31 0.77c-0.26 0.47-0.53 0.95-0.32 1.37c0.21 0.43 0.76 0.52 1.29 0.61c0.29 0.05 0.69 0.11 0.79 0.23 c0.09 0.12 0.07 0.52 0.05 0.82c-0.03 0.54-0.07 1.09 0.31 1.39c0.15 0.12 0.32 0.16 0.5 0.17c0 0.01-0.01 0.02-0.01 0.03 c-0.59 1.71-1.37 3.34-2.33 4.87c-0.06 0.1-0.07 0.23-0.01 0.34c0.06 0.11 0.18 0.17 0.3 0.16c0.89-0.03 1.8-0.11 2.7-0.24 c0.37 0.82 0.71 1.68 1 2.55c0.04 0.12 0.15 0.21 0.27 0.22c0.13 0.02 0.25-0.04 0.32-0.15c0.7-1.12 1.34-2.3 1.88-3.51 c0.47 1.36 1.04 2.69 1.7 3.97c0.06 0.11 0.17 0.18 0.29 0.18c0 0 0.01 0 0.01 0c0.13 0 0.24-0.08 0.29-0.2 c0.36-0.84 0.77-1.67 1.21-2.46c0.89 0.2 1.79 0.35 2.67 0.46c0.12 0.01 0.24-0.04 0.31-0.14c0.07-0.1 0.08-0.23 0.02-0.34 c-0.98-1.88-1.7-3.89-2.14-5.97c-0.01-0.03-0.01-0.06-0.02-0.09c0.17 0.03 0.37 0.09 0.53 0.13c0.51 0.15 1.04 0.31 1.42 0.01 c0.37-0.3 0.34-0.85 0.31-1.39c-0.02-0.3-0.04-0.71 0.05-0.82c0.09-0.12 0.49-0.18 0.79-0.23c0.53-0.09 1.08-0.18 1.29-0.61 c0.2-0.42-0.06-0.91-0.32-1.37c-0.15-0.26-0.35-0.62-0.31-0.77C19.29 10.08 19.63 9.84 19.86 9.68z M16.81 21.07 c-0.74-0.11-1.49-0.25-2.23-0.42c-0.14-0.03-0.29 0.03-0.36 0.16c-0.39 0.68-0.75 1.38-1.08 2.1c-0.64-1.31-1.18-2.68-1.61-4.08 c-0.04-0.13-0.16-0.23-0.3-0.23c-0.01 0-0.01 0-0.02 0c-0.13 0-0.25 0.08-0.3 0.2c-0.52 1.25-1.13 2.46-1.82 3.62 c-0.27-0.74-0.57-1.47-0.9-2.18c-0.06-0.13-0.2-0.21-0.35-0.19c-0.75 0.11-1.51 0.19-2.26 0.24c0.84-1.41 1.53-2.92 2.07-4.47 c0.04-0.11 0.07-0.22 0.11-0.33c0.06-0.02 0.13-0.04 0.19-0.05c0.29-0.08 0.68-0.2 0.82-0.13c0.13 0.06 0.28 0.44 0.39 0.71 c0.2 0.5 0.42 1.02 0.89 1.13c0.46 0.1 0.86-0.26 1.26-0.62c0.23-0.2 0.53-0.48 0.69-0.48c0.16 0 0.47 0.28 0.69 0.48 c0.39 0.35 0.8 0.72 1.26 0.62c0.47-0.11 0.68-0.62 0.89-1.13c0.03-0.08 0.07-0.18 0.11-0.27C15.36 17.59 15.98 19.37 16.81 21.07z M19 11.31c0.13 0.23 0.36 0.65 0.31 0.76c-0.06 0.12-0.52 0.2-0.8 0.24c-0.46 0.08-0.94 0.15-1.19 0.47 c-0.25 0.32-0.22 0.8-0.19 1.27c0.02 0.26 0.05 0.75-0.06 0.83c-0.1 0.08-0.57-0.05-0.82-0.13c-0.45-0.13-0.92-0.27-1.29-0.09 c-0.36 0.17-0.54 0.62-0.72 1.05c-0.11 0.26-0.29 0.7-0.42 0.73c-0.12 0.03-0.48-0.29-0.67-0.46c-0.36-0.32-0.72-0.65-1.13-0.65 c-0.41 0-0.78 0.33-1.13 0.65c-0.19 0.17-0.55 0.49-0.67 0.46c-0.14-0.03-0.32-0.47-0.42-0.73c-0.18-0.43-0.36-0.88-0.72-1.05 c-0.12-0.06-0.26-0.08-0.4-0.08c-0.28 0-0.59 0.09-0.89 0.18c-0.25 0.07-0.72 0.21-0.82 0.13c-0.1-0.08-0.08-0.57-0.06-0.83 c0.03-0.47 0.06-0.96-0.19-1.27c-0.25-0.31-0.73-0.39-1.19-0.47c-0.28-0.05-0.74-0.12-0.8-0.24C4.64 11.96 4.88 11.54 5 11.31 c0.23-0.41 0.47-0.84 0.38-1.24C5.3 9.69 4.9 9.41 4.52 9.14C4.29 8.98 3.9 8.7 3.9 8.56c0-0.14 0.39-0.42 0.62-0.58 C4.9 7.71 5.3 7.43 5.39 7.05C5.48 6.65 5.24 6.22 5 5.81C4.88 5.58 4.64 5.16 4.7 5.04c0.06-0.12 0.52-0.2 0.8-0.24 C5.97 4.72 6.45 4.64 6.7 4.33c0.25-0.32 0.22-0.8 0.19-1.27C6.87 2.8 6.84 2.31 6.95 2.23c0.1-0.08 0.57 0.05 0.82 0.13 c0.45 0.13 0.92 0.27 1.29 0.09C9.42 2.27 9.6 1.83 9.77 1.39c0.11-0.26 0.29-0.7 0.42-0.73c0.12-0.03 0.48 0.29 0.67 0.46 c0.36 0.32 0.72 0.65 1.13 0.65c0.41 0 0.78-0.33 1.13-0.65c0.19-0.17 0.55-0.49 0.67-0.46c0.14 0.03 0.32 0.47 0.42 0.73 c0.18 0.43 0.36 0.88 0.72 1.05c0.36 0.18 0.83 0.04 1.29-0.09c0.25-0.07 0.72-0.21 0.82-0.13c0.1 0.08 0.08 0.57 0.06 0.83 c-0.03 0.47-0.06 0.96 0.19 1.27c0.25 0.31 0.73 0.39 1.19 0.47c0.28 0.05 0.74 0.12 0.8 0.24c0.06 0.12-0.18 0.54-0.31 0.76 c-0.23 0.41-0.47 0.84-0.38 1.24c0.09 0.39 0.48 0.66 0.86 0.93c0.23 0.16 0.62 0.44 0.62 0.58c0 0.14-0.39 0.42-0.62 0.58 c-0.38 0.27-0.77 0.54-0.86 0.93C18.52 10.47 18.76 10.9 19 11.31z" />
    <path stroke="none" d="M12 13.91c-2.95 0-5.35-2.4-5.35-5.35c0-2.95 2.4-5.35 5.35-5.35s5.35 2.4 5.35 5.35 C17.35 11.51 14.95 13.91 12 13.91z M12 3.87c-2.59 0-4.69 2.1-4.69 4.69c0 2.59 2.1 4.69 4.69 4.69c2.59 0 4.69-2.1 4.69-4.69 C16.69 5.98 14.59 3.87 12 3.87z" />
    <path stroke="none" d="M11.13 11.19c-0.17 0-0.34-0.07-0.47-0.19L8.95 9.29c-0.26-0.26-0.26-0.67 0-0.93 c0.26-0.26 0.67-0.26 0.93 0l1.24 1.24l2.98-2.98c0.26-0.26 0.67-0.26 0.93 0c0.26 0.26 0.26 0.67 0 0.93L11.59 11 C11.47 11.12 11.3 11.19 11.13 11.19z" />
  </svg>
);
const LocalWaterExpertIcon = () => (
  <svg viewBox="0 0 24 24" className="w-full h-full fill-current stroke-current text-blue-500">
    <path fill="none" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="10" d="M17.59 7.65 c0.45 0 0.51 0.28 0.51 0.28c-0.04 1.19-0.7 2.56-1.35 3.07c0 0-1.47 4.06-4.36 4.06c-2.89 0-4.36-4.06-4.36-4.06 c-0.65-0.51-1.31-1.88-1.35-3.07c0 0 0.05-0.28 0.51-0.28" strokeWidth="0.5"></path>
    <path fill="none" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="10" d="M13.17 1.34V1.29 c0-0.44-0.35-0.79-0.79-0.79h0c-0.44 0-0.79 0.35-0.79 0.79v0.05c-2.89-0.11-4.92 2.5-4.41 6.3c0 0 1.91-1.88 5.2-1.88 c3.3 0 5.2 1.88 5.2 1.88C18.09 3.85 16.06 1.23 13.17 1.34z" strokeWidth="0.5"></path>
    <path fill="none" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="10" d="M12.38 7.74 c-1.41 0-2.49 1.21-3.52 1.21c-1.52 0-1.69-1-1.69-1V7.65" strokeWidth="0.5"></path>
    <path fill="none" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="10" d="M12.38 7.74 c1.41 0 2.49 1.21 3.52 1.21c1.52 0 1.69-1 1.69-1V7.65" strokeWidth="0.5"></path>
    <path fill="none" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="10" d="M12.38 17.89 c0 0-1.93 0.2-3.46-2.32l-1.34 1.34l1.34 3.29C8.98 20.42 10.99 18.66 12.38 17.89" strokeWidth="0.5"></path>
    <path fill="none" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="10" d="M12.38 17.89 c0 0 1.93 0.2 3.46-2.32l1.34 1.34l-1.34 3.29C15.79 20.42 13.78 18.66 12.38 17.89" strokeWidth="0.5"></path>
    <path fill="none" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="10" d="M7.59 16.92 c-2.32 0.51-4.06 2.57-4.06 5.05v1.53" strokeWidth="0.5"></path>
    <path fill="none" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="10" d="M17.18 16.92 c2.32 0.51 4.06 2.57 4.06 5.05v1.53" strokeWidth="0.5"></path>
    <line fill="none" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="10" x1="14.64" y1="22.92" x2="18.36" y2="22.92" strokeWidth="0.5"></line>
  </svg>
);
const HighlyRatedIcon = () => (
  <svg viewBox="0 0 24 24" className="w-full h-full fill-current stroke-current text-blue-500">
    <path stroke="none" d="M4.05 11.27l-1.09-0.16l-0.5-1C2.41 9.99 2.3 9.92 2.17 9.92c0 0 0 0 0 0c-0.13 0-0.24 0.07-0.3 0.18l-0.49 0.98l-1.11 0.16 c-0.13 0.02-0.23 0.1-0.27 0.22c-0.04 0.12-0.01 0.25 0.08 0.34l0.79 0.77l-0.19 1.1C0.68 13.81 0.73 13.93 0.83 14 c0.1 0.07 0.24 0.08 0.35 0.03l0.97-0.51l0.99 0.52c0.05 0.03 0.1 0.04 0.15 0.04c0.07 0 0.14-0.02 0.19-0.06 c0.1-0.07 0.15-0.2 0.13-0.32l-0.19-1.08l0.8-0.78c0.09-0.09 0.12-0.22 0.08-0.34C4.28 11.37 4.17 11.29 4.05 11.27z M3.11 12.37 c-0.06 0.06-0.09 0.15-0.08 0.24l0.17 1.02l-0.93-0.49c-0.04-0.02-0.08-0.03-0.13-0.03c-0.04 0-0.09 0.01-0.13 0.03l-0.91 0.48 l0.18-1.04c0.02-0.09-0.01-0.18-0.08-0.24l-0.74-0.72l1.04-0.15c0.09-0.01 0.16-0.07 0.2-0.15l0.46-0.93l0.47 0.95 c0.04 0.08 0.12 0.13 0.2 0.15l1.02 0.15L3.11 12.37z" />
    <path stroke="none" d="M8.97 11.27l-1.09-0.16l-0.5-1c-0.06-0.11-0.17-0.18-0.3-0.18s-0.24 0.07-0.3 0.18l-0.49 0.98L5.2 11.25 c-0.13 0.02-0.23 0.1-0.27 0.22c-0.04 0.12-0.01 0.25 0.08 0.34l0.79 0.77l-0.19 1.1C5.59 13.81 5.64 13.93 5.75 14 c0.1 0.07 0.24 0.08 0.35 0.03l0.97-0.51l0.99 0.52c0.05 0.03 0.1 0.04 0.15 0.04c0.07 0 0.14-0.02 0.19-0.06 c0.1-0.07 0.15-0.2 0.13-0.32l-0.19-1.08l0.8-0.78c0.09-0.09 0.12-0.22 0.08-0.34C9.19 11.37 9.09 11.29 8.97 11.27z M8.03 12.37 c-0.06 0.06-0.09 0.15-0.08 0.24l0.17 1.02l-0.93-0.49c-0.04-0.02-0.08-0.03-0.13-0.03c-0.04 0-0.09 0.01-0.13 0.03l-0.91 0.48 l0.18-1.04c0.02-0.09-0.01-0.18-0.08-0.24l-0.74-0.72l1.04-0.15c0.09-0.01 0.16-0.07 0.2-0.15l0.46-0.93l0.47 0.95 c0.04 0.08 0.12 0.13 0.2 0.15l1.02 0.15L8.03 12.37z" />
    <path stroke="none" d="M13.88 11.27l-1.09-0.16l-0.5-1c-0.06-0.11-0.17-0.18-0.3-0.18c-0.13 0-0.24 0.07-0.3 0.18l-0.49 0.98l-1.11 0.16 c-0.13 0.02-0.23 0.1-0.27 0.22c-0.04 0.12-0.01 0.25 0.08 0.34l0.79 0.77l-0.19 1.1c-0.02 0.12 0.03 0.25 0.13 0.32 c0.1 0.07 0.24 0.08 0.35 0.03l0.97-0.51l0.99 0.52c0.05 0.03 0.1 0.04 0.15 0.04c0.07 0 0.14-0.02 0.19-0.06 c0.1-0.07 0.15-0.2 0.13-0.32l-0.19-1.08l0.8-0.78c0.09-0.09 0.12-0.22 0.08-0.34C14.11 11.37 14.01 11.29 13.88 11.27z M12.94 12.37c-0.06 0.06-0.09 0.15-0.08 0.24l0.17 1.02l-0.93-0.49c-0.04-0.02-0.08-0.03-0.13-0.03c-0.04 0-0.09 0.01-0.13 0.03 l-0.91 0.48l0.18-1.04c0.02-0.09-0.01-0.18-0.08-0.24l-0.74-0.72l1.04-0.15c0.09-0.01 0.16-0.07 0.2-0.15l0.46-0.93l0.47 0.95 c0.04 0.08 0.12 0.13 0.2 0.15l1.02 0.15L12.94 12.37z" />
    <path stroke="none" d="M18.8 11.27l-1.09-0.16l-0.5-1c-0.06-0.11-0.17-0.18-0.3-0.18c-0.13 0-0.24 0.07-0.3 0.18l-0.49 0.98l-1.11 0.16 c-0.13 0.02-0.23 0.1-0.27 0.22c-0.04 0.12-0.01 0.25 0.08 0.34l0.79 0.77l-0.19 1.1c-0.02 0.12 0.03 0.25 0.13 0.32 c0.1 0.07 0.24 0.08 0.35 0.03l0.97-0.51l0.99 0.52c0.05 0.03 0.1 0.04 0.15 0.04c0.07 0 0.14-0.02 0.19-0.06 c0.1-0.07 0.15-0.2 0.13-0.32l-0.19-1.08l0.8-0.78c0.09-0.09 0.12-0.22 0.08-0.34C19.03 11.37 18.93 11.29 18.8 11.27z M17.86 12.37 c-0.06 0.06-0.09 0.15-0.08 0.24l0.17 1.02l-0.93-0.49c-0.04-0.02-0.08-0.03-0.13-0.03c-0.04 0-0.09 0.01-0.13 0.03l-0.91 0.48 l0.18-1.04c0.02-0.09-0.01-0.18-0.08-0.24l-0.74-0.72l1.04-0.15c0.09-0.01 0.16-0.07 0.2-0.15l0.46-0.93l0.47 0.95 c0.04 0.08 0.11 0.13 0.2 0.15l1.02 0.15L17.86 12.37z" />
    <path stroke="none" d="M23.98 11.49c-0.04-0.12-0.14-0.21-0.27-0.22l-1.09-0.16l-0.5-1c-0.06-0.11-0.17-0.18-0.3-0.18c-0.13 0-0.24 0.07-0.3 0.18 l-0.49 0.98l-1.11 0.16c-0.13 0.02-0.23 0.1-0.27 0.22c-0.04 0.12-0.01 0.25 0.08 0.34l0.79 0.77l-0.19 1.1 c-0.02 0.12 0.03 0.25 0.13 0.32c0.1 0.07 0.24 0.08 0.35 0.03l0.97-0.51l0.99 0.52c0.05 0.03 0.1 0.04 0.15 0.04 c0.07 0 0.14-0.02 0.19-0.06c0.1-0.07 0.15-0.2 0.13-0.32l-0.19-1.08l0.8-0.78C23.99 11.74 24.02 11.61 23.98 11.49z M22.78 12.37 c-0.06 0.06-0.09 0.15-0.08 0.24l0.17 1.02l-0.93-0.49c-0.04-0.02-0.08-0.03-0.13-0.03c-0.04 0-0.09 0.01-0.13 0.03l-0.91 0.48 l0.18-1.04c0.01-0.09-0.01-0.18-0.08-0.24l-0.74-0.72l1.04-0.15c0.09-0.01 0.16-0.07 0.2-0.15l0.46-0.93l0.47 0.95 c0.04 0.08 0.12 0.13 0.2 0.15l1.02 0.15L22.78 12.37z" />
  </svg>
);
const CertifiedIcon = () => (
  <svg viewBox="0 0 24 24" className="w-full h-full fill-current stroke-current text-blue-500">
    <path stroke="none" d="M17.53 7.38h-5.62c-0.22 0-0.39-0.17-0.39-0.39c0-0.22 0.17-0.39 0.39-0.39h5.62c0.22 0 0.39 0.17 0.39 0.39 C17.93 7.21 17.75 7.38 17.53 7.38z" />
    <path stroke="none" d="M17.53 11.47h-5.62c-0.22 0-0.39-0.17-0.39-0.39c0-0.22 0.17-0.39 0.39-0.39h5.62c0.22 0 0.39 0.17 0.39 0.39 C17.93 11.3 17.75 11.47 17.53 11.47z" />
    <path stroke="none" d="M17.53 15.56h-5.62c-0.22 0-0.39-0.17-0.39-0.39c0-0.22 0.17-0.39 0.39-0.39h5.62c0.22 0 0.39 0.17 0.39 0.39 C17.93 15.39 17.75 15.56 17.53 15.56z" />
    <path stroke="none" d="M17.53 19.65h-5.62c-0.22 0-0.39-0.17-0.39-0.39c0-0.22 0.17-0.39 0.39-0.39h5.62c0.22 0 0.39 0.17 0.39 0.39 C17.93 19.48 17.75 19.65 17.53 19.65z" />
    <path stroke="none" d="M18.97 2.25h-3.04v-0.3c0-0.26-0.21-0.47-0.47-0.47H14.1c-0.32 0-0.61-0.2-0.72-0.5C13.17 0.41 12.63 0.01 12 0 c-0.63 0.01-1.17 0.41-1.38 0.98c-0.11 0.3-0.4 0.5-0.72 0.5H8.54c-0.26 0-0.47 0.21-0.47 0.47v0.3H5.03c-0.98 0-1.79 0.8-1.79 1.79 v18.18c0 0.98 0.8 1.79 1.79 1.79h13.93c0.98 0 1.79-0.8 1.79-1.79V4.04C20.75 3.05 19.95 2.25 18.97 2.25z M12 0.75 c0.28 0.01 0.51 0.24 0.51 0.53c0 0.29-0.23 0.52-0.51 0.53c-0.28-0.01-0.51-0.24-0.51-0.53C11.49 1 11.72 0.76 12 0.75z M19.93 22.21c0 0.53-0.43 0.97-0.97 0.97H5.03c-0.53 0-0.97-0.43-0.97-0.97V4.04c0-0.53 0.43-0.97 0.97-0.97h3.04v0.21 c0 0.26 0.21 0.47 0.47 0.47H12h3.46c0.26 0 0.47-0.21 0.47-0.47V3.07h3.04c0.53 0 0.97 0.43 0.97 0.97V22.21z" />
    <path stroke="none" d="M8.87 12.64H6.54c-0.22 0-0.39-0.17-0.39-0.39V9.91c0-0.22 0.17-0.39 0.39-0.39h2.34c0.22 0 0.39 0.17 0.39 0.39v2.34 C9.26 12.46 9.09 12.64 8.87 12.64z M6.92 11.86h1.56V10.3H6.92V11.86z" />
    <path stroke="none" d="M8.87 16.73H6.54c-0.22 0-0.39-0.17-0.39-0.39v-2.34c0-0.22 0.17-0.39 0.39-0.39h2.34c0.22 0 0.39 0.17 0.39 0.39v2.34 C9.26 16.56 9.09 16.73 8.87 16.73z M6.92 15.95h1.56V14.4H6.92V15.95z" />
    <path stroke="none" d="M8.87 20.83H6.54c-0.22 0-0.39-0.17-0.39-0.39V18.1c0-0.22 0.17-0.39 0.39-0.39h2.34c0.22 0 0.39 0.17 0.39 0.39v2.34 C9.26 20.65 9.09 20.83 8.87 20.83z M6.92 20.05h1.56v-1.56H6.92V20.05z" />
    <path stroke="none" d="M8.87 8.55H6.54c-0.22 0-0.39-0.17-0.39-0.39V5.82c0-0.22 0.17-0.39 0.39-0.39h2.34c0.22 0 0.39 0.17 0.39 0.39v2.34 C9.26 8.37 9.09 8.55 8.87 8.55z M6.92 7.77h1.56V6.21H6.92V7.77z" />
  </svg>
);


// Main App component
export default function App() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [videoStatus, setVideoStatus] = React.useState('Loading...');

  useEffect(() => {
    const video = videoRef.current;
    if (!video) {
      setVideoStatus('Video element not found');
      return;
    }

    console.log('Video element found:', video);
    console.log('Video currentSrc:', video.currentSrc);
    console.log('Video readyState:', video.readyState);

    const handleLoadStart = () => {
      console.log('Video load started');
      setVideoStatus('Loading started...');
    };

    const handleLoadedData = () => {
      console.log('Video data loaded');
      setVideoStatus('Data loaded');
    };

    const handleLoadedMetadata = () => {
      console.log('Video metadata loaded');
      console.log('Video duration:', video?.duration);
      console.log('Video videoWidth:', video?.videoWidth);
      console.log('Video videoHeight:', video?.videoHeight);
      setVideoStatus('Metadata loaded');
    };

    const handleCanPlay = () => {
      console.log('Video can play');
      console.log('Video buffered ranges:', video?.buffered.length);
      setVideoStatus('Can play - attempting autoplay');
      // Try to autoplay when video can play
      if (video.paused) {
        video.play().then(() => {
          console.log('Autoplay successful');
          setVideoStatus('Playing');
        }).catch((error) => {
          console.error('Autoplay failed:', error);
          setVideoStatus(`Autoplay failed: ${error.message}`);
        });
      }
    };

    const handleError = (e: Event) => {
      console.error('Video error:', e);
      console.error('Video error details:', video.error);
      const errorMessages = {
        1: 'MEDIA_ERR_ABORTED: Aborted by user',
        2: 'MEDIA_ERR_NETWORK: Network error',
        3: 'MEDIA_ERR_DECODE: Decode error',
        4: 'MEDIA_ERR_SRC_NOT_SUPPORTED: Source not supported'
      };
      const errorCode = video.error?.code as keyof typeof errorMessages;
      const errorMsg = errorCode ? errorMessages[errorCode] : 'Unknown error';
      setVideoStatus(`Error: ${errorMsg}`);
    };

    video.addEventListener('loadstart', handleLoadStart);
    video.addEventListener('loadedmetadata', handleLoadedMetadata);
    video.addEventListener('loadeddata', handleLoadedData);
    video.addEventListener('canplay', handleCanPlay);
    video.addEventListener('error', handleError);

    // Check initial state
    if (video.readyState >= 3) {
      console.log('Video already ready, attempting play');
      video.play().catch((error) => {
        console.error('Initial play failed:', error);
        setVideoStatus(`Initial play failed: ${error.message}`);
      });
    }

    return () => {
      video.removeEventListener('loadstart', handleLoadStart);
      video.removeEventListener('loadedmetadata', handleLoadedMetadata);
      video.removeEventListener('loadeddata', handleLoadedData);
      video.removeEventListener('canplay', handleCanPlay);
      video.removeEventListener('error', handleError);
    };
  }, []);
  return (
    <div className="bg-white text-black font-sans">
      <main>
        {/* --- Hero Video Section --- */}
        <section className="relative h-[60vh] md:h-[80vh] text-white">
          {/* Test Background to see if video covers it */}
          <div className="absolute inset-0 bg-yellow-400 z-[1] flex items-center justify-center text-black text-xl font-bold">
            🟡 TEST BACKGROUND - Video should cover this
          </div>
          
          {/* Ultra-Simplified Video Element with Multiple Cloudinary Optimizations */}
          <video 
            ref={videoRef}
            controls
            muted 
            preload="auto"
            style={{ 
              position: 'absolute',
              top: 0,
              left: 0,
              width: '100%',
              height: '100%',
              objectFit: 'cover',
              border: '3px solid red',
              zIndex: 10
            }}
          >
            {/* Multiple Cloudinary optimizations - browser will try each in order */}
            <source src="https://res.cloudinary.com/dgq8orvtt/video/upload/f_auto,q_auto,c_scale,w_1920/loopedheadervideo50sec_ou70xy.mp4" type="video/mp4" />
            <source src="https://res.cloudinary.com/dgq8orvtt/video/upload/f_mp4,q_70,br_3000k/loopedheadervideo50sec_ou70xy.mp4" type="video/mp4" />
            <source src="https://res.cloudinary.com/dgq8orvtt/video/upload/f_webm,q_auto/loopedheadervideo50sec_ou70xy.webm" type="video/webm" />
            <source src="https://res.cloudinary.com/dgq8orvtt/video/upload/q_auto:low,f_auto/loopedheadervideo50sec_ou70xy.mp4" type="video/mp4" />
            <source src="https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4" type="video/mp4" />
            Your browser does not support video.
          </video>

          <div style={{ position: 'relative', zIndex: 20, height: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', backgroundColor: 'rgba(0, 0, 0, 0.3)', padding: '16px' }}>
            <h1 style={{ fontSize: '3rem', fontWeight: 'bold', textAlign: 'center', color: '#5bb1dc', textShadow: '1px 1px 1px rgba(0, 0, 0, 0.7)' }}>
              Start Improving Your Water Today
            </h1>
            <p style={{ marginTop: '16px', maxWidth: '512px', textAlign: 'center', fontSize: '1.25rem', textShadow: '0px 0px 2px rgba(0, 0, 0, 0.8)' }}>
              For over 50 years, Kinetico Water Systems have brought quality whole-home water treatment to homes across America.
            </p>
          </div>
        </section>

        {/* --- Water Testing Section --- */}
        <section className="py-16 px-4 md:px-8 lg:px-16">
          <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-blue-800 mb-6">Why Is Water Testing Important?</h2>
              <div className="space-y-4 text-gray-700">
                <p>The quality of your home's water goes beyond taste—it influences your health, protects your plumbing and appliances, and contributes to a more sustainable environment.</p>
                <p>By identifying and addressing water issues, you can enjoy cleaner, safer water while protecting your home and reducing waste. Some contaminants cause unpleasant tastes or odors, but many are invisible and undetectable without proper testing.</p>
                <p>That's why professional water testing is essential. Your local Kinetico water expert understands the common water concerns in your area. With a free in-home water test, they can quickly identify potential problems in 30 minutes or less.</p>
              </div>
            </div>
            <div>
              <img src="https://www.kinetico.com/media/dzydqdcc/watertest2.png" alt="Water Test" className="w-full h-auto rounded-lg" />
            </div>
          </div>
        </section>

        {/* --- CTA Banner --- */}
        <section className="relative py-24 text-center text-white bg-cover bg-center" style={{ backgroundImage: "url('https://www.kinetico.com/media/gvrli4qx/quality_banner.jpg')" }}>
          <div className="absolute inset-0 bg-black opacity-40"></div>
          <div className="relative z-10">
            <h2 className="text-4xl md:text-5xl font-bold">Give your Family the Water They deserve</h2>
            <button className="mt-8 bg-yellow-400 text-black font-bold py-3 px-8 rounded-full text-lg hover:bg-yellow-500 transition-colors">
              Improve Your Water Today!
            </button>
          </div>
        </section>

        {/* --- Explore Products Section --- */}
        <section className="py-20 px-4 md:px-8 lg:px-16 bg-gray-50">
          <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center md:text-left md:flex items-center gap-4">
              <img src="https://www.kinetico.com/media/rrui5so1/imgwatersofteners.jpeg" alt="Water Softeners" className="w-28 h-28 mx-auto md:mx-0 rounded-full object-cover" />
              <div>
                <span className="text-blue-500 text-3xl font-light uppercase">Explore</span>
                <h3 className="text-xl font-bold text-gray-800 mt-2">Explore Water Softeners</h3>
                <p className="text-gray-600 mt-2">A Kinetico Water Softener will provide your family with abundant clean, soft water on demand.</p>
              </div>
            </div>
            <div className="text-center md:text-left md:flex items-center gap-4">
              <img src="https://www.kinetico.com/media/vvsf0jku/imgk5drinkingwaterstation.jpeg" alt="Drinking Water Products" className="w-28 h-28 mx-auto md:mx-0 rounded-full object-cover" />
              <div>
                <span className="text-blue-500 text-3xl font-light uppercase">Explore</span>
                <h3 className="text-xl font-bold text-gray-800 mt-2">Explore Drinking Water Products</h3>
                <p className="text-gray-600 mt-2">Providing your family with fresh, clean great-tasting water without worry or concern.</p>
              </div>
            </div>
            <div className="text-center md:text-left md:flex items-center gap-4">
              <img src="https://www.kinetico.com/media/hy4dyqi3/carbonbackwash250x250.png" alt="Specialty Solutions" className="w-28 h-28 mx-auto md:mx-0 rounded-full object-cover" />
              <div>
                <span className="text-blue-500 text-3xl font-light uppercase">Explore</span>
                <h3 className="text-xl font-bold text-gray-800 mt-2">Explore Specialty Solutions</h3>
                <p className="text-gray-600 mt-2">Kinetico filters and systems are cleverly engineered to solve your specific water challenges.</p>
              </div>
            </div>
          </div>
        </section>

        {/* --- Featured Pages Section --- */}
        <section className="py-16 px-4 md:px-8 lg:px-16">
            <div className="max-w-7xl mx-auto space-y-16">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                    <div className="relative">
                        <img src="https://www.kinetico.com/media/oy3fajzv/miafamilykcom.png" alt="American Made" className="rounded-lg w-full h-auto" />
                        <img src="https://www.kinetico.com/media/sarmrk4q/usalogo_trans1.png" alt="USA Logo" className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-48 h-auto opacity-20" />
                    </div>
                    <div className="text-center md:text-left">
                        <h2 className="text-3xl font-bold text-blue-800 mb-4">American Made Water Treatment</h2>
                        <p className="text-gray-700 mb-2">Built with American craftsmanship, Kinetico systems are designed to provide lasting benefits to homes.</p>
                        <p className="text-gray-700 mb-6">Experience water that tastes better, works better in your plumbing and appliances, and makes your skin and clothes feel better.</p>
                        <button className="border-2 border-pink-500 text-pink-500 font-bold py-2 px-6 rounded-md hover:bg-pink-500 hover:text-white transition-colors">Learn More</button>
                    </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                    <div className="order-2 md:order-1 text-center md:text-left">
                         <img src="https://www.kinetico.com/media/152lln51/wyws_logo_one-line_tm_trimmed.png" alt="Water Score" className="h-12 mb-4 mx-auto md:mx-0" />
                        <p className="text-gray-700 mb-4">Many things affect your Water Score: water hardness, chlorine levels, contaminants, use of a water filter, and so much more.</p>
                        <img src="https://www.kinetico.com/media/260473/scale.png" alt="Water score scale" className="w-full max-w-md mx-auto md:mx-0 mb-6" />
                        <button className="border-2 border-pink-500 text-pink-500 font-bold py-2 px-6 rounded-md hover:bg-pink-500 hover:text-white transition-colors">Find My Water Score</button>
                    </div>
                     <div className="order-1 md:order-2">
                        <img src="https://www.kinetico.com/media/tysnwip3/ws-1.png" alt="Water Score illustration" className="rounded-lg w-full h-auto" />
                    </div>
                </div>
            </div>
        </section>

        {/* --- Kinetico Difference Section --- */}
        <section>
            <div className="px-4 md:px-8 lg:px-16 pt-12">
                <div className="max-w-7xl mx-auto">
                    <h2 className="text-4xl md:text-5xl font-light text-blue-800">Kinetico Difference</h2>
                </div>
            </div>
            <div className="bg-blue-800 text-white mt-4 py-12 px-4 md:px-8 lg:px-16">
                <div className="max-w-7xl mx-auto">
                    <h4 className="text-3xl font-bold">Simply brilliant, brilliantly simple.</h4>
                    <p className="mt-4 text-lg max-w-4xl">Our water experts put their very best thinking into engineering smarter products to bring families like yours the very best water. That's why millions of people around the world look to Kinetico for water treatment solutions.</p>
                </div>
            </div>
        </section>

        {/* --- Stats Section --- */}
        <section className="py-20 px-4 md:px-8 lg:px-16">
            <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
                <div>
                    <h3 className="text-6xl font-light text-blue-500">95%</h3>
                    <p className="mt-2 text-lg text-gray-700">of Kinetico customers are extremely satisfied with their Kinetico system.</p>
                </div>
                 <div>
                    <h3 className="text-6xl font-light text-blue-500">95%</h3>
                    <p className="mt-2 text-lg text-gray-700">Kinetico customers would choose to purchase Kinetico again.</p>
                </div>
                 <div>
                    <h3 className="text-6xl font-light text-blue-500">1.2m</h3>
                    <p className="mt-2 text-lg text-gray-700">households trust Kinetico to provide high-quality water.</p>
                </div>
            </div>
        </section>

        {/* --- Testimonials Section --- */}
        <section className="px-4 md:px-8 lg:px-16 pb-20">
            <div className="max-w-3xl mx-auto text-center">
                <blockquote className="text-2xl italic text-blue-800">
                    "Great products and great product support. I've had Kinetico products for 35 years and wouldn't consider any other brand."
                </blockquote>
                <cite className="mt-4 block text-xl text-blue-900 not-italic">
                    <span className="font-bold">Carl and Kim R.</span> Howell, Michigan
                </cite>
            </div>
        </section>

        {/* --- Four Column Icons Section --- */}
        <section className="bg-blue-50 py-20 px-4 md:px-8 lg:px-16">
            <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12">
                <div className="text-center">
                    <div className="w-32 h-32 mx-auto mb-4"><BestInClassIcon /></div>
                    <h3 className="text-2xl font-medium text-gray-800 mb-2">Best In Class</h3>
                    <p className="text-gray-600">Kinetico is committed to develop new and innovative products to provide the best solution for you.</p>
                </div>
                <div className="text-center">
                    <div className="w-32 h-32 mx-auto mb-4"><LocalWaterExpertIcon /></div>
                    <h3 className="text-2xl font-medium text-gray-800 mb-2">Local Water Expert</h3>
                    <p className="text-gray-600">Kinetico water professionals are factory-trained and authorized to install and service Kinetico water systems.</p>
                </div>
                <div className="text-center">
                    <div className="w-32 h-32 mx-auto mb-4"><HighlyRatedIcon /></div>
                    <h3 className="text-2xl font-medium text-gray-800 mb-2">Highly Rated Systems</h3>
                    <p className="text-gray-600">Our products are thoughtfully designed based on consumer insights and experiences.</p>
                </div>
                <div className="text-center">
                    <div className="w-32 h-32 mx-auto mb-4"><CertifiedIcon /></div>
                    <h3 className="text-2xl font-medium text-gray-800 mb-2">Third Party Certified</h3>
                    <p className="text-gray-600">Kinetico uses independent 3rd party certification lab to provide you the best water for your home.</p>
                </div>
            </div>
        </section>

      </main>
    </div>
  );
}
