import { ReactNode } from "react";

interface HeadersProps {
    image: {src: string, alt: string};
    children: ReactNode;
}

export default function CourseGoal({image, children}: HeadersProps) {
  return (
    <header>
        {/* <img src={image.src} alt={image.alt} /> */}
        <img {...image} />
        <h2>{children}</h2>
    </header>
    )
}