"use client";
import { Button } from "@/components/ui/button";
import { useState } from "react";

export default function Home() {
  const [count, setCount] = useState(0);
  const handleClick = () => {
    setCount(count + 1);
  };
  const handleClick2 = () => {
    setCount(count + 10);
  };
  if (count > 10) {
    return (
      <>
    <Button onClick={handleClick2}>Click me</Button>
      <p>{count}</p>
      </>
    );
  }
  return (
<div>
  <Button onClick={handleClick}>Click me</Button>
  <p>{count}</p>
</div>
  );
}
