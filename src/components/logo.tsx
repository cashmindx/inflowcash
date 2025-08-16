// src/components/logo.tsx
import Image from 'next/image';

export function Logo() {
  return (
    <Image
      src="/inflowcash.jpg"
      width={40}
      height={40}
      alt="InFlowCash Logo"
      className="rounded-md"
    />
  );
}
