import { useState } from 'react';

export default function ImageWithFallback({ src, alt, className, fallback = `${import.meta.env.BASE_URL}warangal.jpg`, wrapperClassName = '' }) {
  const [imgSrc, setImgSrc] = useState(src || fallback);

  const handleError = () => {
    if (imgSrc !== fallback) {
      setImgSrc(fallback);
    }
  };

  return (
    <div className={`image-shell ${wrapperClassName}`.trim()}>
      <div className="image-backdrop" aria-hidden="true">
        <img src={imgSrc} alt="" className="image-backdrop-image" onError={handleError} />
      </div>
      <div className="image-foreground">
        <img src={imgSrc} alt={alt} className={className} onError={handleError} />
      </div>
    </div>
  );
}
