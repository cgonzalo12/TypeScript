import { useEffect, useRef, useState } from "react";

// types
type LazyProps = { src: string };
type ImageNativeType = React.ImgHTMLAttributes<HTMLImageElement>;
type Props = LazyProps & ImageNativeType;
//

const LazyImage = ({ src, ...imgProps }: Props): JSX.Element => {
  const node = useRef<HTMLImageElement>(null);
  const [currentSrc, setsrc] = useState(
    "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzIwIiBoZWlnaHQ9IjMyMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB2ZXJzaW9uPSIxLjEiLz4="
  );

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          console.log("si");
          setsrc(src);
        }
      });
    });
    // observador observa el nodo
    observer.observe(node.current!);
    // desconectarnos del observador
    return () => observer.disconnect();
  }, [src]);

  //nuevo observador

  return (
    <>
      <img ref={node} src={currentSrc} {...imgProps} />
    </>
  );
};
export default LazyImage;
