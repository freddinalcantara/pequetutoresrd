import { useEffect } from "react";

const AdBanner = () => {
  useEffect(() => {
    const timeout = setTimeout(() => {
      try {
        (window.adsbygoogle = window.adsbygoogle || []).push({});
      } catch (e) {
        console.error("Adsense error", e);
      }
    }, 500); // Pequeña espera para asegurar que el DOM se monte

    return () => clearTimeout(timeout);
  }, []);

  return (
    <ins
      className="adsbygoogle"
      style={{ display: "block" }}
      data-ad-client="ca-pub-7360978450920799"
      data-ad-slot="6171088841"
      data-ad-format="auto"
      data-full-width-responsive="true"
    ></ins>
  );
};

export default AdBanner;
